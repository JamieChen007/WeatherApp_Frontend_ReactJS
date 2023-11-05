/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alimama: ["AlimamaFangYuanTiVF-Square", "sans"],
      },
    },
  },
  mode: "jit",
  plugins: [],
};
