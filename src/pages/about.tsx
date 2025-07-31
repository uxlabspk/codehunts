import HeroSection from "@/components/common/hero-section.tsx";
import CompanyStats from "@/components/common/company-stats.tsx";
import OurValues from "@/components/common/our-values.tsx";
import TeamSection from "@/components/landing/team-section.tsx";
import CTASection from "@/components/common/cta-section.tsx";


export default function About() {
    return(
        <>
            <HeroSection
                title={'About Code HUNT\'S'}
                description={'We\'re a passionate team of developers, designers, and innovators crafting digital experiences that transform businesses and delight users.'}
                hasLinks={false} />

            <CompanyStats />
            {/* Our Story */}
            <TeamSection />
            <OurValues />
            <CTASection />
        </>
    )
}