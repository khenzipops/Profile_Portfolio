"use client";
import { useState } from "react";
import Details from "@/components/Details";
export default function Cover() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <main className=" bg-white text-gray-800">
      {/* Hero Section */}
      <section className="w-full px-4 py-12 md:py-20 ">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-600">
              Hi, I'm <span className="text-gray-800">Kenneth</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              A passionate Frontend Developer from Cagayan de Oro City. I build
              user-friendly and responsive web applications using Next.js,
              Tailwind CSS, Nodejs and Express.js.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => setIsDetailOpen(true)}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                View More Details
              </button>
              <a
                href="https://www.figma.com/design/t6hbGBcTpSj7gkbhz6M4Hn/ALL-PROJECT?node-id=0-6&p=f&t=8jEISDZ0YOZcvrtm-0"
                className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                View Figma Projects
              </a>
            </div>
            <Details
              isOpen={isDetailOpen}
              onClose={() => setIsDetailOpen(false)}
            />
          </div>
          {/* Profile Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="/assets/Portfolio.png"
                alt="Khenz profile"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-blue-500 "
              />
              <div className="absolute bottom-4 right-4 bg-white border border-blue-500 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-600 mr-2"></div>
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
