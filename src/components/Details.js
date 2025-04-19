"use client";
import { useState } from "react";

function Details({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-left bg-black bg-opacity-0">
      <div className="w-full max-w-2xl rounded-lg bg-white shadow dark:bg-gray-800 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          I graduated with a Bachelor of Science in Information Technology
          (BSIT) in 2021-2022. I was employed as a teacher from 2022 to 2024 at
          SHS Liceo de Cagayan University. During this time, I nurtured my
          passion for technology and set my sights on pursuing my dream of
          creating websites and engaging in tech-related work.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With a strong passion for technology and problem-solving, I
          continually strive to expand my knowledge in software development and
          networking.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          I am focused on improving my coding skills and IT systems expertise,
          and my goal is to apply my knowledge in real-world projects,
          contributing to innovative tech solutions that make a meaningful
          impact solutions.
        </p>
      </div>
    </div>
    // <div className="">
    //   <div className="w-full max-w-2xl rounded-lg bg-white shadow dark:bg-gray-800">
    //     {/* Modal Header */}
    //     <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600">
    //       <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
    //         About
    //       </h3>
    //       <button
    //         onClick={() => setIsOpen(false)}
    //         className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
    //       >
    //         <svg
    //           className="h-5 w-5"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>

    //     {/* Modal Body */}
    //     <div className="space-y-6 p-6">

    //     </div>

    //     {/* Modal Footer */}
    //     <div className="flex items-center space-x-2 rounded-b border-t p-4 dark:border-gray-600">
    //       <button
    //         onClick={() => setIsOpen(false)}
    //         className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Thank you for reading! 😊
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Details;
