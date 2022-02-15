const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: "#778097",
      red: "#e11d48",
      blue: {
        light: "#EFF4FF",
        DEFAULT: "#2C3F6C",
        lighter: "#B3D7FF",
      },
      green: {
        DEFAULT: "#DCFCE7",
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Poppins"],
        body: ["Noto Sans"],
      },
      backgroundImage: {
        "hero-pattern": "url('./images/liquid-cheese.svg')",
        "about-image": "url('./images/sun-tornado.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
