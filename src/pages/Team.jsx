import React from 'react';
import {
    CodeBracketIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import TeamMemberCard from "../components/Cards/TeamMemberCard.jsx";


export default function Team() {
    const teamMembers = [
        {
            name: "Muhammad Naveed",
            role: "Software Engineer",
            image: "img/team/naveed.jpeg",
            bio: "Expert software engineer with a passion for building scalable applications and solving complex technical challenges with modern technologies.",
            skills: ["React", "Node.js", "Python", "AWS"],
            social: {
                github: "#",
                linkedin: "#",
                email: "naveed@codehuntspk.com"
            },
            icon: <CodeBracketIcon className="w-5 h-5"/>
        },
        {
            name: "Hamza Waheed",
            role: "Software Engineer",
            image: "img/team/hamza.png",
            bio: "Full-stack developer specializing in modern web technologies and creating seamless user experiences across platforms.",
            skills: ["JavaScript", "React", "Express", "MongoDB"],
            social: {
                github: "#",
                linkedin: "#",
                email: "hamza@codehuntspk.com"
            },
            icon: <CodeBracketIcon className="w-5 h-5"/>
        },
        {
            name: "Muhammad Shazil",
            role: "Web Developer",
            image: "img/team/shazil.png",
            bio: "Creative web developer focused on crafting beautiful, responsive websites with cutting-edge technologies and best practices.",
            skills: ["HTML5", "CSS3", "JavaScript", "Vue.js"],
            social: {
                github: "#",
                linkedin: "#",
                email: "shazil@codehuntspk.com"
            },
            icon: <CodeBracketIcon className="w-5 h-5"/>
        },
        {
            name: "Muhammad Usama",
            role: "SEO Expert",
            image: "img/team/Usama.png",
            bio: "SEO specialist dedicated to improving online visibility and driving organic growth for businesses through strategic optimization.",
            skills: ["SEO Strategy", "Analytics", "Content Marketing", "SEM"],
            social: {
                github: "#",
                linkedin: "#",
                email: "usama@codehuntspk.com"
            },
            icon: <MagnifyingGlassIcon className="w-5 h-5"/>
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="h-[50vh] flex items-center bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Meet the talented professionals behind our success—dedicated, skilled, and passionate about
                            delivering exceptional results for your business.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Team?</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Our team combines technical expertise with creative problem-solving to deliver
                                exceptional results.
                                With years of experience across different technologies and industries, we're equipped to
                                handle
                                projects of any complexity and scale.
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-700">
                                    <span className="text-amber-800 font-bold mr-3">✓</span>
                                    Expert team of certified developers
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-amber-800 font-bold mr-3">✓</span>
                                    Collaborative and agile approach
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-amber-800 font-bold mr-3">✓</span>
                                    Continuous learning and skill development
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-amber-800 font-bold mr-3">✓</span>
                                    Strong communication and project management
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-amber-800 font-bold mr-3">✓</span>
                                    Proven track record of successful projects
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-amber-800 font-bold mr-3">✓</span>
                                    Dedicated to client satisfaction
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Work With Us?</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Let's discuss your project and see how our team can help bring your vision to life.
                            </p>

                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your
                                        Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email
                                        Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">Project
                                        Type</label>
                                    <select
                                        id="project"
                                        name="project"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200"
                                    >
                                        <option value="">Select project type</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="mobile-app">Mobile App Development</option>
                                        <option value="graphics-design">Graphics Designing</option>
                                        <option value="seo">SEO Services</option>
                                        <option value="consulting">Software Consulting</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project
                                        Details</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 transition-colors duration-200 resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 px-6 rounded-lg transition-colors duration-200 font-medium"
                                >
                                    Start Your Project
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ready to start your next project? Our team is here to help you achieve your goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div
                                className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📧</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600">contact@codehuntspk.com</p>
                        </div>

                        <div className="text-center">
                            <div
                                className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📞</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600">+92 XXX XXXXXXX</p>
                        </div>

                        <div className="text-center">
                            <div
                                className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📍</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600">I-10/2 Islamabad, Pakistan</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}