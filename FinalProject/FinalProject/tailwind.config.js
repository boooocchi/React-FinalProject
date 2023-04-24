/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ['"Exo 2"', "sans-serif"],
      main: ["Oswald", "sans-serif"]
    },
    colors: {
      blueblack: "rgb(49, 53, 57)",
      primary: "rgb(26, 172, 94)",
      accent: "rgb(260, 240, 60)",
      slategray: "rgb(133, 141, 149)"
    },

    extend: {
      colors: {
        blueblack: "rgb(49, 53, 57)",
        primary: "rgb(26, 172, 94)"
      }
    }
  },
  plugins: []
};
