import { Poppins } from "next/font/google";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        customR: "100px",
      },
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
      colors: {
        customBg: "#884a39",
        brownBg: "#c38154",
        orange: "#ff7043",
        teal: "#FAFAFA",
        orangeDp: "#F4511E",
      },
    },
  },
  plugins: [],
};
