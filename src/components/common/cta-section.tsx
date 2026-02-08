import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-primary/10 via-card to-card p-12 text-center md:p-16">
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-primary/[0.06] blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-primary/[0.04] blur-[100px]" />

          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Ready to Work Together?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
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
        </div>
      </div>
    </section>
  );
}
