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
          red: "#ec6d5e",
          green: "#6dd3a8",
          yellow: "#f9d56e",
        },
      },
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
