/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeout: {
          from: {
            opacity:0
          },
          to : {
            opacity:1
          }
        },
        stretchRight: {
          from: {
            width:0
          },
          to: {
            width:"100%"
          }
        }
      },
      animation: {
        fadeout : "fadeout 300ms ease-in-out",
        stretchRight: "stretchRight 600ms ease-in-out"
      }
    },
  },
  plugins: [],
}

