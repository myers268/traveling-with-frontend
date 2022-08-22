const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ["./index.html", "./app/**/*.{jsx,tsx,mdx}"],
  corePlugins: {
    borderColor: false,
  },
  theme: {
    // colors: {
    //   primary: "#ff5400",
    //   secondary: "#86c7f0",
    //   light: "#f3f3f3",
    //   dark: "#252525"
    // },
    // backgroundColor: ({theme}) => theme("colors"),
    // textColor: ({theme}) => theme("colors"),
    spacing: {
      "4xs": "var(--space-4xs)",
      "3xs": "var(--space-3xs)",
      "2xs": "var(--space-2xs)",
      "xs": "var(--space-xs)",
      "sm": "var(--space-sm)",
      "md": "var(--space-md)",
      "lg": "var(--space-lg)",
      "xl": "var(--space-xl)",
      "2xl": "var(--space-2xl)",
      "3xl": "var(--space-3xl)",
      "4xl": "var(--space-4xl)",
      "5xl": "var(--space-5xl)",
      "6xl": "var(--space-6xl)",
      "7xl": "var(--space-7xl)"
    },
    fontSize: {
      "xs": "var(--step--2)",
      "sm": "var(--step--1)",
      "base": "var(--step-0)",
      "md": "var(--step-1)",
      "lg": "var(--step-2)",
      "xl": "var(--step-3)",
      "2xl": "var(--step-4)",
      "3xl": "var(--step-5)"
    },
    gap: ({theme}) => theme("spacing"),
    inset: ({theme}) => ({
      0: "0",
      ...theme("spacing")
    }),
    margin: ({theme}) => ({
      auto: "auto",
      ...theme("spacing")
    }),
    scrollMargin: ({theme}) => ({
      ...theme("spacing")
    }),
    textColor: ({theme}) => theme("colors"),
    extend: {
      fontFamily: {
        "heading": ["made-dillan", "cooper-black-std", "serif"],
        "sans": ["manrope", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
