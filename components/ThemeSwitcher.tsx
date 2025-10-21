'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDarkMode ? 'Activate Light Mode' : 'Activate Dark Mode'}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-transparent text-slate-700 dark:text-slate-300 hover:cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-slate-900"
    >
      <Sun
        className={`absolute h-6 w-6 text-[#FFDF22] transition-all duration-300 ease-in-out transform ${
          isDarkMode
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-50 opacity-0'
        }`}
      />

      <Moon
        className={`absolute h-6 w-6 text-[#1C1B22] transition-all duration-300 ease-in-out transform ${
          isDarkMode
            ? 'rotate-90 scale-50 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        }`}
      />
    </button>
  );
};
