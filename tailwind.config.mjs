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
        shake: "shake 0.5s ease-in-out infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
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
