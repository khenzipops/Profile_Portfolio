"use client";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
    titlelink: "Visit",
    svgPath: "/assets/reactjs.svg",
    imgicon: "/asstes/nextjs.svg",
  },
  {
    title: "ToDo",
    description:
      "Project where I practice Create , Read, Update, Delete operations using Vite, Tailwindcss and TypeScript",
    image: "/assets/Todo.png",
    alt: "Vtracer Logo",
    link: "https://todo-list-c0fh.onrender.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    titlelink: "Visit",
    svgPath: "/assets/nextJS.svg",
  },
  // {
  //   title: "Climbs",
  //   description:
  //     "This project was recreated from scratch after deletion, as part of optimizing the original version provided during my OJT at Climbs.",
  //   image: "/assets/Climbs.png",
  //   alt: "Vtracer Logo",
  //   link: "https://kyshr.github.io/fast-trace/#/",
  //   target: "_blank",
  //   rel: "noopener noreferrer",
  //   titlelink: "Visit",
  //   svgPath: "/assets/nextJS.svg",
  //   className: "cursor-not-allowed",
  // },
  {
    title: "Maturity Coconut App Detector",
    description:
      "Our group created a mobile app that detects the maturity of coconuts using the phone camera and machine learning. The app analyzes the image and tells whether the coconut is young, mature, or overripe.",
    image: "/assets/coconut.png",
    alt: "Vtracer Logo",
    link: "https://drive.google.com/file/d/1FzDpzsdyRmI9G1NmI4EvxHtqf6cpLgVo/view",
    target: "_blank",
    rel: "noopener noreferrer",
    titlelink: "Visit",
    svgPath: "/assets/nextJS.svg",
  },
  {
    title: "Campus Security Portal",
    description:
      "During my college days, our team collaborated to develop projects, and for the Campus Security Portal, I was assigned to create the front-end.",
    image: "/assets/campus-security-portal.png",
    alt: "Vtracer Logo",
    link: "https://campus-security-portal-alpha.vercel.app/guard/login",
    target: "_blank",
    rel: "noopener noreferrer",
    titlelink: "Visit",
    svgPath: "/assets/nextJS.svg",
  },
  {
    title: "Frontend Project",
    description:
      "A Next.js and Tailwind CSS project developed to demonstrate my front-end skills",
    image: "/assets/marci-metzger.png",
    alt: "Vtracer Logo",
    link: "https://marci-metzger-two.vercel.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    titlelink: "Visit",
    svgPath: "/assets/next.svg",
  },
];

function ProjectCard() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <div className="p-2 text-gray-300 font-roboto mt-3 font-semibold">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-blue-400 font-bold">
          Project
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 p-4 md:p-10">
        {projects.map((project, index) => {
          const ref = useRef(null);
          const controls = useAnimation();
          const inView = useInView(ref, { margin: "-50px" });

          useEffect(() => {
            if (inView) {
              controls.start({ opacity: 1, y: 0 });
            } else {
              controls.start({ opacity: 0, y: 50 });
            }
          }, [inView, controls]);

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col bg-white bg-opacity-90 border border-blue-500 rounded-lg shadow-md 
              md:flex-row md:h-72  transition-all duration-300 backdrop-blur-base
              hover:shadow-inner hover:border-black hover:scale-[0.98]"
            >
              {/* Image + Button */}
              <div className="md:w-1/3 flex flex-col group p-2">
                {project.image && (
                  <div
                    className="w-full h-48 md:h-3/4 overflow-hidden rounded-t-lg md:rounded-none md:rounded-l-lg
                    group-hover:shadow-inner cursor-pointer"
                    onClick={() => openModal(project.image)}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-all duration-500
                      group-hover:scale-105 aspect-[16/9] md:aspect-square"
                      loading="lazy"
                    />
                  </div>
                )}

                <a
                  href={project.link}
                  target={project.target}
                  rel={project.rel}
                  className="text-center items-center before:ease relative h-7 w-full overflow-hidden 
                  border border-blue-800 text-black shadow-2xl transition-all before:absolute before:top-1/2 
                  before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 
                  before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 
                  hover:before:-translate-y-32 mt-2 rounded-md"
                >
                  <span className="relative z-10">{project.titlelink}</span>
                </a>
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-between p-4 w-full md:w-2/3 group shadow">
                <div>
                  <h2 className="text-xl font-extrabold text-center md:text-left text-gray-800 transition-colors duration-300 group-hover:text-blue-700 font-poppins">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-black overflow-y-auto max-h-40 transition-colors duration-800 group-hover:text-black font-poppins text-justify">
                    {project.description}
                  </p>
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
