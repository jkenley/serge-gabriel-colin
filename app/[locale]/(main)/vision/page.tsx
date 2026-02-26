import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import VisionSection from "@/components/sections/VisionSection";
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
    <Box pt={{ base: "16", lg: "20" }}>
      <VisionSection />
    </Box>
  );
}
