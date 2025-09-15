import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // This enables class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      mono: ['"Space Mono"', 'monospace'],
    },
    extend: {
      colors: {
        background: '#FAF9F6',
        foreground: '#1A1A1A',
        'background-dark': '#1A1A1A',
        'foreground-dark': '#FEF7DE',
        accent: '#2ECC71',
        'accent-darker': '#1E8449',
        muted: '#555555',
        'muted-dark': '#888888',
      },
    },
  },
  plugins: [],
};
export default config;
