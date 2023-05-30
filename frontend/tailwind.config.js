/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fff159',
        'secondary': '#f7f7f7',
        'blue': '#4F83FF',
        'skyBlue': '#E0F0FF',
        'darkBlue': '#132DD8',
        'grey': '#EEF0F4',
        'darkGrey': '#3B4758',
        'green': '#00751B'
      },
      backgroundImage: {
        card: 'linear-gradient(89.59deg, #319DFF 2.75%, #686EFF 98.9%)'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}