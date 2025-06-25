"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Details from "@/components/Details";

export default function Cover() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Refs for sections
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Control animation manually
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
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 md:flex md:flex-row md:justify-between p-4 border-b-2">
      {/* Left Side Text */}
      <motion.div
        ref={leftRef}
        initial={{ opacity: 0, x: -50 }}
        animate={leftControls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-start justify-center mt-16"
      >
        <div>
          <Details
            isOpen={isDetailOpen}
            onClose={() => setIsDetailOpen(false)}
          />
          <p className="font-bold text-blue-500 text-base sm:text-2xl md:text-4xl  text-justify pb-2">
            I'm{" "}
            <span className="bg-blue-500 p-1 hover:bg-blue-800 rounded-full text-white pr-24">
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
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        ref={rightRef}
        initial={{ opacity: 0, x: 50 }}
        animate={rightControls}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="flex items-center justify-center p-6"
      >
        <img
          src="/assets/Portfolio.png"
          alt="profile-image"
          className="w-[350px] h-[350px] rounded-full shadow-lg border-2 border-blue-500"
        />
      </motion.div>
    </div>
  );
}
