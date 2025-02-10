"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-customBg p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold beauRivage text-white">Khenz</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Home
          </Link>
          <Link
            href="/bio"
            className="text-white hover:text-gray-300 transition"
          >
            About
          </Link>
          <Link
            href="/project"
            className="text-white hover:text-gray-300 transition"
          >
            Project
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-gray-300 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-customBg p-4 rounded-lg shadow-lg">
          <Link
            href="/"
            className="block text-white hover:text-gray-300 transition"
          >
            Home
          </Link>
          <Link
            href="/bio"
            className="block text-white hover:text-gray-300 transition"
          >
            About
          </Link>
          <Link
            href="/project"
            className="block text-white hover:text-gray-300 transition"
          >
            Project
          </Link>
          <Link
            href="#contact"
            className="block text-white hover:text-gray-300 transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
