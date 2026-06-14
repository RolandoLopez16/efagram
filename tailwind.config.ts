import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const heroUiPlugin = heroui({
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: "#175c2d",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#a77b4f",
          foreground: "#ffffff",
        },
      },
    },
  },
}) as unknown as NonNullable<Config["plugins"]>[number];

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef7ef",
          100: "#d7ead9",
          500: "#2f7d45",
          700: "#175c2d",
          900: "#0e3b22",
        },
        earth: "#a77b4f",
        cream: "#f7f4ec",
      },
      fontFamily: {
        alegreya: ["var(--font-alegreya)", "serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(14, 59, 34, 0.14)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroUiPlugin],
};

export default config;
