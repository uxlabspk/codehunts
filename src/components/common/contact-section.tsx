import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

export default function ContactSection() {
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

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>
            <p className="mb-8 leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📧</span>
                <span className="">contact@codehuntspk.com</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📞</span>
                <span className="">+92 XXX XXXXXXX</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📍</span>
                <span className="">I-10/2 Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          <div className="bg-accent rounded-2xl p-8 shadow-lg">
            <form className="space-y-6" id="contactForm">
              <div>
                <Label htmlFor="name" className="mb-2 block">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
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
                  className="resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific details..."
                />
              </div>

              <Button size={"lg"} type="submit" className="w-full rounded-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
