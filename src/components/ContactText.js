
"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useHydrated, useInViewWithHydration } from "@/hooks/useinView";
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

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
      className="max-w-4xl mx-auto bg-white p-8 md:p-12 border border-blue-400 shadow-xl rounded-md hover:border-black "
    >
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between md:items-end pb-5 mb-10 border-b-2 border-blue-400">
        <div className="name-title">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Kenneth G. Popera
          </h1>
          <p className="text-base md:text-lg font-normal text-gray-600 mt-2">
           Frontend Developer
          </p>
        </div>
       
      </header>

      {/* Contact Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="contact-group">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Contact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
              <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors">
                kpopera123@gmail.com
              </a>
            </li>
            <li className="flex items-center text-gray-700">
              <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
              <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                (+63) 935-856-7116
              </a>
            </li>
            <li className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
              <span>Cagayan de Oro City, 9000 Philippines</span>
            </li>
          </ul>
        </div>
        <div className="contact-group">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Connect
          </h3>
          <ul className="space-y-3">
      
            <li className="flex items-center text-gray-700">
              <svg className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <a href="https://www.linkedin.com/in/kenneth-popera-0a020616a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}