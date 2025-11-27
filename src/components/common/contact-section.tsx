import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { submitFormData } from "@/services/api";
import { CheckCircle2 } from "lucide-react";

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
      const result = await submitFormData("/api/contact.php", formData);

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError(result.error || "Failed to submit form. Please try again.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-20">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-lg">
            Ready to transform your business with innovative software solutions? Let's discuss your
            project.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-3xl font-bold">Let's Build Something Amazing Together</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                Have a project in mind? We're here to turn your ideas into reality with
                custom software, AI solutions, and cloud services.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-3 text-xl font-semibold">Why Reach Out?</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-primary">✓</span>
                    <span>Free consultation to discuss your project needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-primary">✓</span>
                    <span>Expert guidance on the best tech stack for your goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-primary">✓</span>
                    <span>Transparent pricing and timeline estimates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-primary">✓</span>
                    <span>Quick response within 24 hours</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-accent/50 p-6 backdrop-blur-sm">
                <h4 className="mb-2 font-semibold">Email Us</h4>
                <a
                  href="mailto:contact@codehuntspk.com"
                  className="text-lg text-primary hover:underline"
                >
                  contact@codehuntspk.com
                </a>
                <p className="mt-2 text-sm text-gray-400">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent rounded-2xl p-8 shadow-lg">
            <form className="space-y-6" id="contactForm" onSubmit={handleSubmit}>
              {isSuccess && (
                <div className="rounded-md bg-green-50 p-4 flex items-center gap-2 text-green-800">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="text-sm">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {error && (
                <div className="rounded-md bg-red-50 p-4">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              <div>
                <Label htmlFor="name" className="mb-2 block">
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
                />
              </div>

              <div>
                <Label htmlFor="email" className="mb-2 block">
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
                />
              </div>

              <div>
                <Label htmlFor="subject" className="mb-2 block">
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
                />
              </div>

              <div>
                <Label htmlFor="message" className="mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific details..."
                />
              </div>

              <Button size={"lg"} type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
