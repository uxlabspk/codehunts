import HeroSection from "@/components/common/hero-section.tsx";
import CompanyStats from "@/components/common/company-stats.tsx";
import OurValues from "@/components/common/our-values.tsx";
import TeamSection from "@/components/landing/team-section.tsx";
import CTASection from "@/components/common/cta-section.tsx";
import { Store } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={"Transforming Ideas Into Digital Reality"}
        description={
          "We are a team of passionate developers, designers, and innovators dedicated to creating cutting-edge software solutions that empower businesses worldwide."
        }
        hasLinks={false}
        hasCategory={true}
        category={
          <>
            <Store className={"mr-2 h-5 w-5"} />
            About Us
          </>
        }
      />

      {/* Company Statistics Section */}
      <CompanyStats />

      {/* Our Story Section */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
                Our Journey
              </span>
              <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-4xl">Our Story</h2>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Founded in 2023, Code HUNT'S began as a small team of passionate developers with a
                  simple mission: to create software that makes a difference. What started in a
                  small garage has grown into a thriving company serving clients across the globe.
                </p>
                <p>
                  We believe that great software is more than just code—it's about understanding
                  people, solving real problems, and creating experiences that users love. Every
                  project we take on is an opportunity to push boundaries and exceed expectations.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for startups, enterprises, and
                  everything in between, helping them navigate the digital landscape with confidence
                  and innovation.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-primary/[0.04] blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="relative h-80 w-full rounded-2xl border border-white/[0.06] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Our Values Section */}
      <OurValues />

      {/* Call To Action Section */}
      <CTASection />
    </>
  );
}
