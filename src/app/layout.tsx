import Container from '@/components/atoms/Container';
import '@/styles/style.linaria.global';
import { geist, geistMono } from 'fonts';
import { siteConfig } from 'lib/constant';
import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    title: siteConfig.title,
    description: siteConfig.description,
    card: 'summary_large_image',
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en-GB'>
      <body
        className={`${geist.variable} ${geistMono.variable}`}
      >
        <Container as='main' position='center'>
          {children}
        </Container>
      </body>
    </html>
  );
}
