import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
  {/* Left Side */}
  <div className="w-full md:w-1/2 bg-blue-100 flex flex-col justify-center items-center px-6 py-10">
    <h1 className="text-5xl text-black mb-4 font-extrabold">Bubble 🫧</h1>
    <p className="text-blue-900 text-lg max-w-md text-center">
      Connect with friends and family instantly. Share moments, chat, and stay in touch with Bubble.
    </p>
  </div>

  {/* Right Side */}
  <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-10">
    <form className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Sign Up!</h2>

      <input
        type="text"
        placeholder="Username"
        className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Email Id"
        className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition-all"
      >
        Create Account
      </button>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already a member?{" "}
        <Link to="/login" className="text-blue-600 font-semibold hover:underline">
          Login
        </Link>
      </p>
    </form>
  </div>
</div>

  );
};

export default Signup;
