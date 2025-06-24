import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";
import userIcon from '../../assets/profilePics/userIcon.png';
import logo from '../../assets/logo.png';
import { IoIosChatboxes } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = ({ onSectionChange }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const id = localStorage.getItem("userId");

  const logOut = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
  if (confirmLogout) {
    localStorage.clear();
    navigate('/');
  }
  };

  const getUser = async () => {
    try {
      const response = await axiosInstance.get(`/user/get-user/${id}`);
      setUser(response.data.user);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load user info");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header className="flex flex-wrap items-center justify-between border-b border-gray-200 px-6 md:px-10 py-3 bg-white shadow-sm">
      
      {/* Logo */}
      <div className="cursor-pointer flex items-center" onClick={() => onSectionChange("chat")}>
        <img src={logo} alt="Bubble Logo" className="w-28 sm:w-32 md:w-40 object-contain" />
      </div>

      {/* Nav Actions */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mt-2 sm:mt-0">
        <button onClick={() => onSectionChange("chat")}>
          <IoIosChatboxes
            size={26}
            className="text-black hover:text-gray-600 transition-colors duration-200 cursor-pointer"
          />
        </button>

        <button onClick={() => onSectionChange("profile")}>
          <ImProfile
            size={24}
            className="text-black hover:text-gray-600 transition-colors duration-200 cursor-pointer"
          />
        </button>

        <button onClick={logOut}>
          <HiOutlineLogout
            size={26}
            className="text-black hover:text-gray-600 transition-colors duration-200 cursor-pointer"
          />
        </button>

        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${user?.profilePic || userIcon})`
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
