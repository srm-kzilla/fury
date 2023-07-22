/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d1c1c",
        secondary: "#202020",
        highlight: "#ff644e",
      },
      fontFamily: {
        body: ["Cal sans", "sans-serif"],
        info: ["Montserrat", "sans-serif"],
        handwriting: ["Nanum Pen Script", "cursive"],
      },
    },
  },
  plugins: [],
};
