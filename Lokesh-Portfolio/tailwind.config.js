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
      screens: {
        "2xl": { min: "1441px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1440px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1150px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "960px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
});
