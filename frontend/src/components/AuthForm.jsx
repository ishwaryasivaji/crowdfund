// src/components/AuthForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = type === 'signup' ? { email, password } : { email, password };

    try {
      const response = await axios.post(`http://localhost:5000/api/auth/${type}`, userData);
      localStorage.setItem('token', response.data.token); // Save token
      navigate('/'); // Redirect to home page
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{type === 'signup' ? 'Sign Up' : 'Sign In'}</button>
    </form>
  );
};

export default AuthForm;