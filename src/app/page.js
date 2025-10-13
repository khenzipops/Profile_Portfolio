"use client";

import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import TechnicalSkills from "@/components/TechnicalSkills";
import ContactText from "@/components/ContactText";
import FloatingIcons from "../components/FloatingIcons";
import AboutDetails from "@/components/AboutDetails";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footers";
import Education from "@/components/Education";
import WorkHistory from "@/components/Workhistory";
// import Divider from "@/components/Divider";
// import Figma from "@/components/figma-folder/figma";

export default function Home() {
  const bioRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState('education');

  return (
    <div>
      <Navbar />
      <div className="p-5 m-3 ">
        <AboutDetails />
      </div>
      <div id="bio" ref={bioRef} className="">
        {/* <Divider /> */}
      </div>
      <div className="p-5 m-3">
        <ProjectCard />
      </div>
      <div id="TechnicalSkills" ref={skillsRef}>
        <div className=" p-5 m-3  border-gray-200 my-6">
          <TechnicalSkills />
        </div>
      </div>
      {/* <div id="TechnicalSkills" ref={skillsRef}>
        <div className=" p-5 m-3  border-gray-200 my-6">
          <Figma />
        </div>
      </div> */}

      {/* Toggle Section */}
      <div className="m-3 border-gray-200 my-6">
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveSection('education')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeSection === 'education'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveSection('workHistory')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeSection === 'workHistory'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Work History
            </button>
          </div>
        </div>

        {/* Conditional Content */}
        {activeSection === 'education' && (
          <div className="animate-fadeIn">
            <Education />
          </div>
        )}

        {activeSection === 'workHistory' && (
          <div className="animate-fadeIn">
            <WorkHistory />
          </div>
        )}
      </div>

      <div
        id="contact"
        ref={contactRef}
        className="p-5 m-3 border-gray-200 my-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-42 gap-4 items-center">
          <div className="p-2 text-5xl text-gray-300 mt-3">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 ">
              Contact
            </h1>
          </div>

        </div>
        <div className="flex justify-center">
            <ContactText />
          </div>
      </div>
      <div>
        <Footer />
      </div>
      <FloatingIcons />
    </div>
  );
}
