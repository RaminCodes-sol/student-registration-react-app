/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        's': '520px'
      }
    },
    fontFamily: {
      Space_Grotesk: ['Space Grotesk', 'sans-serif'],
      anton: ['Anton', 'sans-serif']
    }
  },
  plugins: [],
}

