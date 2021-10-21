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

        serif: ["Merriweather", "serif"],

        mont: ["Montserrat", "sans-serif"],
        sch: ["Scheherazade New", "serif"],
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
// const tailwindMobileConfig = require('tailwind-mobile/config');

// // wrap your config with tailwindMobileConfig
// module.exports = tailwindMobileConfig({
//   // JIT mode should be enabled
//   mode: 'jit',
//   // rest of your usual Tailwind CSS config here
//   ...
// });
