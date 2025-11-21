import HeroSection from "@/components/landing/hero-section.tsx";
import ServiceSection from "@/components/landing/services-section.tsx";
import AboutSection from "@/components/landing/about-section.tsx";
import TeamSection from "@/components/landing/team-section.tsx";
import ContactSection from "@/components/common/contact-section.tsx";
import CompanyStats from "@/components/common/company-stats.tsx";
import CTASection from "@/components/common/cta-section.tsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyStats />
      <ServiceSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
