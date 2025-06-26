"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Details from "@/components/Details";

export default function Cover() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const isLeftInView = useInView(leftRef, { margin: "-50px" });
  const isRightInView = useInView(rightRef, { margin: "-50px" });

  useEffect(() => {
    if (isLeftInView) {
      leftControls.start({ opacity: 1, x: 0 });
    } else {
      leftControls.start({ opacity: 0, x: -50 });
    }
  }, [isLeftInView, leftControls]);

  useEffect(() => {
    if (isRightInView) {
      rightControls.start({ opacity: 1, x: 0 });
    } else {
      rightControls.start({ opacity: 0, x: 50 });
    }
  }, [isRightInView, rightControls]);

  return (
    <div className="w-full p-4 space-y-6 border-b-2">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl sm:text-3xl lg:text-5xl text-blue-400 font-bold font-poppins text-center lg:text-left"
      >
        About Me
      </motion.h1>

      {/* Main Content */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
        {/* Left Side Text */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -50 }}
          animate={leftControls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-start justify-center lg:justify-start mt-8 lg:mt-0 px-2"
        >
          <div className="max-w-xl">
            <Details
              isOpen={isDetailOpen}
              onClose={() => setIsDetailOpen(false)}
            />
            <p className="font-bold text-blue-500 text-base sm:text-xl md:text-3xl text-justify pb-2">
              I'm{" "}
              <span className="bg-blue-500 p-1 hover:bg-blue-800 rounded-full text-white pr-8">
                Khenz
              </span>
            </p>
            <p className="text-sm sm:text-base font-poppins text-justify pb-2">
              I'm a Frontend Developer from Cagayan de Oro City with experience
              in Next.js and Vite. I specialize in building responsive and
              functional web applications using Next.js, Tailwind CSS, and
              Express.js, with MongoDB for backend support.
            </p>
            <p className="text-sm sm:text-base font-poppins text-justify">
              I graduated with a BS in Information Technology from the
              University of Science and Technology of Southern Philippines. I'm
              passionate about creating clean, user-friendly web experiences and
              currently focused on building simple projects to expand my skills
              and knowledge.
            </p>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 50 }}
          animate={rightControls}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center items-center mt-8 lg:mt-0"
        >
          <img
            src="/assets/Portfolio.png"
            alt="profile-image"
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full shadow-lg border-2 border-blue-500 object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
