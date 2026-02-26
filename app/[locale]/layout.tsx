import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import FooterSection from "@/components/sections/FooterSection";
import { routing } from "@/i18n/routing";
import { getPageSEO } from "@/lib/seo/metadata";
import { Provider } from "@/src/components/ui/provider";
import { cormorant, jakarta } from "../fonts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageSEO(locale, "home");
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  let messages: Record<string, unknown>;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    messages = (await import("../../messages/fr.json")).default;
  }

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${cormorant.variable} ${jakarta.variable}`}
    >
      <body>
        <Provider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main>{children}</main>
            <FooterSection />
            <ScrollToTop />
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}
