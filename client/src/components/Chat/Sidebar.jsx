import React from 'react'

const Sidebar = () => {
    
  return (
    <>
  <div className="w-72 bg-white  h-full">
  {/* Tabs */}
  <div className="flex border-b border-gray-200">
    <button className="flex-1 py-4 text-center font-semibold text-black border-b-2 border-black">Friends</button>
    <button className="flex-1 py-4 text-center font-medium text-gray-400 hover:text-black">Notifications</button>
  </div>

  {/* Friend List */}
  <div className="overflow-y-auto">
    <div className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 cursor-pointer">
      <img src="sophia.jpg" alt="Sophia" className="w-10 h-10 rounded-full object-cover" />
      <div>
        <p className="text-sm font-semibold text-black">Sophia Bennett</p>
        <p className="text-xs text-gray-500">Online</p>
      </div>
    </div>
    {/* Repeat for other friends */}
  </div>
</div>


    </>
  )
}

export default Sidebar
