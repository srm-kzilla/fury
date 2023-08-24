/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kz: {
          black: "#111111",
          grey: "#202020",
          orange: "#ff644e",
          red: "#C51605",
          green: "#7A9D54",
        },
      },
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
