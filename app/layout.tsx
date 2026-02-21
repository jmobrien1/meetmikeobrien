import type { Metadata } from 'next';
import { Instrument_Serif, DM_Sans, Space_Mono } from 'next/font/google';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Mike O\'Brien — Digital Government & AI Transformation Executive',
    template: '%s | Mike O\'Brien',
  },
  description:
    'Principal at Thoughtworks. Founder of PropelAI. 20+ years transforming how government serves people — from AOL to agentic AI, from $3M accounts to $500M+ in wins.',
  openGraph: {
    title: 'Mike O\'Brien — Digital Government & AI Transformation Executive',
    description:
      'Principal at Thoughtworks. Founder of PropelAI. 20+ years transforming how government serves people.',
    url: 'https://meetmikeobrien.com',
    siteName: 'meetmikeobrien.com',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body className="font-sans antialiased">
        <Nav />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
