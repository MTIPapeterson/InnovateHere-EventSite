/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "blue-black": "#0c0c0c",
        "blue-highlight": "#0978FF",
        "dark-blue": "#363759",
        "transparent-blue-10": "rgba(57, 53, 187, 0.1)",
        "transparent-blue-25": "rgba(57, 53, 187, 0.25)",
        "bright-purple": "#c9c4ff"
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

