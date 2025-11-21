import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { validateForm, type ValidationErrors } from "@/lib/validation";
import { submitFormData } from "@/services/api";
import { config } from "@/config/env";

interface DemoFormData extends Record<string, string> {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  budget: string;
  timeline: string;
}

const initialFormData: DemoFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  budget: "",
  timeline: "",
};

const validationRules = {
  firstName: [{ required: true, message: "First name is required" }],
  lastName: [{ required: true, message: "Last name is required" }],
  email: [
    { required: true, message: "Email is required" },
    { email: true, message: "Please enter a valid email" },
  ],
  service: [{ required: true, message: "Please select a service" }],
  message: [
    { required: true, message: "Project details are required" },
    { minLength: 10, message: "Please provide more details (at least 10 characters)" },
  ],
};

export default function EnhancedDemoForm() {
  const [formData, setFormData] = useState<DemoFormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: keyof DemoFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm(formData, validationRules);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint
      const result = await submitFormData("/api/contact", formData);

      if (result.success) {
        setIsSuccess(true);
        setFormData(initialFormData);
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrors({ submit: result.error || "Failed to submit form. Please try again." });
      }
    } catch {
      setErrors({ submit: "An unexpected error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="bg-black py-20">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Request a Free Demo</h2>
          <p className="mx-auto max-w-2xl text-lg">
            Fill out the form below and our team will contact you within 24 hours
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
                <span>{config.contact.email}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📞</span>
                <span>{config.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📍</span>
                <span>I-10/2 Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          <div className="bg-accent rounded-2xl px-4 py-6 shadow-lg sm:p-8">
            {isSuccess && (
              <div className="mb-6 flex items-center gap-3 rounded-lg border border-green-500/50 bg-green-500/10 p-4">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <p className="text-green-500">Thank you! We'll get back to you within 24 hours.</p>
              </div>
            )}

            {errors.submit && (
              <div className="mb-6 rounded-lg border border-red-500/50 bg-red-500/10 p-4">
                <p className="text-red-500">{errors.submit}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </Label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-sm font-medium">
                  Service Interested In *
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleInputChange("service", value)}
                >
                  <SelectTrigger className="w-full" aria-invalid={!!errors.service}>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="custom">Custom Software Development</SelectItem>
                    <SelectItem value="mobile">Mobile App Development</SelectItem>
                    <SelectItem value="cloud">Cloud Solutions</SelectItem>
                    <SelectItem value="security">Cybersecurity</SelectItem>
                    <SelectItem value="analytics">Data Analytics</SelectItem>
                    <SelectItem value="devops">DevOps & Automation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-sm text-red-500">{errors.service}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-sm font-medium">
                    Estimated Budget
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => handleInputChange("budget", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k+">$50,000+</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-sm font-medium">
                    Project Timeline
                  </Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => handleInputChange("timeline", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 months</SelectItem>
                      <SelectItem value="3-6">3-6 months</SelectItem>
                      <SelectItem value="6-12">6-12 months</SelectItem>
                      <SelectItem value="12+">12+ months</SelectItem>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                    Processing Request...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    Submit Request
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
