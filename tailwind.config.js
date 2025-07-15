/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Koyu mod toggle için
  theme: {
    extend: {
      colors: {
        primary: "#6f42c1",
        secondary: "#a78bfa",
        accent: "#3b82f6",
        backgroundDark: "#0f172a",
        backgroundLight: "#f9fafb",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        mono: ["Fira Mono", "monospace"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(15px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};
