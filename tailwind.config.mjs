/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    borderRadius: {
      none: "0",
      sm: "5px",
      DEFAULT: "10px",
      md: "15px",
      lg: "20px",
      full: "50%",
    },
    boxShadow: {
      none: "none",
      base: "0px 0px 4px rgba(0, 0, 29, 0.1)",
      low: "0px 3px 14px rgba(0, 0, 29, 0.12)",
      middle: "0px 8px 30px rgba(0, 0, 29, 0.17)",
      high: "0px 16px 80px 2px rgba(0, 0, 29, 0.22)",
    },
    colors: {
      transparent: "transparent",
      yellow: {
        300: "rgb(var(--color-yellow-300) / <alpha-value>)",
        500: "rgb(var(--color-yellow-500) / <alpha-value>)",
        700: "rgb(var(--color-yellow-700) / <alpha-value>)",
      },
      green: {
        300: "rgb(var(--color-green-300) / <alpha-value>)",
        500: "rgb(var(--color-green-500) / <alpha-value>)",
        700: "rgb(var(--color-green-700) / <alpha-value>)",
      },
      orange: {
        300: "rgb(var(--color-orange-300) / <alpha-value>)",
        500: "rgb(var(--color-orange-500) / <alpha-value>)",
        700: "rgb(var(--color-orange-700) / <alpha-value>)",
      },
      red: {
        300: "rgb(var(--color-red-300) / <alpha-value>)",
        500: "rgb(var(--color-red-500) / <alpha-value>)",
        700: "rgb(var(--color-red-700) / <alpha-value>)",
      },
      blue: {
        300: "rgb(var(--color-blue-300) / <alpha-value>)",
        500: "rgb(var(--color-blue-500) / <alpha-value>)",
        700: "rgb(var(--color-blue-700) / <alpha-value>)",
      },
      magenta: {
        300: "rgb(var(--color-magenta-300) / <alpha-value>)",
        500: "rgb(var(--color-magenta-500) / <alpha-value>)",
        700: "rgb(var(--color-magenta-700) / <alpha-value>)",
      },
      indigo: {
        300: "rgb(var(--color-indigo-300) / <alpha-value>)",
        500: "rgb(var(--color-indigo-500) / <alpha-value>)",
        700: "rgb(var(--color-indigo-700) / <alpha-value>)",
      },
      gray: {
        0: "rgb(var(--color-gray-0) / <alpha-value>)",
        100: "rgb(var(--color-gray-100) / <alpha-value>)",
        200: "rgb(var(--color-gray-200) / <alpha-value>)",
        300: "rgb(var(--color-gray-300) / <alpha-value>)",
        400: "rgb(var(--color-gray-400) / <alpha-value>)",
        500: "rgb(var(--color-gray-500) / <alpha-value>)",
        600: "rgb(var(--color-gray-600) / <alpha-value>)",
        700: "rgb(var(--color-gray-700) / <alpha-value>)",
        800: "rgb(var(--color-gray-800) / <alpha-value>)",
        900: "rgb(var(--color-gray-900) / <alpha-value>)",
        1000: "rgb(var(--color-gray-1000) / <alpha-value>)",
      },
    },
    fontSize: {
      xxs: ["10px", { lineHeight: "12px" }],
      xs: ["12px", { lineHeight: "16px" }],
      sm: ["14px", { lineHeight: "20px" }],
      DEFAULT: ["16px", { lineHeight: "20px" }],
      md: ["18px", { lineHeight: "24px" }],
      lg: ["20px", { lineHeight: "28px" }],
      xl: ["24px", { lineHeight: "36px" }],
      "2xl": ["32px", { lineHeight: "46px" }],
      "3xl": ["40px", { lineHeight: "54px" }],
      "4xl": ["48px", { lineHeight: "64px" }],
    },
    fontFamily: {
      DEFAULT: "var(--font-inter)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "0",
      },
    },
    extend: {
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(30deg, rgb(var(--color-yellow-500)) 40%, rgb(var(--color-orange-500)))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#ffd54f",
          info: "#2196f3",
          success: "#4caf50",
          warning: "#ff9800",
          error: "#f44336",
        },
      },
    ],
  },
};
