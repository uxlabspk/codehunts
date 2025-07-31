import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {Link} from "react-router-dom";


const ServiceSection = () => {
    return (
        <section id="services" className="py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-0">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Comprehensive software solutions designed to transform your business operations and drive
                        growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Web Development</CardTitle>
                            <CardDescription>Browser Sites</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Custom web applications built with modern technologies to deliver exceptional user experiences and robust functionality.</p>
                            <div className={'mt-4'}>
                                <Link to={'/web-development'} className={'text-sm underline text-orange-400'}>Read more</Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Mobile App Development</CardTitle>
                            <CardDescription>Mobile Apps</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Native and cross-platform mobile applications that engage users and expand your business reach across all devices.</p>
                            <div className={'mt-4'}>
                                <Link to={'/app-development'} className={'text-sm underline text-orange-400'}>Read more</Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Graphics Designing</CardTitle>
                            <CardDescription>Digital Illustrations</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Creative and impactful design solutions including branding, digital illustrations, and marketing materials to visually elevate your business.</p>
                            <div className={'mt-4'}>
                                <Link to={'/graphics-designing'} className={'text-sm underline text-orange-400'}>Read more</Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>AI & Machine Learning</CardTitle>
                            <CardDescription>Data Driven Insights</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Intelligent automation and data-driven insights to help your business make smarter decisions and improve efficiency.</p>
                            <div className={'mt-4'}>
                                <Link to={'/ai-development'} className={'text-sm underline text-orange-400'}>Read more</Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Software Consulting</CardTitle>
                            <CardDescription>Software Advice's</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Expert guidance on technology strategy, architecture design, and digital transformation initiatives.</p>
                            <div className={'mt-4'}>
                                <Link to={'/custom-software'} className={'text-sm underline text-orange-400'}>Read more</Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Cloud Solutions</CardTitle>
                            <CardDescription>Scalable MicroServices</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.</p>
                            <div className={'mt-4'}>
                                <Link to={'/cloud-solutions'} className={'text-sm underline text-orange-400'}>Read more</Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection;