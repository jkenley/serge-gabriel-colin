import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import MediaSection from "@/components/sections/MediaSection";
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
    <Box pt={{ base: "16", lg: "20" }}>
      <MediaSection />
    </Box>
  );
}
