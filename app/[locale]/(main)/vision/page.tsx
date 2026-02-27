import type { Metadata } from "next";
import HomeCTASection from "@/components/sections/HomeCTASection";
import VisionHeroSection from "@/components/sections/vision/VisionHeroSection";
import VisionPillarsSection from "@/components/sections/vision/VisionPillarsSection";
import VisionQuoteSection from "@/components/sections/vision/VisionQuoteSection";
import { getPageSEO } from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageSEO(locale, "vision");
}

export default function VisionPage() {
  return (
    <>
      <VisionHeroSection />
      <VisionQuoteSection />
      <VisionPillarsSection />
      <HomeCTASection />
    </>
  );
}
