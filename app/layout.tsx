// app/layout.tsx
import type { Viewport } from 'next';
import './globals.css';

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
  // We just return children. 
  // The actual <html> and <body> tags move to [locale]/layout.tsx
  return children;
}