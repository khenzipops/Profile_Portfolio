"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function ContactText() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className=""
    >
      <h2 className="text-4xl flex justify-center m-5">
        Let’s talk about your project
      </h2>
      <p className="p-4 m-4 flex justify-center text-base text-center">
        This is your gateway to connect with me directly. Whether you have
        inquiries, feedback, or simply want to say hello.
      </p>
    </motion.div>
  );
}
