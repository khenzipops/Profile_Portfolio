"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useHydrated, useInViewWithHydration } from "@/hooks/useinView";
import { FaBootstrap } from "react-icons/fa";

const projects = [
  {
    title: "Vtrace",
    description:
      "I worked as a UI designer for a group contact tracing website project in college, creating an intuitive and user-friendly design.",
    image: "/assets/VTrace.png",
    alt: "Vtracer Logo",
    link: "https://kyshr.github.io/fast-trace/#/",
    target: "_blank",
    rel: "noopener noreferrer",
    technologies: ["React", "Bootstrap", "JavaScript", "Express Js", "MongoDB"],
  },
  {
    title: "ToDo",
    description:
      "Project where I practice Create , Read, Update, Delete operations using Vite, Tailwindcss and TypeScript",
    image: "/assets/Todo.png",
    alt: "Todo App",
    link: "https://todo-list-c0fh.onrender.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    technologies: ["Vite", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Maturity Coconut App Detector",
    description:
      "Our group created a mobile app that detects the maturity of coconuts using the phone camera and machine learning.",
    image: "/assets/coconut.png",
    alt: "Coconut App",
    link: "https://drive.google.com/file/d/1FzDpzsdyRmI9G1NmI4EvxHtqf6cpLgVo/view",
    target: "_blank",
    rel: "noopener noreferrer",
    technologies: ["Python", "Flutter"],
  },
  {
    title: "Campus Security Portal",
    description:
      "During my college days, our team collaborated to develop projects, and for the Campus Security Portal, I was assigned to create the front-end.",
    image: "/assets/campus-security-portal.png",
    alt: "Security Portal",
    link: "https://campus-security-portal-alpha.vercel.app/guard/login",
    target: "_blank",
    rel: "noopener noreferrer",
    technologies: ["Vite", "Express Js", "MongoDB", "TailwindCSS"],
  },
  {
    title: "UI DESIGN",
    description: "Simple project for User Interface Design.",
    image: "/assets/marci-metzger.png",
    alt: "UI Design",
    link: "https://marci-metzger-two.vercel.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    technologies: ["Nextjs", "TailwindCSS"],
  },
];

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
  "Express Js": "/assets/express-js.svg",
  Firebase: "/assets/firebase.svg",
  TensorFlow: "/assets/tensorflow.svg",
  Figma: "/assets/figma-svgrepo-com.svg",
  Flutter: "/assets/flutter-svgrepo-com.svg",
  Bootstrap: "/assets/bootstrap-svgrepo-com.svg",
};

function ProjectCard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const isHydrated = useHydrated();

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const TechIcon = ({ name }) => {
    const iconPath = techIcons[name] || "/assets/default.svg";
    return (
      <div className="flex flex-col items-center mx-1">
        <img
          src={iconPath}
          alt={`${name} icon`}
          className="w-6 h-6 object-contain"
        />
        <span className="text-xs text-gray-600 mt-1">{name}</span>
      </div>
    );
  };

  return (
    <div>
      <div className="p-2 text-gray-300 font-roboto mt-3 font-semibold">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-blue-400 font-bold">
          Project
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 p-4 md:p-10">
        {projects.map((project, index) => {
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
              key={index}
              ref={ref}
              initial={{ opacity: isHydrated ? 0 : 1, y: isHydrated ? 50 : 0 }}
              animate={controls}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col bg-white bg-opacity-90 border border-blue-500 rounded-lg
              md:flex-row md:h-72 hover:border-black transition-all duration-300"
            >
              {/* Image + Button */}
              <div className="md:w-1/3 flex flex-col group p-3">
                {project.image && (
                  <div
                    className="w-full h-48 md:h-3/4 overflow-hidden rounded-t-lg md:rounded-none md:rounded-l-lg
                    group-hover:shadow-inner cursor-pointer"
                    onClick={() => openModal(project.image)}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-contain transition-all duration-500 aspect-[16/9] md:aspect-square"
                      loading="lazy"
                    />
                  </div>
                )}
                <a
                  href={project.link}
                  target={project.target}
                  rel={project.rel}
                  className="text-center mt-4 px-6 py-2 bg-blue-500 text-white rounded-md
                  hover:bg-blue-600 transition-colors duration-300 font-medium flex items-center justify-center"
                >
                  <span className="text-base">Visit</span>
                </a>
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-between p-5 w-full md:w-2/3 group">
                <div>
                  <h2 className="text-xl font-extrabold text-center md:text-left text-gray-800 transition-colors duration-300 group-hover:text-blue-700 font-poppins">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-black overflow-y-auto max-h-40 transition-colors duration-800 group-hover:text-black font-poppins text-justify">
                    {project.description}
                  </p>
                </div>

                {/* Technology Icons Section */}
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Technologies:
                  </h3>
                  <div className="flex flex-wrap justify-start">
                    {project.technologies.map((tech, techIndex) => (
                      <TechIcon key={techIndex} name={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[90vh] w-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white hover:text-red-700 text-3xl rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
