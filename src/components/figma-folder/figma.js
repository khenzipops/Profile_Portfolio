"use client";
import { motion } from "framer-motion";
export default function Figma() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-blue-400 font-poppins ml-2 font-bold w-full ">
          User Interface Design
        </h1>
      </motion.div>
    </div>
  );
}
