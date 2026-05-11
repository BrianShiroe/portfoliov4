import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google"; // استيراد الخطوط المطلوبة

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SystemLoader } from '@/components/SystemLoader';
import { LenisScroll } from '@/components/LenisScroll';
import { routing, type AppLocale } from '@/i18n/routing';

// 1. إعداد خط Inter للغة الإنجليزية مع متغير CSS
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

// 2. إعداد خط IBM Plex Sans Arabic للغة العربية مع متغير CSS
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const baseUrl = 'https://brianshiroe.vercel.app';
  const { locale } = await params;

  const isAr = locale === 'ar';
  const canonical = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`
      }
    },
    title: {
      default: isAr
        ? 'برايان شيرو | مطور ويب في دبي وتكامل ERP'
        : 'Brian Shiroe | Dubai Web Developer & ERP Specialist',
      template: isAr ? '%s | برايان شيرو' : '%s | Brian Shiroe'
    },
    description: isAr
      ? 'مطور ويب في دبي متخصص في أنظمة التجارة الإلكترونية وتكامل Odoo ERP والمواقع عالية الأداء.'
      : 'Professional Web Developer in Dubai specializing in E-Commerce systems, Odoo ERP integrations, Corporate websites, and high-performance Custom Web Applications.',
    keywords: [
      'Brian Shiroe',
      'E-Commerce Developer Dubai',
      'Odoo ERP UAE',
      'Corporate Website Design Dubai',
      'Custom Web Apps Dubai',
      'Next.js Developer UAE',
      'Shopify Expert Dubai'
    ],
    authors: [{ name: 'Brian Shiroe' }],
    creator: 'Brian Shiroe',
    openGraph: {
      type: 'website',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      url: canonical,
      title: isAr
        ? 'برايان شيرو | حلول ويب مخصصة في دبي'
        : 'Brian Shiroe | Custom Web Solutions Dubai',
      description: isAr
        ? 'تطوير احترافي للتجارة الإلكترونية وتكامل Odoo ERP ومواقع الشركات والتطبيقات المخصصة.'
        : 'Expert development in E-Commerce, Odoo ERP, Corporate sites, and Custom Apps.',
      siteName: isAr ? 'ملف أعمال برايان شيرو' : 'Brian Shiroe Portfolio',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }]
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr ? 'برايان شيرو | مطور ويب في دبي' : 'Brian Shiroe | Dubai Web Developer',
      description: isAr
        ? 'متخصص في التجارة الإلكترونية وتكامل Odoo ERP وتطبيقات الويب المخصصة.'
        : 'Specializing in E-Commerce, Odoo ERP, and Custom Web Applications.',
      images: ['/og-image.png']
    },
    robots: {
      index: true,
      follow: true
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png'
    }
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

  // التحقق من صحة اللغة المدعومة
  if (!routing.locales.includes(locale as AppLocale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isAr = locale === 'ar';

  return (
    <html lang={locale} dir={isAr ? "rtl" : "ltr"}>
      {/* تطبيق المتغيرات في الـ body:
        1. نمرر المتغيرات الخاصة بـ Next Font لـ Tailwind v4 ليستخدمها من globals.css.
        2. نستخدم antialiased لتحسين وضوح الخطوط.
      */}
      <body 
        className={`
          ${inter.variable} 
          ${ibmPlexArabic.variable} 
          ${isAr ? 'font-arabic' : 'font-sans'} 
          flex flex-col min-h-screen antialiased
        `}
      >
        <NextIntlClientProvider messages={messages}>
          <LenisScroll />
          <SystemLoader />
          <Header />
          <main role="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}