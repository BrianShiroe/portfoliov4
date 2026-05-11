// app/[locale]/layout.tsx
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { IBM_Plex_Sans_Arabic, Inter, Geist_Mono } from "next/font/google";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SystemLoader } from '@/components/SystemLoader';
import { LenisScroll } from '@/components/LenisScroll';
import { routing, type AppLocale } from '@/i18n/routing';

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: 'swap',
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  const baseUrl = 'https://brianshiroe.vercel.app';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: isAr ? 'برايان شيرو | مطور ويب في دبي' : 'BrianShiroe | Dubai Web Developer',
      template: `%s | ${isAr ? 'برايان شيرو' : 'BrianShiroe'}`
    },
    description: isAr 
      ? 'مطور ويب في دبي متخصص في أنظمة التجارة الإلكترونية وتكامل Odoo ERP.' 
      : 'Professional Web Developer in Dubai specializing in E-Commerce and Odoo ERP.',
    alternates: { canonical: `${baseUrl}/${locale}` }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as AppLocale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const isAr = locale === 'ar';
  const baseUrl = 'https://brianshiroe.vercel.app';

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BrianShiroe",
    "image": `${baseUrl}/og-image.png`,
    "url": `${baseUrl}/${locale}`,
    "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" },
    "description": "Full-Stack Engineer & ERP Specialist in Dubai.",
  };

  const bodyClasses = [
    inter.variable,
    geistMono.variable,
    ibmPlexArabic.variable,
    isAr ? 'font-arabic' : 'font-mono',
    'flex flex-col min-h-screen antialiased bg-white text-black selection:bg-[#00C950] selection:text-white'
  ].join(' ');

  return (
    <html 
      lang={locale} 
      dir={isAr ? "rtl" : "ltr"} 
      className="scroll-smooth h-full" 
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={bodyClasses} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <LenisScroll />
          <SystemLoader />
          <Header />
          <main role="main" className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}