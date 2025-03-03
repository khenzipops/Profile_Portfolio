"use client";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="w-10/12 mx-auto text-center py-12">
        <h1 className="text-3xl font-semibold text-black">PROJECTS</h1>

        {/* Subtle Divider with Icon */}
        <div className="flex items-center justify-center my-6">
          <div className="flex-grow border-t border-orange"></div>
          <div className="mx-4 text-orange">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m7-7H5"
              ></path>
            </svg>
          </div>
          <div className="flex-grow border-t border-orange"></div>
        </div>

        {/* Project Card */}
        <div>
          <ProjectCard />
        </div>
        {/* End of Project Card */}
      </div>
      
    </div>
  );
}
