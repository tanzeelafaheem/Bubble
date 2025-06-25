import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { toast } from 'react-toastify';

const userIcon = "/profilePics/userIcon.png";

const profileOptions = [
  "/profilePics/profile1.png",
  "/profilePics/profile2.png",
  "/profilePics/profile3.png",
  "/profilePics/profile4.png",
  "/profilePics/profile5.png",
  "/profilePics/profile6.png",
  "/profilePics/profile7.png",
  "/profilePics/profile8.png",
  "/profilePics/profile9.png",
  "/profilePics/profile10.png",
];


const Profile = () => {
  const id = localStorage.getItem('userId');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');

  const getUser = async () => {
    try {
      const response = await axiosInstance.get(`/user/get-user/${id}`);
      setLoggedInUser(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const updateProfilePic = async () => {
    try {
      await axiosInstance.put(`/user/update-profile-pic/${id}`, {
        profilePic: selectedPic,
      });
      toast.success("Profile image updated!");
      setEditMode(false);
      getUser(); 
    } catch (err) {
      console.log(err);
      toast.error("Error updating profile image.");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!loggedInUser) {
    return <div className="p-8 text-green-900">Loading...</div>;
  }

  const user = loggedInUser.user;

  return (
    <div className="p-8 bg-green-50 min-h-screen text-green-900">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-[#218e6c] inline-block pb-1">Profile</h2>

      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-4 p-4 bg-[#218e6c] rounded-md shadow-md text-white">
        <img
          src={user.profilePic || userIcon}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-[#218e6c]"
        />
        <div>
          <h3 className="text-2xl font-bold">{user.username}</h3>
          <p className="text-sm text-white-800 mt-1">
            Joined on: {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Edit Profile Picture Button */}
      {!editMode ? (
        <button
          onClick={() => setEditMode(true)}
          className="mb-6 px-4 py-2 bg-[#218e6c] text-white rounded hover:bg-green-700"
        >
          Edit Profile Picture
        </button>
      ) : (
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Choose a Profile Picture</h4>
          <div className="grid grid-cols-5 gap-4 mb-4">
            {profileOptions.map((pic, index) => (
              <img
                key={index}
                src={pic}
                alt={`Profile ${index + 1}`}
                onClick={() => setSelectedPic(pic)}
                className={`w-16 h-16 rounded-full cursor-pointer border-4 ${
                  selectedPic === pic ? 'border-[#218e6c]' : 'border-transparent'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={updateProfilePic}
              disabled={!selectedPic}
              className={`px-4 py-2 rounded text-white ${
                selectedPic ? 'bg-[#218e6c] hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Done
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Contact Info */}
      <div className="bg-green-100 rounded-md p-4 mb-6 shadow-sm">
        <h4 className="text-lg font-semibold mb-2 border-b border-[#218e6c] pb-1">Contact Information</h4>
        <p><span className="font-medium">Email:</span> {user.email}</p>
      </div>

      {/* Account Info */}
      <div className="bg-green-100 rounded-md p-4 shadow-sm">
        <h4 className="text-lg font-semibold mb-2 border-b border-[#218e6c] pb-1">Account Information</h4>
        <p><span className="font-medium">Username:</span> {user.username}</p>
      </div>
    </div>
  );
};

export default Profile;
