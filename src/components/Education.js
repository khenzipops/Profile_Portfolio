import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
function Education() {
  return (
    <div>
      <div className="flex flex-row items-center justify-start space-y-4">
        <div>
          <h1 className="text-xl md:text-3xl lg:text-5xl text-blue-400 font-bold font-poppins">
            Education Journey
          </h1>
        </div>
        <div>
          <GraduationCap className="w-10 h-10 text-blue-400" />
        </div>
      </div>
      <div>
        <div className="w-full flex flex-row gap-x-2">
          <div className="flex flex-col items-center justify-center w-1/2 border border-blue-300 hover:border-teal-800 rounded-md ">
            <div className=" w-fit md:h-32  p-4 ">
              <img
                src="/assets/liceo-logo.png
             "
                alt="Liceo"
                className="w-32"
              />
            </div>
            <div>
              <h1 className="font-poppins text-md lg:text-lg font-semibold capitalize">
                liceo de cagayan university
              </h1>
            </div>
            <div className="w-full p-4 space-y-3 ">
              <p className="flex items-center gap-x-2 font-poppins capitalize">
                <MapPin className="text-blue-500 h-5 w-5" /> cagayan de oro city
              </p>
              <p className="flex items-center gap-x-2 font-poppins capitalize">
                <BookOpen className="text-blue-500 h-5 w-5" /> technical
                vocational livelihood - information communication technolgy
              </p>
              <p className="flex items-center gap-x-2 font-poppins">
                <Calendar className="text-blue-500 h-5 w-5" /> 2016 - 2018
              </p>

              <p className="font-poppins border-l-2 p-2 border-blue-400">
                Acquired basic knowledge of programming fundamentals and
                troubleshooting skills in computer assembly and disassembly
              </p>
              <div className="flex flex-wrap w-full gap-1 justify-start">
                <span className="border-2 border-blue-500 p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-800 shadow-sm font-poppins">
                  Install Configure Computer Systems Network
                </span>
                <span className="border-2 border-blue-500 p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-800 shadow-sm font-poppins">
                  Object Oriented Programming
                </span>
                <span className="border-2 border-blue-500 p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-800 shadow-sm font-poppins">
                  PC Operations with Internet Usage
                </span>
                <span className="border-2 border-blue-500 p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-800 shadow-sm font-poppins">
                  Set-up Computer Network Servers
                </span>
                <span className="border-2 border-blue-500 p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-800 shadow-sm font-poppins">
                  Computer Programming
                </span>
              </div>
            </div>
          </div>
          {/* ustp */}
          <div className="flex flex-col items-center justify-center w-1/2 border border-blue-300 hover:border-teal-800 rounded-md ">
            <div className=" w-fit md:h-32 p-4 ">
              <img
                src="/assets/ustp-logo.png
             "
                alt="Liceo"
                className="w-28"
              />
            </div>
            <div>
              <h1 className="font-poppins text-md lg:text-lg font-semibold">
                University of Science and Technology of Southern Philippines
              </h1>
            </div>
            <div className="w-full p-4 space-y-3 ">
              <p className="flex items-center gap-x-2 font-poppins">
                <MapPin className="text-blue-500 h-5 w-5" /> Cagayan de Oro City
              </p>
              <p className="flex items-center gap-x-2 font-poppins">
                <BookOpen className="text-blue-500 h-5 w-5" /> Bachelor of
                Science in Information Technology
              </p>
              <p className="flex items-center gap-x-2 font-poppins">
                <Calendar className="text-blue-500 h-5 w-5" /> 2018 - 2022
              </p>

              <p className="font-poppins border-l-2 p-2 border-blue-400">
                Acquired foundational knowledge in computer programming
                languages, UI/UX design and software development principles.
              </p>
              <div className="flex flex-wrap w-full gap-1 justify-start">
                <span className="border-2 border-blue-500 p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-800 shadow-sm font-poppins">
                  Data Structures and Algorithms
                </span>
                <span className="border-2 border-blue-500 p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-800 shadow-sm font-poppins">
                  Mobile Programming
                </span>
                <span className="border-2 border-blue-500 p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-800 shadow-sm font-poppins">
                  Web Systems and Technolgies
                </span>
                <span className="border-2 border-blue-500 p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-800 shadow-sm font-poppins">
                  Systems Integration and Architecture
                </span>
                <span className="border-2 border-blue-500 p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-800 shadow-sm font-poppins">
                  Networking
                </span>
                <span className="border-2 border-blue-500 p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-800 shadow-sm font-poppins">
                  Software Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Education;
