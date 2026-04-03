import React, { useEffect, useMemo, useState } from "react";
import { Star, Users, Briefcase, Calendar } from "lucide-react";
import { useCountUp, useIntersectionObserver } from "@/hooks/useCountUp";
import { motion } from "framer-motion";
import { config } from "@/config/env";

interface CompanyStatsResponse {
  success: boolean;
  data: {
    totalProject: number;
    totalEmployees: number;
    totalRating: number;
  };
}

const buildApiBase = () => {
  const appUrl = config.app.url.trim().replace(/\/+$/, "");
  return `${appUrl}/api`;
};

const staticStats = [
  {
    icon: Calendar,
    value: 2,
    suffix: "+",
    label: "Years Experience",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Briefcase,
    value: 100,
    suffix: "+",
    label: "Projects Completed",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    icon: Star,
    value: 3.9,
    suffix: "/5",
    label: "Trustpilot Rating",
    decimals: 1,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Happy Customers",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
];

const AnimatedStat: React.FC<{
  stat: (typeof staticStats)[0];
  startAnimation: boolean;
}> = ({ stat, startAnimation }) => {
  const animatedValue = useCountUp(stat.value, 2000, stat.decimals || 0, startAnimation);
  const Icon = stat.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card/50 p-5 sm:p-6 text-center transition-all duration-500 hover:border-white/[0.12]">
      <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor} transition-transform duration-300 group-hover:scale-110`}>
        <Icon className={`h-5 w-5 ${stat.color}`} />
      </div>
      <div className="text-3xl font-bold text-white">
        {animatedValue}
        <span className="text-muted-foreground">{stat.suffix}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
};

const CompanyStats: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>();
  const [apiData, setApiData] = useState<CompanyStatsResponse["data"] | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadStats = async () => {
      try {
        const response = await fetch(`${buildApiBase()}/company/public.php`, {
          method: "GET",
          signal: controller.signal,
        });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as CompanyStatsResponse;
        if (payload.success && payload.data) {
          setApiData(payload.data);
        }
      } catch {
        // Ignore and keep fallback values if API is unavailable.
      }
    };

    void loadStats();
    return () => controller.abort();
  }, []);

  const stats = useMemo(() => {
    const projects = apiData?.totalProject;
    const employees = apiData?.totalEmployees;
    const rating = apiData?.totalRating;

    return staticStats.map((stat) => {
      if (stat.label === "Projects Completed" && typeof projects === "number") {
        return { ...stat, value: projects };
      }

      if (stat.label === "Happy Customers" && typeof employees === "number") {
        return { ...stat, value: employees };
      }

      if (stat.label === "Trustpilot Rating" && typeof rating === "number") {
        return { ...stat, value: rating };
      }

      return stat;
    });
  }, [apiData]);

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-24">
      <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 md:mb-16 text-center"
        >
          <span className="mb-3 sm:mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
            Our Track Record
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Our Success Story
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Numbers that speak for our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedStat stat={stat} startAnimation={isVisible} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
