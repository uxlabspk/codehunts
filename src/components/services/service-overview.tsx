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
    <section className="relative py-12 sm:py-16 md:py-24">
      <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight lg:text-3xl">{title}</h2>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">{description}</p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">{description2}</p>
            {card}
          </div>
          <div className="relative">
            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/[0.03] blur-2xl" />
            <div className="relative">
              {!imageLoaded && (
                <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                  <div className="h-80 w-full animate-pulse bg-card" />
                </div>
              )}
              <img
                src={image}
                alt="Service illustration"
                className={`w-full rounded-2xl border border-white/[0.06] shadow-2xl transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
