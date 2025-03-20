import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import '@/app/globals.sass';
import '@/assets/styles/reset.css';
import '@/assets/styles/form-reset.css';

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable}`}>{children}</body>
    </html>
  );
}
