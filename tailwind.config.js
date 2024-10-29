/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#1e1e1f",
        gray: "#383838",
        buttoncol: "#2b2b2c",
        lightGray: "hsla(0, 0%, 84%, 0.7)",
      },
    },
  },
  plugins: [],
};
