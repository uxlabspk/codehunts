import { useEffect, useMemo, useState } from "react";
import CTASection from "@/components/common/cta-section.tsx";
import OurValues from "@/components/common/our-values.tsx";
import HeroSection from "@/components/common/hero-section.tsx";
import TeamCard from "@/components/common/team-card.tsx";
import { Globe, Github, Linkedin, Twitter, Users } from "lucide-react";
import { teamMembers, getSocialIcons } from "@/data/team.tsx";
import { motion } from "framer-motion";
import { config } from "@/config/env";

interface ApiTeamMember {
  id: number;
  profilePic: string;
  full_name: string;
  jobTitle: string;
  portfolioUrl: string;
}

interface TeamApiResponse {
  success: boolean;
  data: ApiTeamMember[];
}

interface DisplayTeamMember {
  id: number;
  name: string;
  position: string;
  image_url: string;
  socials: React.ReactNode;
}

const buildApiBase = () => {
  const appUrl = config.app.url.trim().replace(/\/+$/, "");
  return `${appUrl}/api`;
};

const resolveImage = (imagePath: string) => {
  if (!imagePath) {
    return "team/naveed.png";
  }

  if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("/")) {
    return imagePath;
  }

  return `${config.app.url.replace(/\/+$/, "")}/${imagePath.replace(/^\/+/, "")}`;
};

const ApiSocialLinks = ({ portfolioUrl }: { portfolioUrl?: string }) => (
  <div className="flex items-center justify-center gap-4">
    {[
      { icon: Github, href: "https://github.com/" },
      { icon: Linkedin, href: "https://linkedin.com/in/" },
      { icon: Twitter, href: "https://twitter.com/" },
      ...(portfolioUrl ? [{ icon: Globe, href: portfolioUrl }] : []),
    ].map(({ icon: Icon, href }, index) => (
      <a
        key={`${href}-${index}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 transition-colors hover:text-primary"
      >
        <Icon className="h-5 w-5" />
      </a>
    ))}
  </div>
);

export default function Team() {
  const [apiMembers, setApiMembers] = useState<ApiTeamMember[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadTeam = async () => {
      try {
        const response = await fetch(`${buildApiBase()}/team/public.php`, {
          method: "GET",
          signal: controller.signal,
        });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as TeamApiResponse;
        if (payload.success && Array.isArray(payload.data)) {
          setApiMembers(payload.data);
        }
      } catch {
        // Keep static data when API is unavailable.
      }
    };

    void loadTeam();
    return () => controller.abort();
  }, []);

  const members = useMemo<DisplayTeamMember[]>(() => {
    if (!apiMembers || apiMembers.length === 0) {
      return teamMembers.map((member) => ({
        id: member.id,
        name: member.name,
        position: member.position,
        image_url: member.image_url,
        socials: getSocialIcons(member),
      }));
    }

    return apiMembers.map((member) => ({
      id: member.id,
      name: member.full_name,
      position: member.jobTitle,
      image_url: resolveImage(member.profilePic),
      socials: <ApiSocialLinks portfolioUrl={member.portfolioUrl} />,
    }));
  }, [apiMembers]);

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
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16 text-center"
          >
            <span className="mb-3 sm:mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              The Team
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Meet the talented professionals behind our success — dedicated, skilled, and passionate
              about delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {members.map((member, index) => (
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
