"use client";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-200	 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold beauRivage">Khenz</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-black hover:text-red-800">
            Home
          </a>
          <a href="#about" className="text-black hover:text-red-800">
            About
          </a>
          <a href="#services" className="text-black hover:text-red-800">
            Services
          </a>
          <a href="#contact" className="text-black hover:text-red-800">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4 space-y-4`}
      >
        <a href="#home" className="block text-white hover:text-gray-400">
          Home
        </a>
        <a href="#about" className="block text-white hover:text-gray-400">
          About
        </a>
        <a href="#services" className="block text-white hover:text-gray-400">
          Services
        </a>
        <a href="#contact" className="block text-white hover:text-gray-400">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
