/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'serif'],
        'Inter': ['Inter', 'serif'],
        'Paprika': ['Paprika', 'serif'],
        'openSans': ['Open Sans', 'serif'],
      }
    },
  },
  plugins: [],
}
