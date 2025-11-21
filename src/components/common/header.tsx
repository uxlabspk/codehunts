import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { Link2 } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div>
      {/* Main Header */}
      <header className="relative z-50 h-20 w-full border-b border-gray-800/50 bg-black/50 shadow-lg backdrop-blur-md">
        <div className="container mx-auto h-full px-4 lg:px-0">
          <div className="flex h-full items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="relative">
                <img src="/logo.webp" alt="" className="h-18 w-18" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl leading-none font-bold text-white">
                  Code{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-orange-400">
                    HUNT'S
                  </span>
                </h3>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/"
                      className="group relative inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent px-6 py-2 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-gray-800/50 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-10 rounded-lg border-none bg-transparent px-6 text-gray-200 transition-all duration-200 hover:bg-gray-800/50 hover:text-white data-[state=open]:bg-gray-800/50">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="rounded-xl bg-gray-900/95 shadow-2xl backdrop-blur-md">
                      <div>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {[
                            {
                              href: "/ai-development",
                              title: "AI Development",
                              description:
                                "Learn How AI is dominating and how to use it to solve real-world problems.",
                            },
                            {
                              href: "/web-development",
                              title: "Web Development",
                              description:
                                "Web is everywhere and it is the future. Learn how to build websites with the latest technologies.",
                            },
                            {
                              href: "/app-development",
                              title: "App Development",
                              description:
                                "For Better User Experience, Learn how to build mobile applications with the latest technologies.",
                            },
                            {
                              href: "/cloud-solutions",
                              title: "Cloud Solutions",
                              description:
                                "The easy way to host your website or application on the cloud.",
                            },
                            {
                              href: "/graphics-designing",
                              title: "Graphics Designing",
                              description:
                                "Create stunning visual experiences with professional graphic design services.",
                            },
                            {
                              href: "/custom-software",
                              title: "Custom Software's",
                              description:
                                "Custom Software's are the best way to solve your unique business problems.",
                            },
                          ].map((service, index) => (
                            <li key={index}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={service.href}
                                  className="group block space-y-2 rounded-lg border border-transparent p-4 leading-none no-underline transition-all duration-200 outline-none select-none hover:border-gray-700 hover:bg-gray-800/50 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg"
                                >
                                  <div className="flex gap-3 text-sm leading-none font-semibold text-white transition-colors duration-200 group-hover:text-orange-400">
                                    {service.title} <Link2 />
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-gray-400 group-hover:text-gray-300">
                                    {service.description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {["Portfolio", "Our Team", "About Us", "Contact Us"].map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="group relative inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent px-6 py-2 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-gray-800/50 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
                      >
                        {item}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <Link to={"/lets-talk"} className={"hidden items-center space-x-4 lg:flex"}>
              <Button className={"rounded-full"}>Get Started</Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="flex h-10 w-10 flex-col items-center justify-center space-y-1 rounded-lg transition-colors duration-200 hover:bg-gray-800/50 lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-full transform bg-gray-900/95 backdrop-blur-md transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between border-b border-gray-700 p-6">
          <div className="flex items-center space-x-1">
            <div className="relative">
              <img src="/logo.webp" alt="" className="h-18 w-18" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl leading-none font-bold text-white">
                Code <span className="text-orange-400">HUNT'S</span>
              </h3>
            </div>
          </div>

          <button
            onClick={closeMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-gray-800/50"
            aria-label="Close mobile menu"
          >
            <svg
              className="h-6 w-6 text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex h-full flex-col">
          <nav className="flex-1 space-y-2 overflow-y-auto px-6 py-8">
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-4 py-3 text-gray-200 transition-all duration-200 hover:bg-gray-800/50 hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li className="py-2">
                <div className="px-4 py-2 text-sm font-semibold text-orange-400">Services</div>
                <ul className="mt-2 ml-4 space-y-1 border-l border-gray-700 pl-4">
                  {[
                    { href: "/ai-development", title: "AI Development" },
                    { href: "/web-development", title: "Web Development" },
                    { href: "/app-development", title: "App Development" },
                    { href: "/cloud-solutions", title: "Cloud Solutions" },
                    { href: "/graphics-designing", title: "Graphics Designing" },
                    { href: "/custom-software", title: "Custom Software's" },
                  ].map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.href}
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-3 py-2 text-gray-300 transition-all duration-200 hover:bg-gray-800/50 hover:text-white"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {[
                { href: "/portfolio", title: "Portfolio" },
                { href: "/our-team", title: "Our Team" },
                { href: "/about-us", title: "About Us" },
                { href: "/contact-us", title: "Contact Us" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-4 py-3 text-gray-200 transition-all duration-200 hover:bg-gray-800/50 hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              <li className="pt-6">
                <Link to={"/lets-talk"} className={"flex items-center space-x-4"}>
                  <Button size={"md"} className={"w-full rounded-full py-6"}>
                    Get Started
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
