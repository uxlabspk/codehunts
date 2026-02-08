import TeamCard from "@/components/common/team-card.tsx";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  { img: "team/naveed.png", name: "Muhammad Naveed", position: "Software Engineer" },
  { img: "team/hamza.png", name: "Hamza Waheed", position: "Data Scientist" },
  { img: "team/Usama.png", name: "Muhammad Usama", position: "SEO Expert" },
  { img: "team/shazil-index.png", name: "Muhammad Shazil", position: "Web Developer" },
];

const SocialLinks = () => (
  <div className="flex items-center justify-center gap-3">
    {[
      { icon: Github, href: "https://github.com/" },
      { icon: Linkedin, href: "https://linkedin.com/in/" },
      { icon: Twitter, href: "https://twitter.com/" },
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
  return (
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TeamCard
                img={member.img}
                name={member.name}
                position={member.position}
                socials={<SocialLinks />}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
