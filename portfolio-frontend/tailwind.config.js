/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        darkBg: '#0a0f1e',
        cardBg: '#0f172a',
        cyanAccent: '#00d4ff',
        greenAccent: '#22c55e',
      },
    },
  },
  plugins: [],
}
