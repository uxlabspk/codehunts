import { useEffect, useState } from "react";
import CTASection from "@/components/common/cta-section.tsx";
import OurValues from "@/components/common/our-values.tsx";
import HeroSection from "@/components/common/hero-section.tsx";
import TeamCard from "@/components/common/team-card.tsx";
import { Github, Linkedin, Twitter, Users } from "lucide-react";
import { config } from "@/config/env";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image_url: string;
  github_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
  website_url?: string;
}

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch(`${config.api.baseUrl}/api/team.php`);
      const data = await response.json();

      if (data.success) {
        setTeamMembers(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch team members:', error);
    } finally {
      setLoading(false);
    }
  };

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
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                img={member.image_url}
                name={member.name}
                position={member.position}
                socials={
                  <div className="flex items-center justify-center gap-4">
                    {member.github_url && (
                      <a href={member.github_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.linkedin_url && (
                      <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.twitter_url && (
                      <a href={member.twitter_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                }
              />
            ))}
          </div>
        )}
      </div>

      {/* Our Core Values */}
      <OurValues />

      {/* Call To Action */}
      <CTASection />
    </div>
  );
}
