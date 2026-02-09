import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24">
      <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-10 md:p-12 lg:p-16 text-center"
        >
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-primary/[0.06] blur-[80px] sm:blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-primary/[0.04] blur-[80px] sm:blur-[100px]" />

          <div className="relative z-10">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Ready to Work Together?
            </h2>
            <p className="mx-auto mb-6 sm:mb-8 max-w-xl text-base sm:text-lg text-muted-foreground">
              Let's discuss how our team can help bring your ideas to life with innovative software
              solutions.
            </p>
            <Link to="/contact-us">
              <Button
                size="lg"
                className="rounded-full px-10 py-6 text-base font-medium shadow-lg shadow-primary/25 transition-shadow hover:shadow-primary/40"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
