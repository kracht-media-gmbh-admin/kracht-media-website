import type { Config } from "tailwindcss";

/**
 * Kracht Media 2025 Brand Guidelines – Theme Reference
 * Use these tokens in UI. Source of truth for colors/typography.
 * AI: Check this file and lib/metadata.ts before generating new UI.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "kracht-gruen": "#1C3628",
        "baby-powder": "#FFFEFA",
        "orange-web": "#FF9F1C",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      lineHeight: {
        headline: "1.1",
        body: "1.6",
      },
      borderRadius: {
        "card": "1.5rem",
        "card-inner": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
