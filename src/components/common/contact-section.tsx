import {Button} from "@/components/ui/button.tsx";


export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-0">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Ready to transform your business with innovative software solutions? Let's discuss your
                        project.
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
                        <form className="space-y-6" id="contactForm">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium  mb-2">Full Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200"/>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium  mb-2">Email Address</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200"/>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium  mb-2">Subject</label>
                                <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200"/>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium  mb-2">Message</label>
                                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200 resize-none"></textarea>
                            </div>

                            <Button size={"lg"} type="submit" className="w-full rounded-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}