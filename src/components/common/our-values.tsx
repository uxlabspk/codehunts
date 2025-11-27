import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Lightbulb, Users, Award, TrendingUp } from "lucide-react";

export default function OurValues() {
  const values = [
    {
      title: "Innovation",
      description:
        "We constantly explore new technologies and approaches to solve complex problems.",
      icon: Lightbulb,
    },
    {
      title: "Collaboration",
      description:
        "We believe the best solutions emerge from diverse perspectives working together.",
      icon: Users,
    },
    {
      title: "Quality",
      description:
        "We are committed to delivering exceptional software that exceeds expectations.",
      icon: Award,
    },
    {
      title: "Growth",
      description: "We invest in our team's development and encourage continuous learning.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-black px-4 py-16 sm:px-0">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
          <p className="mx-auto max-w-2xl">
            These principles guide everything we do and define who we are as a team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="group rounded-xl p-6 text-center transition-all duration-300 hover:border-primary/50">
                <CardHeader>
                  <div className="mx-auto mb-4 w-fit rounded-full bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-orange-400" />
                  </div>
                  <CardTitle className="text-xl text-orange-400">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>{value.description}</CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
