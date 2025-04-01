"use client";
import { useState } from "react";

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
  },
  {
    title: "ToDo",
    description:
      "Project where I practice Create , Read, Update, Delete operations using Vite, Tailwindcss and TypeScript",
    image: "/assets/Todo.png",
    alt: "Vtracer Logo",
    link: "https://kyshr.github.io/fast-trace/#/",
    target: "_blank",
    rel: "noopener noreferrer",
    titlelink: "Visit",
  },
  {
    title: "Climbs",
    description:
      "This project was recreated from scratch after deletion, as part of optimizing the original version provided during my OJT at Climbs.",
    image: "/assets/Todo.png",
    alt: "Vtracer Logo",
    link: "https://kyshr.github.io/fast-trace/#/",
    target: "_blank",
    rel: "noopener noreferrer",
    titlelink: "Visit",
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
      <div className="p-2  text-gray-300 font-roboto mt-3  font-semibold">
        <h1 className="text-2xl md:text-3xl lg:text-5xl">Project</h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 p-4 md:p-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-white bg-opacity-30 border border-blue-600 rounded-lg shadow-sm 
      md:flex-row md:h-72 hover:bg-blue-300 transition-all duration-300 backdrop-blur-sm
      hover:shadow-inner hover:border-blue-800 hover:scale-[0.90]"
          >
            {/* Image + Button Container */}
            <div className="md:w-1/3 flex flex-col group">
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
                className="bg-blue-500 hover:bg-blue-600 py-2 px-4 m-2 rounded-lg text-white text-center 
          transition-all duration-300 font-medium md:mx-auto md:mb-2 md:w-11/12
          hover:shadow-lg hover:-translate-y-0.5"
              >
                {project.titlelink}
              </a>
            </div>

            {/* Content Area */}
            <div className="flex flex-col justify-between p-4 w-full md:w-2/3 group">
              <div>
                <h2
                  className="text-xl font-bold text-center md:text-left text-gray-800
          transition-colors duration-300 group-hover:text-blue-700"
                >
                  {project.title}
                </h2>
                <p
                  className="mt-2 text-sm md:text-base text-black overflow-y-auto max-h-40
          transition-colors duration-800 group-hover:text-black"
                >
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-3xl"
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[90vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
