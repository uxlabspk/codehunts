import HeroSection from "@/components/common/hero-section.tsx";
import {
    CreditCard,
    Image,
    KeyRound,
    LocationEdit,
    LockKeyhole,
    MessageSquare,
    Smartphone,
} from "lucide-react";
import ServiceOverview from "@/components/services/service-overview.tsx";
import OurStackSection from "@/components/services/our-stack-section.tsx";
import Android from "@/assets/App_tech_stack/android.svg";
import Ios from "@/assets/App_tech_stack/ios.svg";
import ReactJS from "@/assets/App_tech_stack/react.svg";
import Flutter from "@/assets/App_tech_stack/flutter.svg";
import CTASection from "@/components/common/cta-section.tsx";
import Feature from "@/components/services/features-section.tsx";


export default function AppDev() {

    const features = [
        {
            icon: <KeyRound className="h-7 w-7 text-indigo-600" />,
            title: "Push Notifications",
            description: "Engage users with timely updates, personalized messages, and important alerts that keep them connected to your app. ",
            iconBgColor: "bg-indigo-100"
        },
        {
            icon: <LockKeyhole className="h-7 w-7 text-purple-600" />,
            title: "User Authentication",
            description: "Secure login options including social media integration, biometric authentication, and two-factor authentication for enhanced security. ",
            iconBgColor: "bg-purple-100"
        },
        {
            icon: <LocationEdit className="h-7 w-7 text-blue-600" />,
            title: "Location Services",
            description: "Leverage GPS and geolocation features for personalized experiences, location-based services, and mapping functionality. ",
            iconBgColor: "bg-blue-100"
        },
        {
            icon: <MessageSquare className="h-7 w-7 text-green-600" />,
            title: "In-App Messaging",
            description: "Enable real-time communication between users with chat functionality, messaging systems, and collaboration tools.",
            iconBgColor: "bg-green-100"
        },
        {
            icon: <CreditCard className="h-7 w-7 text-orange-600" />,
            title: "Payment Integration",
            description: "Secure payment processing with support for credit cards, digital wallets, and subscription models for seamless transactions.",
            iconBgColor: "bg-orange-100"
        },
        {
            icon: <Image className="h-7 w-7 text-red-600" />,
            title: "Media Integration",
            description: "Support for photos, videos, audio, and other media types with editing tools, sharing capabilities, and cloud storage. ",
            iconBgColor: "bg-red-100"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                title={'Build Exceptional Mobile Apps That Engage Users'}
                description={'Create stunning, high-performance mobile applications for iOS and Android that deliver exceptional user experiences and drive business growth. From concept to launch, we build apps that users love and businesses trust.'}
                hasLinks={false}
                hasCategory={true}
                category={
                    <>
                        <Smartphone className="h-5 w-5 mr-2" />
                        Mobile App Development
                    </>
                }
            />

            {/* Service Overview */}
            <ServiceOverview
                title={'Mobile Applications That Make an Impact'}
                description={'In today\'s mobile-first world, having a powerful mobile presence is essential for business success. '}
                description2={' Our mobile app development services create intuitive, high-performance applications that engage users, solve real problems, and drive business growth across iOS and Android platforms. '}
                card={
                    <div className="grid grid-cols-3 gap-6">
                        <div className="border-2 shadow-lg p-6 rounded-xl">
                            <div className="text-3xl font-bold  mb-2">4.8/5</div>
                            <div className="">Average App Store Rating</div>
                        </div>
                        <div className="border-2 shadow-lg p-6 rounded-xl">
                            <div className="text-3xl font-bold  mb-2">2M+</div>
                            <div className="">Downloads Across All Apps</div>
                        </div>
                        <div className="border-2 shadow-lg p-6 rounded-xl">
                            <div className="text-3xl font-bold  mb-2">95%</div>
                            <div className="">User Retention Rate</div>
                        </div>
                    </div>
                }
                image={'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb'}
            />

            {/* Key Features */}
            <section className="py-20 ">
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
            <section className="py-20 ">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Technology Stack
                        </h2>
                        <p className="text-xl  max-w-3xl mx-auto">
                            We leverage the latest Mobile App development frameworks
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <OurStackSection image={Android} title={'Kotlin/JetPack Compose'} />
                        <OurStackSection image={Ios} title={'Swift/SwiftUI'} />
                        <OurStackSection image={ReactJS} title={'React Native'} />
                        <OurStackSection image={Flutter} title={'Flutter'} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />

        </>
    );
}   