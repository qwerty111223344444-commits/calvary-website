/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,tsx,md,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
      },
      // опционально: явно задать max-width на брейкпоинтах
      //screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1440px' },
    },
    extend: {
      colors: {
        pine: { 900: '#0E2E23', 800: '#144B39' },
        emerald: { 500: '#1B8A5A' },
        mint: { 300: '#6EC6A8' },
        sand: { 50: '#E9E5DA' },
        accent: { gold: '#F2C94C' },
      },
      boxShadow: { soft: '0 4px 20px rgba(0,0,0,0.12)' },
      borderRadius: { xl: '1rem' },
    },
  },
  plugins: [],
};