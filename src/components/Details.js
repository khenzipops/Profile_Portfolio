"use client";

import { useState, useEffect } from "react";

function Details({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);

    const handleScroll = () => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div
        className={`bg-white w-full max-w-3xl rounded-2xl shadow-2xl transition-all duration-300 transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800">Career History</h3>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 max-h-[70vh] overflow-y-auto text-gray-700 space-y-5 text-base leading-relaxed">
          <p>
            I graduated with a Bachelor of Science in Information Technology
            (BSIT) in 2021–2022. I worked as a teacher from 2022 to 2024 at SHS
            Liceo de Cagayan University.
          </p>
          <p>
            With a strong passion for technology and problem-solving, I
            continually strive to expand my knowledge in software development
            and networking.
          </p>
          <p>
            I am focused on improving my coding skills and IT systems expertise,
            and my goal is to apply my knowledge in real-world projects.
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200">
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="w-full rounded-md bg-blue-600 px-4 py-3 text-white text-base hover:bg-blue-700 transition"
          >
            Thank you for reading! 😊
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
