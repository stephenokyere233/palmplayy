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
      },
      animation: {
        loading: "loading 2s infinite",
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwind-scrollbar-hide"),
  ],
};
