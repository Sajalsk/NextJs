"use client"

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';

const Register: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    router.push('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Register;
