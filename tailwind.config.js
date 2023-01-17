/** @type {import("tailwindcss").Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IranSans: [
          "IRANSans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      height: {
        headerNormal: "56px",
      },
      colors: {
        primary: "#FF5500",
        error: "#ff4d4f",
        textColor: "#2C3036",
        textColorLight: "#8D8D8D",
        iconColor: "#575F6B",
      },
      spacing: {
        screenSpace: "19px",
      },
    },
  },
  plugins: [],
};
