import { GrLinkedinOption, GrGithub } from "react-icons/gr";

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-10 right-10 space-x-4 ">
      <a
        href="https://www.linkedin.com/in/kenneth-popera-0a020616a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-blue-600 hover:text-blue-400 transition duration-300"
      >
        <GrLinkedinOption />
      </a>
      <a
        href="https://github.com/kpopera143"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-blue-400 hover:text-blue-300 transition duration-300"
      >
        <GrGithub />
      </a>
    </div>
  );
};

export default FloatingIcons;
