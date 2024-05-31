const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-black": "#2C2D31",
        "header-text": "#D9D9D9",
      },
      boxShadow: {
        "high-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      },
    },
  },
  plugins: [],
});
