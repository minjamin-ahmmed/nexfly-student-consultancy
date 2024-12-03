/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
      },

      "bg-clip-Path": {
        bottom: ["polygon(0 0, 100% 0, 100% 90%, 0, 100%)"],
      },
    },
  },
  plugins: [require("daisyui")],
};
