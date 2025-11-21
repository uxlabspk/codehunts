import React, { useState } from "react";

interface ServiceOverviewProps {
  title: string;
  description: string;
  description2: string;
  card: React.ReactNode;
  image: string;
}

export default function ServiceOverview({
  title,
  description,
  description2,
  card,
  image,
}: ServiceOverviewProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="bg-black px-4 sm:px-0 sm:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">{title}</h2>
            <p className="mb-6 text-lg leading-relaxed">{description}</p>
            <p className="mb-8 text-lg leading-relaxed">{description2}</p>

            {card}
          </div>
          <div className="relative flex items-center justify-end sm:justify-center">
            {!imageLoaded && (
              <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl">
                <div className="h-full w-full animate-pulse bg-gray-800">
                  <div className="animate-shimmer h-full w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
                </div>
              </div>
            )}
            <img
              src={image}
              alt="image of our services"
              className={`rounded-2xl shadow-2xl transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
