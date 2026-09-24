/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk Variable"', '"Inter Variable"', 'sans-serif'],
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
