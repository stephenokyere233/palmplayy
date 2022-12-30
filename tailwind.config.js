module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%, 100%": {
            height: "10px",
            background: " #ffd166",
          },

          "25%": {
            height: "90px",
            background: " #06d6a0",
          },

          "50%": {
            height: "40px",
            background: " #118ab2",
          },

          " 75%": {
            height: "90px",
            background: " #ef476f",
          },
        },
        slowFade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: "translateY(25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideDown: {
          from: { opacity: 0, transform: "translateY(-25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideLeft: {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideRight: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        wave: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
      animation: {
        loading: "loading 2s infinite",
        slideUp: "slideUp 500ms ease-in",
        slideDown: "slideDown 1s ease-in-out",
        slideLeft: "slideLeft 1s ease-in-out",
        slideRight: "slideRight 1s ease-in-out",
        wave: "wave 1.2s linear infinite",
        slowFade: "slowFade 2.2s ease-in-out",
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwind-scrollbar-hide"),
  ],
};
