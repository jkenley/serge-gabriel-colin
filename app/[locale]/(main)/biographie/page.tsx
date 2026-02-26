import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import { getPageSEO } from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageSEO(locale, "biographie");
}

export default function BiographiePage() {
  return (
    <Box pt={{ base: "16", lg: "20" }}>
      <AboutSection />
    </Box>
  );
}
