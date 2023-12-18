/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#141414",
        gray: "#1A1A1A",
        "light-gray": "#262626",
        purple: "#703BF7",
      },
      backgroundImage: {
        "topper-img": "url('/src/assets/img/topper-bg.svg')",
        "journey-img": "url('/src/assets/img/journey-bg.svg')",
      },
    },
  },
};
