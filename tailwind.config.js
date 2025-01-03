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
      },
      animation: {
        'zoom-in': 'zoomIn 0.3s ease-out', // Smooth zoom-in animation
        'fade-in': 'fadeIn 0.3s ease-out', // Fade-in animation
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(1.05)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'image-hover': '0 4px 20px rgba(0, 0, 0, 0.1), 0 8px 30px rgba(0, 0, 0, 0.2)',
        'image-hover-lg': '0 10px 40px rgba(0, 0, 0, 0.15), 0 15px 50px rgba(0, 0, 0, 0.25)',
        'text-hover': '0px 5px 15px rgba(0, 0, 0, 0.3), 0px 10px 25px rgba(0, 0, 0, 0.2)',
      },
      textShadow: {
        'neon': '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 0.8)',
        'soft': '0 2px 5px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
