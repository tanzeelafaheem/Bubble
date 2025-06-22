import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({onSectionChange}) => {
  const navigate=useNavigate();
  const logOut=async()=>{
    localStorage.clear();
    navigate('/');
  }
  return (
    <>
    <header className="flex items-center justify-between border-b border-gray-200 px-10 py-3 bg-white">
      <div className="flex items-center gap-4 text-gray-900">
        <div className="text-2xl font-bold">🫧 Bubble</div>
      </div>
      <div className="flex items-center gap-8">
        <a className="text-sm font-medium cursor-pointer" onClick={() => onSectionChange("chat")}>Home</a>
        <a className="text-sm font-medium cursor-pointer" onClick={() => onSectionChange("profile")}>Profile</a>
        <a className="text-sm font-medium cursor-pointer" onClick={logOut}>Logout</a>
        <a className="text-sm font-medium" href="#">Settings</a>
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10"
          style={{
            backgroundImage: "url('https://i.pravatar.cc/40?img=1')"
          }}
          />
      </div>
    </header>
    </>
  );
};

export default Navbar;
