/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-25%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      colors: {
        "icf-black": "#080808",
        "icf-gray": "#EBEBEB",
        "icf-blue": "#0172BB",
      },
    },
  },
  plugins: [],
}
