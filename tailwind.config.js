/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      tablet_w: "768px",
      laptop: "1024px",
      desktop: "1280px",
      desktop_w: "1536px",
    },
    extend: {},
  },
  plugins: [],
};
