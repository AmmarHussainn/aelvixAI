/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        telegraf: ["Telegraf", "sans-serif"],
        telegraflight: ["Telegraf-light", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(152.63deg, #2775EA 14.86%, #77DCBC 97.16%)',
      }
    },
  },
  plugins: [],
}