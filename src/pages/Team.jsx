import React from 'react';
import {
    CodeBracketIcon,
    MagnifyingGlassIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';


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
            icon: <CodeBracketIcon className="w-5 h-5" />
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
            icon: <CodeBracketIcon className="w-5 h-5" />
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
            icon: <CodeBracketIcon className="w-5 h-5" />
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
            icon: <MagnifyingGlassIcon className="w-5 h-5" />
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
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
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                            >
                                {/* Profile Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Role Icon Overlay */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 text-amber-800">
                                        {member.icon}
                                    </div>
                                </div>

                                {/* Member Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-amber-800 font-semibold text-sm mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {member.bio}
                                    </p>

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {member.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                                                >
                          {skill}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex justify-center space-x-3">
                                        <a
                                            href={member.social.github}
                                            className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300"
                                            aria-label="GitHub"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href={member.social.linkedin}
                                            className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                            aria-label="LinkedIn"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href={`mailto:${member.social.email}`}
                                            className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-amber-800 hover:text-white transition-all duration-300"
                                            aria-label="Email"
                                        >
                                            <EnvelopeIcon className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                                Our team combines technical expertise with creative problem-solving to deliver exceptional results.
                                With years of experience across different technologies and industries, we're equipped to handle
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
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
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
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
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
                                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
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
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
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
                            <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📧</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600">contact@codehuntspk.com</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📞</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600">+92 XXX XXXXXXX</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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