import defaultTheme from "tailwindcss/defaultTheme";
import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./app/ts/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#00A76F",
          light: "#5BE49B",
          focus: "#007867",
        },
        secondary: {
          DEFAULT: "#8E33FF",
          light: "#C684FF",
          focus: "#5119B7",
        },
        info: {
          DEFAULT: "#00B8D9",
          light: "#61F3F3",
          focus: "#006C9C",
        },
        success: {
          DEFAULT: "#22C55E",
          light: "#77ED8B",
          focus: "#118D57",
        },
        warning: {
          DEFAULT: "#FFAB00",
          light: "#FFD666",
          focus: "#B76E00",
        },
        error: {
          DEFAULT: "#FF5630",
          light: "#FFAC82",
          focus: "#B71D18",
        },
        gray: {
          50: "#FCFDFD",
          100: "#F9FAFB",
          200: "#F4F6F8",
          300: "#DFE3E8",
          400: "#C4CDD5",
          500: "#919EAB",
          600: "#637381",
          700: "#454F5B",
          800: "#1C252E",
          900: "#141A21",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          xl: "2.5rem",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(), // Iconify plugin for dynamic selectors
  ],
};
