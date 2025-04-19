import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";

export default function FloatingIcons() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col-reverse items-end">
      {/* Main button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isExpanded ? "hover:bg-blue-700" : "hover:bg-blue-700 hover:scale-110"
        }`}
        aria-label="Toggle social media links"
      >
        <FaPlus
          className={`transition-transform duration-500 ${
            isExpanded ? "rotate-45" : ""
          }`}
        />
      </button>

      {/* Expanded social icons - now appearing from top to bottom */}
      <div
        className={`flex flex-col items-center space-y-2 mb-2 transition-all duration-300 ease-in-out ${
          isExpanded
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <a
          href="https://www.linkedin.com/in/kenneth-popera-0a020616a/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#3b5998] hover:-translate-y-1"
          aria-label="Facebook"
        >
          <GrLinkedinOption />
        </a>
        <a
          href="https://github.com/khenzipops"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#e1306c] hover:-translate-y-1"
          aria-label="Instagram"
        >
          <GrGithub />
        </a>
        {/* <a
          href="#"
          className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#1da1f2] hover:-translate-y-1"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a> */}
      </div>
    </div>
  );
}
