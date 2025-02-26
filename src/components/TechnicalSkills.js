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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-secondaryColor p-4 rounded-lg shadow-sm flex flex-col items-center"
        >
          <img
            src={skill.svgPath}
            alt={`${skill.name} logo`}
            className="w-[60px] h-[50px]"
          />
          <p className="text-sm text-gray-600 mt-2">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
