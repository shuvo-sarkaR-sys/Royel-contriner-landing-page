import { Header } from "@/components/Header/header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Metadata } from "next";

const _metadata = {
  title: "Royal Rentals",
  description:
    "Atlantic Canada's premier self storage location, with 24/7 security and state-of-the-art facilities.",
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
        url: "https://www.theroyalshop.ca/img/self_storage/units.webp", // Must be an absolute URL
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
    <ThemeProvider forcedTheme="rentals">
      <Header theme="rentals" />
      {children}
    </ThemeProvider>
  );
}
