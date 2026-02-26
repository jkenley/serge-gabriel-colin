import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import NewsSection from "@/components/sections/NewsSection";
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
    <Box pt={{ base: "16", lg: "20" }}>
      <NewsSection />
    </Box>
  );
}
