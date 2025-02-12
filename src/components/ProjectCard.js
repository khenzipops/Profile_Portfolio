"use client";
import Link from "next/link";

const projects = [
  {
    title: "Vtracer",
    description: "A simple and elegant way to start coding with PHP.",
    image: "/assets/new-php-logo.png",
    alt: "Vtracer Logo",
    link: "/projects/vtracer",
  },
  {
    title: "CSS Mastery",
    description: "Master the art of CSS for beautiful web designs.",
    image: "/assets/css-logo.png",
    alt: "CSS Logo",
    link: "/projects/css-mastery",
  },
  {
    title: "HTML Basics",
    description: "Learn the basics of HTML for building web pages.",
    image: "/assets/html-logo.png",
    alt: "HTML Logo",
    link: "/projects/html-basics",
  },
  {
    title: "Next.js",
    description: "Build modern web applications with Next.js.",
    image: "/assets/nextjs-logo.png",
    alt: "Next.js Logo",
    link: "/projects/nextjs",
  },
  {
    title: "React",
    description: "Build interactive UIs with React.",
    image: "/assets/react-logo.png",
    alt: "React Logo",
    link: "/projects/react",
  },
  {
    title: "Node.js",
    description: "Build scalable network applications with Node.js.",
    image: "/assets/nodejs-logo.png",
    alt: "Node.js Logo",
    link: "/projects/nodejs",
  },
  {
    title: "TailwindCSS",
    description: "Style your web pages with TailwindCSS.",
    image: "/assets/tailwindcss-logo.png",
    alt: "TailwindCSS Logo",
    link: "/projects/tailwindcss",
  },
];

function ProjectCard() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {projects.map((project, index) => (
          <Link
            href={project.link}
            key={index}
            className="block cursor-pointer"
          >
            <div className="mx-auto w-full max-w-[200px] bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative w-full h-32 flex items-center justify-center bg-gray-100">
                <img
                  src={project.image}
                  alt={project.alt}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="p-4 text-center">
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
