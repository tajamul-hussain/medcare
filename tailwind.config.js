/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2196F3", // Primary blue
        "light-blue": "#64B5F6", // Secondary blue
        teal: "#009688", // Medical teal
        "sage-green": "#4CAF50", // Healing green
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        yellow: "#FFB74D", // Warm accent
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #2196F3 7.21%, #009688 45.05%, #4CAF50 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #2196F3 14.53%, #009688 69.36%, #4CAF50 117.73%)",
        "gradient-healthcare":
          "linear-gradient(90deg, #2196F3, #009688, #4CAF50)",
        "gradient-cloudCity":
          "linear-gradient(90deg, #3A6A59 ,    #A7A88A , #3A6A59, #A7A88A)",
      }),
      content: {
        brush: "url('./assets/brush.png)",
        person1: "url('./assets/person-1.png)",
        person2: "url('./assets/person-2.png)",
        person3: "url('./assets/person-3.png)",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      xl: "1320px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
