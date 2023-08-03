/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "kz-grey": "#1d1c1c",
      "kz-orange": "#c75305",
      "kz-white": "#ffffff",
      "kz-lt-grey": "#353535",
    },
    fontFamily: {
      body: ["Cal Sans"],
    },
    boxShadow: {
      "card-shadow":
        "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;",
    },
  },
  plugins: [],
};
