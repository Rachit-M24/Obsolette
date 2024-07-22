/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "h-md": { raw: "(min-height:800px)" },
      },
      fontFamily: {
        DancingScript: ["Dancing Script", "cursive"], // Add Google Font here
      },
    },
  },
  plugins: [],
};
