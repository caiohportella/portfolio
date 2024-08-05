/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      userSelect: {
        none: 'none',
      }
    },
  },
  variants: {
    extend: {
      userSelect: ['responsive'],
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
