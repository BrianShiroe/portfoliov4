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
  metadataBase: new URL("https://brianshiroe.vercel.app"),
  title: {
    default: "Brian Shiroe | Dubai Web Developer & ERP Specialist",
    template: "%s | Brian Shiroe",
  },
  description:
    "Professional Web Developer in Dubai specializing in E-Commerce systems, Odoo ERP integrations, Corporate websites, and high-performance Custom Web Applications.",
  keywords: [
    "Brian Shiroe",
    "E-Commerce Developer Dubai",
    "Odoo ERP UAE",
    "Corporate Website Design Dubai",
    "Custom Web Apps Dubai",
    "Next.js Developer UAE",
    "Shopify Expert Dubai",
  ],
  authors: [{ name: "Brian Shiroe" }],
  creator: "Brian Shiroe",
  alternates: {
    canonical: "https://brianshiroe.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://brianshiroe.vercel.app",
    title: "Brian Shiroe | Custom Web Solutions Dubai",
    description:
      "Expert development in E-Commerce, Odoo ERP, Corporate sites, and Custom Apps.",
    siteName: "Brian Shiroe Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Shiroe | Dubai Web Developer",
    description:
      "Specializing in E-Commerce, Odoo ERP, and Custom Web Applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
  // Structured Data for Google (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Brian Shiroe",
    image: "https://brianshiroe.vercel.app/og-image.png",
    url: "https://brianshiroe.vercel.app",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    description:
      "Specialist in E-Commerce, Odoo ERP, Corporate Websites, and Custom Web Apps.",
    knowsAbout: [
      "E-Commerce",
      "Odoo ERP",
      "Web Development",
      "React",
      "Next.js",
      "Custom Web Applications",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistMono.variable} scroll-smooth h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-mono bg-white text-black selection:bg-[#00C950] selection:text-white"
        suppressHydrationWarning={true}
      >
        <SystemLoader />
        <Header />
        <main role="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
