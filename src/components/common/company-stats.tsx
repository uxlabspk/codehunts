import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Briefcase, Calendar } from "lucide-react";
import { useCountUp, useIntersectionObserver } from "@/hooks/useCountUp";

const stats = [
  {
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
    value: 2,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-green-600" />,
    value: 100,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: <Star className="h-8 w-8 text-yellow-600" />,
    value: 3.9,
    suffix: "/5",
    label: "Trustpilot Rating",
    decimals: 1,
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    value: 150,
    suffix: "+",
    label: "Happy Customers",
  },
];

// Individual animated stat component
const AnimatedStat: React.FC<{
  stat: (typeof stats)[0];
  startAnimation: boolean;
}> = ({ stat, startAnimation }) => {
  const animatedValue = useCountUp(stat.value, 2000, stat.decimals || 0, startAnimation);

  return (
    <Card className="p-6 text-center shadow-md">
      <CardContent>
        <div className="mb-4 flex justify-center">{stat.icon}</div>
        <div className="text-4xl font-bold text-gray-900 dark:text-white">
          {animatedValue}
          {stat.suffix}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
      </CardContent>
    </Card>
  );
};

const CompanyStats: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section ref={sectionRef} className="bg-black py-16">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Success Story</h2>
          <p className="mx-auto max-w-2xl text-lg">
            Numbers that speak for our commitment to excellence and client satisfaction
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} startAnimation={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
