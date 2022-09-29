/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b3ffb2",

          "secondary": "#3c619b",

          "accent": "#f4e0a4",

          "neutral": "#291F2E",

          "base-100": "#FCFDFD",

          "info": "#98CAF6",

          "success": "#27E777",

          "warning": "#EBC519",

          "error": "#E8696D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}