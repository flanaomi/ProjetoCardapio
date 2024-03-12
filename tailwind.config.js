/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "sans": ['Truculenta', 'sans-serif']
      },
      backgroundImage: {
        home: "url('/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
