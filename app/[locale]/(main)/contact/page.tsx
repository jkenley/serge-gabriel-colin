import type { Metadata } from "next";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactHeroSection from "@/components/sections/contact/ContactHeroSection";
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
    <>
      <ContactHeroSection />
      <ContactFormSection />
    </>
  );
}
