import { motion } from "framer-motion";
import { useHydrated } from "@/hooks/useinView";

export default function Cover() {
  const isHydrated = useHydrated();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: isHydrated ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center, var(--tw-gradient-stops))]">
          <div className="from-transparent via-gray-200/20 to-transparent h-full w-full animate-pulse"></div>
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ y: isHydrated ? 20 : 0, opacity: isHydrated ? 0 : 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
          Kenneth G. Popera
        </h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: isHydrated ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting elegant frontend solutions for modern web challenges.
        </motion.p>

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
      className="bg-white border border-gray-200 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/30"
      whileHover={isHydrated ? { y: -5 } : {}}
    >
      <div className="text-3xl mb-4 text-gray-800">{icon}</div>
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
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
          className="absolute bg-gray-300/30 rounded-full"
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
