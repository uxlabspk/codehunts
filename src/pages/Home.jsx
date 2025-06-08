import NavBar from "../components/NavBar.jsx";
import {Helmet} from "react-helmet-async";
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import aboutImage from "../assets/home/about.png";
import ProjectCard from "../components/ProjectCard.jsx";


export default function Home() {
    return (
        <>
            <Helmet>
                <title>Innovating Future | Code HUNT'S</title>
                <meta
                    name="description"
                    content="Code HUNT'S, a leading software development company in Islamabad Pakistan. Embraces the power of technology and innovating future."
                />
                <meta
                    name="keywords"
                    content="Software Company, software engineers, code hunts, Code HUNT'S"
                />
                <meta name="author" content="Muhammad Naveed"/>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="theme-color" content="#00b982"/>
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="#00b982"
                />
                <link rel="canonical" href="https://codehuntspk.com/"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:site_name" content="Code HUNT'S"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Innovating Future | Code HUNT'S"/>
                <meta
                    property="og:description"
                    content="Code HUNT'S, a leading software development company in Islamabad Pakistan. Embraces the power of technology and innovating future."
                />
                <meta property="og:url" content="https://www.codehuntspk.com/"/>
                <meta
                    property="og:image"
                    content="https://codehuntspk.com/assets/Cover.webp"
                />
                <meta name="twitter:site" content="@code_hunts"/>
                <meta
                    name="twitter:image"
                    content="https://pbs.twimg.com/profile_banners/1669217983737249792/1686859154/1080x360"
                />
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="Innovating Future | Code HUNT'S"/>
                <meta
                    name="twitter:description"
                    content="Code HUNT'S, a leading software development company in Islamabad Pakistan. Embraces the power of technology and innovating future."
                />
            </Helmet>

            <NavBar/>
            <Hero/>

            {/* our services */}
            <section id="services" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive software solutions designed to transform your business operations and drive
                            growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard icon={"💻"} title={"Web Development"}
                                     description={"Custom web applications built with modern technologies to deliver exceptional user experiences and robust functionality."}/>
                        <ServiceCard icon={"📱"} title={"Mobile App Development"}
                                     description={"Native and cross-platform mobile applications that engage users and expand your business reach across all devices."}/>
                        <ServiceCard icon={"🎨"} title={"Graphics Designing"}
                                     description={"Creative and impactful design solutions including branding, digital illustrations, and marketing materials to visually elevate your business."}/>
                        <ServiceCard icon={"🤖"} title={"AI & Machine Learning"}
                                     description={"Intelligent automation and data-driven insights to help your business make smarter decisions and improve efficiency."}/>
                        <ServiceCard icon={"🔧"} title={"Software Consulting"}
                                     description={"Expert guidance on technology strategy, architecture design, and digital transformation initiatives."}/>
                        <ServiceCard icon={"☁️"} title={"Cloud Solutions"}
                                     description={"Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs."}/>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose Code
                                HUNTS?</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                With years of experience in software development, we understand the challenges
                                businesses face in today's digital landscape. Our team of expert developers and
                                consultants work closely with you to deliver solutions that not only meet your current
                                needs but also scale with your future growth.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We pride ourselves on delivering high-quality, maintainable code that stands the test of
                                time, ensuring your investment continues to provide value for years to come.
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-700">
                                    <span className="text-brand-orange font-bold mr-3">✓</span>
                                    Expert team of certified developers
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-brand-orange font-bold mr-3">✓</span>
                                    Agile development methodology
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-brand-orange font-bold mr-3">✓</span>
                                    24/7 support and maintenance
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-brand-orange font-bold mr-3">✓</span>
                                    Scalable and future-proof solutions
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-brand-orange font-bold mr-3">✓</span>
                                    Competitive pricing and transparent billing
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-brand-orange font-bold mr-3">✓</span>
                                    On-time project delivery guarantee
                                </li>
                            </ul>
                        </div>

                        <img src={aboutImage} alt={"about section image"}/>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover some of our recent projects that showcase our expertise and commitment to
                            excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProjectCard img={'/public/img/projects/dialcabbies.jpg'} title={"Dial Cabbies"} description={"A taxi service based in Durham, United Kingdoms website."} />
                        <ProjectCard img={'/public/img/projects/vivid.jpg'} title={"Dial Cabbies"} description={"A taxi service based in Durham, United Kingdoms website."} />
                        <ProjectCard img={'/public/img/projects/shdriving.jpg'} title={"shdriving"} description={"A taxi service based in Durham, United Kingdoms website."} />
                    </div>
                </div>
            </section>



        </>
    );
}   