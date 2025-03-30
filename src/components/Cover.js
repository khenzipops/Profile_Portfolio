"use client";
import Image from "next/image";

export default function Cover() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 md:flex md:flex-row md:justify-between  mt-16">
      <div className="   p-2">
        <div className="grid grid-rows-2 h-max">
          <div className=" h-65">
            <div className="flex  p-4 lg:ml-12 mt-20">
              <div className="">
                <h1 className="font-poppins  text-based md:text-2xl lg:text-3xl md:ml-4 lg:ml-4 ">
                  <span className=" border-4 border-blue-500  p-1">
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
              <div className="">
                <a
                  href=""
                  className="font-poppins sm:text-base md:text-base lg:text-xl  font-normal rounded-full text-white bg-blue-500 hover:bg-blue-600 p-2 pl-4 pr-4  "
                >
                  Hire me
                </a>
              </div>
              <div className="">
                <a
                  href=""
                  className="font-poppins sm:text-base md:text-base lg:text-xl  font-normal rounded-full border-4 border-blue-500 hover:border-blue-600 p-1"
                >
                  Certificates
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
