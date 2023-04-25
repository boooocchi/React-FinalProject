/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    theme: {
      screens: {
        mobile: "480px"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
};
