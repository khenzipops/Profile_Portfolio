"use client";
import Image from "next/image";

export default function Cover() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 md:flex md:flex-row md:justify-between  mt-16">
      <div className="   p-2">
        <div className="grid grid-rows-2 h-max">
          <div className=" h-65">
            <div className=" p-4 lg:ml-12 mt-20">
              <div className="">
                <h1 className="font-poppins text-base md:text-2xl lg:text-3xl md:ml-4 lg:ml-4">
                  <span
                    className="inline-block text-white p-2 rounded-md
            bg-gradient-to-r from-blue-500 to-blue-600
            hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700
            transition-all duration-500 ease-[cubic-bezier(0.3,1.5,0.5,0.8)]
            hover:scale-x-105 hover:scale-y-110  // Stretch horizontally + vertically
            active:scale-95
            cursor-pointer"
                  >
                    Hello there!
                  </span>
                </h1>
                <h1 className="font-poppins text-xl md:text-2xl  lg:text-4xl md:m-4 lg:m-4 font-semibold tracking-normal md:tracking-tighter lg:tracking-tight mt-1">
                  I'm Kenneth Popera,
                </h1>
                <h1 className="font-bold  text-xl md:text-2xl  lg:text-4xl md:m-3 lg:m-3 font-poppins tracking-tighter md:tracking-tighter lg:tracking-wider">
                  Web Developer
                </h1>
                <h1 className=" m-2 font-light  lg:ml-8 text-gray-400 text-based md:text-1xl  lg:text-1xl font-poppins tracking-tighter md:tracking-tight lg:tracking-wider">
                  Bachelor of Science in Information Technology
                </h1>
              </div>
            </div>
          </div>
          <div className="h-52 gap-4">
            <div className="grid grid-cols-2 text-center sm:mt-16 md:mt-24 ">
              <div className="gap-5 ">
                <a href="">
                  <span
                    className="text-xs md:text-base lg:text-xl inline-block text-white p-2 rounded-md
            bg-gradient-to-r from-blue-500 to-blue-600
            hover:from-blue-600 hover:to-blue-700
            transition-all duration-300 ease-in-out
            hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.7)] 
            border border-transparent hover:border-blue-400  
            cursor-pointer"
                  >
                    Hire me
                  </span>
                </a>
              </div>
              <div className="gap-5 justify-start text-left ">
                <a
                  href="https://drive.google.com/drive/folders/10wrP_rn0shetJsqKMmPhoYpTG8kpT0KU?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="text-xs md:text-base lg:text-xl  inline-block text-white p-2 rounded-md
            bg-gradient-to-r from-blue-500 to-blue-600
            hover:from-blue-600 hover:to-blue-700
            transition-all duration-300 ease-in-out
            hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.7)] 
            border border-transparent hover:border-blue-400  
            cursor-pointer"
                  >
                    Certificates
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right side image */}
      <div className="w-full relative flex justify-center gap-5">
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
