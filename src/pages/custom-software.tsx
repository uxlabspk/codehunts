import HeroSection from "@/components/common/hero-section.tsx";
import { Check, Code, DollarSign, Heart, LockKeyhole, Signal, Zap } from "lucide-react";
import ServiceOverview from "@/components/services/service-overview.tsx";
import Feature from "@/components/services/features-section.tsx";
import OurStackSection from "@/components/services/our-stack-section.tsx";
import Android from "@/assets/Custom_tech_stack/android.svg";
import Aws from "@/assets/Custom_tech_stack/aws.svg";
import Postgresql from "@/assets/Custom_tech_stack/postgresql.svg";
import ReactJs from "@/assets/Custom_tech_stack/react.svg";
import SpringBoot from "@/assets/Custom_tech_stack/springboot.svg";
import CTASection from "@/components/common/cta-section.tsx";
import { motion } from "framer-motion";

export default function CustomSoftware() {
  const features = [
    {
      icon: <Zap className="h-7 w-7 text-indigo-600" />,
      title: "Increased Efficiency",
      description:
        "Automate repetitive tasks, streamline workflows, and eliminate manual processes to save time and reduce errors. Our solutions integrate seamlessly with your existing systems to maximize productivity. ",
      iconBgColor: "bg-indigo-100",
    },
    {
      icon: <DollarSign className="h-7 w-7 text-purple-600" />,
      title: "Cost Savings",
      description:
        "Reduce operational costs by automating processes and eliminating inefficiencies. Our custom solutions are designed to provide maximum ROI by addressing your specific business needs. ",
      iconBgColor: "bg-purple-100",
    },
    {
      icon: <Signal className="h-7 w-7 text-blue-600" />,
      title: "Scalability",
      description:
        "Build solutions that grow with your business. Our scalable architecture ensures your software can handle increased users, data, and functionality as your business expands without requiring complete rebuilds. ",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: <Check className="h-7 w-7 text-green-600" />,
      title: "Competitive Advantage",
      description:
        "Differentiate your business with unique capabilities that set you apart from competitors. Our custom solutions provide features and functionality that are specifically designed to give you a market edge. ",
      iconBgColor: "bg-green-100",
    },
    {
      icon: <LockKeyhole className="h-7 w-7 text-orange-600" />,
      title: "Enhanced Security",
      description:
        "Implement robust security measures tailored to your specific requirements and compliance needs. Our solutions include encryption, authentication, and monitoring to protect your data and systems.",
      iconBgColor: "bg-orange-100",
    },
    {
      icon: <Heart className="h-7 w-7 text-red-600" />,
      title: "Improved User Experience",
      description:
        "Create intuitive, engaging interfaces that users love to interact with. Our user-centered design approach ensures your software is not only functional but also delightful to use. ",
      iconBgColor: "bg-red-100",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={"Build Bespoke Software That Powers Your Business "}
        description={
          "Transform your business operations with custom software solutions designed specifically for your unique challenges and goals. From enterprise applications to specialized tools, we create software that drives efficiency and innovation."
        }
        hasLinks={false}
        hasCategory={true}
        category={
          <>
            <Code className={"mr-2 h-5 w-5"} />
            Custom Software Development
          </>
        }
      />

      {/* Service Section */}
      <ServiceOverview
        title={"Tailored Solutions for Your Unique Business Needs"}
        description={
          "Off-the-shelf software rarely addresses all your business requirements. Our custom development approach creates solutions that perfectly align with your workflows, processes, and strategic goals. "
        }
        description2={
          " We work closely with your team to understand your challenges and opportunities, then design and build software that enhances productivity, improves customer experiences, and gives you a competitive edge. "
        }
        card={
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
          </div>
        }
        image={
          "https://plus.unsplash.com/premium_photo-1675718064296-979877241868?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
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
              Benefits
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Key Benefits</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Transform your business with our custom software development services
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
              Technology
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Full-Stack Development Capabilities</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              End-to-end technology expertise from frontend to cloud infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[ReactJs, SpringBoot, Android, Postgresql, Aws].map((image, index) => {
              const titles = ["Frontend", "Backend", "Mobile", "Database", "Cloud"];
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
