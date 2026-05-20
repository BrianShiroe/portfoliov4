// app/layout.tsx
import type { Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Pure pass-through shell.
  // Next.js needs this file parameter-free to satisfy the 'LayoutConfig<"/">' validator check.
  return children;
}