import React, { useState, useEffect } from 'react';
import {
    PhoneIcon,
    MapPinIcon,
    ClockIcon,
    PaperAirplaneIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/outline';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                subject: '',
                message: '',
                service: ''
            });
        }, 2000);
    };

    useEffect(() => {
        if (submitStatus) {
            const timer = setTimeout(() => setSubmitStatus(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    const services = [
        'Web Development',
        'Mobile App Development',
        'Graphics Designing',
        'AI & Machine Learning',
        'Software Consulting',
        'Cloud Solutions'
    ];

    const contactInfo = [
        {
            icon: <PhoneIcon className="w-6 h-6 text-amber-800" />,
            title: 'Email Us',
            details: 'contact@codehuntspk.com',
            description: 'Send us an email anytime!'
        },
        {
            icon: <PhoneIcon className="w-6 h-6 text-amber-800" />,
            title: 'Call Us',
            details: '+92 327-7978954',
            description: 'Mon–Fri from 9 am to 6 pm'
        },
        {
            icon: <MapPinIcon className="w-6 h-6 text-amber-800" />,
            title: 'Visit Us',
            details: 'I‑10/2 Islamabad, Pakistan',
            description: 'Come say hello at our office'
        },
        {
            icon: <ClockIcon className="w-6 h-6 text-amber-800" />,
            title: 'Working Hours',
            details: 'Mon–Fri: 9 am–6 pm',
            description: 'Weekend support available'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-amber-800 via-amber-700 to-orange-600 py-24 overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-20" />
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                        Get In <span className="text-orange-300">Touch</span>
                    </h1>
                    <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                        Ready to transform your business with innovative software solutions? Let's discuss your project and bring your ideas to life.
                    </p>
                </div>
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl animate-pulse delay-1000" />
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 -mt-12 relative z-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((info) => (
                        <div key={info.title} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                            <div className="mb-4">{info.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                            <p className="text-amber-800 font-medium">{info.details}</p>
                            <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    <div className="bg-white rounded-3xl shadow-xl p-8">
                        <h2 className="text-3xl font-bold mb-4">Start Your Project</h2>
                        <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                        {submitStatus === 'success' && (
                            <div className="mb-6 flex items-center bg-green-50 border border-green-200 p-4 rounded-lg">
                                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                                <span className="text-green-800">
                  Message sent successfully! We'll get back to you soon.
                </span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {['name', 'email'].map((field) => (
                                    <div key={field}>
                                        <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
                                            {field === 'name' ? 'Full Name' : 'Email Address'} *
                                        </label>
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            id={field}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition hover:border-amber-600"
                                            placeholder={field === 'name' ? 'Your full name' : 'your.email@example.com'}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {['phone', 'company'].map((field) => (
                                    <div key={field}>
                                        <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
                                            {field === 'phone' ? 'Phone Number' : 'Company Name'}
                                        </label>
                                        <input
                                            type={field === 'phone' ? 'tel' : 'text'}
                                            id={field}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition hover:border-amber-600"
                                            placeholder={field === 'phone' ? '+92 XXX XXXXXXX' : 'Your company name'}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Service Interested In
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition hover:border-amber-600"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((svc) => (
                                            <option key={svc} value={svc}>{svc}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition hover:border-amber-600"
                                        placeholder="Project subject"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Project Details *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="6"
                                    required
                                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition hover:border-amber-600 resize-none"
                                    placeholder="Tell us about your project requirements, goals, and timeline..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center bg-gradient-to-r from-amber-800 to-orange-600 hover:from-amber-900 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 border-b-2 border-white mr-3" viewBox="0 0 24 24" />
                                        Sending Message...
                                    </>
                                ) : (
                                    <>
                                        <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Right Column info sections omitted for brevity */}
                </div>
            </section>
        </div>
    );
};

export default Contact;
