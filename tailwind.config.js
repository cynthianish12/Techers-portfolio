import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        redBrick: {
          "100": "rgb(248, 77, 77)",
        },
        skyBlue: {
          DEFAULT: "rgb(6, 182, 212)",
          darkened: "rgb(3, 91, 106)" // Define the sky blue color with the desired RGB value
        },
      },
    },
  },
  plugins: [],
};

export default config;
