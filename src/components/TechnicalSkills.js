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

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const SkillItem = ({ skill }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center justify-center h-32 bg-white bg-opacity-30 
                 border border-blue-400 rounded-lg hover:bg-opacity-50 transition-all duration-300 
                 hover:border-black shadow-sm hover:shadow-lg"
    >
      <motion.img
        src={skill.svgPath}
        alt={`${skill.name} logo`}
        className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2"
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <h1 className="text-xs sm:text-base text-black font-medium text-center font-poppins">
        {skill.name}
      </h1>
    </motion.div>
  );
};

export default function TechnicalSkills() {
  const isHydrated = useHydrated();
  const ref = useRef(null);
  const inView = useInViewWithHydration(ref, { margin: "-50px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: isHydrated ? 0 : 1, y: isHydrated ? -20 : 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 ">
          Technical Skills
        </h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:p-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}
