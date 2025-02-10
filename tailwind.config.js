/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1600px',
      },
      fontFamily: {
        'dm': ["DM Sans"],
      },
      colors: {
        'primary': '#767676',
        'secondary': '#262626',
        'third': '#F5F5F3',
      },
   
    },
  },
  plugins: [],
}