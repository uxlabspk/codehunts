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
            <div className="rounded-xl border-2 p-6 shadow-lg">
              <div className="mb-2 text-3xl font-bold">98%</div>
              <div className="">Client Satisfaction</div>
            </div>
            <div className="rounded-xl border-2 p-6 shadow-lg">
              <div className="mb-2 text-3xl font-bold">500+</div>
              <div className="">Projects Completed</div>
            </div>
            <div className="rounded-xl border-2 p-6 shadow-lg">
              <div className="mb-2 text-3xl font-bold">50+</div>
              <div className="">Happy Clients</div>
            </div>
          </div>
        }
        image={
          "https://plus.unsplash.com/premium_photo-1666899940579-6c931e34d52c?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
        }
      />

      {/* Key Features */}
      <section className="bg-black px-4 py-20 sm:px-0">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Design Services</h2>
            <p className="mx-auto max-w-3xl text-xl">
              Comprehensive graphic design solutions for all your business needs
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
      <section className="bg-black px-4 py-4 sm:px-0 sm:py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Design Tools & Software</h2>
            <p className="mx-auto max-w-3xl text-xl">
              We work with industry-leading design tools to deliver exceptional visual solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
            <OurStackSection image={Photoshop} title={"Photoshop"} />
            <OurStackSection image={Illustrator} title={"Illustration"} />
            <OurStackSection image={Indesign} title={"InDesign"} />
            <OurStackSection image={Figma} title={"Figma"} />
            <OurStackSection image={Sketch} title={"Sketch"} />
            <OurStackSection image={AfterEffects} title={"After Effects"} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
