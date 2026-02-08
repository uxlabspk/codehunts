import { Lightbulb, Users, Award, TrendingUp } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description:
      "We constantly explore new technologies and approaches to solve complex problems.",
    icon: Lightbulb,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    title: "Collaboration",
    description:
      "We believe the best solutions emerge from diverse perspectives working together.",
    icon: Users,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    title: "Quality",
    description:
      "We are committed to delivering exceptional software that exceeds expectations.",
    icon: Award,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    title: "Growth",
    description: "We invest in our team's development and encourage continuous learning.",
    icon: TrendingUp,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
];

export default function OurValues() {
  return (
    <section className="relative py-24">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
            Our Principles
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Core Values
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            These principles guide everything we do and define who we are as a team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card/50 p-6 text-center transition-all duration-500 hover:border-white/[0.12] hover:bg-card"
              >
                <div
                  className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${value.bgColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`h-6 w-6 ${value.color}`} />
                </div>
                <h3 className={`mb-2 text-lg font-semibold ${value.color}`}>{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
