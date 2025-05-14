/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      animation: {
        combo:
          "gradientX 5s ease infinite, fadeIn 1.5s ease-out forwards, slideUp 1.5s ease-out forwards",
        logoEntry: "logoEntry 1.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        gradientX: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        logoEntry: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(1) rotate(0deg)",
          },
          "50%": {
            opacity: "1",
            transform: "translateY(0) scale(1.2) rotate(180deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1) rotate(360deg)",
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
