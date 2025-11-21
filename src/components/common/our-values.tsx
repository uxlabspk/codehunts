import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

export default function OurValues() {
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
          {[
            {
              title: "Innovation",
              description:
                "We constantly explore new technologies and approaches to solve complex problems.",
              icon: "💡",
            },
            {
              title: "Collaboration",
              description:
                "We believe the best solutions emerge from diverse perspectives working together.",
              icon: "🤝",
            },
            {
              title: "Quality",
              description:
                "We are committed to delivering exceptional software that exceeds expectations.",
              icon: "⭐",
            },
            {
              title: "Growth",
              description: "We invest in our team's development and encourage continuous learning.",
              icon: "🚀",
            },
          ].map((value, index) => (
            <Card key={index} className="rounded-xl p-6 text-center">
              <CardHeader>
                <span className={"mb-4 text-4xl"}>{value.icon}</span>
                <CardTitle className="text-xl text-orange-400">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>{value.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
