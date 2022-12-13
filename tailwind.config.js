/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        fontPage: "Open Sans",
      },
      colors: {
        colorPage: "#f1f5f9",
        blueColor: "#0075ff",
        blueAltColor: "#0d69d5",
        orangeColor: "#f59e0b",
        greenColor: "#22c55e",
        redColor: "#f44336",
        grayColor: "#888",
      },
      boxShadow: {
        asideShadow: "0px 0px 10px #ddd",
        imgShadow: "0px 0px 5px #ddd",
      },
    },
  },
  plugins: [],
};
