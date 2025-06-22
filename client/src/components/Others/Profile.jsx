import React from 'react'
import { useEffect } from 'react';

const Profile = () => {
  const id=localStorage.getItem('userId')
  const name=localStorage.getItem('username')
  const mailId=localStorage.getItem('email')
  
  return (
   <>
   <div className="p-8 bg-gray-50 min-h-screen">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Profile</h2>

  {/* Profile Header */}
  <div className="flex items-center gap-4 mb-8">
    <img
      src="/default-avatar.png" // Replace with actual dynamic src later
      alt="Profile"
      className="w-20 h-20 rounded-full object-cover"
    />
    <div>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500">Date joined</p> {/* Optional subtitle */}
    </div>
  </div>

  {/* Contact Information */}
  <div className="mb-6">
    <h4 className="text-lg font-semibold mb-2 text-gray-900">Contact Information</h4>
    <p>Email Id: {mailId}</p>
  </div>

  {/* Account Information */}
  <div className="mb-6">
    <h4 className="text-lg font-semibold mb-2 text-gray-900">Account Information</h4>

  <p>Username: {name}</p>
  </div>
</div>

   </>
  )
}

export default Profile
Profile