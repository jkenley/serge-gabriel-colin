import type { Metadata } from "next";
import ActionsGridSection from "@/components/sections/actions/ActionsGridSection";
import ActionsHeroSection from "@/components/sections/actions/ActionsHeroSection";
import HomeCTASection from "@/components/sections/shared/HomeCTASection";
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
    <>
      <ActionsHeroSection />
      <ActionsGridSection />
      <HomeCTASection />
    </>
  );
}
