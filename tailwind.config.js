import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        // Primary color scale
        primary: {
          DEFAULT: '#C8285A',
          50: '#FDE9ED',
          100: '#F9D4DC',
          200: '#F3A7BA',
          300: '#ED7A99',
          400: '#E64D77',
          500: '#C8285A',
          600: '#A21F46',
          700: '#7A1531',
          800: '#520B1D',
          900: '#2A060E',
        },
        // Accent color usable in Tailwind classes
        accent: '#C8285A',
        // Focus color
        focus: '#F28AA0',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      accent: '#C8285A', // HeroUI components use this automatically
    }),
  ],
}

export default config;
