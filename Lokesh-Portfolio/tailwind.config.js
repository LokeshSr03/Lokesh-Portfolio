const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-down": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "fade-in-left": "fade-in-left 1s ease-in-out",
        "fade-in-right": "fade-in-right 1s ease-in-out",
        "slide-in-down": "slide-in-down 1s ease-in-out",
      },
      colors: {
        "header-black": "#2C2D31",
        "header-text": "#D9D9D9",
      },
      boxShadow: {
        "high-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        "skill-shadow": "rgba(23, 92, 230, 0.15) 0px 4px 24px;",
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

        mdm: { min: "640px", max: "960px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
});
