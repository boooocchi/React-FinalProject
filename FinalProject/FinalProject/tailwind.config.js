module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ['"Exo 2"', "sans-serif"],
      main: ["Oswald", "sans-serif"]
    },

    extend: {
      colors: {
        blueblack: "rgb(49, 53, 57)",
        primary: "rgb(26, 172, 94)",
        accent: "rgb(260, 240, 60)",
        slategray: "rgb(133, 141, 149)"
      }
    },
    screens: {
      xs: "480px",

      sm: "640px",
      md: "768px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px"
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: []
};
