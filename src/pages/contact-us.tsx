import HeroSection from "@/components/common/hero-section.tsx";
import CompanyStats from "@/components/common/company-stats.tsx";

export default function Contact() {
  return (
    <>
      <HeroSection title={'Lets Build Something Amazing Together'} description={'Ready to transform your ideas into powerful software solutions? Our expert team is here to bring your vision to life.'} hasLinks={false} />
      <CompanyStats />
    </>
  )
}