import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';

export default function EnhancedDemoForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log("Form submitted:", formData);
        setIsSubmitting(false);
    };

    return (

        <section id="contact" className="py-20 ">
            <div className="container mx-auto px-4 sm:px-0">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request a Free Demo</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Fill out the form below and our team will contact you within 24 hours
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h3 className="text-2xl font-semibold  mb-6">Contact Information</h3>
                        <p className="mb-8 leading-relaxed">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="text-2xl mr-4">📧</span>
                                <span className="">contact@codehuntspk.com</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl mr-4">📞</span>
                                <span className="">+92 XXX XXXXXXX</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl mr-4">📍</span>
                                <span className="">I-10/2 Islamabad, Pakistan</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-accent p-8 rounded-2xl shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                                    <Input
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        value={formData.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Enter your last name"
                                        value={formData.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium ">Email Address *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-sm font-medium ">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-sm font-medium ">Company Name</Label>
                                <Input
                                    id="company"
                                    placeholder="Enter your company name"
                                    value={formData.company}
                                    onChange={(e) => handleInputChange('company', e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="service" className="text-sm font-medium ">Service Interested In *</Label>
                                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                                    <SelectTrigger className={'w-full'}>
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
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-medium ">Project Details *</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    required
                                    rows={4}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="budget" className="text-sm font-medium ">Estimated Budget</Label>
                                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                                        <SelectTrigger className={'w-full'}>
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
                                    <Label htmlFor="timeline" className="text-sm font-medium">Project Timeline</Label>
                                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                                        <SelectTrigger className={'w-full'}>
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

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                size={'lg'}
                                className="w-full"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                                        Processing Request...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center">
                                        Submit Request
                                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
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