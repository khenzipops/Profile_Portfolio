"use client";
import { useState, useEffect } from "react";

function Details({ isOpen, onClose, children }) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const handleScroll = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Match this with transition duration
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-left bg-white bg-opacity-0">
      <div
        className={`w-full max-w-2xl rounded-lg dark:bg-white border-2 mx-4 pointer-events-auto transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-center p-4 border-b dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900  ">
            Career History
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <p className="text-sm text-gray-500 dark:text-gray-800 mb-4">
            I graduated with a Degree of Bachelor of Science in Information
            Technology (BSIT) in 2021-2022. I was employed as a teacher from
            2022 to 2024 at SHS Liceo de Cagayan University.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-800 mb-4">
            With a strong passion for technology and problem-solving, I
            continually strive to expand my knowledge in software development
            and networking.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-800">
            I am focused on improving my coding skills and IT systems expertise,
            and my goal is to apply my knowledge in real-world projects.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t dark:border-gray-600">
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 500);
            }}
            className="w-full rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
          >
            Thank you for reading! 😊
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
