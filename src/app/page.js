import Navbar from "@/components/Navbar";
import Details from "@/components/Details";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import TechnicalSkills from "@/components/TechnicalSkills";
import ContactText from "@/components/ContactText";
import FloatingIcons from "../components/FloatingIcons";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=" text-center h-96 md:h-96 sm:h-72 mb-32">
        <div id="/" className="p-40 scroll-mt-20">
          <h1 className="font-anton font-semibold text-6xl md:text-8xl sm:text-[60px]  cursor-pointer text-black z-10">
            Hi! I'm <span className="text-mainColor">Kenneth</span>.
          </h1>
          <h1 className="font-roboto font-medium text-xl md:text-2xl sm:text-lg text-black z-10">
            FRONTEND DEVELOPER
          </h1>
        </div>
      </div>

      {/* Start ME */}
      <div id="bio" className="bg-secondaryColor p-3">
        <h1 className="text-3xl border-l-4 border-mainColor p-2 font-roboto font-semibold opacity-40 mt-10 ">
          ME
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-[25%_75%] gap-2 w-full h-auto p-6 bg-secondaryColor mb-32">
          <div className="bg-secondaryColor w-full p-3 grid justify-center items-center">
            <img
              src="/assets/photo_white.png"
              alt="Profile Photo"
              className="rounded-full object-cover h-auto w-24 sm:w-60 md:w-96"
            />
          </div>
          <div className="bg-secondaryColor text-xl md:text-xl md:border-l-8 border-mainColor mt-6 md:mt-0 md:ml-6 p-5 md:p-6">
            <Details />
          </div>
        </div>
      </div>

      {/* Start ProjectCard */}
      <div id="project" className="pt-14 md:mt-8">
        <h1 className="text-3xl border-l-4 border-mainColor p-2 font-roboto font-semibold ml-3 opacity-40">
          PROJECT
        </h1>
        <div className="p-4 md:p-8">
          <ProjectCard />
        </div>
      </div>

      {/* Technical Skills */}
      <div className="bg-secondaryColor  p-3">
        <h1 className="text-3xl border-l-4 border-mainColor  font-roboto font-semibold p-2 mb-2 opacity-40">
          TECHNICAL SKILL
        </h1>
        <div className="p-3 mb-44">
          <TechnicalSkills />
        </div>
      </div>

      {/* CONTACT US */}
      <div id="contact" className=" p-3 mb-32  ">
        <h1 className="text-3xl border-l-4 border-mainColor p-2 font-roboto font-semibold opacity-40">
          CONTACT
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-42 gap-4 items-center">
          <div className="flex justify-center">
            <ContactText />
          </div>
          <div className="pt-10 p-3 ">
            <Contact />
          </div>
          <FloatingIcons />
        </div>
      </div>
      {/* END */}
    </div>
  );
}
