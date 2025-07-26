"use client";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useHydrated, useInViewWithHydration } from "@/hooks/useinView";

const skills = [
  { name: "HTML", svgPath: "/assets/html.svg" },
  { name: "CSS", svgPath: "/assets/css_3.svg" },
  { name: "Python", svgPath: "/assets/python.svg" },
  { name: "MariaDb", svgPath: "/assets/mariadb.svg" },
  { name: "NextJS", svgPath: "/assets/nextJS.svg" },
  { name: "PHP", svgPath: "/assets/PHP.svg" },
  { name: "TailwindCSS", svgPath: "/assets/tailwindcss.svg" },
  { name: "Vite", svgPath: "/assets/Vite.svg" },
  { name: "React", svgPath: "/assets/reactjs.svg" },
  { name: "Express Js", svgPath: "/assets/express-js.svg" },
  { name: "Typescript", svgPath: "/assets/typescript.svg" },
  { name: "C++", svgPath: "/assets/C++.svg" },
  { name: "Javascript", svgPath: "/assets/javascript.svg" },
];

export default function TechnicalSkills() {
  const isHydrated = useHydrated();

  return (
    <div>
      {/* Title */}
      <motion.div
        initial={{ opacity: isHydrated ? 0 : 1, y: isHydrated ? -20 : 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-blue-400 font-poppins ml-2 font-bold w-full ">
          Technical Skills
        </h1>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 ">
        {skills.map((skill, index) => {
          const ref = useRef(null);
          const controls = useAnimation();
          const inView = useInViewWithHydration(ref, { margin: "-50px" });

          useEffect(() => {
            if (isHydrated && inView) {
              controls.start({ opacity: 1, y: 0 });
            } else if (isHydrated) {
              controls.start({ opacity: 0, y: 30 });
            }
          }, [inView, controls, isHydrated]);

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: isHydrated ? 0 : 1, y: isHydrated ? 30 : 0 }}
              animate={controls}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="flex flex-col items-center justify-center p-4 bg-white bg-opacity-30 border border-blue-600 rounded-lg shadow-lg 
                hover:bg-opacity-50 transition-all duration-300 
                hover:shadow-outer hover:border-black "
            >
              <img
                src={skill.svgPath}
                alt={`${skill.name} logo`}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2 "
              />
              <h1 className="text-xs sm:text-base text-black font-medium text-center font-poppins ">
                {skill.name}
              </h1>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
