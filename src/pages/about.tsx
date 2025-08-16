import HeroSection from "@/components/common/hero-section.tsx";
import CompanyStats from "@/components/common/company-stats.tsx";
import OurValues from "@/components/common/our-values.tsx";
import TeamSection from "@/components/landing/team-section.tsx";
import CTASection from "@/components/common/cta-section.tsx";
import {Store} from "lucide-react";


export default function About() {
    return(
        <>
            {/* Hero Section */}
            <HeroSection
                title={'Transforming Ideas Into Digital Reality'}
                description={'We are a team of passionate developers, designers, and innovators dedicated to creating cutting-edge software solutions that empower businesses worldwide.'}
                hasLinks={false}
                hasCategory={true}
                category={
                    <>
                        <Store className={'w-5 h-5 mr-2'} />
                        About Us
                    </>
                }
            />

            {/* Company Statistics Section */}
            <CompanyStats />

            {/* Our Story Section */}
            <section className="sm:py-20 bg-black px-4 sm:px-0">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-6 text-lg leading-relaxed">
                                <p>
                                    Founded in 2023, Code HUNT'S began as a small team of passionate developers with a simple mission: to create software that makes a difference. What started in a small garage has grown into a thriving company serving clients across the globe.
                                </p>
                                <p>
                                    We believe that great software is more than just code—it's about understanding people, solving real problems, and creating experiences that users love. Every project we take on is an opportunity to push boundaries and exceed expectations.
                                </p>
                                <p>
                                    Today, we're proud to be a trusted partner for startups, enterprises, and everything in between, helping them navigate the digital landscape with confidence and innovation.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                alt="Team collaboration"
                                className="w-full h-80 object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <TeamSection />

            {/* Our Values Section */}
            <OurValues />

            {/* Call To Action Section */}
            <CTASection />
        </>
    )
}