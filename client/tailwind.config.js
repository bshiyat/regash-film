/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'film': {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          900: '#0a0a0f',
          950: '#05050a',
        },
        'gold': {
          400: '#ffd666',
          500: '#ffc107',
          600: '#ffb300',
        },
        'accent': {
          500: '#ff6b35',
          600: '#ff5722',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
