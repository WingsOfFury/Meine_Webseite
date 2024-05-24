/** @type {import('tailwindcss').Config} */
module.exports = {
  // Mit content wird Tailwind mitgeteilt, welche Dateien nach CSS-Klassen durchsucht werden sollen.
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // Mit darkMode wird Tailwind mitgeteilt, dass es eine Klasse für den Dark Mode generieren soll.
  darkMode: "class",
  // Mit theme.extent kann das Standard-Theme von Tailwind erweitert werden. z.B. um eigene Farben. Tailwind generiert dann automatisch alle passenden Klassen (z.B. text-light, bg-light, border-light usw...).
  theme: {
    extend: {
      keyframes: {
        jump: {
          from: {
            transform: "translateY(5px)",
          },
          to: {
            transform: "translateY(-5px)",
          },
        },
        fadeInSlideLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInSlideRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInSlideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        jump: "jump 4s alternate infinite",
        fadeInSlideLeft: "fadeInSlideLeft 1.5s ease-out",
        fadeInSlideRight: "fadeInSlideRight 1.5s ease-out",
        fadeInSlideUp: "fadeInSlideUp 3.5s ease-out",
      },

      colors: {
        light: "#f5f5f5",
        dark: "#1b1b1b",
      },
    },
  },
  // Mit plugins können weitere Plugins für Tailwind aktiviert werden.
  plugins: [],
};
