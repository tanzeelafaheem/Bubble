import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-[#c1e6d3] flex flex-col justify-center items-center px-10 py-16">
        <h1 className="text-5xl font-extrabold text-green-900 mb-4">Bubble 🫧</h1>
        <p className="text-green-900 text-lg text-center max-w-md">
          Connect with friends and family instantly. Share moments, chat, and stay in touch with Bubble.
        </p>
      </div>

      {/* Right Panel (Login Form) */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-16 bg-white">
        <form className="w-full max-w-sm space-y-5">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-6">Login</h2>

          <input
            type="text"
            placeholder="Username or Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c1e6d3]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c1e6d3]"
          />

          <button
            type="submit"
            className="w-full bg-[#c1e6d3] text-black py-3 rounded-lg font-semibold hover:bg-green-300 transition"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600">
            New here?{" "}
            <Link to="/signup" className="text-[#218e6c] font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
