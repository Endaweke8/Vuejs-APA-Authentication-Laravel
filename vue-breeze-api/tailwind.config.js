/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lora:"'Lora',serif",
        dancing:"'Dancing Script', cursive",
        arif:"'Tangerine', cursive",
      }
    },
  },
  plugins: [

  ],
}

