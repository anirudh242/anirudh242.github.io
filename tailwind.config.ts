/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './providers/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        background: '#faebd7',
        foreground: '#1a1a1a',
        'background-dark': '#1a1a1a',
        'foreground-dark': '#fef7de',
        accent: '#2ecc71',
        'accent-darker': '#1e8449',
        muted: '#555555',
        'muted-dark': '#888888',
      },
    },
  },
  plugins: [],
};
