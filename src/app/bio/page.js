"use client";
import Navbar from "@/components/Navbar";
import Details from "@/components/Details";
import Contact from "@/components/Contact";

export default function Biography() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h1 className="items-center text-center font-poppins text-2xl mt-5 mb-3">
            Biography
          </h1>
          {/* start flex */}
          <div className="flex flex-col md:flex-row w-full h-auto md:h-[300px]">
            {/* Profile Section */}
            <div className="bg-brownBg w-full md:w-1/4 p-4">
              <div className="flex justify-center items-center h-44 w-44 mx-auto bg-white rounded-full">
                <img
                  src="/assets/photo_white.png"
                  alt="Profile"
                  width={180}
                  height={180}
                  className="rounded-full"
                />
              </div>
              <div className="mt-4 text-center">
                <button className="bg-white hover:bg-amber-800 text-black font-bold py-1 px-2  mb-1 rounded">
                  Download CV
                </button>
              </div>
              <div className="mt-2 text-center">
                <button className="bg-white hover:bg-amber-800 text-black font-bold py-1 px-4  rounded">
                  Contact
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="bg-brownBg w-full md:w-3/4 p-4">
              <Details />
            </div>
          </div>
        </div>
        {/* end of flex */}

        {/* Technical Skills */}
        <div>
          <h1 className="items-center text-center font-poppins text-2xl mt-5 mb-3">
            Technical Skills
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 text-center text-xl font-poppins text-white p-5">
          <div className="bg-customBg rounded-md">HTML</div>
          <div className="bg-customBg rounded-md">CSS</div>
          <div className="bg-customBg rounded-md">Javascript</div>
          <div className="bg-customBg rounded-md">PHP</div>
          <div className="bg-customBg rounded-md">C++</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center text-xl font-poppins text-white p-5">
          <div className="bg-customBg rounded-md">Next.js</div>
          <div className="bg-customBg rounded-md">Tailwindcss</div>
          <div className="bg-customBg rounded-md">Python</div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row gap-2 bg-brownBg mt-10">
          <div className="bg-brown w-full md:w-1/4 p-4">
            <h2 className="text-center text-white">Contact Info</h2>
            {/* You can add any contact info here */}
          </div>
          <div className="w-full md:w-3/4 p-4">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
