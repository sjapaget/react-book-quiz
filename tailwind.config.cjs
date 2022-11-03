/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      "colors": {
        "bgBeige": {
          "500": "#F5F7FB"
        },
        "btnBlue": {
          "500": "#4D5B9E"
        }
      }
    },
  },
  plugins: [],
}
