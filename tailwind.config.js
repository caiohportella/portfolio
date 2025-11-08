/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
    require("tailwind-scrollbar")({
      nocompatible: true,
    }),
  ],
}
