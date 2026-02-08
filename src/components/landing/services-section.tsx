import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Brain,
  Cloud,
  Code2,
  Monitor,
  Paintbrush,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    subtitle: "Modern Web Apps",
    description:
      "Custom web applications built with modern technologies to deliver exceptional user experiences and robust functionality.",
    href: "/web-development",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "iOS & Android",
    description:
      "Native and cross-platform mobile applications that engage users and expand your business reach across all devices.",
    href: "/app-development",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Paintbrush,
    title: "Graphics Designing",
    subtitle: "Visual Identity",
    description:
      "Creative and impactful design solutions including branding, digital illustrations, and marketing materials.",
    href: "/graphics-designing",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Data-Driven Insights",
    description:
      "Intelligent automation and data-driven insights to help your business make smarter decisions and improve efficiency.",
    href: "/ai-development",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Monitor,
    title: "Software Consulting",
    subtitle: "Expert Guidance",
    description:
      "Expert guidance on technology strategy, architecture design, and digital transformation initiatives.",
    href: "/custom-software",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    subtitle: "Scalable Infrastructure",
    description:
      "Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.",
    href: "/cloud-solutions",
    gradient: "from-sky-500/20 to-indigo-500/20",
    iconColor: "text-sky-400",
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="relative py-24">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
            What We Do
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive software solutions designed to transform your business operations and
            drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.href}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card/50 p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-card"
              >
                {/* Hover gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] transition-colors duration-300 group-hover:bg-white/[0.1]`}
                    >
                      <Icon className={`h-5 w-5 ${service.iconColor}`} />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white group-hover:opacity-100" />
                  </div>

                  <h3 className="mb-1 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mb-3 text-xs font-medium tracking-wider text-primary/80 uppercase">
                    {service.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
