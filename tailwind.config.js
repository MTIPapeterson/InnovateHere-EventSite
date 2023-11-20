/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "blue-black": "#0c0c0c",
        "blue-highlight": "#0978FF"
      },
      fontFamily: {
        'satoshi': ["Satoshi-Variable", "san-serif"],
        'satoshiItalic': ["Satoshi-VariableItalic", "san-serif"],
      },
      backgroundImage: {
        "cover-image": "url('/Users/xanderburger/mtip/EventSite/site/src/headline/assets/coverImage.webp')",
        "background-gradient": "url('/Users/xanderburger/mtip/EventSite/site/src/images/BackgroundGraident.png')"
      }
    },
  },
  plugins: [],
}

