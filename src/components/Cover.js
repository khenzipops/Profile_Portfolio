"use client";
import Image from "next/image";
import { Asset } from "next/font/google";

export default function Cover() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 md:flex md:flex-row md:justify-between bg-gray-100 mt-16">
      <div className="   p-2">
        <div className="grid grid-rows-2 h-max">
          <div className=" h-72">
            <div className="flex  p-4 ml-12 mt-20">
              <div className="">
                <h1 className="font-poppins text-2xl ml-4">
                  <span className=" border-4 border-blue-500  p-1">
                    Hello there!
                  </span>
                </h1>
                <h1 className="font-poppins text-4xl m-4 font-semibold tracking-normal">
                  I'm Kenneth Popera,
                </h1>
                <h1 className="font-semibold text-5xl m-3 font-poppins tracking-widest">
                  Web Developer
                </h1>
                <h1 className="font-poppins tex-lg m-2 font-light ml-8 text-gray-400">
                  Bachelor of Science in Information Technology
                </h1>
              </div>
            </div>
          </div>
          <div className="h-72 ">
            <div className="flex mt-10">
              <div className="ml-32">
                <a
                  href=""
                  className="font-poppins text-lg font-normal rounded-lg text-white bg-blue-500 hover:bg-blue-600 p-2 pl-4 pr-4"
                >
                  Hire me
                </a>
              </div>
              <div className="ml-24">
                <a
                  href=""
                  className="font-poppins text-lg font-normal rounded-lg border-4 border-blue-500 hover:border-blue-600 p-1"
                >
                  Certificates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right side image */}
      <div className="md:1/2 flex justify-center">
        <Image
          src={"/assets/Portfolio.png"}
          alt="profile-image"
          className="w-[600px] h-[600px] "
          width={400}
          height={500}
        />
      </div>
    </div>
  );
}
