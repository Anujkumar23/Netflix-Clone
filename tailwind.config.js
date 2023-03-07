/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: "hsl(0deg 0% 8%)"

      }
    },
  },
  plugins: [],
}