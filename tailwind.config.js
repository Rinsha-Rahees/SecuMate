/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
   extend: {
      fontFamily: {
        nunito: "Nunito-Regular",
        "nunito-bold": "Nunito-Bold",
        "nunito-extrabold": "Nunito-ExtraBold",
        "nunito-medium": "Nunito-Medium",
        "nunito-semibold": "Nunito-SemiBold",
        "nunito-light": "Nunito-Light",
      },
      colors: {
        primary: {
          100: "#FFFFFF",
          300: "#5C488E",
        },
        accent: {
          50: "#d7a2d6",
          100: "#C13DAC",
          200: "#9a84b4",
          300: "#5C488E",
        },
        stroke: {
          300: "#E5E7EB",
        },
        black: {
          100: "#202020",
          300: "#111111",
        },
      },
    },
  },
  plugins: [],
}