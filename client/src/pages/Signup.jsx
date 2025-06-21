import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../api/axiosInstance";

const Signup = () => {
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  const onSubmit=async(e)=>{
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/user/add', { username,email, password });
            const { id, name, email: userEmail } = res.data.user;
      
            // Store user in localStorage
            localStorage.setItem('userId', id);
            localStorage.setItem('username', name);
            localStorage.setItem('email', userEmail);
       
            toast.success('Account created!');
            navigate('/home');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return ( 
    <div className="min-h-screen flex flex-col md:flex-row">
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

  {/* Right Side */}
  <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-10">
    <form className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">Sign Up!</h2>

      <input
        onChange={(e)=>setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
       onChange={(e)=>setEmail(e.target.value)}
        type="text"
        placeholder="Email Id"
        className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
       onChange={(e)=>setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={onSubmit}
        type="submit"
        className="w-full bg-green-300 hover:bg-[#218e6c] hover:text-white py-2 rounded-xl font-semibold transition-all"
      >
        Create Account
      </button>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already a member?{" "}
        <Link to="/login" className="text-[#218e6c] font-semibold hover:underline">
          Login
        </Link>
      </p>
    </form>
  </div>
</div>

  );
};

export default Signup;
