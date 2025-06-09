import NavBar from "../components/NavBar.jsx";
import {Helmet} from "react-helmet-async";
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/Cards/ServiceCard.jsx";
import aboutImage from "../assets/home/about.png";
import ProjectCard from "../components/Cards/ProjectCard.jsx";
import ProfileCard from "../components/Cards/ProfileCard.jsx";
import Footer from "../components/Footer.jsx";
import BackToTop from "../components/Buttons/BackToTop.jsx";


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
                            {/*<p className="text-lg text-gray-600 mb-8 leading-relaxed">*/}
                            {/*    We pride ourselves on delivering high-quality, maintainable code that stands the test of*/}
                            {/*    time, ensuring your investment continues to provide value for years to come.*/}
                            {/*</p>*/}

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
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Meet the talented professionals behind our success—dedicated, skilled, and passionate about
                            delivering exceptional results.
                        </p>
                    </div>

                    {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <ProfileCard img={'img/team/naveed.jpeg'} name={'Muhammad Naveed'}
                                     bio={'Software Engineer'}/>
                        <ProfileCard img={'img/team/hamza.png'} name={'Hamza Waheed'}
                                     bio={'Software Engineer'}/>
                        <ProfileCard img={'img/team/Usama.png'} name={'Muhammad Usama'} bio={'SEO Expert'}/>
                        <ProfileCard img={'img/team/shazil.png'} name={'Muhammad Shazil'}
                                     bio={'Web Developer'}/>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ready to transform your business with innovative software solutions? Let's discuss your
                            project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">📧</span>
                                    <span className="text-gray-700">contact@codehuntspk.com</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">📞</span>
                                    <span className="text-gray-700">+92 XXX XXXXXXX</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">📍</span>
                                    <span className="text-gray-700">I-10/2 Islamabad, Pakistan</span>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <form className="space-y-6" id="contactForm">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200"/>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200"/>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200"/>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea id="message" name="message" rows="5" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200 resize-none"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 px-6 rounded-lg cursor-pointer">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            <BackToTop />
        </>
    );
}   