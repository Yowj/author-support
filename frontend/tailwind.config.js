/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#526D82", // You can name it anything you like
        customGreener: "#9DB2BF",
        customHeader: "#27374D",
      },
    },
  },
  plugins: [],
};
