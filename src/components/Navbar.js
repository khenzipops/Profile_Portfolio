"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll visibility and background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md opacity-100"
          : "bg-transparent opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="logo">
          <Image
            src="/assets/logo-black.png"
            alt="Logo"
            width={70}
            height={45}
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#bio">Project</NavItem>
          <NavItem href="#TechnicalSkills">Skills</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <ResumeLink />
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800"
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

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden pt-2 pb-4 px-4 bg-white rounded-b-2xl shadow-lg">
          <MobileNavItems onClose={toggleMenu} />
        </div>
      )}
    </nav>
  );
}

// Reusable components
const NavItem = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-sm font-medium relative inline-block py-2 px-1 text-gray-700 hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  </li>
);

const ResumeLink = () => (
  <li>
    <Link
      href="https://drive.google.com/file/d/1HWklQ2wCcYAUPvmMcfgDk8AerpeYul2B/view"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-white border border-gray-300 rounded-full px-4 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
    >
      Resume
    </Link>
  </li>
);

const MobileNavItems = ({ onClose }) => (
  <>
    <MobileNavItem href="#home" onClose={onClose}>
      Home
    </MobileNavItem>
    <MobileNavItem href="#bio" onClose={onClose}>
      About
    </MobileNavItem>
    <MobileNavItem href="#TechnicalSkills" onClose={onClose}>
      Skill
    </MobileNavItem>
    <MobileNavItem href="#contact" onClose={onClose}>
      Contact
    </MobileNavItem>
    <li className="mt-4">
      <Link
        href="https://drive.google.com/file/d/1S5HUZuroaXVdHBJoaTK_JIUoGwq-7ejE/view"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-medium"
        onClick={onClose}
      >
        Resume
      </Link>
    </li>
  </>
);

const MobileNavItem = ({ href, children, onClose }) => (
  <Link
    href={href}
    className="block text-gray-700 text-lg font-medium py-3 hover:text-blue-600"
    onClick={onClose}
  >
    {children}
  </Link>
);

export default Navbar;
