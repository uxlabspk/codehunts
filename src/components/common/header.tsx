import { useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {GitBranch} from "lucide-react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <div className="flex items-center justify-between bg-black/80 backdrop-blur border-b fixed w-full h-20 px-8 z-50">
                <div className="flex items-center">
                    {/*<img className="w-44" src={'/logo.png'} alt={'code hunts logo'} />*/}
                    <GitBranch className={'mr-2'} />
                    <h3 className={'font-medium'}>
                        Code <span className={'text-orange-400'}>HUNT'S</span>
                    </h3>
                </div>

                <div className="hidden lg:block">
                    <NavigationMenu>
                        <NavigationMenuList>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/"
                                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent ">
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className={'bg-black'}>
                                    <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/ai-development" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">AI Development</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Learn How AI is dominating and how to use it to solve real-world problems.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/web-development" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">Web Development</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Web is every where and it is the future of the web. Learn how to build a website with the latest technologies.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/app-development" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">App Development</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        For Better User Experience, Learn how to build a mobile application with the latest technologies.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/cloud-solutions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">Cloud Solutions</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        The easy way to host your website or application on the cloud.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/graphics-designing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">Graphics Designing</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        For better user experience, Learn how to build a mobile application with the latest technologies.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <a href="/custom-software" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                    <div className="text-sm font-medium leading-none">Custom Software's</div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        Custom Software's are the best way to solve your problems.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/portfolio"
                                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                >
                                    Portfolio
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/our-team"
                                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                >
                                    Our Team
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/about-us"
                                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                >
                                    About Us
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/contact-us"
                                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                >
                                    Contact Us
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>


                <Link to={'/lets-talk'} className={'hidden lg:flex items-center space-x-4'}>
                    <Button className={'px-6 rounded-full'}>
                        Get Started
                    </Button>
                </Link>


                <button
                    className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            <div
                className={`fixed top-0 left-0 h-full w-full bg-black/80 backdrop-blur z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="flex items-center justify-between p-4 border-b">
                    <img className="w-44" src={'/logo.png'} alt={'code hunts logo'} />

                    <button
                        onClick={closeMobileMenu}
                        className="flex items-center justify-center w-8 h-8 rounded-full"
                        aria-label="Close mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col h-full pt-8">
                    <nav className="flex-1 px-4 space-y-6">
                        <ul>
                            <li className={'my-3'}>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className={'my-3'}>Services</li>
                            <ul className={'ms-3'}>
                                <li className={'my-3'}>
                                    <Link to={'/ai-development'}>AI Development</Link>
                                </li>
                                <li className={'my-3'}>
                                    <Link to={'/web-development'}>Web Development</Link>
                                </li>
                                <li className={'my-3'}>
                                    <Link to={'/app-development'}>App Development</Link>
                                </li>
                                <li className={'my-3'}>
                                    <Link to={'/cloud-solutions'}>Cloud Solutions</Link>
                                </li>
                                <li className={'my-3'}>
                                    <Link to={'/graphics-designing'}>Graphics Designing</Link>
                                </li>
                                <li className={'my-3'}>
                                    <Link to={'/custom-software'}>Custom Software's</Link>
                                </li>
                            </ul>
                            <li className={'my-3'}>
                                <Link to={'/portfolio'}>Portfolio</Link>
                            </li>
                            <li className={'my-3'}>
                                <Link to={'/our-team'}>Our Team</Link>
                            </li>
                            <li className={'my-3'}>
                                <Link to={'/about-us'}>About Us</Link>
                            </li>
                            <li className={'my-3'}>
                                <Link to={'/contact-us'}>Contact Us</Link>
                            </li>
                            <li className={'my-3'}>
                                <Link to={'/lets-talk'}>
                                    <Button
                                        className={'w-full rounded-full'}>
                                        Get Started
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}