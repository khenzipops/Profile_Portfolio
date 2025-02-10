"use client";

function ProjectCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-64 w-12 mx-32">
      {/* Vtracer Card */}
      <div className="mx-auto w-60 bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="relative w-full h-44 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 flex items-center justify-center">
          <img
            src="/assets/new-php-logo.png"
            alt="Vtracer Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">Vtracer</h2>
          <p className="text-gray-600 text-sm mt-2">
            A simple and elegant way to start coding with PHP.
          </p>
        </div>
      </div>

      {/* CSS Card */}
      <div className="mx-auto w-60 bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="relative w-full h-44 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 flex items-center justify-center">
          <img
            src="/assets/css-logo.png"
            alt="CSS Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">CSS Mastery</h2>
          <p className="text-gray-600 text-sm mt-2">
            Master the art of CSS for beautiful web designs.
          </p>
        </div>
      </div>

      {/* HTML Card */}
      <div className="mx-auto w-60 bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="relative w-full h-44 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 flex items-center justify-center">
          <img
            src="/assets/html-logo.png"
            alt="HTML Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">HTML Basics</h2>
          <p className="text-gray-600 text-sm mt-2">
            Learn the basics of HTML for building web pages.
          </p>
        </div>
      </div>

      {/* Next.js Card */}
      <div className="mx-auto w-60 bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="relative w-full h-44 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 flex items-center justify-center">
          <img
            src="/assets/nextjs-logo.png"
            alt="Next.js Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">Next.js</h2>
          <p className="text-gray-600 text-sm mt-2">
            Build modern web applications with Next.js.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
