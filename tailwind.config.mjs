import { Anton, Poppins } from "next/font/google";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideInLeft: "slideInLeft 1s ease-out",
        slideUp: "slideUp 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(50%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },

      borderRadius: {
        customR: "100px",
      },
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
        mmd: ["Major Mono Display"],
        notoserif: ["Noto Serif"],
        anton: ["Anton"],
      },
      colors: {
        mainColor: "#A8C686",
        secondaryColor: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
