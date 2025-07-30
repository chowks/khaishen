import type { Metadata } from 'next';
// eslint-disable-next-line import/no-unresolved
import { GeistMono } from 'geist/font/mono';
// eslint-disable-next-line import/no-unresolved
import { GeistSans } from 'geist/font/sans';
import '@/app/globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Khai Shen',
  description:
    'A passionate full-stack developer connecting great ideas with beautiful, functional solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(GeistSans.variable, GeistMono.variable, 'antialiased')}
      >
        {children}
      </body>
    </html>
  );
}
