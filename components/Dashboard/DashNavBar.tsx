//import { abortOnSynchronousPlatformIOAccess } from 'next/dist/server/app-render/dynamic-rendering';
import { Bell } from 'lucide-react';
import React from 'react'

const DashNavBar = () => {
  return (
    <nav className="bg-gray-800 flex items-center justify-between px-4 py-2">
      {/* Left placeholder icon */}
      <div className="flex items-center">
        <div className="bg-blue-400 rounded-full w-10 h-10"></div>
        <span className="text-white ml-3 font-semibold font-poppins">Marketing Wizard</span>
      </div>

      {/* Search bar */}
      <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-1/3">
        <input
          type="text"
          placeholder="search bar"
          className="bg-gray-200 focus:outline-none w-full font-poppins"
        />
      </div>

      {/* Right placeholder icon */}
      <Bell />
    </nav>
  );
}

export default DashNavBar
