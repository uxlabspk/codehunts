import HeroSection from "@/components/common/hero-section.tsx";
import {
    Check,
    Code,
    DollarSign,
    Heart,
    LockKeyhole,
    Signal,
    Zap
} from "lucide-react";
import ServiceOverview from "@/components/services/service-overview.tsx";
import Feature from "@/components/services/features-section.tsx";
import OurStackSection from "@/components/services/our-stack-section.tsx";
import Android from "@/assets/Custom_tech_stack/android.svg";
import Aws from "@/assets/Custom_tech_stack/aws.svg";
import Postgresql from "@/assets/Custom_tech_stack/postgresql.svg";
import ReactJs from "@/assets/Custom_tech_stack/react.svg";
import SpringBoot from "@/assets/Custom_tech_stack/springboot.svg";
import CTASection from "@/components/common/cta-section.tsx";


export default function CustomSoftware() {

    const features = [
        {
            icon: <Zap className="h-7 w-7 text-indigo-600" />,
            title: "Increased Efficiency",
            description: "Automate repetitive tasks, streamline workflows, and eliminate manual processes to save time and reduce errors. Our solutions integrate seamlessly with your existing systems to maximize productivity. ",
            iconBgColor: "bg-indigo-100"
        },
        {
            icon: <DollarSign className="h-7 w-7 text-purple-600" />,
            title: "Cost Savings",
            description: "Reduce operational costs by automating processes and eliminating inefficiencies. Our custom solutions are designed to provide maximum ROI by addressing your specific business needs. ",
            iconBgColor: "bg-purple-100"
        },
        {
            icon: <Signal className="h-7 w-7 text-blue-600" />,
            title: "Scalability",
            description: "Build solutions that grow with your business. Our scalable architecture ensures your software can handle increased users, data, and functionality as your business expands without requiring complete rebuilds. ",
            iconBgColor: "bg-blue-100"
        },
        {
            icon: <Check className="h-7 w-7 text-green-600" />,
            title: "Competitive Advantage",
            description: "Differentiate your business with unique capabilities that set you apart from competitors. Our custom solutions provide features and functionality that are specifically designed to give you a market edge. ",
            iconBgColor: "bg-green-100"
        },
        {
            icon: <LockKeyhole className="h-7 w-7 text-orange-600" />,
            title: "Enhanced Security",
            description: "Implement robust security measures tailored to your specific requirements and compliance needs. Our solutions include encryption, authentication, and monitoring to protect your data and systems.",
            iconBgColor: "bg-orange-100"
        },
        {
            icon: <Heart className="h-7 w-7 text-red-600" />,
            title: "Improved User Experience",
            description: "Create intuitive, engaging interfaces that users love to interact with. Our user-centered design approach ensures your software is not only functional but also delightful to use. ",
            iconBgColor: "bg-red-100"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                title={'Build Bespoke Software That Powers Your Business '}
                description={'Transform your business operations with custom software solutions designed specifically for your unique challenges and goals. From enterprise applications to specialized tools, we create software that drives efficiency and innovation.'}
                hasLinks={false}
                hasCategory={true}
                category={
                    <><Code className={'h-5 w-5 mr-2'} />Custom Software Development</>
                }
            />

            {/* Service Section */}
            <ServiceOverview
                title={'Tailored Solutions for Your Unique Business Needs'}
                description={'Off-the-shelf software rarely addresses all your business requirements. Our custom development approach creates solutions that perfectly align with your workflows, processes, and strategic goals. '}
                description2={' We work closely with your team to understand your challenges and opportunities, then design and build software that enhances productivity, improves customer experiences, and gives you a competitive edge. '}
                card={
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="border-2 shadow-lg p-6 rounded-xl">
                            <div className="text-3xl font-bold  mb-2">98%</div>
                            <div className="">Client Satisfaction Rate</div>
                        </div>
                        <div className="border-2 shadow-lg p-6 rounded-xl">
                            <div className="text-3xl font-bold  mb-2">500+</div>
                            <div className="">Projects Delivered</div>
                        </div>
                        <div className="border-2 shadow-lg p-6 rounded-xl">
                            <div className="text-3xl font-bold  mb-2">50+</div>
                            <div className="">Enterprise Clients</div>
                        </div>
                    </div>
                }
                image={'https://plus.unsplash.com/premium_photo-1675718064296-979877241868?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb'}
            />

            {/* Key Features */}
            <section className="py-20 px-4 sm:px-0 bg-black">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Key Benefits
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto">
                            Transform your business with our custom software development services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Feature key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Tec Stack Section */}
            <section className="py-4 sm:py-20 px-4 sm:px-0 bg-black">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Technology Stack
                        </h2>
                        <p className="text-xl  max-w-3xl mx-auto">
                            We leverage the latest technologies and frameworks to build robust, scalable solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        <OurStackSection image={ReactJs} title={'Frontend'} />
                        <OurStackSection image={SpringBoot} title={'Backend'} />
                        <OurStackSection image={Android} title={'Mobile'} />
                        <OurStackSection image={Postgresql} title={'Database'} />
                        <OurStackSection image={Aws} title={'Cloud'} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </>
    )
}