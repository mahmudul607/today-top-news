/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Your custom font families here
        poppins: ['Poppins', 'sans-serif' ],
      },
    },
  },
  plugins: [require("daisyui")],
}

