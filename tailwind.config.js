/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myred: {
          DEFAULT: "#fe0000",
        },
        mygray: {
          DEFAULT: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
