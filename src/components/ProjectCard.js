"use client";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Vtrace",
    description:
      "I worked as a UI/UX designer for a group contact tracing website project in college, creating an intuitive and user-friendly design.",
    image: "/assets/VTrace.png",
    alt: "Vtracer Logo",
    link: "https://kyshr.github.io/fast-trace/#/",
    target: "_blank",
    rel: "noopener noreferrer",
    titlelink: "Visit",
  },
];

function ProjectCard() {
  return (
    <div>
      <div className="p-2 text-5xl text-gray-200 font-roboto m-t-3  font-semibold">
        <h1>Project</h1>
      </div>

      <div className="grid lg:grid-cols-2 md:lg:grid-cols-1 gap-2 p-10 ">
        {projects.map((project, index) => (
          <div key={index} className="m-2 font-poppins h-72 w-full rounded-lg">
            <div className="flex h-full p-2 gap-5  bg-blue-100 bg-opacity-30 border border-blue-600 border-opacity-100 backdrop-blur-md  rounded-2xl">
              <div className="w-1/2 flex flex-col gap-1">
                {project.image && (
                  <div className="w-full  h-full m-2 border-l-8 border-t-2 border-b-2 border-r-2 border-t-blue-600 border-r-blue-600 border-b-blue-600 border-l-blue-600 relative">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      layout="fill"
                      className="cover"
                    />
                  </div>
                )}
                <div className="bg-blue-500 p-2 m-2 rounded-lg text-white text-center font-poppins text-xl justify-center w-full">
                  <a
                    href={project.link}
                    target={project.target}
                    rel={project.rel}
                  >
                    {project.titlelink}
                  </a>
                </div>
              </div>
              <div className="m-3 flex flex-col w-full  ">
                <div className="h-8 w-auto  text-center justify-center font-poppins text-xl">
                  <h1>{project.title}</h1>
                </div>
                <div className=" h-1/2 sm:text-xs lg:text-md">
                  {project.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
