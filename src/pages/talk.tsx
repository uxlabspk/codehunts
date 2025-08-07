import HeroSection from "@/components/common/hero-section.tsx";
import {Podcast} from "lucide-react";
import ServiceSection from "@/components/landing/services-section.tsx";


export default function Talk() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection
                title={'Transform Your Business with Innovative Solutions'}
                description={'We build innovative, scalable, and secure software solutions tailored to your business needs. Partner with us to drive digital transformation and achieve your goals.'}
                hasLinks={false}
                hasCategory={true}
                category={
                    <>
                        <Podcast className={"w-5 h-5 mr-2"} />
                        Talk to Us
                    </>
                }
            />

            {/* Service Section */}
            <ServiceSection />
        </>
    )
}