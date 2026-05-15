import type { Metadata } from 'next';
import { LenisProvider } from '@/components/system/LenisProvider';
import { Header } from '@/components/system/Header';
import { Footer } from '@/components/system/Footer';
import { GridLines } from '@/components/system/GridLines';
import './globals.css';

export const metadata: Metadata = {
  title:       { default: 'Valantai', template: '%s — Valantai' },
  description: 'An operating institution for ambitious companies. Built by operators. Accelerated by AI.',
  metadataBase: new URL('https://valantai.com'),
  openGraph: {
    siteName:    'Valantai',
    type:        'website',
    locale:      'en_GB',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <GridLines />
          <Header />
          <main className="relative z-[2] header-offset">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
