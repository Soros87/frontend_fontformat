import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
