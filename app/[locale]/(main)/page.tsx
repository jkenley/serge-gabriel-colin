import HeroSection from "@/components/sections/HeroSection";
import HomeBioSection from "@/components/sections/HomeBioSection";
import HomeCTASection from "@/components/sections/HomeCTASection";
import HomeNewsSection from "@/components/sections/HomeNewsSection";
import HomeVisionSection from "@/components/sections/HomeVisionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeBioSection />
      <HomeVisionSection />
      <HomeNewsSection />
      <HomeCTASection />
    </>
  );
}
