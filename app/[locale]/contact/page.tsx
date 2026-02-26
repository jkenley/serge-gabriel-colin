import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { getPageSEO } from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageSEO(locale, "contact");
}

export default function ContactPage() {
  return (
    <Box pt={{ base: "16", lg: "20" }}>
      <ContactSection />
    </Box>
  );
}
