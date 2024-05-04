import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-custom": "#F9D49E",
        "gray-custom": "#25252D",
        "blue-custom": "#17171F",
      },
    },
  },
  plugins: [],
};
export default config;
