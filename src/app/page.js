import Navbar from "@/components/Navbar";
import Details from "@/components/Details";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import TechnicalSkills from "@/components/TechnicalSkills";
import ContactText from "@/components/ContactText";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-32">
        <h1 className="font-anton font-semibold text-6xl md:text-8xl cursor-pointer animate-pulse">
          Hi! I'm <span className="text-mainColor">Kenneth</span>.
        </h1>
        <h1 className="font-roboto font-medium text-xl md:text-2xl mb-32">
          FRONT - END DEVELOPER
        </h1>
      </div>

      {/* Start ME */}
      <div id="bio" className="bg-secondaryColor p-3">
        <h1 className="text-2xl border-l-4 border-mainColor p-2">ME</h1>
        <div className="flex flex-col md:flex-row w-full h-auto p-6 bg-secondaryColor">
          <div className="bg-secondaryColor w-full p-3 flex justify-center items-center">
            <img
              src="/assets/photo_white.png"
              alt="Profile Photo"
              className="rounded-full max-w-full h-auto object-cover"
            />
          </div>
          <div className="bg-secondaryColor text-xl md:text-xl  md:border-l-8 border-mainColor mt-6 md:mt-0 md:ml-6 p-5 md:p-6">
            <Details />
          </div>
        </div>
      </div>

      {/* Start ProjectCard */}
      <div id="project" className="mt-4 md:mt-8">
        <h1 className="text-2xl border-l-4 border-mainColor p-2 ml-3">
          PROJECT
        </h1>
        <div className="p-4 md:p-8">
          <ProjectCard />
        </div>
      </div>

      {/* Technical Skills */}
      <div className="bg-secondaryColor  p-3">
        <h1 className="text-2xl border-l-4 border-mainColor p-2 h-2/4">
          TECHNICAL SKILL
        </h1>
        <div className="p-4 ">
          <TechnicalSkills />
        </div>
      </div>

      {/* CONTACT US */}
      <div className=" p-3  ">
        <h1 className="text-2xl border-l-4 border-mainColor p-2 h-2/4">
          CONTACT
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-42 gap-4 items-center">
          <div className="flex justify-center">
            <ContactText />
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </div>
      {/* END */}
    </div>
  );
}
