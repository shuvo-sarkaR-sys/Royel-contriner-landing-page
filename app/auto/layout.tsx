import { Header } from "@/components/Header/header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Metadata } from "next";

const _metadata = {
  title: "Royal Auto",
  description: "Halifax's top licensed mechanic shop.",
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
        url: "https://www.theroyalshop.ca/img/mechanic.webp", // Must be an absolute URL
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
    <ThemeProvider forcedTheme="auto">
      <Header theme="auto" />
      {children}
    </ThemeProvider>
  );
}
