import Link from "next/link";

function Profile() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-6 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
        Hi, I'm <span className="text-customBg">Kenneth</span>.
      </h1>
      <h2 className="text-base sm:text-lg md:text-xl text-gray-600">
        A passionate web developer, always willing to learn and grow.
      </h2>
      <div>
        <Link
          href="/project"
          className="px-4 sm:px-6 py-2 sm:py-3 text-white bg-customBg rounded-2xl hover:bg-brownBg transition-all text-sm sm:text-base drop-shadow-lg "
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

export default Profile;
