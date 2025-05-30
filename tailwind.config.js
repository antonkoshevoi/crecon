/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      colors: {
          accent: "#0c40ff",
          gray: {
            900: 'rgb(24, 24, 27)',
            800: 'rgb(63, 63, 70)',
          },
      },
      borderRadius: {
        '2xl': '20px',
      },
    extend: {},
  },
  plugins: [],
};
