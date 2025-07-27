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
  { name: "MongoDB", svgPath: "/assets/mongodb-svgrepo.svg" },
  { name: "Git", svgPath: "/assets/git-svgrepo-com.svg" },
  { name: "Figma", svgPath: "/assets/figma-svgrepo-com.svg" },
];

const SkillItem = ({ skill, index, isHydrated }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInViewWithHydration(ref, { margin: "-50px" });

  useEffect(() => {
    if (!isHydrated) return;

    controls.start({
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 30,
      transition: { duration: 0.4, ease: "easeOut", delay: index * 0.05 },
    });
  }, [inView, controls, index, isHydrated]);

  return (
    <motion.div
      ref={ref}
      initial={isHydrated ? { opacity: 0, y: 30 } : { opacity: 1 }}
      className="flex flex-col items-center justify-center h-40 w-40 bg-white bg-opacity-30 border border-blue-600 rounded-lg
                hover:bg-opacity-50 transition-all duration-300 hover:border-black"
    >
      <img
        src={skill.svgPath}
        alt={`${skill.name} logo`}
        className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2"
      />
      <h1 className="text-xs sm:text-base text-black font-medium text-center font-poppins">
        {skill.name}
      </h1>
    </motion.div>
  );
};

export default function TechnicalSkills() {
  const isHydrated = useHydrated();

  return (
    <div>
      <motion.div
        initial={{ opacity: isHydrated ? 0 : 1, y: isHydrated ? -20 : 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-blue-400 font-poppins ml-2 font-bold w-full">
          Technical Skills
        </h1>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 p-8">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            skill={skill}
            index={index}
            isHydrated={isHydrated}
          />
        ))}
      </div>
    </div>
  );
}
