/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "job-grey-1": "#dadce0",
        "job-grey-2": "#f8f9fa",
        "job-grey-3": "#80868b",
        "job-blue-1": "#1967d2",
        "job-blue-2": "#007ACC",
        "job-shadow-blue": "#1261A0",
        "job-green-1": "#137333",
      },
    },
  },
  plugins: [],
};
