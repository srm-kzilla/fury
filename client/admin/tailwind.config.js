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
          grey: "#1d1c1c",
          orange: "#c75305",
          white: "#ffffff",
          "lt-grey": "#353535",
          red: "#C51605",
          green: "#7A9D54",
        },
      },
      boxShadow: {
        "box-shadow": "0px 4px 12px rgba(186, 76, 3, 1)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "card-shadow":
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;",
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
