const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        myTheme: " #274B4F",
        gray: colors.blueGray,
        white: colors.white,
        pink: colors.pink,
        beige: colors.beige,
        black: colors.black,
        teal: colors.teal,
        orange: colors.orange,
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["Montserrat", "serif"],
        sch: ["Scheherazade New", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      extend: {
        textColor: ["visited"],
      },
    },
  },
  plugins: [],
};
