import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconBgColor: string;
  iconColor: string;
}

const UseCase: React.FC<UseCaseProps> = ({
  icon,
  title,
  description,
  features,
  iconBgColor,
  iconColor,
}) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card/50 p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-card"
  >
    <div
      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${iconBgColor} ${iconColor} transition-transform duration-300 group-hover:scale-110`}
    >
      {icon}
    </div>
    <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default UseCase;
