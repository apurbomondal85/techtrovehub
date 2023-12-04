/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F79F1F",
        secondary : "#1B1464",
        dark: "#2C3A47"
      }
    },
  },
  plugins: [],
}

