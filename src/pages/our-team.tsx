import CTASection from "@/components/common/cta-section.tsx";
import OurValues from "@/components/common/our-values.tsx";
import HeroSection from "@/components/common/hero-section.tsx";
import TeamCard from "@/components/common/team-card.tsx";
import {Github, Instagram, Linkedin, Twitter} from "lucide-react";


export default function Team() {
    return (
        <>
            <HeroSection title={'Meet Our ExceptionalTeam'} description={'We\'re a passionate group of developers, designers, and innovators dedicated to creating cutting-edge software solutions that drive business success.'} hasLinks={false} />
            <div className={'container mx-auto py-12'}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <TeamCard
                        img={'team/naveed.png'}
                        name={'Muhammad Naveed'}
                        position={'Software Engineer'}
                        socials={
                            <div className={'flex items-center justify-around px-6'}>
                                <Linkedin className={'w-5 h-5 text-white'} />
                                <Twitter className={'w-5 h-5 text-white'} />
                                <Instagram className={'w-5 h-5 text-white'} />
                                <Github className={'w-5 h-5 text-white'} />
                            </div>
                        }
                    />

                    <TeamCard
                        img={'team/hamza.png'}
                        name={'Hamza Waheed'}
                        position={'Software Engineer'}
                        socials={
                            <div className={'flex items-center justify-around px-6'}>
                                <Linkedin className={'w-5 h-5 text-white'} />
                                <Twitter className={'w-5 h-5 text-white'} />
                                <Instagram className={'w-5 h-5 text-white'} />
                                <Github className={'w-5 h-5 text-white'} />
                            </div>
                        }
                    />

                    <TeamCard
                        img={'team/Usama.png'}
                        name={'Muhammad Usama'}
                        position={'SEO Expert'}
                        socials={
                            <div className={'flex items-center justify-around px-6'}>
                                <Linkedin className={'w-5 h-5 text-white'} />
                                <Twitter className={'w-5 h-5 text-white'} />
                                <Instagram className={'w-5 h-5 text-white'} />
                                <Github className={'w-5 h-5 text-white'} />
                            </div>
                        }
                    />

                    <TeamCard
                        img={'team/shazil-index.png'}
                        name={'Muhammad Shazil'}
                        position={'Web Developer'}
                        socials={
                            <div className={'flex items-center justify-around px-6'}>
                                <Linkedin className={'w-5 h-5 text-white'} />
                                <Twitter className={'w-5 h-5 text-white'} />
                                <Instagram className={'w-5 h-5 text-white'} />
                                <Github className={'w-5 h-5 text-white'} />
                            </div>
                        }
                    />
                </div>
            </div>
            <OurValues />
            <CTASection />
        </>
    )
}