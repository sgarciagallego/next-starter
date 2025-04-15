import Container from '@/components/atoms/Container';
import Link from '@/components/atoms/Link';
import Header from '@/components/organisms/Header';
import CodePlayground from '@/components/template/CodePlayground';
import '@/styles/style.linaria.global';
import { geist, mapleMono } from 'fonts';
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
        className={`${geist.variable} ${mapleMono.variable}`}
      >
        <Link type='skiplink'>Skip to content</Link>
        <Header />
        <Container as='main' id='main-content' position='center'>
          {children}
          <CodePlayground
            template='react'
            files={{
              'App.js':
                'import React from "react";\nimport "./styles.css";\n\nexport default function App() {\n\treturn (\n\t\t<>\n\t\t\t<h1>Hello world!</h1>\n\t\t\t<p>How are you doing?</p>\n\t\t</>\n\t);\n}',
              'styles.css':
                'h1 {\n\tfont-family: sans-serif;\n}',
            }}
          />
        </Container>
      </body>
    </html>
  );
}
