import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      display: ["var(--fs-display)", { lineHeight: "var(--lh-display)" }],
      h1: ["var(--fs-h1)", { lineHeight: "var(--lh-h1)" }],
      h2: ["var(--fs-h2)", { lineHeight: "var(--lh-h2)" }],
      h3: ["var(--fs-h3)", { lineHeight: "var(--lh-h3)" }],
      h4: ["var(--fs-h4)", { lineHeight: "var(--lh-h4)" }],
      h5: ["var(--fs-h5)", { lineHeight: "var(--lh-h5)" }],
      h6: ["var(--fs-h6)", { lineHeight: "var(--lh-h6)" }],
      "large-base": [
        "var(--fs-base-large)",
        { lineHeight: "var(--lh-base-large)" },
      ],
      base: ["var(--fs-base)", { lineHeight: "var(--lh-base)" }],
      footer: ["var(--fs-footer)", { lineHeight: "var(--lh-footer)" }],
    },
    colors: {
      "grey-50": "var(--grey-50)",
      "peach-50": "var(--peach-50)",
      "sage-50": "var(--sage-50)",
      "winter-50": "var(--winter-50)",

      "black-50": "var(--black-50)",
      "black-75": "var(--black-75)",
      "black-100": "var(--black-100)",
      "black-125": "var(--black-125)",
      "black-150": "var(--black-150)",

      "white-50": "var(--white-50)",
      "white-100": "var(--white-100)",
      "white-125": "var(--white-125)",
      "white-150": "var(--white-150)",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
