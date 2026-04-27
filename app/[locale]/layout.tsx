import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';

import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {SystemLoader} from '@/components/SystemLoader';
import {routing, type AppLocale} from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as AppLocale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SystemLoader />
      <Header />
      <main role="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}

