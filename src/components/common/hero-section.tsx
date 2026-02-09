import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="relative w-full overflow-hidden">
      {/* Grid Background */}
      <div className="bg-grid pointer-events-none absolute inset-0" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[100px]" />

      <div className="container mx-auto flex min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] flex-col items-center justify-center px-5 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 text-center">
        {hasCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-sm font-medium text-primary"
          >
            {category}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
        {hasLinks && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to={linkUrl || ""} className="mt-8">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base shadow-lg shadow-primary/25 transition-shadow hover:shadow-primary/40"
              >
                {linkText}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
