import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Oswald } from 'next/font/google'
import "./globals.css";
import { ContactSection } from "../components/ContactSection/ContactSection";
import { Providers } from "../components/providers/providers";
import { GoogleTagManager } from "@next/third-parties/google";
import SegmentTracker from "@/components/analytics/SegmentTracker";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

const oswald = Oswald({ 
  subsets: ['latin'],
  display: 'swap',
})
const _metadata = {
  title: "Royal Services",
  description:
    "Atlantic Canada's premier self storage, shipping containers & mechanic shop service providers",
};

export const metadata: Metadata = {
  title: _metadata.title,
  description: _metadata.description,
  openGraph: {
    title: _metadata.title,
    description: _metadata.description,
    siteName: _metadata.title,
    images: [
      {
        url: "https://www.theroyalshop.ca/img/family.webp", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/favicons/royal.ico" />
      <body className={`${inter.className} ${oswald.className}`}>
        <div
          className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(0deg,transparent_0%,black_25%)] -z-10"
          style={{ backgroundImage: `url('/img/line.svg')` }}
        />
        <Providers>
          {children}
          
        </Providers>
      </body>
      <Suspense>
        <SegmentTracker />
      </Suspense>
      <GoogleTagManager gtmId="GTM-N6BKHDRD" />
    </html>
  );
}
