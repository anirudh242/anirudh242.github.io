import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { ThemeProvider } from './theme-provider';
import './globals.css';

// Configure the Space Mono font from Google Fonts
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

// Define the website's metadata for SEO
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
    // suppressHydrationWarning is needed when using next-themes
    <html lang="en" suppressHydrationWarning>
      <body className={spaceMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
