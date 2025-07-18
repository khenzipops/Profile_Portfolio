"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-base opacity-100 fixed top-0 left-0 w-full z-50">
      <div className="container p-1 mx-auto flex justify-between items-center">
        <a href="/" className="logo">
          <Image
            src="/assets/logo-black.png"
            alt="Logo"
            width={80}
            height={50}
          />
        </a>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              href="#home"
              className="text-base font-poppins font-medium relative p-2   text-textColor   before:absolute before:inset-0 before:border-2 before:border-blue-500 before:scale-0 before:transition-transform before:duration-700 hover:before:scale-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#bio"
              className="text-base font-poppins font-medium relative p-2   text-textColor before:absolute before:inset-0 before:border-2 before:border-blue-500 before:scale-0 before:transition-transform before:duration-700 hover:before:scale-100"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              href="#TechnicalSkills"
              className="text-base font-poppins font-medium relative p-2  text-textColor before:absolute before:inset-0 before:border-2 before:border-blue-500 before:scale-0 before:transition-transform before:duration-700 hover:before:scale-100"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-base font-poppins font-medium relative p-2  text-textColor before:absolute before:inset-0 before:border-2  before:border-blue-500 before:scale-0 before:transition-transform before:duration-700 hover:before:scale-100"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="https://drive.google.com/file/d/1HWklQ2wCcYAUPvmMcfgDk8AerpeYul2B/view"
              target="_blank"
              rel="noopener noreferrer"
              className=" font-poppins bg-white rounded-md mt-1 border-black p-4 relative font-medium text-textColor py-1 before:absolute before:inset-0 before:border-2 before:border-blue-500 before:scale-0 before:transition-transform before:duration-700 hover:before:scale-100"
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* MOBILE VIEW */}

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-textColor focus:outline-none"
          >
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
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            href="#home"
            className="block text-textColor text-center py-2 text-xl font-poppins"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#bio"
            className="block text-textColor text-center py-2 text-xl font-poppins"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#TechnicalSkills"
            className="block text-textColor text-center py-2 text-xl font-poppins"
            onClick={toggleMenu}
          >
            Skill
          </Link>
          <Link
            href="#contact"
            className="block text-textColor text-center py-2 cursor-pointer text-xl font-poppins"
            onClick={toggleMenu}
          >
            Contact
          </Link>

          <Link
            href="https://drive.google.com/file/d/1HWklQ2wCcYAUPvmMcfgDk8AerpeYul2B/view"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white text-center py-2 cursor-pointer bg-blue-500 text-xl font-poppins"
            onClick={toggleMenu}
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
