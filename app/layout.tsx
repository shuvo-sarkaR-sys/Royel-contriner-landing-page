import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Oswald } from 'next/font/google'
import "./globals.css";
import { ContactSection } from "../components/ContactSection/ContactSection";
import { Providers } from "../components/providers/providers";
import { GoogleTagManager } from "@next/third-parties/google";
import SegmentTracker from "@/components/analytics/SegmentTracker";
import { Suspense } from "react";
import Contact from "@/components/Contact"; 
import Footer from "@/components/Footer";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TGQD4PSJ');`,
          }}
        />
        {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DNTJZ19XMJ"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DNTJZ19XMJ');
  `
}} />
      </head>
      <body className={`${inter.className} ${oswald.className}`}>
       {/* Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TGQD4PSJ"
height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
{/* <!-- End Google Tag Manager (noscript) --> */}
        <div
          className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(0deg,transparent_0%,black_25%)] -z-10"
          style={{ backgroundImage: `url('/img/line.svg')` }}
        />
        <Providers>
          {children}
          
        </Providers>
        <Contact/>
      <Footer/>

      </body>
      <Suspense>
        <SegmentTracker />
      </Suspense>
      <GoogleTagManager gtmId="GTM-N6BKHDRD" />
    </html>
  );
}
