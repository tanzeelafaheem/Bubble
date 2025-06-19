import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-10 py-3 bg-white">
      <div className="flex items-center gap-4 text-gray-900">
        <div className="text-2xl font-bold">🫧 Bubble</div>
      </div>
      <div className="flex items-center gap-8">
        <a className="text-sm font-medium" href="#">Home</a>
        <a className="text-sm font-medium" href="#">Profile</a>
        <a className="text-sm font-medium" href="#">Logout</a>
        <a className="text-sm font-medium" href="#">Settings</a>
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10"
          style={{
            backgroundImage: "url('https://i.pravatar.cc/40?img=1')"
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
