"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useHydrated, useInViewWithHydration } from "@/hooks/useinView";

// Project data
const projects = [
  {
    title: "LMS Vianna",
    description:
      "LMS Vianna is a review center platform that allows users to take quizzes anytime and anywhere, with the option to pause and resume whenever they are ready to focus again. As the Frontend Developer, I designed and built an intuitive and responsive user interface that makes quiz creation convenient for administrators and provides a smooth experience for reviewers preparing for their exams.",
    image: "/assets/lms.png",
    alt: "Vtrace Logo",
    link: "https://lms-frontend-koti.onrender.com/",
    technologies: ["Nextjs", "TypeScript", "Python", "Mariadb"],
  },
  {
    title: "VA Realty",
    description:
      "VAREALTY is a real estate platform built to help agents confidently buy, sell, and rent properties while ensuring their income is secure and transparent — and as the Frontend Developer, my role is to design and develop an intuitive, high-performing interface that empowers agents to manage listings, track deals, and grow their business efficiently.",
    image: "/assets/varealty.png",
    alt: "Vtrace Logo",
    link: "https://va-realty-system-frontend.onrender.com/",
    technologies: ["Nextjs", "TypeScript", "Python", "Mariadb"],
  },
  {
    title: "Vtrace",
    description:
      "Vtrace, short for Virus Trace, is a website system developed during the pandemic to help with efficient and accurate contact tracing, specifically serving clients in Camiguin. The platform was designed to track potential virus exposure and assist local health authorities in monitoring and managing cases effectively. I was assigned to handle the user interface of the system, focusing on creating a clean, responsive, and user-friendly design that made it easy for users to input and access essential health data. Through this project, I contributed to improving the system’s usability and supporting Camiguin’s efforts in maintaining public health safety.",
    image: "/assets/VTrace.png",
    alt: "Vtrace Logo",
    link: "https://kyshr.github.io/fast-trace/#/",
    technologies: ["React", "Bootstrap", "JavaScript", "ExpressJs", "MongoDB"],
  },
  {
    title: "Maturity Coconut App Detector",
    description:
      "Our group developed a mobile application for our thesis that detects the maturity of coconuts using a phone camera and machine learning. The app analyzes images to determine whether a coconut is mature or not based on visual characteristics. I contributed to the project’s design and user interface to ensure ease of use and clarity. This project allowed us to combine technology and agriculture through practical machine learning application.",
    image: "/assets/coconut.png",
    alt: "Coconut App",
    link: "https://drive.google.com/file/d/1FzDpzsdyRmI9G1NmI4EvxHtqf6cpLgVo/view",
    technologies: ["Python", "Flutter"],
  },
  {
    title: "Campus Security Portal",
    description:
      "During my college days, our team collaborated on several projects, including the Campus Security Portal. I was responsible for developing the front-end of the system using modern web technologies. My focus was on creating an intuitive and responsive interface for students and staff. This experience strengthened my skills in teamwork, UI design, and front-end development.",
    image: "/assets/campus-security-portal.png",
    alt: "Security Portal",
    link: "https://campus-security-portal-alpha.vercel.app/guard/login",
    technologies: ["Vite", "ExpressJs", "MongoDB", "TailwindCSS"],
  },
  {
    title: "ToDo",
    description:
      "This project is a To-Do application where I practiced implementing Create, Read, Update, and Delete (CRUD) operations. It was built using Vite, TailwindCSS, and TypeScript to ensure fast performance and type safety. The app allows users to add, edit, and remove tasks with a simple and responsive design. It helped me strengthen my skills in handling state management and component-based development.",
    image: "/assets/Todo.png",
    alt: "Todo App",
    link: "https://todo-list-c0fh.onrender.com/",
    technologies: ["Vite", "TailwindCSS", "JavaScript"],
  },
  {
    title: "UI DESIGN",
    description:
      "This project focuses on User Interface Design using Next.js and TailwindCSS. It features a clean and responsive layout aimed at improving the user experience. I also explored integrating maps to display locations interactively within the interface. This project helped me practice front-end design principles and map implementation in a modern web framework.",
    image: "/assets/marci-metzger.png",
    alt: "UI Design",
    link: "https://marci-metzger-two.vercel.app/",
    technologies: ["Nextjs", "TailwindCSS"],
  },
];

// Icon paths
const techIcons = {
  React: "/assets/reactjs.svg",
  Nextjs: "/assets/nextJS.svg",
  HTML: "/assets/html.svg",
  CSS: "/assets/css_3.svg",
  JavaScript: "/assets/javascript.svg",
  TypeScript: "/assets/typescript.svg",
  Python: "/assets/python.svg",
  MongoDB: "/assets/mongodb-svgrepo.svg",
  TailwindCSS: "/assets/tailwindcss.svg",
  Vite: "/assets/Vite.svg",
  ExpressJs: "/assets/express-js.svg",
  Flutter: "/assets/flutter-svgrepo-com.svg",
  Bootstrap: "/assets/bootstrap-svgrepo-com.svg",
  Mariadb: "/assets/mariadb.svg",
};

// Renders one tech icon
const TechIcon = ({ name }) => {
  const iconPath = techIcons[name] || "/assets/default.svg";
  return (
    <div className="flex flex-col items-center mx-2">
      <Image
        src={iconPath}
        alt={name}
        width={24}
        height={24}
        className="object-contain hover: "
      />
      <span className="text-xs text-gray-600 mt-1">{name}</span>
    </div>
  );
};

// Handles one project item (hooks live here)
function ProjectItem({ project, isEven, isHydrated, onImageClick }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInViewWithHydration(ref, { margin: "-50px" });

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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center bg-white/90 border-none rounded-xl transition-all duration-500 ${
        !isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="md:w-1/2 p-4 flex flex-col items-center">
        <div
          className="w-full h-56 md:h-72 rounded-lg overflow-hidden cursor-pointer border border-blue-400"
          onClick={() => onImageClick(project.image)}
        >
          <Image
            src={project.image}
            alt={project.alt}
            width={500}
            height={400}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 mt-4 text-center bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition"
        >
          Visit
        </a>
      </div>

      {/* Info Section */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center md:text-left">
          {project.title}
        </h2>
        <p className="text-gray-700 text-sm md:text-base text-justify mb-4">
          {project.description}
        </p>

        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Technologies:
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start">
            {project.technologies.map((tech, i) => (
              <TechIcon key={i} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main component
export default function ProjectCard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const isHydrated = useHydrated();

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 ">
        Projects
      </h1>

      <div className="flex flex-col space-y-12">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            isEven={index % 2 === 0}
            isHydrated={isHydrated}
            onImageClick={openModal}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="max-h-[90vh] w-full object-contain border-none rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black bg-opacity-60 text-white text-3xl rounded-full w-10 h-10 flex items-center justify-center hover:text-red-500"
            >
              &times;
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
