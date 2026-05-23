import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Portfolio // 2026",
  description: "Digital solutions and architectural logic.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-white text-black selection:bg-[#00C950] selection:text-white">
        {/* Children here renders the nested LocaleLayout structure underneath */}
        {children}

        {/* Vercel Analytics tracks system wide views */}
        <Analytics />
      </body>
    </html>
  );
}