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
        myTheme: " #115E59",
        gray: colors.blueGray,
        white: colors.white,
        pink: colors.pink,
        beige: colors.beige,
        black: colors.black,
        teal: colors.teal,
        orange: colors.orange,
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
    },
  },
  variants: {
    extend: {},
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
