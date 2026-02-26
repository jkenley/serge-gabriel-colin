import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import FooterSection from "@/components/sections/FooterSection";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FooterSection />
      <ScrollToTop />
    </>
  );
}
