import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1C1C1E",
        steel: "#2B3A4A",
        slate: {
          50: "#F5F6F7",
          100: "#ECEEF0",
          200: "#D9DDE1",
          300: "#BCC3CA",
          400: "#8C97A1",
          500: "#646E78",
          600: "#4A535C",
          700: "#373E45",
        },
        ember: {
          DEFAULT: "#E8590C",
          dark: "#C44A08",
        },
        metal: "#9AA5AE",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", "var(--font-archivo)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "var(--font-noto-sans-tc)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
