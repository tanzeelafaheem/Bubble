import React, { useState } from "react";
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom";
import {toast} from 'react-toastify'
import axiosInstance from '../../src/api/axiosInstance'

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  const onSubmit=async(e)=>{
     e.preventDefault();
    try {
      const res = await axiosInstance.post('/user/login', { email, password });
      const { id, username, email: userEmail } = res.data.user;

      // Store user in localStorage
      localStorage.setItem('userId', id);
      localStorage.setItem('username',username);
      localStorage.setItem('email', userEmail);
 
      toast.success('Login successful!');
      navigate('/home');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-[#c1e6d3] flex flex-col justify-center items-center px-10 py-16">
        <h1 className="text-5xl font-extrabold text-green-900 mb-4">
          Bubble 🫧
        </h1>
        <p className="text-green-900 text-lg text-center max-w-md">
          Connect with friends and family instantly. Share moments, chat, and
          stay in touch with Bubble.
        </p>
      </div>

      {/* Right Panel (Login Form) */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-16 bg-white">
        <form className="w-full max-w-sm space-y-5">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-6">
            Login
          </h2>

          <input
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c1e6d3]"
          />
          <input
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c1e6d3]"
          />

          <button
            onClick={onSubmit}
            type="submit"
            className="w-full bg-green-300 text-black py-3 rounded-lg font-semibold  hover:bg-[#218e6c] hover:text-white transition"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600">
            New here?{" "}
            <Link
              to="/"
              className="text-[#218e6c] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
