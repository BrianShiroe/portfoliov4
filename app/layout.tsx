import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SystemLoader } from "../components/SystemLoader";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brian Shiroe | Web Developer Dubai",
    template: "%s | Brian Shiroe",
  },
  description:
    "Brian Shiroe is a minimalist web developer based in Dubai, UAE, specializing in high-performance digital experiences, React, and Next.js.",
  keywords: [
    "Brian Shiroe",
    "Web Developer Dubai",
    "Next.js Developer UAE",
    "Minimalist Web Design",
    "Front-end Developer",
  ],
  authors: [{ name: "Brian Shiroe" }],
  creator: "Brian Shiroe",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://yourdomain.com",
    title: "Brian Shiroe | Web Developer Dubai",
    description: "Building high-performance digital experiences in the UAE.",
    siteName: "Brian Shiroe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Shiroe | Web Developer",
    description: "Minimalist Web Developer & Designer based in Dubai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} scroll-smooth h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-mono bg-white text-black selection:bg-black selection:text-white"
        suppressHydrationWarning={true}
      >
        {/* 1. INITIAL SYSTEM BOOT LOADER */}
        <SystemLoader />

        {/* 2. MAIN SYSTEM INTERFACE */}
        <Header />

        <main role="main" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
