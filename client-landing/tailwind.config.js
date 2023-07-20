/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        recruitments: {
          bg: "#1d1c1c",
          orange: "#ff644e",
          footerbg: "#202020",
        },
      },
      fontFamily: {
        handwriting: ["Nanum Pen Script", "cursive"],
      },
    },
  },
  plugins: [],
};
