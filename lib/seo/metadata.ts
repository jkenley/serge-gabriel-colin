import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://sergegabrielcolin.com";

const LOCALE_MAP: Record<string, string> = {
  fr: "fr_FR",
  en: "en_US",
  es: "es_ES",
};

export async function getPageSEO(
  locale: string,
  pageName: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `SEO.${pageName}` });

  const pathSegment = pageName === "home" ? "" : `/${pageName}`;

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}${pathSegment}`,
      languages: {
        fr: `/fr${pathSegment}`,
        en: `/en${pathSegment}`,
        es: `/es${pathSegment}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: LOCALE_MAP[locale] || "fr_FR",
      type: "website",
      siteName: "Serge Gabriel Colin",
      images: [
        {
          url: `${BASE_URL}/serge_gabriel_colin.jpg`,
          width: 1200,
          height: 630,
          alt: "Serge Gabriel Colin — Minister of Economy and Finance",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${BASE_URL}/serge_gabriel_colin.jpg`],
    },
  };
}
