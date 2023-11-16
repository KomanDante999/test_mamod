/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "Arial", "sans-serif"],
      },
      colors: {
        borderInput: "#E6E6EB",
        textInput: "#9292A0",
        textError: "#dc2626",
        checkbox: "#3586FF",
        textExplanation: "#696977",
        links: "#3586FF",
        btnPrim: "#497ADA",
        btnPrim200: "#497ADA33",
        btnPrim300: "#497ADA4d",
        btnPrim400: "#497ADA66",
        btnPrim500: "#497ADA80",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate classes
    }),
  ],
};
