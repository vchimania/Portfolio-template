/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#151030",
        secondary: "#F7A8A1",
        tertiary: "#6E140C",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "5px 5px rgba(235, 47, 30, 0.4), 10px 10px rgba(239, 82, 67, 0.3), 15px 15px rgba(242, 116, 105, 0.2), 20px 20px rgba(245, 151, 142, 0.1), 25px 25px rgba(248, 186, 180, 0.05);",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
