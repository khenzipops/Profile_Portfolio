/** @type {import('tailwindcss').Config} */

import { Poppins } from "next/font/google";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: "#bfdbfe",
        foreground: "var(--foreground)",
        fontFamily: {
          customStack: [
            "Arial",
            "Helvetica",
            "sans-serif",
            "Beau Rivage",
            "cursive",
          ],
        },
      },
    },
  },
  plugins: [],
};
