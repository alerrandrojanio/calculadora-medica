/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lac: {
          white: "#FFFFFF",
          blue: {
            dark: "#023047",
            medium: "#219ebc",
            light: "#8ecae6",
          },
        },
      },
    },
  },
  plugins: [],
}
