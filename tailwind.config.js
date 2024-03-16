/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-orange': '#FF8057',
      },
      colors: {
        'custom-orange': '#FF8057',
        'text-color2': '#3B404A',
        'text-color3': '#4E4E4E',
      }
    },
    fontFamily:{
      poppins: ["Poppins"]
    }
  },
  plugins: [],
}

