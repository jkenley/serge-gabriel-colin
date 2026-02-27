import type { Metadata } from "next";
import BioFaesSection from "@/components/sections/bio/BioFaesSection";
import BioGovernmentSection from "@/components/sections/bio/BioGovernmentSection";
import BioHeroSection from "@/components/sections/bio/BioHeroSection";
import BioNarrativeSection from "@/components/sections/bio/BioNarrativeSection";
import BioPhilosophySection from "@/components/sections/bio/BioPhilosophySection";
import BioQuoteSection from "@/components/sections/bio/BioQuoteSection";
import BioTimelineSection from "@/components/sections/bio/BioTimelineSection";
import HomeCTASection from "@/components/sections/shared/HomeCTASection";
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
    <>
      <BioHeroSection />
      <BioNarrativeSection />
      <BioFaesSection />
      <BioGovernmentSection />
      <BioQuoteSection />
      <BioPhilosophySection />
      <BioTimelineSection />
      <HomeCTASection />
    </>
  );
}
