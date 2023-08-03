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
        secondary_highlight: "#58acf5",
      },
      fontFamily: {
        body: ["Cal Sans", "sans-serif"],
        info: ["Montserrat", "sans-serif"],
        handwriting: ["Nanum Pen Script", "cursive"],
      },
      backgroundImage: {
        "header-img":
          "linear-gradient(263deg, rgba(255,125,107,1) 10%, rgba(255,100,78,1) 50%)",
      },
    },
  },
  plugins: [],
};
