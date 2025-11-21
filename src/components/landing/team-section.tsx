import TeamCard from "@/components/common/team-card.tsx";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";

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
            isVerified={true}
            socials={
              <div className={"flex flex-col items-center justify-around gap-2 px-6"}>
                <p className="text-center text-sm text-gray-400">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis
                  tenetur inventore iusto. Error, sed? Magni totam libero officia minus omnis, cum
                  consequuntur tempore? Autem tempora repellendus architecto ullam. Amet."
                </p>
                <a href="mailto: naveed@codehuntspk.com" className="mt-2">
                  <Button variant={"outline"}>
                    <Mail />
                    Contact
                  </Button>
                </a>
              </div>
            }
          />

          <TeamCard
            img={"team/hamza.png"}
            name={"Hamza Waheed"}
            position={"Software Engineer"}
            isVerified={true}
            socials={
              <div className={"flex flex-col items-center justify-around gap-2 px-6"}>
                <p className="text-center text-sm text-gray-400">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis
                  tenetur inventore iusto. Error, sed? Magni totam libero officia minus omnis, cum
                  consequuntur tempore? Autem tempora repellendus architecto ullam. Amet."
                </p>
                <a href="mailto: " className="mt-2">
                  <Button variant={"outline"}>
                    <Mail />
                    Contact
                  </Button>
                </a>
              </div>
            }
          />

          <TeamCard
            img={"team/Usama.png"}
            name={"Muhammad Usama"}
            position={"SEO Expert"}
            isVerified={false}
            socials={
              <div className={"flex flex-col items-center justify-around gap-2 px-6"}>
                <p className="text-center text-sm text-gray-400">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis
                  tenetur inventore iusto. Error, sed? Magni totam libero officia minus omnis, cum
                  consequuntur tempore? Autem tempora repellendus architecto ullam. Amet."
                </p>
                <a href="mailto: " className="mt-2">
                  <Button variant={"outline"}>
                    <Mail />
                    Contact
                  </Button>
                </a>
              </div>
            }
          />

          <TeamCard
            img={"team/shazil-index.png"}
            name={"Muhammad Shazil"}
            position={"Web Developer"}
            isVerified={true}
            socials={
              <div className={"flex flex-col items-center justify-around gap-2 px-6"}>
                <p className="text-center text-sm text-gray-400">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis
                  tenetur inventore iusto. Error, sed? Magni totam libero officia minus omnis, cum
                  consequuntur tempore? Autem tempora repellendus architecto ullam. Amet."
                </p>
                <a href="mailto: " className="mt-2">
                  <Button variant={"outline"}>
                    <Mail />
                    Contact
                  </Button>
                </a>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
