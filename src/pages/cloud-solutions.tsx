import HeroSection from "@/components/common/hero-section.tsx";
import { Cloud, DollarSign, Recycle, Shield, Spool, Zap } from "lucide-react";
import ServiceOverview from "@/components/services/service-overview.tsx";
import OurStackSection from "@/components/services/our-stack-section.tsx";
import Aws from "@/assets/Cloud_tech_stack/aws.svg";
import Azure from "@/assets/Cloud_tech_stack/azure.svg";
import GoogleCloud from "@/assets/Cloud_tech_stack/google-cloud.svg";
import MultiCloud from "@/assets/Cloud_tech_stack/multi-cloud.svg";
import CTASection from "@/components/common/cta-section.tsx";
import Feature from "@/components/services/features-section.tsx";
import { motion } from "framer-motion";

export default function CloudSolutions() {
  const features = [
    {
      icon: <Zap className="h-7 w-7 text-indigo-600" />,
      title: "Scalability",
      description:
        "Scale resources up or down instantly based on demand, ensuring optimal performance without over-provisioning. ",
      iconBgColor: "bg-indigo-100",
    },
    {
      icon: <DollarSign className="h-7 w-7 text-purple-600" />,
      title: "Cost Efficiency",
      description:
        "Reduce capital expenditure and operational costs with pay-as-you-use pricing models and reduced infrastructure overhead. ",
      iconBgColor: "bg-purple-100",
    },
    {
      icon: <Shield className="h-7 w-7 text-blue-600" />,
      title: "Security",
      description:
        "Enterprise-grade security with encryption, identity management, and compliance with industry standards. ",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: <Recycle className="h-7 w-7 text-green-600" />,
      title: "Disaster Recovery",
      description:
        "Automated backups, replication, and failover capabilities ensure business continuity and data protection. ",
      iconBgColor: "bg-green-100",
    },
    {
      icon: <Zap className="h-7 w-7 text-orange-600" />,
      title: "Performance",
      description:
        "High-performance computing resources with global distribution for low-latency access and optimal user experience. ",
      iconBgColor: "bg-orange-100",
    },
    {
      icon: <Spool className="h-7 w-7 text-red-600" />,
      title: "Collaboration",
      description:
        "Enable seamless collaboration with shared resources, real-time access, and integrated communication tools.",
      iconBgColor: "bg-red-100",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={"Scale Your Business with Enterprise-Grade Cloud Solutions"}
        description={
          "Transform your IT infrastructure with our comprehensive cloud services. From migration to management, we provide secure, scalable, and cost-effective cloud solutions that drive innovation and business growth."
        }
        hasLinks={false}
        hasCategory={true}
        category={
          <>
            <Cloud className="mr-2 h-5 w-5" /> Cloud Services
          </>
        }
      />

      {/* Service Section */}
      <ServiceOverview
        title={"Cloud Solutions That Power Your Business"}
        description={
          "In today's digital landscape, cloud computing is essential for business agility, scalability, and cost-efficiency."
        }
        description2={
          " Our cloud services help you leverage the full potential of cloud technology while ensuring security, performance, and seamless integration with your existing systems."
        }
        card={
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">60%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        }
        image={
          "https://images.unsplash.com/photo-1667264501379-c1537934c7ab?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
        }
      />

      {/* Key Features */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-3 sm:mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Features
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Key Features & Benefits
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Our cloud solutions deliver scalability, security, and cost-efficiency for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Feature {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Tec Stack Section */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-3 sm:mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Platforms
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Cloud Platforms We Support</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Multi-cloud expertise across all major cloud providers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[Aws, Azure, GoogleCloud, MultiCloud].map((image, index) => {
              const titles = ["Amazon Web Services", "Microsoft Azure", "Google Cloud", "Multi-Cloud"];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <OurStackSection image={image} title={titles[index]} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
