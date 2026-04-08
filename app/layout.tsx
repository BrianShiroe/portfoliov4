import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

// Import from the folder outside 'app'
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Retro Portfolio",
  description: "Global White Retro Theme",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-black selection:text-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}