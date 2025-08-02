import React from "react";


interface ServiceOverviewProps {
    title: string,
    description: string,
    description2: string,
    card: React.ReactNode,
    image: string,
}



export default function ServiceOverview({ title, description, description2, card, image }: ServiceOverviewProps) {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 ">{title}</h2>
                        <p className="text-lg  mb-6 leading-relaxed">
                            {description}
                        </p>
                        <p className="text-lg  mb-8 leading-relaxed">
                            {description2}
                        </p>

                        {card}
                    </div>
                    <div className="relative">
                        <img
                            src={image}
                            alt="image of our services"
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}