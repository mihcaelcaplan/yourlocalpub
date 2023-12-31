/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        cartItem: "1fr 2fr 1fr 1fr",
        brick1: 'repeat(5, minmax(0, 20%))',
        brick2: "13.4%  13.3% repeat(3, minmax(0, 20%)) 13.3%",
        brick3: "repeat(6, minmax(0, 20%))",
        brick4: "13.4% 20% 26.6% 26.6% 13.45%",
        brick5: "20% 26.6% 26.6% 26.8%",

      },
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
