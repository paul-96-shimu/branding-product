/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"], // Default font
        satoshi: ["Satoshi", "sans-serif"], // Heading font
      },
    },
  },
  plugins: [],
};
