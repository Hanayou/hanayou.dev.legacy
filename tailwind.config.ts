import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        textPrimary: 'var(--color-text-primary)',
        bgPrimary: 'hsl(var(--color-bg-primary))',
        bgHighlight: 'var(--color-bg-highlight)',
        error: 'var(--color-error)',
        success: 'var(--color-success)',
        buttonFillPrimary: 'var(--color-button-primary-fill)',
        buttonStrokePrimary: 'var(--color-button-primary-stroke)',
        buttonFillSecondary: 'var(--color-button-secondary-fill)',
        buttonStrokeSecondary: 'var(--color-button-secondary-stroke)',
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
      },
    },
  },
  plugins: [],
};
export default config;
