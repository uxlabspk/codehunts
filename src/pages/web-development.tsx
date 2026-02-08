import {
  Code,
  Zap,
  Shield,
  ArrowLeft,
  RotateCcw,
  BarChart,
  Trophy,
  Building,
  Users,
  ShoppingCart,
} from "lucide-react";
import CTASection from "@/components/common/cta-section.tsx";
import UseCase from "@/components/services/usecases.tsx";
import Feature from "@/components/services/features-section.tsx";
import HeroSection from "@/components/common/hero-section.tsx";
import ServiceOverview from "@/components/services/service-overview.tsx";
import OurStackSection from "@/components/services/our-stack-section.tsx";
import NextJS from "@/assets/Web_tech_stack/nextjs.svg";
import Postgresql from "@/assets/Web_tech_stack/postgresql.svg";
import ReactJS from "@/assets/Web_tech_stack/react.svg";
import Php from "@/assets/Web_tech_stack/php.svg";
import SpringBoot from "@/assets/Web_tech_stack/springboot.svg";

export default function WebDev() {
  const features = [
    {
      icon: <Zap className="h-7 w-7 text-indigo-600" />,
      title: "Lightning Fast Performance",
      description:
        "Optimized code and modern frameworks ensure your website loads quickly and performs flawlessly across all devices.",
      iconBgColor: "bg-indigo-100",
    },
    {
      icon: <Shield className="h-7 w-7 text-purple-600" />,
      title: "Robust Security",
      description:
        "Implement industry-standard security measures to protect your website and user data from threats.",
      iconBgColor: "bg-purple-100",
    },
    {
      icon: <ArrowLeft className="h-7 w-7 text-blue-600" />,
      title: "Responsive Design",
      description:
        "Your website will look and function perfectly on desktops, tablets, and mobile devices.",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: <RotateCcw className="h-7 w-7 text-green-600" />,
      title: "Scalable Architecture",
      description:
        "Built to grow with your business, handling increased traffic and expanding functionality seamlessly.",
      iconBgColor: "bg-green-100",
    },
    {
      icon: <BarChart className="h-7 w-7 text-orange-600" />,
      title: "SEO Optimized",
      description:
        "Built-in SEO best practices ensure your website ranks well in search engines and drives organic traffic.",
      iconBgColor: "bg-orange-100",
    },
    {
      icon: <Trophy className="h-7 w-7 text-red-600" />,
      title: "Modern Technologies",
      description:
        "Leverage the latest web technologies and frameworks for cutting-edge functionality and user experience.",
      iconBgColor: "bg-red-100",
    },
  ];

  const useCases = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Corporate Websites",
      description:
        "Professional websites that establish credibility, showcase services, and generate leads for your business.",
      features: ["Company profiles", "Service portfolios", "Contact forms", "Blog integration"],
      iconBgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-commerce Solutions",
      description:
        "Full-featured online stores with shopping carts, payment processing, and inventory management.",
      features: ["Product catalogs", "Secure checkout", "Payment gateways", "Order management"],
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Web Applications",
      description:
        "Interactive web applications that provide specific functionality and enhance user engagement.",
      features: [
        "User dashboards",
        "Real-time features",
        "Database integration",
        "API connectivity",
      ],
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={"Create Stunning Websites That Drive Results"}
        description={
          " Transform your online presence with custom websites that combine beautiful design, cutting-edge technology, and exceptional user experience. From concept to launch, we build websites that engage visitors and grow your business."
        }
        hasLinks={false}
        hasCategory={true}
        category={
          <>
            <Code className="mr-2 h-5 w-5" /> Professional Web Development
          </>
        }
      />

      {/* Service Overview */}
      <ServiceOverview
        title={"Professional Web Development Solutions"}
        description={
          "Your website is often the first impression potential customers have of your business.We create websites that not only look exceptional but also deliver outstanding performance and user experience."
        }
        description2={
          "From responsive design to complex web applications, we use the latest technologies and best practices to ensure your website stands out from the competition and achieves your business objectives."
        }
        card={
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">150+</div>
              <div className="text-sm text-muted-foreground">Websites Delivered</div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-5">
              <div className="mb-1 text-2xl font-bold text-white">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        }
        image={
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
        }
      />

      {/* Key Features */}
      <section className="relative py-24">
        <div className="section-divider mb-24" />
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Features
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Key Features & Benefits
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Our web development solutions deliver measurable results that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-24">
        <div className="section-divider mb-24" />
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Solutions
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Website Solutions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Custom web development for various business needs and industries
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <UseCase key={index} {...useCase} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Tec Stack Section */}
      <section className="relative py-24">
        <div className="section-divider mb-24" />
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Technology
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Technologies We Use
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Modern frameworks and tools that power fast, scalable web applications
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            <OurStackSection image={NextJS} title={"Next.JS"} />
            <OurStackSection image={ReactJS} title={"React"} />
            <OurStackSection image={Postgresql} title={"Postgresql"} />
            <OurStackSection image={SpringBoot} title={"SpringBoot"} />
            <OurStackSection image={Php} title={"Php"} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
