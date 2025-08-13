import HeroSection from "@/components/common/hero-section.tsx";
import {
    Cloud,
    DollarSign,
    Recycle,
    Shield,
    Spool,
    Zap
} from "lucide-react";
import ServiceOverview from "@/components/services/service-overview.tsx";
import OurStackSection from "@/components/services/our-stack-section.tsx";
import Aws from "@/assets/Cloud_tech_stack/aws.svg";
import Azure from "@/assets/Cloud_tech_stack/azure.svg";
import GoogleCloud from "@/assets/Cloud_tech_stack/google-cloud.svg";
import MultiCloud from "@/assets/Cloud_tech_stack/multi-cloud.svg";
import CTASection from "@/components/common/cta-section.tsx";
import Feature from "@/components/services/features-section.tsx";


export default function CloudSolutions() {

    const features = [
        {
            icon: <Zap className="h-7 w-7 text-indigo-600" />,
            title: "Scalability",
            description: "Scale resources up or down instantly based on demand, ensuring optimal performance without over-provisioning. ",
            iconBgColor: "bg-indigo-100"
        },
        {
            icon: <DollarSign className="h-7 w-7 text-purple-600" />,
            title: "Cost Efficiency",
            description: "Reduce capital expenditure and operational costs with pay-as-you-use pricing models and reduced infrastructure overhead. ",
            iconBgColor: "bg-purple-100"
        },
        {
            icon: <Shield className="h-7 w-7 text-blue-600" />,
            title: "Security",
            description: "Enterprise-grade security with encryption, identity management, and compliance with industry standards. ",
            iconBgColor: "bg-blue-100"
        },
        {
            icon: <Recycle className="h-7 w-7 text-green-600" />,
            title: "Disaster Recovery",
            description: "Automated backups, replication, and failover capabilities ensure business continuity and data protection. ",
            iconBgColor: "bg-green-100"
        },
        {
            icon: <Zap className="h-7 w-7 text-orange-600" />,
            title: "Performance",
            description: "High-performance computing resources with global distribution for low-latency access and optimal user experience. ",
            iconBgColor: "bg-orange-100"
        },
        {
            icon: <Spool className="h-7 w-7 text-red-600" />,
            title: "Collaboration",
            description: "Enable seamless collaboration with shared resources, real-time access, and integrated communication tools.",
            iconBgColor: "bg-red-100"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                title={'Scale Your Business with Enterprise-Grade Cloud Solutions'}
                description={'Transform your IT infrastructure with our comprehensive cloud services. From migration to management, we provide secure, scalable, and cost-effective cloud solutions that drive innovation and business growth.'}
                hasLinks={false}
                hasCategory={true}
                category={
                    <><Cloud className="h-5 w-5 mr-2" /> Cloud Services</>
                }
            />

            {/* Service Section */}
            <ServiceOverview
                title={'Cloud Solutions That Power Your Business'}
                description={'In today\'s digital landscape, cloud computing is essential for business agility, scalability, and cost-efficiency.'}
                description2={' Our cloud services help you leverage the full potential of cloud technology while ensuring security, performance, and seamless integration with your existing systems.'}
                card={
                    <div className="grid grid-cols-3 gap-6">
                        <div className="border-2 shadow-lg p-6 rounded-xl">
                            <div className="text-3xl font-bold  mb-2">99.99%</div>
                            <div className="">Uptime Guarantee</div>
                        </div>
                        <div className="border-2 shadow-lg p-6 rounded-xl">
                            <div className="text-3xl font-bold  mb-2">60%</div>
                            <div className="">Cost Reduction</div>
                        </div>
                        <div className="border-2 shadow-lg p-6 rounded-xl">
                            <div className="text-3xl font-bold  mb-2">24/7</div>
                            <div className="">Support Available</div>
                        </div>
                    </div>
                }
                image={'https://images.unsplash.com/photo-1667264501379-c1537934c7ab?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb'}
            />

            {/* Key Features */}
            <section className="py-20 bg-black">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Key <span className="">Features</span> & Benefits
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto">
                            Our web development solutions deliver measurable results that drive business growth
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
            <section className="py-20 bg-black">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Supported Cloud Platforms
                        </h2>
                        <p className="text-xl  max-w-3xl mx-auto">
                            We work with all major cloud providers to deliver the best solutions for your business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <OurStackSection image={Aws} title={'Amazon Web Services'} />
                        <OurStackSection image={Azure} title={'Microsoft Azure'} />
                        <OurStackSection image={GoogleCloud} title={'Google Cloud'} />
                        <OurStackSection image={MultiCloud} title={'Multi-Cloud'} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </>
    )
}