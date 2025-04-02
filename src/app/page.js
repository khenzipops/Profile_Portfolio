"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import TechnicalSkills from "@/components/TechnicalSkills";
import ContactText from "@/components/ContactText";
import FloatingIcons from "../components/FloatingIcons";
import Cover from "@/components/Cover";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footers";

export default function Home() {
  const bioRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar />

      <div id="/">
        <Cover />
      </div>
      <div
        id="bio"
        ref={bioRef}
        className="grid grid-cols-4 bg-blue-500 h-15 justify-center text-white sm:p-10 lg:p-4 text-center sm:text-xs md:text-xs lg:text-xl font-poppins shadow-lg
       "
      >
        <div>
          <span>Front End Developer</span>
        </div>
        <div>UI/UX</div>
        <div>About</div>
        <div>Certificate</div>
      </div>
      <div className="p-5 m-3">
        <ProjectCard />
      </div>
      <div id="TechnicalSkills" ref={skillsRef}>
        <div className=" p-5 m-3 border-t-2 border-gray-200 my-6">
          <TechnicalSkills />
        </div>
      </div>

      <div
        id="contact"
        ref={contactRef}
        className="p-5 m-3 border-t-2 border-gray-200 my-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-42 gap-4 items-center">
          <div className="p-2 text-5xl text-gray-300 font-roboto mt-3">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-blue-400 font-bold">
              Contact
            </h1>
          </div>

          <div className="p-2 text-5xl text-gray-300 font-roboto mt-3  font-semibold"></div>
          <div className="flex justify-center">
            <ContactText />
          </div>

          <div className="pt-10 p-3">
            <Contact />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
      <FloatingIcons />
    </div>
  );
}
