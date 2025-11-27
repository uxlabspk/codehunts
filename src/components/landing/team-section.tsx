import TeamCard from "@/components/common/team-card.tsx";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function TeamSection() {
  return (
    <section id="portfolio" className="bg-black py-20">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Team</h2>
          <p className="mx-auto max-w-2xl text-lg">
            Meet the talented professionals behind our success—dedicated, skilled, and passionate
            about delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <TeamCard
            img={"team/naveed.png"}
            name={"Muhammad Naveed"}
            position={"Software Engineer"}
            socials={
              <div className="flex items-center justify-center gap-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            }
          />

          <TeamCard
            img={"team/hamza.png"}
            name={"Hamza Waheed"}
            position={"Data Scientist"}
            socials={
              <div className="flex items-center justify-center gap-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            }
          />

          <TeamCard
            img={"team/Usama.png"}
            name={"Muhammad Usama"}
            position={"SEO Expert"}
            socials={
              <div className="flex items-center justify-center gap-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            }
          />

          <TeamCard
            img={"team/shazil-index.png"}
            name={"Muhammad Shazil"}
            position={"Web Developer"}
            socials={
              <div className="flex items-center justify-center gap-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
