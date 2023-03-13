/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: "hsl(0deg 0% 8%)"

      },
      animation:{
        "slide-rtl":"slide-rtl 0.4s ease-in-out"
      },
      keyframes:{
        "slide-rtl":{
          from:{"margin-right":"-90%"},
          to:{"margin-right":"0%"}
        }
      }
    },
  },
  plugins: [ require('@tailwindcss/line-clamp')],
}