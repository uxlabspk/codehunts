import HeroSection from "@/components/common/hero-section.tsx";
import CompanyStats from "@/components/common/company-stats.tsx";
import ContactSection from "@/components/common/contact-section.tsx";
import CTASection from "@/components/common/cta-section.tsx";
import {Headset} from "lucide-react";

export default function Contact() {
  return (
    <>
      <HeroSection
          title={'Get In Touch With Our Team'}
          description={'Have questions or want to learn more about our solutions? We\'d love to hear from you. Reach out and we\'ll get back to you as soon as possible.'}
          hasLinks={false}
          hasCategory={true}
          category={
            <>
              <Headset className={'w-5 h-5 mr-2'} />
              Contact Us
            </>
          }
      />
      <CompanyStats />
      <ContactSection />
      <CTASection />
    </>
  )
}