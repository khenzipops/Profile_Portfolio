"use client";
import { motion } from "framer-motion";

export default function WaveHand() {
  return (
    <motion.span
      style={{ display: "inline-block" }}
      animate={{ rotate: [0, 20, -20, 20, 0] }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      👋
    </motion.span>
  );
}
