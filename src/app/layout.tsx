import 'src/base/styles/global.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { BASE_URL as baseUrl, METADATA } from "@/shared/constants/common"
import {Navbar, Footer} from '@/widgets';
import { TopButton } from '@/shared/ui';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: "/site.webmanifest",
  title: {
    default: METADATA.title,
    template: `%s | ${METADATA.siteName}`,
    // absolute: `%s | ${METADATA.siteName}`, 
  },
  description: METADATA.description, 
  keywords: METADATA.keywords,
  openGraph: {
    title: METADATA.title,
    description: METADATA.description,
    url: baseUrl,
    siteName: METADATA.siteName,
    locale: 'uk_UA',
    type: 'website',
    images: ["/logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ')
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="uk"
      className={cx('text-black bg-white dark:text-white dark:bg-black scroll-smooth')}
    >
      <body className="antialiased w-full h-full">
        <div className="w-full flex-auto min-w-0 min-h-screen flex flex-col overflow-hidden">
          <Navbar />
          <main className='w-full'>
            {children}
          </main>
          <Footer />
          <TopButton />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
};