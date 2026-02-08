import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { config } from "@/config/env";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const subject = encodeURIComponent(formData.subject || "Contact Form Submission");
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      );

      window.location.href = `mailto:${config.contact.email}?subject=${subject}&body=${body}`;

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-primary uppercase">
            Contact
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Ready to transform your business with innovative software solutions? Let's discuss your
            project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight lg:text-3xl">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Have a project in mind? We're here to turn your ideas into reality with custom
                software, AI solutions, and cloud services.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-semibold">Why Reach Out?</h4>
              <ul className="space-y-3">
                {[
                  "Free consultation to discuss your project needs",
                  "Expert guidance on the best tech stack for your goals",
                  "Transparent pricing and timeline estimates",
                  "Quick response within 24 hours",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-card/50 p-6">
              <h4 className="mb-1 text-sm font-semibold">Email Us</h4>
              <a
                href="mailto:contact@codehuntspk.com"
                className="text-primary transition-opacity hover:opacity-80"
              >
                contact@codehuntspk.com
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                We typically respond within 24 hours
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-white/[0.06] bg-card/80 p-6 shadow-xl sm:p-8"
          >
            <form className="space-y-5" id="contactForm" onSubmit={handleSubmit}>
              {isSuccess && (
                <div className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <p className="text-sm text-green-400">Message sent successfully!</p>
                </div>
              )}

              {error && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              <div>
                <Label htmlFor="name" className="mb-2 block text-sm">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="email" className="mb-2 block text-sm">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="mb-2 block text-sm">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Brief description of your inquiry"
                  className="rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="message" className="mb-2 block text-sm">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none rounded-xl"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button
                size="lg"
                type="submit"
                className="w-full rounded-full shadow-lg shadow-primary/25"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
