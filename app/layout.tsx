import type {Viewport} from 'next';
import {Geist_Mono} from 'next/font/google';
import {getLocale} from 'next-intl/server';
import './globals.css';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap'
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
  // Structured Data for Google (JSON-LD)
  const baseUrl = 'https://brianshiroe.vercel.app';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Brian Shiroe",
    image: `${baseUrl}/og-image.png`,
    url: baseUrl,
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

  const locale = await getLocale();
  const isAr = locale === 'ar';
  jsonLd.url = `${baseUrl}/${locale}`;

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
        {children}
      </body>
    </html>
  );
}