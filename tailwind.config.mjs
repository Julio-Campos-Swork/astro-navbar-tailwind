/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mountain: {
          50: '#edfcf4',
          100: '#d3f8e2',
          200: '#aceecb',
          300: '#75e0af',
          400: '#34bc81',
          500: '#1aaf74',
          600: '#0e8d5d',
          700: '#0b714d',
          800: '#0b5a3f',
          900: '#0a4a35',
          950: '#05291f',
        },
      },
    },
  },
  plugins: [],
}
