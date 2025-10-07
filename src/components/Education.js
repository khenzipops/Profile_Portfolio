"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { useHydrated, useInViewWithHydration } from "@/hooks/useinView";

function Education() {
  const ref = useRef(null);
  const inView = useInViewWithHydration(ref, { once: false });
  const controls = useAnimation();
  const isHydrated = useHydrated();

  useEffect(() => {
    if (isHydrated && inView) {
      controls.start({ opacity: 1, y: 0 });
    } else if (isHydrated) {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls, isHydrated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: isHydrated ? 0 : 1, y: isHydrated ? 50 : 0 }}
      animate={controls}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="px-4 md:px-8"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-2 sm:gap-4 mb-6 text-center sm:text-left">
        <motion.div
          initial={{ opacity: isHydrated ? 0 : 1, y: isHydrated ? -20 : 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 ">
            Education Journey
          </h1>
        </motion.div>
      </div>

      {/* Education Cards */}
      <div className="w-full flex flex-col lg:flex-row gap-6 p-2">
        {/* Liceo */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 border border-blue-300 hover:border-teal-800 rounded-md overflow-hidden">
          <div className="w-fit p-4">
            <img
              src="/assets/liceo-logo.png"
              alt="Liceo"
              className="w-24 sm:w-28 mx-auto"
            />
          </div>
          <h1 className="font-poppins text-md lg:text-lg font-semibold capitalize text-center px-2">
            liceo de cagayan university
          </h1>
          <div className="w-full p-4 space-y-3">
            <p className="flex items-center gap-x-2 font-poppins capitalize">
              <MapPin className="text-blue-500 h-5 w-5" />
              cagayan de oro city
            </p>
            <p className="flex items-center gap-x-2 font-poppins capitalize">
              <BookOpen className="text-blue-500 h-5 w-5" />
              technical vocational livelihood - information communication
              technology
            </p>
            <p className="flex items-center gap-x-2 font-poppins">
              <Calendar className="text-blue-500 h-5 w-5" />
              2016 - 2018
            </p>
            <p className="font-poppins border-l-2 p-2 border-blue-400 text-sm sm:text-base">
              Acquired basic knowledge of programming fundamentals and
              troubleshooting skills in computer assembly and disassembly
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Install Configure Computer Systems Network",
                "Object Oriented Programming",
                "PC Operations with Internet Usage",
                "Set-up Computer Network Servers",
                "Computer Programming",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="border border-blue-500 px-2 py-1 rounded-lg text-gray-800 bg-white hover:bg-blue-500 hover:text-white text-xs sm:text-sm font-poppins"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* USTP */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 border border-blue-300 hover:border-teal-800 rounded-md overflow-hidden">
          <div className="w-fit p-4">
            <img
              src="/assets/ustp-logo.png"
              alt="USTP"
              className="w-24 sm:w-28 mx-auto"
            />
          </div>
          <h1 className="font-poppins text-md lg:text-lg font-semibold text-center px-2">
            University of Science and Technology of Southern Philippines
          </h1>
          <div className="w-full p-4 space-y-3">
            <p className="flex items-center gap-x-2 font-poppins">
              <MapPin className="text-blue-500 h-5 w-5" />
              Cagayan de Oro City
            </p>
            <p className="flex items-center gap-x-2 font-poppins">
              <BookOpen className="text-blue-500 h-5 w-5" />
              Bachelor of Science in Information Technology
            </p>
            <p className="flex items-center gap-x-2 font-poppins">
              <Calendar className="text-blue-500 h-5 w-5" />
              2018 - 2022
            </p>
            <p className="font-poppins border-l-2 p-2 border-blue-400 text-sm sm:text-base">
              Acquired foundational knowledge in computer programming languages,
              UI/UX design and software development principles.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Data Structures and Algorithms",
                "Mobile Programming",
                "Web Systems and Technolgies",
                "Systems Integration and Architecture",
                "Networking",
                "Software Engineering",
              ].map((subject, i) => (
                <span
                  key={i}
                  className="border border-blue-500 px-2 py-1 rounded-lg text-gray-800 bg-white hover:bg-blue-500 hover:text-white text-xs sm:text-sm font-poppins"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
