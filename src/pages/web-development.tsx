
import {
    Code,
    Zap,
    Shield,
    ArrowLeft,
    RotateCcw,
    BarChart,
    Trophy,
    Building,
    Users,
    ShoppingCart,
} from 'lucide-react';
import CTASection from "@/components/common/cta-section.tsx";
import UseCase from "@/components/common/usecases.tsx";
import FAQ from "@/components/common/faqa-section.tsx";
import ProcessStep from "@/components/common/process-steps.tsx";
import Feature from "@/components/common/features-section.tsx";
import HeroSection from "@/components/common/hero-section.tsx";


export default function WebDev() {

    const features = [
        {
            icon: <Zap className="h-7 w-7 text-indigo-600" />,
            title: "Lightning Fast Performance",
            description: "Optimized code and modern frameworks ensure your website loads quickly and performs flawlessly across all devices.",
            iconBgColor: "bg-indigo-100"
        },
        {
            icon: <Shield className="h-7 w-7 text-purple-600" />,
            title: "Robust Security",
            description: "Implement industry-standard security measures to protect your website and user data from threats.",
            iconBgColor: "bg-purple-100"
        },
        {
            icon: <ArrowLeft className="h-7 w-7 text-blue-600" />,
            title: "Responsive Design",
            description: "Your website will look and function perfectly on desktops, tablets, and mobile devices.",
            iconBgColor: "bg-blue-100"
        },
        {
            icon: <RotateCcw className="h-7 w-7 text-green-600" />,
            title: "Scalable Architecture",
            description: "Built to grow with your business, handling increased traffic and expanding functionality seamlessly.",
            iconBgColor: "bg-green-100"
        },
        {
            icon: <BarChart className="h-7 w-7 text-orange-600" />,
            title: "SEO Optimized",
            description: "Built-in SEO best practices ensure your website ranks well in search engines and drives organic traffic.",
            iconBgColor: "bg-orange-100"
        },
        {
            icon: <Trophy className="h-7 w-7 text-red-600" />,
            title: "Modern Technologies",
            description: "Leverage the latest web technologies and frameworks for cutting-edge functionality and user experience.",
            iconBgColor: "bg-red-100"
        }
    ];

    const processSteps = [
        {
            number: "1",
            title: "Discovery & Planning",
            description: "We start by understanding your business goals, target audience, and project requirements. This phase includes competitor analysis, user research, and detailed project planning.",
            tags: ["Requirements Analysis", "User Research", "Project Planning"],
            bgColor: "bg-indigo-100",
            textColor: "text-indigo-600",
            tagBgColor: "bg-indigo-100",
            tagTextColor: "text-indigo-800"
        },
        {
            number: "2",
            title: "Design & Prototyping",
            description: "Our designers create wireframes, mockups, and interactive prototypes. We focus on user experience, brand alignment, and conversion optimization.",
            tags: ["UI/UX Design", "Wireframing", "Prototyping"],
            bgColor: "bg-purple-100",
            textColor: "text-purple-600",
            tagBgColor: "bg-purple-100",
            tagTextColor: "text-purple-800"
        },
        {
            number: "3",
            title: "Development & Testing",
            description: "Our developers build your website using modern technologies and best practices. We conduct thorough testing across devices and browsers.",
            tags: ["Frontend Development", "Backend Development", "Quality Assurance"],
            bgColor: "bg-blue-100",
            textColor: "text-blue-600",
            tagBgColor: "bg-blue-100",
            tagTextColor: "text-blue-800"
        },
        {
            number: "4",
            title: "Launch & Optimization",
            description: "We deploy your website, monitor performance, and provide ongoing support. Post-launch optimization ensures peak performance and user satisfaction.",
            tags: ["Deployment", "Performance Monitoring", "Ongoing Support"],
            bgColor: "bg-green-100",
            textColor: "text-green-600",
            tagBgColor: "bg-green-100",
            tagTextColor: "text-green-800"
        }
    ];

    const useCases = [
        {
            icon: <Building className="h-6 w-6" />,
            title: "Corporate Websites",
            description: "Professional websites that establish credibility, showcase services, and generate leads for your business.",
            features: ["Company profiles", "Service portfolios", "Contact forms", "Blog integration"],
            iconBgColor: "bg-indigo-100",
            iconColor: "text-indigo-600"
        },
        {
            icon: <ShoppingCart className="h-6 w-6" />,
            title: "E-commerce Solutions",
            description: "Full-featured online stores with shopping carts, payment processing, and inventory management.",
            features: ["Product catalogs", "Secure checkout", "Payment gateways", "Order management"],
            iconBgColor: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "Web Applications",
            description: "Interactive web applications that provide specific functionality and enhance user engagement.",
            features: ["User dashboards", "Real-time features", "Database integration", "API connectivity"],
            iconBgColor: "bg-blue-100",
            iconColor: "text-blue-600"
        }
    ];

    const faqs = [
        {
            question: "How long does web development typically take?",
            answer: "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex web applications can take 8-16 weeks. We provide detailed timelines during the planning phase and keep you updated throughout development."
        },
        {
            question: "What technologies do you use for web development?",
            answer: "We use modern technologies including React, Next.js, TypeScript, Node.js, and various databases. Our technology stack is chosen based on your specific needs, ensuring optimal performance and scalability."
        },
        {
            question: "Do you provide ongoing maintenance and support?",
            answer: "Yes, we offer comprehensive maintenance packages including security updates, performance optimization, content updates, and technical support. Our support plans can be customized to your specific needs."
        },
        {
            question: "Will my website be mobile-friendly?",
            answer: "Absolutely! All our websites are built with responsive design principles, ensuring they look and function perfectly on all devices - desktops, tablets, and smartphones. Mobile optimization is a standard part of our development process."
        },
        {
            question: "Can you help with website hosting and domain setup?",
            answer: "Yes, we can assist with hosting recommendations, domain registration, SSL certificates, and deployment. We work with reliable hosting providers and can manage the technical setup for you."
        }
    ];


    return (
        <>
            {/* Hero Section */}
            <HeroSection
                title={'Create Stunning Websites That Drive Results'}
                description={' Transform your online presence with custom websites that combine beautiful design, cutting-edge technology, and exceptional user experience. From concept to launch, we build websites that engage visitors and grow your business.'}
                hasLinks={false}
                hasCategory={true}
                category={<><Code className="h-5 w-5 mr-2" /> Professional Web Development</>}
            />

            {/* Service Overview */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 ">Professional Web Development Solutions</h2>
                            <p className="text-lg  mb-6 leading-relaxed">
                                Your website is often the first impression potential customers have of your business.
                                We create websites that not only look exceptional but also deliver outstanding performance
                                and user experience.
                            </p>
                            <p className="text-lg  mb-8 leading-relaxed">
                                From responsive design to complex web applications, we use the latest technologies
                                and best practices to ensure your website stands out from the competition and
                                achieves your business objectives.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="border-2 shadow-lg p-6 rounded-xl">
                                    <div className="text-3xl font-bold  mb-2">150+</div>
                                    <div className="">Websites Delivered</div>
                                </div>
                                <div className="border-2 shadow-lg p-6 rounded-xl">
                                    <div className="text-3xl font-bold  mb-2">99%</div>
                                    <div className="">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
                                alt="Web Development"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 ">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Key <span className="">Features</span> & Benefits
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto">
                            Our web development solutions deliver measurable results that drive business growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Feature key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-20 ">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Development Process
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto">
                            A systematic approach that ensures successful delivery of high-quality websites
                        </p>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                            {processSteps.map((step, index) => (
                                <ProcessStep key={index} {...step} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Use Cases */}
            <section className="py-20 ">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Website Solutions
                        </h2>
                        <p className="text-xl  max-w-3xl mx-auto">
                            Custom web development for various business needs and industries
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((useCase, index) => (
                            <UseCase key={index} {...useCase} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 ">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto">
                            Answers to common questions about our web development services
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <FAQ key={index} {...faq} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </>
    )
}