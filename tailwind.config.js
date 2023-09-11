/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        primary: "0 0 2px 1px theme(colors.sky.300)"
      }
    },
  },
  plugins: [],
}

