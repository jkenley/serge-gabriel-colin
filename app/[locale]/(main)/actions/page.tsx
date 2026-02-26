import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import ActionsSection from "@/components/sections/ActionsSection";
import { getPageSEO } from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageSEO(locale, "actions");
}

export default function ActionsPage() {
  return (
    <Box pt={{ base: "16", lg: "20" }}>
      <ActionsSection />
    </Box>
  );
}
