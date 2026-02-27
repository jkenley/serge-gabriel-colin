import type { Metadata } from "next";
import NewsArticlesSection from "@/components/sections/news/NewsArticlesSection";
import NewsHeroSection from "@/components/sections/news/NewsHeroSection";
import HomeCTASection from "@/components/sections/shared/HomeCTASection";
import { getPageSEO } from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageSEO(locale, "actualites");
}

export default function ActualitesPage() {
  return (
    <>
      <NewsHeroSection />
      <NewsArticlesSection />
      <HomeCTASection />
    </>
  );
}
