/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   Poppins: ["Poppins", "sans-serif"],
      //   Manrope: ["Manrope", "sans-serif"],
      // },
      backgroundImage: {
        navbar: "url('/src/assets/background-gradiant.png')", // Ensure this path is correct.
      },
    },
  },
  plugins: [require("daisyui")],
};
