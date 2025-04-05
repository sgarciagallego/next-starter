import { Geist } from 'next/font/google';
import localFont from 'next/font/local';

export const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  variable: '--font-typeface--sans',
});

export const mapleMono = localFont({
  src: [
    {
      path: './mono/roman/400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './mono/roman/800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './mono/italic/400.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './mono/italic/800.woff2',
      weight: '800',
      style: 'italic',
    },
  ],
  display: 'swap',
  fallback: ['monospace'],
  variable: '--font-typeface--mono',
});
