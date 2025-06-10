import {useEffect, useState} from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import FilledButton from "./Buttons/FilledButton.jsx";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll event
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 30);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 backdrop-blur-md ${isVisible ? "bg-gray-50/60 shadow-sm" : ""}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <a href="/" className="flex items-center space-x-2">
                        <img src="/img/logo.png" alt="Code HUNTS Logo" className="h-10" />
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex lg:space-x-8 items-center">
                        <a href="/" className="text-gray-800 hover:text-black">Home</a>

                        {/* Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="flex items-center gap-1 text-gray-800 hover:text-black focus:outline-none"
                            >
                                Services <ChevronDownIcon className="h-4 w-4" />
                            </button>
                            <div className={`absolute z-10 left-0 mt-2 w-48 rounded-lg bg-white shadow-lg p-2 transition-all duration-200 ${servicesOpen ? 'block' : 'hidden'} group-hover:block`}>
                                <a href="/web-development" className="block px-4 py-2 text-sm hover:bg-gray-100">Web Development</a>
                                <a href="/app-development" className="block px-4 py-2 text-sm hover:bg-gray-100">App Development</a>
                                <a href="/graphics-designing" className="block px-4 py-2 text-sm hover:bg-gray-100">Graphics Designing</a>
                                <a href="/ai" className="block px-4 py-2 text-sm hover:bg-gray-100">AI & Machine Learning</a>
                                <a href="/software-consulting" className="block px-4 py-2 text-sm hover:bg-gray-100">Software Consulting</a>
                                <a href="/cloud-solutions" className="block px-4 py-2 text-sm hover:bg-gray-100">Cloud Solutions</a>
                            </div>
                        </div>

                        <a href="/portfolio" className="text-gray-800 hover:text-black">Portfolio</a>
                        <a href="/our-team" className="text-gray-800 hover:text-black">Our Team</a>
                        <a href="/about-us" className="text-gray-800 hover:text-black">About Us</a>
                        <a href="/contact-us" className="text-gray-800 hover:text-black">Contact</a>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <FilledButton text={"Let's Talk"} to={"/lets-talk"} style={"px-5 py-2"} />
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="text-gray-800 hover:text-black"
                        >
                            <Bars3Icon className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Off canvas Menu */}
            <Dialog as="div" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                <Dialog.Panel className="fixed inset-0 z-50 bg-gray-50/60 backdrop-blur-md p-6 overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <a href="/">
                            <img src="/img/logo.png" className="h-12" alt="Code Hunts Logo" />
                        </a>
                        <button onClick={() => setMobileMenuOpen(false)} className="text-gray-800">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="mt-6 space-y-7">
                        <a href="/" className="block text-lg text-gray-800">Home</a>
                        <a href="/web-development" className="block text-lg text-gray-800">Web Development</a>
                        <a href="/app-development" className="block text-lg text-gray-800">App Development</a>
                        <a href="/graphics-designing" className="block text-lg text-gray-800">Graphics Designing</a>
                        <a href="/portfolio" className="block text-lg text-gray-800">Portfolio</a>
                        <a href="/our-team" className="block text-lg text-gray-800">Our Team</a>
                        <a href="/about-us" className="block text-lg text-gray-800">About Us</a>
                        <a href="/contact-us" className="block text-lg text-gray-800">Contact</a>
                        <a href="/lets-talk" className="block mt-6 bg-amber-800 text-white text-center py-2 rounded-full">
                            Let's Talk
                        </a>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}