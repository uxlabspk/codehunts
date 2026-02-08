import React from "react";
import { motion } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  bgColor,
  textColor,
}) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card/50 p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-card"
  >
    <div
      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${bgColor} transition-transform duration-300 group-hover:scale-110`}
    >
      <span className={`text-lg font-bold ${textColor}`}>{number}</span>
    </div>
    <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
  </motion.div>
);

export default ProcessStep;
