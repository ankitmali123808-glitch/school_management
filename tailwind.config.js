/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#38aaf6',
          500: '#0e8ee9',
          600: '#0270c7',
          700: '#0359a1',
          800: '#074b84',
          900: '#0c3f6e',
          950: '#082849',
        },
        navy: {
          800: '#111b33',
          900: '#160b20ff',
          950: '#060a14',
        },
        emerald: {
          500: '#10b981',
          600: '#059669',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'premium': '0 20px 40px -15px rgba(2, 112, 199, 0.15)',
      }
    },
  },
  plugins: [],
}
