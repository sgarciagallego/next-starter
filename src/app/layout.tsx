import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en-GB'>
      <body>{children}</body>
    </html>
  );
}
