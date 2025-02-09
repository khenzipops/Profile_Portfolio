// This is the About Page
"use client";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="text-center h-screen bg- w-9/12 mx-auto">
        <h1 class="text-2xl font-poppins pt-5">PROJECTS</h1>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-orange"></div>
          <div className="mx-4 text-orange">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m7-7H5"
              ></path>
            </svg>
          </div>
          <div className="flex-grow border-t border-orange"></div>
        </div>
        {/* grid technical files */}
        <div className="grid grid-cols-5 gap-5">
          <div className="bg-orange p-1.5 shadow-lg h-40 rounded-lg w-48">
            <div className="image bg-white h-28 w-full rounded-md">
              {" "}
              <img
                className="md:w-full"
                src="/assets/new-php-logo.png"
                alt="Profile Photo"
              />
            </div>
            <div className=" text-lg font-semibold mt- bg-orange text-white font-poppins">
              PHP
            </div>
          </div>
          <div className="bg-orange p-1.5 shadow-lg h-40 rounded-lg w-48">
            <div className="image bg-white h-28 w-full rounded-md">
              {" "}
              <img
                className="md:w-full"
                src="/assets/new-php-logo.png"
                alt="Profile Photo"
              />
            </div>
            <div className=" text-lg font-semibold mt- bg-orange text-white font-poppins">
              PYTHON
            </div>
          </div>
          <div className="bg-orange p-1.5 shadow-lg h-40 rounded-lg w-48">
            <div className="image bg-white h-28 w-full rounded-md">
              {" "}
              <img
                className="md:w-full"
                src="/assets/new-php-logo.png"
                alt="Profile Photo"
              />
            </div>
            <div className=" text-lg font-semibold mt- bg-orange text-white font-poppins">
              CSS
            </div>
          </div>
          <div className="bg-orange p-1.5 shadow-lg h-40 rounded-lg w-48">
            <div className="image bg-white h-28 w-full rounded-md">
              {" "}
              <img
                className="md:w-full"
                src="/assets/new-php-logo.png"
                alt="Profile Photo"
              />
            </div>
            <div className=" text-lg font-semibold mt- bg-orange text-white font-poppins">
              C++
            </div>
          </div>
          <div className="bg-orange p-1.5 shadow-lg h-40 rounded-lg w-48">
            <div className="image bg-white h-28 w-full rounded-md">
              {" "}
              <img
                className="md:w-full"
                src="/assets/new-php-logo.png"
                alt="Profile Photo"
              />
            </div>
            <div className=" text-lg font-semibold mt- bg-orange text-white font-poppins">
              HTML
            </div>
          </div>
          <div className="bg-orange p-1.5 shadow-lg h-40 rounded-lg w-48">
            <div className="image bg-white h-28 w-full rounded-md">
              {" "}
              <img
                className="md:w-full"
                src="/assets/new-php-logo.png"
                alt="Profile Photo"
              />
            </div>
            <div className=" text-lg font-semibold mt- bg-orange text-white font-poppins">
              NEXT.JS
            </div>
          </div>
          <div className="bg-orange p-1.5 shadow-lg h-40 rounded-lg w-48">
            <div className="image bg-white h-28 w-full rounded-md">
              {" "}
              <img
                className="md:w-full"
                src="/assets/new-php-logo.png"
                alt="Profile Photo"
              />
            </div>
            <div className=" text-lg font-semibold mt- bg-orange text-white font-poppins">
              JAVA SCRIPT
            </div>
          </div>
          <div className="bg-orange p-1.5 shadow-lg h-40 rounded-lg w-48">
            <div className="image bg-white h-28 w-full rounded-md">
              {" "}
              <img
                className="md:w-full"
                src="/assets/new-php-logo.png"
                alt="Profile Photo"
              />
            </div>
            <div className=" text-lg font-semibold mt- bg-orange text-white font-poppins">
              TAILWIND CSS
            </div>
          </div>
        </div>
        {/* end of Grid code */}
      </div>
    </div>
  );
}
