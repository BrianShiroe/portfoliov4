import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Viewport configuration for responsive design
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// SEO Metadata configuration
export const metadata = {
  title: "Portfolio // 2026",
  description: "Digital solutions and architectural logic.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * RootLayout
 * This component acts as the single source of truth for the document shell.
 * It is required that this file remains the ONLY place where <html> and <body> tags reside.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="antialiased selection:bg-[#00C950] selection:text-white min-h-screen">
        {/* The child components (rendered by your LocaleLayout) */}
        {children}

        {/* Vercel Analytics: Placed here to track across all pages */}
        <Analytics />
      </body>
    </html>
  );
}