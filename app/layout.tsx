import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { baseUrl } from './utils/sitemap'
import Navbar from './components/nav'
import Footer from './components/footer'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Dina Khoma Jewelry',
    template: '%s | Dina Khoma Jewelry',
  },
  description: 'This is Dina Khoma site.',
  // alternates: {
    //   canonical: "/app/assets/images/favicon.ico"
    // },
  // icons: {
      //   icon: "/app/assets/images/favicon.ico"
      // },
  // icons: "/favicon.ico",
  openGraph: {
    title: 'Dina Khoma Site',
    description: 'This is Dina Khoma site.',
    url: baseUrl,
    siteName: 'Dina Khoma Site',
    locale: 'uk_UA',
    type: 'website',
    images: ["/app/assets/images/logo/logo_300x100.png"]
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="uk"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="32x32"/>
      </head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          {/* <Footer /> */}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}