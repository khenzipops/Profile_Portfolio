"use client";
import Image from "next/image";
import { useState } from "react";
import Details from "@/components/Details";
import WaveHand from "@/components/animation-folder/wavehand";

export default function Cover() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  console.log("Modal state:", isDetailOpen);

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 md:flex md:flex-row md:justify-between  mt-16">
      <div className="lg:p-10 lg:m-16">
        <div className="h-max">
          <div className=" h-65">
            <div className=" p-4 lg:ml-12 mt-16">
              <div className="">
                <button
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
                </button>
                <Details
                  isOpen={isDetailOpen}
                  onClose={() => setIsDetailOpen(false)}
                />
                <h1 className="font-poppins text-sm  md:text-lg  lg:text-2xl md:m-4 lg:m-4 font-semibold tracking-normal md:tracking-tighter lg:tracking-tight mt-1">
                  I'm Kenneth Popera,
                </h1>
                <h1 className="font-bold text-sm  md:text-lg  lg:text-2xl md:m-3 lg:m-3 font-poppins tracking-tighter md:tracking-tighter lg:tracking-wider">
                  Frontend Developer
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right side image */}
      <div className="w-full  flex justify-center ">
        <Image
          src="/assets/Portfolio.png"
          alt="profile-image"
          className="w-full sm:w-auto h-auto"
          width={600}
          height={600}
          layout="intrinsic"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
