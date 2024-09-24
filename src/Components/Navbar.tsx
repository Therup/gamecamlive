import React, { useState } from "react";
import { CameraIcon } from "@heroicons/react/24/outline";
import Logo from "../images/gamecam_g_logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={Logo} alt="GameCamLive Logo" className="h-8" />
        </div>

        {/* Navigation and Camera Icon Container */}
        <div className="flex items-center space-x-4">
          {/* Links for all screen sizes */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#signup" className="hover:text-gray-400">
              Sign up
            </a>
            <a href="#login" className="hover:text-gray-400">
              Login
            </a>
          </div>

          {/* Camera Icon */}
          <div className="relative group">
            <CameraIcon
              className="h-6 w-6 cursor-pointer hover:text-gray-400"
              title="Start Cam"
            />
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Start Cam
            </span>
          </div>

          {/* Hamburger Icon for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-800 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#home" className="block py-2 px-4 text-sm hover:bg-gray-700">
          Home
        </a>
        <a href="#signup" className="block py-2 px-4 text-sm hover:bg-gray-700">
          Sign up
        </a>
        <a href="#login" className="block py-2 px-4 text-sm hover:bg-gray-700">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
