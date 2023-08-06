/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          kz: {
            grey: "#1d1c1c",
            orange: "#c75305",
            "lt-grey": "#353535",
          },
        },
      },
      boxShadow: {
        "box-shadow": "0px 4px 12px rgba(186, 76, 3, 1)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
