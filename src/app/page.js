"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import TechnicalSkills from "@/components/TechnicalSkills";
import ContactText from "@/components/ContactText";
import FloatingIcons from "../components/FloatingIcons";
import Cover from "@/components/Cover";
import useInView from "../hooks/useinView";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const bioRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="h-screen">
      <Navbar />

      <div id="/">
        <Cover />
      </div>

      <div id="bio" ref={bioRef} className="bg-gray-600 p-3 h-5"></div>
      <div
        className="grid grid-cols-4 bg-blue-500 h-15 justify-center text-white sm:p-10 lg:p-4 text-center sm:text-xs md:text-xs lg:text-xl font-poppins
       "
      >
        <div>
          <span>Front End Developer</span>
        </div>
        <div>UI/UX</div>
        <div>Quality Assurance</div>
        <div>SEO</div>
      </div>
      <div className="">
        <ProjectCard />
      </div>
      <div
        id="TechnicalSkills"
        ref={skillsRef}
        className="p-3 sm:p-4 md:p-6 min-h-screen w-full"
      >
        <h1 className="text-2xl sm:text-3xl border-l-4 border-mainColor font-roboto font-semibold p-2 mb-4 opacity-40">
          TECHNICAL SKILL
        </h1>
        <div className="p-2 sm:p-3 mb-20 md:mb-44 w-full">
          <TechnicalSkills />
        </div>
      </div>

      <div
        id="contact"
        ref={contactRef}
        className="p-3 mb-32 bg-secondaryColor h-screen"
      >
        <h1 className="text-3xl border-l-4 border-mainColor p-2 font-roboto font-semibold opacity-40">
          CONTACT
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-42 gap-4 items-center">
          <div className="flex justify-center">
            <ContactText />
          </div>
          <div className="pt-10 p-3">
            <Contact />
          </div>
        </div>
      </div>
      <FloatingIcons />
    </div>
  );
}
