"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];
  
    // Check if any registered user matches the provided credentials
    const validUser = users.find(
      (user:any) => user.email === formData.email && user.password === formData.password
    );
  
    if (validUser) {
      localStorage.setItem("accessToken", "valid-token");
      router.push("/navbar");
    } else {
      setError("Invalid email or password");
    }
  };
  

  const handleRegister = () => {
    toast.success("Redirecting to Register Page")
    router.replace("/register");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
        required
      />
      <button type="submit">Login</button>
      <button className="ml-4" onClick={handleRegister} type="submit">
        Register here
      </button>
    </form>
  );
}
