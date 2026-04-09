import { useEffect, useMemo, useState } from "react";
import TeamCard from "@/components/common/team-card.tsx";
import { Github, Globe, Linkedin, Twitter } from "lucide-react";
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
  id: string | number;
  img: string;
  name: string;
  position: string;
  portfolioUrl?: string;
}

const fallbackTeamMembers = [
  { img: "team/naveed.png", name: "Muhammad Naveed", position: "Software Engineer" },
  { img: "team/hamza.png", name: "Hamza Waheed", position: "Data Scientist" },
  { img: "team/Usama.png", name: "Muhammad Usama", position: "SEO Expert" },
  { img: "team/shazil-index.png", name: "Muhammad Shazil", position: "Web Developer" },
];

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

const SocialLinks = ({ portfolioUrl }: { portfolioUrl?: string }) => (
  <div className="flex items-center justify-center gap-3">
    {[
      { icon: Github, href: "https://github.com/" },
      { icon: Linkedin, href: "https://linkedin.com/in/" },
      { icon: Twitter, href: "https://twitter.com/" },
      ...(portfolioUrl ? [{ icon: Globe, href: portfolioUrl }] : []),
    ].map(({ icon: Icon, href }, i) => (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-muted-foreground transition-all duration-300 hover:bg-primary/20 hover:text-primary"
      >
        <Icon className="h-4 w-4" />
      </a>
    ))}
  </div>
);

export default function TeamSection() {
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
        // Keep fallback data if request fails.
      }
    };

    void loadTeam();
    return () => controller.abort();
  }, []);

  const teamMembers = useMemo<DisplayTeamMember[]>(() => {
    if (!apiMembers || apiMembers.length === 0) {
      return fallbackTeamMembers.map((member, index) => ({
        ...member,
        id: `fallback-${index}`,
      }));
    }

    return apiMembers.map((member) => ({
      img: resolveImage(member.profilePic),
      name: member.full_name,
      position: member.jobTitle,
      portfolioUrl: member.portfolioUrl,
      id: member.id,
    }));
  }, [apiMembers]);

  return (
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
            Our People
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Meet the talented professionals behind our success — dedicated, skilled, and passionate
            about delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TeamCard
                img={member.img}
                name={member.name}
                position={member.position}
                socials={<></>}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
