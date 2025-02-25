"use client";
import Link from "next/link";

const projects = [
  {
    title: "Vtrace",
    description: "Contact tracing website",
    image: "/assets/VTrace.png",
    alt: "Vtracer Logo",
    link: "https://kyshr.github.io/fast-trace/#/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "CSS Mastery",
    description: "Master the art of CSS for beautiful web designs.",
    image: "/assets/.png",
    alt: "CSS Logo",
    link: "/projects/css-mastery",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "HTML Basics",
    description: "Learn the basics of HTML for building web pages.",
    image: "/assets/html-logo.png",
    alt: "HTML Logo",
    link: "/projects/html-basics",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "Next.js",
    description: "Build modern web applications with Next.js.",
    image: "/assets/nextjs-logo.png",
    alt: "Next.js Logo",
    link: "/projects/nextjs",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "React",
    description: "Build interactive UIs with React.",
    image: "/assets/react-logo.png",
    alt: "React Logo",
    link: "/projects/react",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "Node.js",
    description: "Build scalable network applications with Node.js.",
    image: "/assets/nodejs-logo.png",
    alt: "Node.js Logo",
    link: "/projects/nodejs",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "TailwindCSS",
    description: "Style your web pages with TailwindCSS.",
    image: "/assets/tailwindcss-logo.png",
    alt: "TailwindCSS Logo",
    link: "/projects/tailwindcss",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

function ProjectCard() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <Link
            href={project.link}
            key={index}
            target={project.target}
            rel={project.rel}
            className="block cursor-pointer"
          >
            <div className="mx-auto w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative w-full h-32 flex items-center justify-center bg-gray-100">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="p-8 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
