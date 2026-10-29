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
        vermilion: {
          50: '#fff1f0',
          100: '#ffe4e2',
          200: '#ffccc7',
          300: '#ffa39e',
          400: '#ff7875',
          500: '#D93829', // Japanese vermilion
          600: '#c22d1f',
          700: '#a62418',
          800: '#821f17',
          900: '#5c1610',
        },
        ivory: {
          50: '#fdfbf7',
          100: '#f8f5ee',
          200: '#f1ede0',
          300: '#e5ded0',
          400: '#cfc4b1',
          500: '#b4a68f',
        },
        zen: {
          card: '#ffffff',
          bg: '#FDFBF7',
          border: '#E8E3DA',
          muted: '#78716C',
          dark: '#1C1917',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          '"Noto Sans JP"',
          'sans-serif',
        ],
        jp: ['"Noto Sans JP"', '"Hiragino Sans"', '"Meiryo"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
