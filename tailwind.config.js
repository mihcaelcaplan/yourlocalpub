/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        pubinfo: '#3d85c6',
        pubmain: '#F3ECE4',
        pubred: '#cc0000',
        pubblue: '#3d85c6',
        pubyellow: '#f1c232',
        pubgreen: '#93c47d'
      }
    },
  },
  plugins: [],
}
