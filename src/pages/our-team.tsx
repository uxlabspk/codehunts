import CTASection from "@/components/common/cta-section.tsx";
import OurValues from "@/components/common/our-values.tsx";
import HeroSection from "@/components/common/hero-section.tsx";
import TeamCard from "@/components/common/team-card.tsx";
import { Users } from "lucide-react";
import { teamMembers, getSocialIcons } from "@/data/team.tsx";
import { motion } from "framer-motion";

export default function Team() {

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={"Meet Our Exceptional Team"}
        description={
          "We're a diverse group of innovators, developers, designers, and strategists united by a passion for creating cutting-edge software solutions."
        }
        hasLinks={false}
        hasCategory={true}
        category={
          <>
            <Users className={"mr-2 h-5 w-5"} />
            Our Team
          </>
        }
      />

      {/* Our Team Section */}
      <section className="relative py-24">
        <div className="section-divider mb-24" />
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              The Team
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Meet the talented professionals behind our success — dedicated, skilled, and passionate
              about delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamCard
                  img={member.image_url}
                  name={member.name}
                  position={member.position}
                  socials={getSocialIcons(member)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <OurValues />

      {/* Call To Action */}
      <CTASection />
    </div>
  );
}
