/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important:"#root",

  theme: {
    extend: {
      fontFamily: {
        nunito:"'Nunito', sans-serif",
        playfair:"'Playfair Display', serif"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(50px)' },
        }
      },
      
    },
   
  },
  plugins: [],
}
