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
        primary: "#FFD700",
        bgPrimary: "#22272E",
        bgSecondary: "#181C22",
        success: "#3BCD52",
        error: "#E53E3E",
      },
    },
  },
  plugins: [],
};
export default config;
