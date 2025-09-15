'use client';

import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme('light')}
        className="p-2 border border-muted dark:border-muted-dark rounded"
      >
        Light
      </button>
      <button
        onClick={() => setTheme('dark')}
        className="p-2 border border-muted dark:border-muted-dark rounded"
      >
        Dark
      </button>
    </div>
  );
}
