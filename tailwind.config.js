/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baskervile: ["Libre Baskerville", "serif"],
      },
      screens: {
        custom2XL: "1571px",
        customXXL: "1910px",
      },
    },
  },
  plugins: [],
};
