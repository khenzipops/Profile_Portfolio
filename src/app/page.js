"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Details from "@/components/Details";
import TechnicalSkills from "@/components/TechnicalSkills";
import ContactText from "@/components/ContactText";
import FloatingIcons from "../components/FloatingIcons";
import Cover from "@/components/Cover";
import useInView from "../hooks/useinView";
import Contact from "@/components/Contact";

export default function Home() {
  const coverRef = useRef(null);
  const bioRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const isCoverInView = useInView(coverRef);
  const isBioInView = useInView(bioRef);
  const isSkillsInView = useInView(skillsRef);
  const isContactInView = useInView(contactRef);

  return (
    <div className="h-screen">
      <Navbar />

      <div
        id="/"
        ref={coverRef}
        className={`text-center lg:h-screen md:h-96 sm:h-72 mb-28 lg:pt-28 ${
          isCoverInView ? "animate-tracking-in-expand-fwd" : "opacity-0"
        }`}
      >
        <Cover />
      </div>

      <div
        id="bio"
        ref={bioRef}
        className={`bg-secondaryColor p-3 min-h-screen mb-10 sm:mb-24 md:mb-32 lg:mb-20 xl:mb-10 w-full ${
          isBioInView ? "animate-tracking-in-expand-fwd" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl sm:text-3xl border-l-4 border-mainColor p-2 font-roboto font-semibold opacity-40 mt-6 sm:mt-10">
          ME
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-[25%_75%] gap-4 w-full h-auto p-4 sm:p-6 bg-secondaryColor mb-20">
          <div className="bg-secondaryColor w-full p-3 grid justify-center items-center">
            <img
              src="/assets/photo_white.png"
              alt="Profile Photo"
              className="rounded-full object-cover w-48 sm:w-56 md:w-96 lg:w-96 max-w-full"
            />
          </div>
          <div className="bg-secondaryColor text-lg sm:text-xl md:text-xl border-l-0 md:border-l-8 border-mainColor mt-4 md:mt-0 md:ml-6 w-full">
            <Details />
          </div>
        </div>
      </div>

      <div
        id="TechnicalSkills"
        ref={skillsRef}
        className={`p-3 sm:p-4 md:p-6 min-h-screen w-full ${
          isSkillsInView ? "animate-tracking-in-expand-fwd" : "opacity-0"
        }`}
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
        className={`p-3 mb-32 bg-secondaryColor h-screen ${
          isContactInView ? "animate-tracking-in-expand-fwd" : "opacity-0"
        }`}
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
