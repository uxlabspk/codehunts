import { motion } from "framer-motion";

interface TeamCardProps {
  img: string;
  name: string;
  position: string;
  socials: React.ReactNode;
}

export default function TeamCard({ img, name, position, socials }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card/50 p-5 sm:p-6 text-center transition-all duration-500 hover:border-white/[0.12] hover:bg-card"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Profile Image */}
        <div className="mx-auto mb-5 h-auto w-auto md:h-64 md:w-64 overflow-hidden rounded-2xl border-2 border-white/[0.08] shadow-lg transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-primary/10">
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Name & Position */}
        <h3 className="mb-1 text-base font-semibold text-white">{name}</h3>
        <p className="mb-4 text-xs font-medium tracking-wider text-primary/70 uppercase">
          {position}
        </p>

        {/* Social Links */}
        <div className="opacity-60 transition-opacity duration-300 group-hover:opacity-100">
          {socials}
        </div>
      </div>
    </motion.div>
  );
}
