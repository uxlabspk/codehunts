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
      description:
        "Engage users with timely updates, personalized messages, and important alerts that keep them connected to your app. ",
      iconBgColor: "bg-indigo-100",
    },
    {
      icon: <LockKeyhole className="h-7 w-7 text-purple-600" />,
      title: "User Authentication",
      description:
        "Secure login options including social media integration, biometric authentication, and two-factor authentication for enhanced security. ",
      iconBgColor: "bg-purple-100",
    },
    {
      icon: <LocationEdit className="h-7 w-7 text-blue-600" />,
      title: "Location Services",
      description:
        "Leverage GPS and geolocation features for personalized experiences, location-based services, and mapping functionality. ",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-green-600" />,
      title: "In-App Messaging",
      description:
        "Enable real-time communication between users with chat functionality, messaging systems, and collaboration tools.",
      iconBgColor: "bg-green-100",
    },
    {
      icon: <CreditCard className="h-7 w-7 text-orange-600" />,
      title: "Payment Integration",
      description:
        "Secure payment processing with support for credit cards, digital wallets, and subscription models for seamless transactions.",
      iconBgColor: "bg-orange-100",
    },
    {
      icon: <Image className="h-7 w-7 text-red-600" />,
      title: "Media Integration",
      description:
        "Support for photos, videos, audio, and other media types with editing tools, sharing capabilities, and cloud storage. ",
      iconBgColor: "bg-red-100",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={"Build Exceptional Mobile Apps That Engage Users"}
        description={
          "Create stunning, high-performance mobile applications for iOS and Android that deliver exceptional user experiences and drive business growth. From concept to launch, we build apps that users love and businesses trust."
        }
        hasLinks={false}
        hasCategory={true}
        category={
          <>
            <Smartphone className="mr-2 h-5 w-5" />
            Mobile App Development
          </>
        }
      />

      {/* Service Overview */}
      <ServiceOverview
        title={"Mobile Applications That Make an Impact"}
        description={
          "In today's mobile-first world, having a powerful mobile presence is essential for business success. "
        }
        description2={
          " Our mobile app development services create intuitive, high-performance applications that engage users, solve real problems, and drive business growth across iOS and Android platforms. "
        }
        card={
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border-2 p-6 shadow-lg">
              <div className="mb-2 text-3xl font-bold">4.8/5</div>
              <div className="">Average App Store Rating</div>
            </div>
            <div className="rounded-xl border-2 p-6 shadow-lg">
              <div className="mb-2 text-3xl font-bold">2M+</div>
              <div className="">Downloads Across All Apps</div>
            </div>
            <div className="rounded-xl border-2 p-6 shadow-lg">
              <div className="mb-2 text-3xl font-bold">95%</div>
              <div className="">User Retention Rate</div>
            </div>
          </div>
        }
        image={
          "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
        }
      />

      {/* Key Features */}
      <section className="bg-black px-4 py-20 sm:px-0">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Key <span className="">Features</span> & Benefits
            </h2>
            <p className="mx-auto max-w-3xl text-xl">
              Our mobile app solutions deliver exceptional user experiences that drive engagement and growth
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Tec Stack Section */}
      <section className="bg-black px-4 sm:px-0 sm:py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Native & Cross-Platform Development</h2>
            <p className="mx-auto max-w-3xl text-xl">
              Building high-performance mobile apps with proven frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <OurStackSection image={Android} title={"Kotlin/JetPack Compose"} />
            <OurStackSection image={Ios} title={"Swift/SwiftUI"} />
            <OurStackSection image={ReactJS} title={"React Native"} />
            <OurStackSection image={Flutter} title={"Flutter"} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
