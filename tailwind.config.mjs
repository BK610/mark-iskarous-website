/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["'Open Sans Variable'", "sans-serif"],
      serif: ["'Newsreader Variable'", "serif"],
      mono: ["courier", "mono"],
      display: ["'Montserrat Variable'", "'Aleo Variable'"],
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
