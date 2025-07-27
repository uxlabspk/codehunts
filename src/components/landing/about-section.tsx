




export default function AboutSection() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Code
                            HUNT'S?</h2>
                        <p className="text-lg mb-6 leading-relaxed">
                            With years of experience in software development, we understand the challenges
                            businesses face in today's digital landscape. Our team of expert developers and
                            consultants work closely with you to deliver solutions that not only meet your current
                            needs but also scale with your future growth.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <span className="font-bold mr-3">✓</span>
                                Expert team of certified developers
                            </li>
                            <li className="flex items-center">
                                <span className="font-bold mr-3">✓</span>
                                Agile development methodology
                            </li>
                            <li className="flex items-center">
                                <span className="font-bold mr-3">✓</span>
                                24/7 support and maintenance
                            </li>
                            <li className="flex items-center">
                                <span className="font-bold mr-3">✓</span>
                                Scalable and future-proof solutions
                            </li>
                            <li className="flex items-center">
                                <span className="font-bold mr-3">✓</span>
                                Competitive pricing and transparent billing
                            </li>
                            <li className="flex items-center">
                                <span className="font-bold mr-3">✓</span>
                                On-time project delivery guarantee
                            </li>
                        </ul>
                    </div>

                    <img src="why us.png" alt="About" className="w-full " />
                </div>
            </div>
        </section>
    )
}