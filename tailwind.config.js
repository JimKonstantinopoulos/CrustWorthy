/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      x_small: "450px",
      small: "580px",
      tablet: "640px",
      tablet_w: "768px",
      laptop: "1024px",
      desktop: "1280px",
      desktop_w: "1536px",
    },
    extend: {
      fontFamily: {
        roboto: "Roboto Mono, monospace",
      },
      height: {
        svh: "100svh",
      },
    },
  },
  plugins: [],
};
