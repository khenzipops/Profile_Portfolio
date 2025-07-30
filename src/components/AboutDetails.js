// src/components/Details.js
"use client";
import { useState } from "react";

export default function Cover({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-600">About Me</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-700">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-gray-600">
                University of Science and Technology of Southern Philippines
                (USTP)
              </p>
              <p className="text-gray-600">2018 - 2022</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Frontend Developer</h4>
                  <p className="text-gray-600">
                    Tech Solutions Inc. | 2022 - Present
                  </p>
                  <p className="text-gray-700">
                    Developing responsive web applications using React, Next.js,
                    and Tailwind CSS.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Junior Web Developer</h4>
                  <p className="text-gray-600">
                    Digital Innovations PH | 2021 - 2022
                  </p>
                  <p className="text-gray-700">
                    Worked on various client projects implementing modern web
                    technologies.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Next.js
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  HTML/CSS
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Express.js
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Git
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  UI/UX Design
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Contact Information
              </h3>
              <p className="text-gray-700">Email: kenneth.popera@example.com</p>
              <p className="text-gray-700">Phone: +63 912 345 6789</p>
              <p className="text-gray-700">
                Location: Cagayan de Oro City, Philippines
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
