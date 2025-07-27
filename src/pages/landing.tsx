import HeroSection from "@/components/landing/hero-section.tsx";
import ServiceSection from "@/components/landing/services-section.tsx";
import AboutSection from "@/components/landing/about-section.tsx";
import TeamSection from "@/components/landing/team-section.tsx";
import ContactSection from "@/components/common/contact-section.tsx";


export default function Home() {
    return (
        <>
            <HeroSection />
            <ServiceSection />
            <AboutSection />
            <TeamSection />
            <ContactSection />
        </>
    )
}