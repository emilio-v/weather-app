/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      oxfordBlue: "#2c2b41",
      indigo: {
        600: "#4f46e5",
      },
    },
    extend: {},
  },
  plugins: [],
};
