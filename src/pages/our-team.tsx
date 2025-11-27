import CTASection from "@/components/common/cta-section.tsx";
import OurValues from "@/components/common/our-values.tsx";
import HeroSection from "@/components/common/hero-section.tsx";
import TeamCard from "@/components/common/team-card.tsx";
import { Users } from "lucide-react";
import { teamMembers, getSocialIcons } from "@/data/team.tsx";

export default function Team() {

  return (
    <div className="bg-black">
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
      <div className={"container mx-auto px-4 sm:px-0 sm:py-12"}>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Team</h2>
          <p className="mx-auto max-w-2xl text-lg">
            Meet the talented professionals behind our success—dedicated, skilled, and passionate
            about delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              img={member.image_url}
              name={member.name}
              position={member.position}
              socials={getSocialIcons(member)}
            />
          ))}
        </div>
      </div>

      {/* Our Core Values */}
      <OurValues />

      {/* Call To Action */}
      <CTASection />
    </div>
  );
}
