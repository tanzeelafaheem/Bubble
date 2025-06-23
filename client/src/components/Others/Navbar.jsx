import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance"; 
import { toast } from "react-toastify"; 
import userIcon from '../../assets/profilePics/userIcon.png'

const Navbar = ({ onSectionChange }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const id = localStorage.getItem("userId");

  const logOut = async () => {
    localStorage.clear();
    navigate('/');
  };

  const getUser = async () => {
    try {
      const response = await axiosInstance.get(`/user/get-user/${id}`);
      setUser(response.data.user); 
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-10 py-3 bg-white">
      <div className="flex items-center gap-4 text-gray-900">
        <div className="text-2xl font-bold">🫧 Bubble</div>
      </div>

      <div className="flex items-center gap-8">
        <a className="text-sm font-medium cursor-pointer" onClick={() => onSectionChange("chat")}>Home</a>
        <a className="text-sm font-medium cursor-pointer" onClick={() => onSectionChange("profile")}>Profile</a>
        <a className="text-sm font-medium cursor-pointer" onClick={logOut}>Logout</a>

        {/* ✅ Profile Picture Avatar */}
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10"
          style={{
            backgroundImage: `url(${user?.profilePic ||userIcon})`
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
