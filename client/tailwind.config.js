// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bubble: {
          light: '#e0f2fe',    // Light blue
          DEFAULT: '#3b82f6',  // Base blue (bg-bubble)
          dark: '#1e40af',     // Dark blue
        },
      },
    },
  },
  plugins: [],
});
