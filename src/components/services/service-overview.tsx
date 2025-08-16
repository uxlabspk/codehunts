import React, { useState } from "react";


interface ServiceOverviewProps {
    title: string,
    description: string,
    description2: string,
    card: React.ReactNode,
    image: string,
}



export default function ServiceOverview({ title, description, description2, card, image }: ServiceOverviewProps) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <section className="sm:py-20 px-4 sm:px-0 bg-black">
            <div className="container mx-auto">
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
                    <div className="flex items-center sm:justify-center justify-end relative">
                        {!imageLoaded && (
                            <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden">
                                <div className="animate-pulse w-full h-full bg-gray-800">
                                    <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer"></div>
                                </div>
                            </div>
                        )}
                        <img
                            src={image}
                            alt="image of our services"
                            className={`rounded-2xl shadow-2xl transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setImageLoaded(true)}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}