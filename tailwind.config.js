/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        button: "hsl(234, 29%, 20%)",
        bgDesktop: "hsl(235, 18%, 26%)",
        bgMobile: "hsl(235, 0% , 12%)",
        gray: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        roboto: "'Roboto' , sans-serif",
      },
    },
  },
  plugins: [],
};
