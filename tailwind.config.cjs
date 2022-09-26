/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        tiny: ["16px", "15.3px"],
        base: ["20px", "19px"],
        lx: ["28px", "26.77px"],
        l: ["36px", "34px"],
        xl: ["40px", "38px"],
        xxl: ["48px", "46px"],
      },
    },
  },
  plugins: [],
};
