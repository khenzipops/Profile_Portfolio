// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const rotatingTexts = [
//   "KENNETH POPERA",
//   "FROM PHILIPPINES",
//   "FRONTEND DEVELOPER",
// ];

// function Cover() {
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % rotatingTexts.length);
//     }, 4000); // Change every 2 seconds

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl">
//       <div className="relative min-h-screen w-full bg-gray-50 overflow-hidden flex flex-col items-center justify-center text-center px-6 py-12">
//         {/* Blurred Animated Background Blobs */}
//         <motion.div
//           initial={{ y: -100, opacity: 0.4 }}
//           animate={{ y: 100 }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//           className="absolute w-96 h-96 bg-red-500 rounded-full blur-sm opacity-75 top-0 left-1/4 z-0"
//         />
//         <motion.div
//           initial={{ x: 100, opacity: 0.4 }}
//           animate={{ x: -100 }}
//           transition={{
//             duration: 9,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//           className="absolute w-40 h-40 bg-indigo-900 rounded-full blur-sm opacity-60 left-2 right-1/3 z-0"
//         />
//         <motion.div
//           initial={{ x: 100, opacity: 0.4 }}
//           animate={{ x: -100 }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             repeatType: "mirror",
//             ease: "easeInOut",
//           }}
//           className="absolute w-40 h-40 bg-green-400 rounded-full blur-sm opacity-60 right-5 z-0"
//         />

//         <motion.div
//           initial={{ y: 100, opacity: 0.4 }}
//           animate={{ y: -100 }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             repeatType: "mirror",
//             ease: "easeInOut",
//           }}
//           className="absolute w-80 h-80 bg-indigo-400 rounded-full blur-sm opacity-60 bottom-5 right-1/3 z-0"
//         />

//         {/* Content */}
//         <div className="z-10">
//           <p className="text-md lg:text-3xl text-blue-500 mb-2 font-arial font-extrabold">
//             HELLO I'M
//           </p>
//           <AnimatePresence mode="wait">
//             <motion.p
//               key={rotatingTexts[index]}
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//               className="text-xl font-extrabold text-blue-500 font-arial lg:text-7xl"
//             >
//               {rotatingTexts[index]}
//             </motion.p>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cover;
// app/page.jsx
import { motion } from "framer-motion";
import { useHydrated } from "@/hooks/useinView";

export default function Cover() {
  const isHydrated = useHydrated();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-blue-700">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: isHydrated ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]">
          <div className="from-transparent via-blue-500/10 to-transparent h-full w-full animate-pulse"></div>
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ y: isHydrated ? 20 : 0, opacity: isHydrated ? 0 : 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Kenneth G. Popera
        </h1>
        <motion.p
          className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: isHydrated ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting elegant frontend solutions for modern web challenges.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          initial={{ opacity: isHydrated ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-200 hover:bg-blue-900/30 rounded-lg transition-colors duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: isHydrated ? 0 : 1, y: isHydrated ? 20 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <FeatureCard
            icon="✨"
            title="Elegant Design"
            description="Clean, minimal interface that puts your content first"
          />
          <FeatureCard
            icon="⚡"
            title="Lightning Fast"
            description="Optimized performance for a seamless user experience"
          />
          <FeatureCard
            icon="🔒"
            title="Secure & Reliable"
            description="Enterprise-grade security and 99.9% uptime guarantee"
          />
        </motion.div>
      </motion.div>

      {/* Animated Particles */}
      <ParticleBackground />
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  const isHydrated = useHydrated();

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
      whileHover={isHydrated ? { y: -5 } : {}}
    >
      <div className="text-3xl mb-4 text-blue-300">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-blue-200 text-sm">{description}</p>
    </motion.div>
  );
};

// Animated Particles Component (Fixed)
const ParticleBackground = () => {
  const isHydrated = useHydrated();

  // Generate particles on client side only
  const particles = isHydrated
    ? Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 10 + 5,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 10,
        xDistance: Math.random() * 100 - 50,
        yDistance: Math.random() * 100 - 50,
      }))
    : [];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            x: particle.xDistance,
            y: particle.yDistance,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
