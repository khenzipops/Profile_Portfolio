"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useHydrated, useInViewWithHydration } from "@/hooks/useinView";

export default function ContactText() {
  const ref = useRef(null);
  const inView = useInViewWithHydration(ref, { once: false });
  const controls = useAnimation();
  const isHydrated = useHydrated();

  useEffect(() => {
    if (isHydrated && inView) {
      controls.start({ opacity: 1, y: 0 });
    } else if (isHydrated) {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls, isHydrated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: isHydrated ? 0 : 1, y: isHydrated ? 40 : 0 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className=""
    >
      <h2 className="text-4xl flex justify-center m-5">
        Let's talk about your project
      </h2>
      <p className="p-4 m-4 flex justify-center text-base text-center">
        This is your gateway to connect with me directly. Whether you have
        inquiries, feedback, or simply want to say hello.
      </p>
    </motion.div>
  );
}
