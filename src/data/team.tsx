import { Github, Linkedin, Twitter } from "lucide-react";
import { ReactNode } from "react";

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image_url: string;
  github_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
  website_url?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Muhammad Naveed",
    position: "Software Engineer",
    image_url: "team/naveed.png",
    github_url: "https://github.com/",
    linkedin_url: "https://linkedin.com/in/",
    twitter_url: "https://twitter.com/",
  },
  {
    id: 2,
    name: "Hamza Waheed",
    position: "Data Scientist",
    image_url: "team/hamza.png",
    github_url: "https://github.com/",
    linkedin_url: "https://linkedin.com/in/",
    twitter_url: "https://twitter.com/",
  },
  {
    id: 3,
    name: "Muhammad Usama",
    position: "SEO Expert",
    image_url: "team/Usama.png",
    github_url: "https://github.com/",
    linkedin_url: "https://linkedin.com/in/",
    twitter_url: "https://twitter.com/",
  },
  {
    id: 4,
    name: "Muhammad Shazil",
    position: "Web Developer",
    image_url: "team/shazil-index.png",
    github_url: "https://github.com/",
    linkedin_url: "https://linkedin.com/in/",
    twitter_url: "https://twitter.com/",
  },
];

export const getSocialIcons = (member: TeamMember): ReactNode => {
  return (
    <div className="flex items-center justify-center gap-4">
      {member.github_url && (
        <a
          href={member.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
      )}
      {member.linkedin_url && (
        <a
          href={member.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      )}
      {member.twitter_url && (
        <a
          href={member.twitter_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </a>
      )}
    </div>
  );
};
