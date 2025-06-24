"use client";
import Image from "next/image";
import { useState } from "react";
import Details from "@/components/Details";
// import WaveHand from "@/components/animation-folder/wavehand";

export default function Cover() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 md:flex md:flex-row md:justify-between p-4 border-b-2">
      <div className="flex items-start justify-center mt-16">
        <div>
          {/* <button
            onClick={() => setIsDetailOpen(true)}
            className="font-poppins text-base md:text-1xl lg:text-3xl md:ml-4 lg:ml-4"
          >
            <span
              className="inline-block text-white p-2 rounded-md
                    bg-gradient-to-r from-blue-500 to-blue-600
                    hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700
                    transition-all duration-500
                    ease-[cubic-bezier(0.3,1.5,0.5,0.8)] hover:scale-x-105
                    hover:scale-y-110 // Stretch horizontally + vertically
                    active:scale-95 cursor-pointer"
            >
              hello there! <WaveHand />
            </span>
          </button> */}
          <Details
            isOpen={isDetailOpen}
            onClose={() => setIsDetailOpen(false)}
          />
          <p className="font-bold text-blue-500 text-base sm:text-2xl md:text-4xl  text-justify pb-2">
            I'm{" "}
            <span className="bg-blue-500 p-1 rounded-full text-white pr-24">
              Khenz
            </span>
          </p>
          <p className="text-base font-poppins  text-justify pb-2">
            I'm a Frontend Developer from the Cagayan de Oro City experience
            using Next.js and Vite. I specialize in building responsive and
            functional web applications using Next Js, Tailwind CSS, and
            Express.js, with MongoDB for backend support.
          </p>
          <p className="text-base font-poppins text-justify">
            I graduated with a BS in Information Technology from the University
            of Science and Technology of Southern Philippines. I'm passionate
            about creating clean, user-friendly web experiences and currently
            focused on building simple projects to expand my skills and
            knowledge.
          </p>
        </div>
      </div>

      {/* right side image */}
      <div className=" flex items-center justify-center p-6">
        <img
          src="/assets/Portfolio.png"
          alt="profile-image"
          className="w-[350px] h-[350px]  rounded-full shadow-lg border-2 border-blue-500"
          layout="intrinsic"
        />
      </div>
    </div>
  );
  s;
}
