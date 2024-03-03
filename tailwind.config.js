/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ['CustomFont1', 'Koulen'],
        custom2: ['CustomFont2', 'Lexend'],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      backgroundImage: {
        'home-bg': "url('/assets/homebg.png')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
