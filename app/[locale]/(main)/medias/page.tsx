import type { Metadata } from "next";
import HomeCTASection from "@/components/sections/HomeCTASection";
import MediaGallerySection from "@/components/sections/media/MediaGallerySection";
import MediaHeroSection from "@/components/sections/media/MediaHeroSection";
import { getPageSEO } from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageSEO(locale, "medias");
}

export default function MediasPage() {
  return (
    <>
      <MediaHeroSection />
      <MediaGallerySection />
      <HomeCTASection />
    </>
  );
}
