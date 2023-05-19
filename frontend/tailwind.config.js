/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fff159',
        'secondary': '#f7f7f7',
        'blue': '#319DFF',
        'grey': '#EEF0F4',
        'darkBlue': '#132DD8',
        'skyBlue': '#E0F0FF',
        'green': '#00751B'
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}