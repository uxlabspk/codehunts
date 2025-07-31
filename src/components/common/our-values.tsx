import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";


export default function OurValues() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                    <p className="max-w-2xl mx-auto">
                        These principles guide everything we do and define who we are as a team.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Innovation",
                            description: "We constantly explore new technologies and approaches to solve complex problems.",
                            icon: "💡"
                        },
                        {
                            title: "Collaboration",
                            description: "We believe the best solutions emerge from diverse perspectives working together.",
                            icon: "🤝"
                        },
                        {
                            title: "Quality",
                            description: "We are committed to delivering exceptional software that exceeds expectations.",
                            icon: "⭐"
                        },
                        {
                            title: "Growth",
                            description: "We invest in our team's development and encourage continuous learning.",
                            icon: "🚀"
                        }
                    ].map((value, index) => (
                        <Card
                            key={index}
                            className="text-center p-6 rounded-xl">
                            <CardHeader>
                                <span className={'text-4xl mb-4'}>{value.icon}</span>
                                <CardTitle>{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {value.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}