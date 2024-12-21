"use client";

import { Loading } from "@/src/components/Loading";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

const Register: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = formData;
  
      // Retrieve existing users from localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]");
  
      // Check if the email is already registered
      const emailExists = users.some((existingUser:any) => existingUser.email === user.email);
      if (emailExists) {
        toast.error("Email already registered!");
        return;
      }
  
      // Add new user to the list
      const updatedUsers = [...users, user];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
  
      // Save current user data (optional)
      localStorage.setItem("user", JSON.stringify(user));
  
      setSuccess(true);
      toast.success("Registration successful! Redirecting...");
      setTimeout(() => router.push("/login"), 2000);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold">Register</h1>
      {isLoading && <Loading />}
      {success && (
        <p className="text-green-500">
          Registration successful! Redirecting...
        </p>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        required
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
