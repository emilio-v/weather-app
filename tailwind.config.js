/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      oxfordBlue: {
        300: "#4a4695",
        600: "#2c2b41",
      },
      indigo: {
        600: "#4f46e5",
      },
      gray: {
        300: "#eee5e9",
      },
    },
    extend: {},
  },
  plugins: [],
};
