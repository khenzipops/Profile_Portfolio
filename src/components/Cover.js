import { motion } from "framer-motion";

function Cover() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-blue-400 via-white to-blue-300 px-6 py-12 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-notoserif font-bold text-center text-blue-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl"
        >
          Welcome! Explore my work and passion for creating seamless front-end
          experiences.
        </motion.p>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-white rounded-lg bg-blue-600 hover:bg-blue-800 p-3 text-xl sm:text-2xl font-poppins mt-6 cursor-not-allowed"
      >
        Download CV
      </motion.button>
    </div>
  );
}

export default Cover;
