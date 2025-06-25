import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const rotatingTexts = [
  "KENNETH POPERA",
  "FROM THE PHILIPPINES",
  "FRONTEND DEVELOPER",
];

function Cover() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl">
      <div className="relative min-h-screen w-full bg-gray-50 overflow-hidden flex flex-col items-center justify-center text-center px-6 py-12">
        {/* Blurred Animated Background Blobs */}
        <motion.div
          initial={{ y: -100, opacity: 0.4 }}
          animate={{ y: 100 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute w-96 h-96 bg-red-500 rounded-full blur-sm opacity-75 top-0 left-1/4 z-0"
        />
        <motion.div
          initial={{ x: 100, opacity: 0.4 }}
          animate={{ x: -100 }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute w-40 h-40 bg-indigo-900 rounded-full blur-sm opacity-60 left-2 right-1/3 z-0"
        />
        <motion.div
          initial={{ x: 100, opacity: 0.4 }}
          animate={{ x: -100 }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute w-40 h-40 bg-green-400 rounded-full blur-sm opacity-60 right-5 z-0"
        />

        <motion.div
          initial={{ y: 100, opacity: 0.4 }}
          animate={{ y: -100 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 bg-indigo-400 rounded-full blur-sm opacity-60 bottom-5 right-1/3 z-0"
        />

        {/* Content */}
        <div className="z-10">
          <p className="text-md lg:text-3xl text-blue-500 mb-2 font-arial font-extrabold">
            HELLO I'M
          </p>
          <AnimatePresence mode="wait">
            <motion.p
              key={rotatingTexts[index]}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-xl font-extrabold text-blue-500 font-arial lg:text-7xl"
            >
              {rotatingTexts[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Cover;
