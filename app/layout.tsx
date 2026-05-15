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
      <head>
        {/* Preconnect to Google Fonts — reduces DNS + TLS overhead */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Non-blocking font load — browser fetches in parallel with page render */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;1,8..60,400;1,8..60,500&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
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
