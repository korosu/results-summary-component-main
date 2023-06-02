/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Light_red: "hsl(0, 100%, 67%)",
        Orangey_yellow: "hsl(39, 100%, 56%)",
        Green_teal: "hsl(166, 100%, 37%)",
        Cobalt_blue: "hsl(234, 85%, 45%)",
        vio1: "hsl(252, 100%, 67%)",
        vio2: "hsl(241, 81%, 54%)",
        circle1: "hsla(256, 72%, 46%, 1)",
        circle2: "hsla(241, 72%, 46%, 0)",
      },
    },
  },
  plugins: [],
};
