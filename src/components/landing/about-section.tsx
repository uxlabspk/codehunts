import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Expert team of certified developers",
  "Agile development methodology",
  "24/7 support and maintenance",
  "Scalable and future-proof solutions",
  "Competitive pricing and transparent billing",
  "On-time project delivery guarantee",
];

export default function AboutSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24">
      <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
              Why Choose Us
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Why Choose Code{" "}
              <span className="text-gradient">HUNT'S</span>?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              With years of experience in software development, we understand the challenges
              businesses face in today's digital landscape. Our team works closely with you to
              deliver solutions that not only meet your current needs but also scale with your
              future growth.
            </p>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/[0.04] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration at Code HUNT'S"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
