import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#638500",
        "olive-deep": "#3d5300",
        "olive-soft": "#dbe5b4",
        "olive-faint": "#f4f6e6",
        cream: "#f5efe1",
        "cream-deep": "#ece4d0",
        ink: "#1a1c14",
        "ink-2": "#4a4d40",
        "ink-3": "#7a7d6f",
        line: "#1a1c1414",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
      },
      screens: {
        "max-520": { max: "520px" },
        "max-720": { max: "720px" },
        "max-820": { max: "820px" },
        "max-920": { max: "920px" },
      },
    },
  },
  plugins: [],
};

export default config;
