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
    <nav className="bg-mainColor p-2 shadow-2xl bg-opacity-100 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="logo">
          <Image src="/assets/Khenz.png" alt="Logo" width={50} height={80} />
        </a>
        <div className="hidden md:flex space-x-12">
          <Link
            href="#home"
            className="text-base relative p-2 text-white  py-1 before:absolute before:inset-0 before:border-2 before:border-white before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100"
          >
            HOME
          </Link>
          <Link
            href="#bio"
            className="text-base relative p-2 text-white  py-1 before:absolute before:inset-0 before:border-2 before:border-white before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100"
          >
            ABOUT
          </Link>
          <Link
            href="#TechnicalSkills"
            className="text-base relative p-2 text-white  py-1 before:absolute before:inset-0 before:border-2 before:border-white before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100"
          >
            SKILLS
          </Link>
          <Link
            href="#contact"
            className="text-base relative p-2 text-white py-1 before:absolute before:inset-0 before:border-2 before:border-white before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100"
          >
            CONTACT
          </Link>

          <Link
            href="https://drive.google.com/file/d/1Vpp9ZJOHM32YCcOGzwAdqxuNLMs-JlxM/view"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-red-500 p-2 text-base relative text-white py-1 before:absolute before:inset-0 before:border-2 before:border-white before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100"
          >
            RESUME
          </Link>
        </div>

        {/* MOBILE VIEW */}

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
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
            className="block text-white text-center py-2"
            onClick={toggleMenu}
          >
            HOME
          </Link>
          <Link
            href="#bio"
            className="block text-white text-center py-2"
            onClick={toggleMenu}
          >
            ABOUT
          </Link>
          <Link
            href="#TechnicalSkills"
            className="block text-white text-center py-2"
            onClick={toggleMenu}
          >
            SKILLS
          </Link>
          <Link
            href="#contact"
            className="block text-white text-center py-2 cursor-pointer"
            onClick={toggleMenu}
          >
            CONTACT
          </Link>

          <Link
            href="https://drive.google.com/file/d/1Vpp9ZJOHM32YCcOGzwAdqxuNLMs-JlxM/view"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white text-center py-2 cursor-pointer bg-red-500"
            onClick={toggleMenu}
          >
            RESUME
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
