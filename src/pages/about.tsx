import HeroSection from "@/components/common/hero-section.tsx";
import CompanyStats from "@/components/common/company-stats.tsx";
import OurValues from "@/components/common/our-values.tsx";
import TeamSection from "@/components/landing/team-section.tsx";
import CTASection from "@/components/common/cta-section.tsx";
import {Target} from "lucide-react";


export default function About() {
    return(
        <>
            <HeroSection
                title={'About Code HUNT\'S'}
                description={'We\'re a passionate team of developers, designers, and innovators crafting digital experiences that transform businesses and delight users.'}
                hasLinks={false}
                hasCategory={false}
            />

            <CompanyStats />

            {/* Our Story Section */}
            <section className="py-20 bg-accent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Mission-Driven</div>
                                        <div className="text-gray-600 text-sm">Since Day One</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <TeamSection />
            <OurValues />
            <CTASection />
        </>
    )
}