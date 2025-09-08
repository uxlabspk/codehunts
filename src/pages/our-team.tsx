import CTASection from "@/components/common/cta-section.tsx";
import OurValues from "@/components/common/our-values.tsx";
import HeroSection from "@/components/common/hero-section.tsx";
import TeamCard from "@/components/common/team-card.tsx";
import {Mail, Users} from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Team() {
    return (
        <div className='bg-black'>
            {/* Hero Section */}
            <HeroSection
                title={'Meet Our Exceptional Team'}
                description={'We\'re a diverse group of innovators, developers, designers, and strategists united by a passion for creating cutting-edge software solutions.'}
                hasLinks={false}
                hasCategory={true}
                category={
                    <>
                        <Users className={'w-5 h-5 mr-2'} />
                        Our Team
                    </>
                }
            />

            {/* Our Team Section */}
            <div className={'container mx-auto px-4 sm:py-12 sm:px-0'}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                     <TeamCard
                        img={'team/naveed.png'}
                        name={'Muhammad Naveed'}
                        position={'Software Engineer'}
                        isVerified={true}
                        socials={
                            <div className={'flex flex-col gap-2 items-center justify-around px-6'}>
                                <p className="text-sm text-center text-gray-400">""</p>
                                <a href="mailto: naveed@codehuntspk.com" className="mt-2">
                                    <Button variant={"outline"}>
                                        <Mail />
                                        Contact
                                    </Button>
                                </a>
                            </div>
                        }
                    />

                    <TeamCard
                        img={'team/hamza.png'}
                        name={'Hamza Waheed'}
                        position={'Software Engineer'}
                        isVerified={true}
                        socials={
                            <div className={'flex flex-col gap-2 items-center justify-around px-6'}>
                                <p className="text-sm text-center text-gray-400">""</p>
                                <a href="mailto: " className="mt-2">
                                    <Button variant={"outline"}>
                                        <Mail />
                                        Contact
                                    </Button>
                                </a>
                            </div>
                        }
                    />

                    <TeamCard
                        img={'team/Usama.png'}
                        name={'Muhammad Usama'}
                        position={'SEO Expert'}
                        isVerified={false}
                        socials={
                            <div className={'flex flex-col gap-2 items-center justify-around px-6'}>
                                <p className="text-sm text-center text-gray-400">""</p>
                                <a href="mailto: " className="mt-2">
                                    <Button variant={"outline"}>
                                        <Mail />
                                        Contact
                                    </Button>
                                </a>
                            </div>
                        }
                    />

                    <TeamCard
                        img={'team/shazil-index.png'}
                        name={'Muhammad Shazil'}
                        position={'Web Developer'}
                        isVerified={true}
                        socials={
                            <div className={'flex flex-col gap-2 items-center justify-around px-6'}>
                                <p className="text-sm text-center text-gray-400">""</p>
                                <a href="mailto: " className="mt-2">
                                    <Button variant={"outline"}>
                                        <Mail />
                                        Contact
                                    </Button>
                                </a>
                            </div>
                        }
                    />
                </div>
            </div>

            {/* Our Core Values */}
            <OurValues />

            {/* Call To Action */}
            <CTASection />
        </div>
    )
}