// app/layout.tsx
import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// It is recommended to include metadata for SEO
export const metadata = {
  title: "Portfolio // 2026",
  description: "Digital solutions and architectural logic.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#00C950] selection:text-white">
        {/* Main Application Shell */}
        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
