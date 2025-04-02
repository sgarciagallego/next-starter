import { Geist, Geist_Mono } from 'next/font/google';

export const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  variable: '--font-typeface--sans',
});

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace'],
  variable: '--font-typeface--mono',
});
