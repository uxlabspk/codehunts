import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import React from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  hasLinks: boolean;
  linkUrl?: string;
  linkText?: string;
  hasCategory: boolean;
  category?: React.ReactNode;
}

export default function HeroSection({
  title,
  description,
  hasLinks,
  linkUrl,
  linkText,
  hasCategory,
  category,
}: HeroSectionProps) {
  return (
    <div className={"w-full overflow-hidden bg-black px-4 sm:px-0"}>
      {/* Grid Background */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div
        className={
          "container mx-auto flex h-[60vh] flex-col items-center justify-center text-center"
        }
      >
        {hasCategory && (
          <div className="mb-6 inline-flex items-center rounded-full border border-gray-50 bg-transparent px-4 py-2 text-sm font-medium text-gray-50">
            {category}
          </div>
        )}
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto max-w-2xl text-lg">{description}</p>
        {hasLinks && (
          <Link to={linkUrl ? linkUrl : ""}>
            <Button className={"rounded-full px-14 py-6 text-lg"}>{linkText}</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
