import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {},
    colors: {
      decomsGray: {
        400: "#b5b5b5",
        500: "#4c494b",
      },
      decomsWhite: "#fbfbfb",
      decomsPink: "#c7a4a5",
      decomsRed: "#cb2228",
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
