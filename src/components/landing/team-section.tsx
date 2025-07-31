import TeamCard from "@/components/common/team-card.tsx";
import {Github, Instagram, Linkedin, Twitter} from "lucide-react";


export default function TeamSection() {
    return(
        <section id="portfolio" className="py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-0">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Team</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Meet the talented professionals behind our success—dedicated, skilled, and passionate about
                        delivering exceptional results.
                    </p>
                </div>

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
        </section>
    )
}