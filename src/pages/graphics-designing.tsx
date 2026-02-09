import HeroSection from "@/components/common/hero-section.tsx";
import { Book, File, Film, Monitor, SwatchBook, Video } from "lucide-react";
import ServiceOverview from "@/components/services/service-overview.tsx";
import Feature from "@/components/services/features-section.tsx";
import OurStackSection from "@/components/services/our-stack-section.tsx";
import CTASection from "@/components/common/cta-section.tsx";
import AfterEffects from "@/assets/Graphics_tech_stack/aftereffects.svg";
import Figma from "@/assets/Graphics_tech_stack/figma.svg";
import Illustrator from "@/assets/Graphics_tech_stack/illustrator.svg";
import Indesign from "@/assets/Graphics_tech_stack/indesign.svg";
import Photoshop from "@/assets/Graphics_tech_stack/photoshop.svg";
import Sketch from "@/assets/Graphics_tech_stack/sketch.svg";
import { motion } from "framer-motion";

export default function Graphics() {
  const features = [
    {
      icon: <SwatchBook className="h-7 w-7 text-indigo-600" />,
      title: "Logo & Branding",
      description:
        "Create a memorable brand identity with custom logos, brand guidelines, and cohesive visual elements that represent your company's values and personality. ",
      iconBgColor: "bg-indigo-100",
    },
    {
      icon: <File className="h-7 w-7 text-purple-600" />,
      title: "Print Design",
      description:
        "Professional print materials that make a lasting impression, from business cards to brochures, posters, and packaging that stand out in the physical world. ",
      iconBgColor: "bg-purple-100",
    },
    {
      icon: <Monitor className="h-7 w-7 text-blue-600" />,
      title: "Digital Design",
      description:
        "Engaging digital experiences for websites, social media, mobile apps, and digital advertising that capture attention and drive engagement in the online space.",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: <Video className="h-7 w-7 text-green-600" />,
      title: "Marketing Materials",
      description:
        "Compelling marketing collateral that communicates your value proposition and drives action, from presentations to infographics and promotional materials. ",
      iconBgColor: "bg-green-100",
    },
    {
      icon: <Book className="h-7 w-7 text-orange-600" />,
      title: "Illustration",
      description:
        "Custom illustrations that bring your ideas to life, from conceptual artwork to technical illustrations and character design for your brand and marketing needs. ",
      iconBgColor: "bg-orange-100",
    },
    {
      icon: <Film className="h-7 w-7 text-red-600" />,
      title: "UI/UX Design",
      description:
        "User-centered interface design that creates intuitive, engaging experiences for websites and applications with beautiful interfaces that users love to interact with. ",
      iconBgColor: "bg-red-100",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={"Create Stunning Visuals That Captivate Your Audience"}
        description={
          "Transform your brand with our expert graphic design services. From logos to marketing materials, we create compelling visuals that communicate your message and leave a lasting impression through exceptional visual storytelling."
        }
        hasLinks={false}
        hasCategory={true}
        category={
          <>
            <SwatchBook className={"mr-2 h-5 w-5"} />
            Graphic Design
          </>
        }
      />

      {/* Service Section */}
      <ServiceOverview
        title={"Visual Design That Drives Results"}
        description={
          "In today's visual world, great design is essential for brand recognition, customer engagement, and business success."
        }
        description2={
          "Our graphic design services combine creativity with strategy to create compelling visuals that communicate your brand message effectively."
        }
        card={
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        }
        image={
          "https://plus.unsplash.com/premium_photo-1666899940579-6c931e34d52c?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
        }
      />

      {/* Key Features */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-3 sm:mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Services
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Design Services</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Comprehensive graphic design solutions for all your business needs
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
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-3 sm:mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Tools
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Design Tools & Software</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              We work with industry-leading design tools to deliver exceptional visual solutions for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
            {[Photoshop, Illustrator, Indesign, Figma, Sketch, AfterEffects].map((image, index) => {
              const titles = ["Photoshop", "Illustration", "InDesign", "Figma", "Sketch", "After Effects"];
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
