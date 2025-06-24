import { motion } from "@motionone/react";

function Cover() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-100 via-white to-blue-300 px-6 py-12 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-notoserif font-bold text-center md:text-center text-blue-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl"
        >
          Hello! I'm glad you're here — explore my work, projects, and passion
          for front-end development.
        </motion.p>
      </div>
    </div>
  );
}

export default Cover;
