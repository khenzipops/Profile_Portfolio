"use client";

const skills = [
  { name: "HTML", svgPath: "/assets/html.svg" },
  { name: "CSS", svgPath: "/assets/css_3.svg" },
  { name: "PYTHON", svgPath: "/assets/python.svg" },
  { name: "MariaDb", svgPath: "/assets/mariadb.svg" },
  { name: "NextJS", svgPath: "/assets/nextJS.svg" },
  { name: "PHP", svgPath: "/assets/PHP.svg" },
  { name: "TailwindCSS", svgPath: "/assets/tailwindcss.svg" },
];

export default function TechnicalSkills() {
  return (
    <div>
      <div>
        <h1 className=" text-2xl md:text-3xl lg:text-5xl text-blue-400 font-roboto ml-2  font-bold w-full">
          Technical Skills
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-10 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white bg-opacity-30 border border-blue-600 rounded-lg shadow-sm 
      hover:bg-blue-300 hover:bg-opacity-50 transition-all duration-300 backdrop-blur-sm
      hover:shadow-inner hover:border-blue-800 hover:scale-[0.95]"
          >
            <img
              src={skill.svgPath}
              alt={`${skill.name} logo`}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2"
            />
            <h1 className="text-sm sm:text-base text-black font-medium text-center">
              {skill.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
