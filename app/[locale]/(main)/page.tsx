import HomeBioSection from "@/components/sections/home/HomeBioSection";
import HomeHeroSection from "@/components/sections/home/HomeHeroSection";
import HomeNewsSection from "@/components/sections/home/HomeNewsSection";
import HomeVisionSection from "@/components/sections/home/HomeVisionSection";
import HomeCTASection from "@/components/sections/shared/HomeCTASection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeBioSection />
      <HomeVisionSection />
      <HomeNewsSection />
      <HomeCTASection />
    </>
  );
}
