/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: "1920px",
    },
    extend: {
      colors: {
        mainBg: "#F1EFEF",
        red: "#DC0012",
        black: "#414445",
        grey: "#D1CFCF",
      },
    },
  },
  plugins: [],
};
