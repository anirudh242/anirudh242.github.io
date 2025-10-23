import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import './globals.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Anirudh Bhardwaj | Portfolio',
  description: 'The portfolio of Anirudh Bhardwaj, a Computer Science Student.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${spaceMono.className} bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
