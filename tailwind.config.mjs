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
      scrollBehavior: ["smooth"], //enable smooth scroll

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
        textColor: "#2e5b97",
      },
    },
  },

  keyframes: {
    "tracking-in-expand-fwd": {
      "0%": {
        "letter-spacing": "-0.5em",
        opacity: "0",
      },
      "40%": {
        opacity: "0.6",
      },
      "100%": {
        "letter-spacing": "normal",
        opacity: "1",
      },
    },
  },
  animation: {
    "tracking-in-expand-fwd":
      "tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both",
  },
  plugins: [],
};
