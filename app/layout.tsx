// app/layout.tsx
import type { Viewport } from 'next';
import { Geist_Mono } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import './globals.css';

// إعداد الخط مع ضمان الثبات أثناء التحميل
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = 'https://brianshiroe.vercel.app';
  const locale = await getLocale();
  const isAr = locale === 'ar';

  // بيانات الـ SEO المهيكلة (JSON-LD) لتعزيز ظهورك في بحث دبي
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Brian Haw",
    "image": `${baseUrl}/og-image.png`,
    "url": `${baseUrl}/${locale}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE",
    },
    "description": "Full-Stack Engineer & ERP Specialist in Dubai. Expertise in Next.js, Odoo, and Agentic AI.",
    "knowsAbout": [
      "E-Commerce",
      "Odoo ERP",
      "Next.js 15",
      "Agentic AI Workflows",
      "Cloud Infrastructure",
      "Custom Web Applications",
    ],
  };

  return (
    <html
      lang={locale}
      dir={isAr ? 'rtl' : 'ltr'}
      className={`${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-mono bg-white text-black selection:bg-[#00C950] selection:text-white"
        suppressHydrationWarning
      >
        {/* Zustand لا يحتاج لـ Provider هنا. 
          يتم استدعاء الحالة مباشرة داخل المكونات الفرعية.
        */}
        {children}
      </body>
    </html>
  );
}