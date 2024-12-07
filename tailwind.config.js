/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class', // এখানে class সেট করুন

  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
