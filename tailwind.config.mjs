/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["'Inter Variable'", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
