import 'src/modules/website/base/styles/global.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { BASE_URL as baseUrl, METADATA } from "@/modules/website/shared/constants/common"
import {Navbar} from '@/modules/website/widgets';
import { TopButton } from '@/modules/website/shared/ui';
import React from "react";
import {AdminBar} from "@/modules/admin/components/AdminBar";
import {Providers} from "@/modules/admin/providers";
import configPromise from '@/modules/admin/payload.config'
import {draftMode} from "next/headers";
import {getPayload} from "payload";
import {PayloadService} from "@/modules/website/base/services";

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

export default async function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const { isEnabled } = await draftMode()
  const header = await PayloadService.getHeader();

  console.log('header', header)

  return (
    <html
      lang="uk"
      className="text-black bg-white dark:text-white dark:bg-black scroll-smooth"
    >
    <body className="antialiased w-full h-full">
    <div className="w-full flex-auto min-w-0 min-h-screen flex flex-col overflow-hidden">

      {/*<Providers>*/}
        {/*<AdminBar*/}
        {/*  adminBarProps={{*/}
        {/*    preview: isEnabled,*/}
        {/*  }}*/}
        {/*/>*/}
        <Navbar header={header} />
        <main className='w-full'>
          {children}
        </main>
        {/*<Footer />*/}
        <TopButton />
        <Analytics />
        <SpeedInsights />
      {/*</Providers>*/}
    </div>
    </body>
    </html>
  );
};
