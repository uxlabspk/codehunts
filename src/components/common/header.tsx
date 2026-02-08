import { useState, useEffect } from "react";
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
import {
  ArrowRight,
  Brain,
  Cloud,
  Code2,
  Monitor,
  Paintbrush,
  Smartphone,
} from "lucide-react";

const services = [
  {
    href: "/ai-development",
    title: "AI Development",
    description: "Intelligent solutions powered by machine learning and AI.",
    icon: Brain,
  },
  {
    href: "/web-development",
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge tech.",
    icon: Code2,
  },
  {
    href: "/app-development",
    title: "App Development",
    description: "Native & cross-platform mobile apps for every device.",
    icon: Smartphone,
  },
  {
    href: "/cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    icon: Cloud,
  },
  {
    href: "/graphics-designing",
    title: "Graphics Designing",
    description: "Stunning visual experiences with professional design.",
    icon: Paintbrush,
  },
  {
    href: "/custom-software",
    title: "Custom Software",
    description: "Tailored software solutions for unique business needs.",
    icon: Monitor,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div>
      {/* Main Header */}
      <header
        className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-500 ${scrolled
            ? "h-16 border-b border-white/[0.06] bg-background/80 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "h-20 bg-transparent"
          }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4 lg:px-6">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-1 transition-opacity hover:opacity-80">
            <img src="/logo.webp" alt="Code HUNT'S" className="h-14 w-14" />
            <h3 className="text-lg leading-none font-bold text-white">
              Code <span className="text-gradient">HUNT'S</span>
            </h3>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="group inline-flex h-9 items-center justify-center rounded-full bg-transparent px-4 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 rounded-full border-none bg-transparent px-4 text-sm text-muted-foreground transition-all duration-300 hover:bg-white/[0.06] hover:text-white data-[state=open]:bg-white/[0.06] data-[state=open]:text-white">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="glass rounded-2xl border-white/[0.06] shadow-2xl">
                    <ul className="grid w-[400px] gap-1.5 p-3 md:w-[520px] md:grid-cols-2 lg:w-[620px]">
                      {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <a
                                href={service.href}
                                className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-300 outline-none select-none hover:bg-white/[0.06]"
                              >
                                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                                  <Icon className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-white transition-colors group-hover:text-primary">
                                    {service.title}
                                  </div>
                                  <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
                                    {service.description}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {["Portfolio", "Our Team", "About Us", "Contact Us"].map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="inline-flex h-9 items-center justify-center rounded-full bg-transparent px-4 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                    >
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Link to="/lets-talk" className="hidden items-center lg:flex">
            <Button className="rounded-full px-6 shadow-lg shadow-primary/20 transition-shadow hover:shadow-primary/40">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl transition-colors duration-200 hover:bg-white/[0.06] lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-white/80 transition-all duration-300 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white/80 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white/80 transition-all duration-300 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={closeMobileMenu}
      />
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm transform bg-background/95 shadow-2xl shadow-black/50 backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
          <div className="flex items-center gap-1">
            <img src="/logo.webp" alt="Code HUNT'S" className="h-12 w-12" />
            <h3 className="text-lg leading-none font-bold text-white">
              Code <span className="text-gradient">HUNT'S</span>
            </h3>
          </div>

          <button
            onClick={closeMobileMenu}
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/[0.06]"
            aria-label="Close mobile menu"
          >
            <svg
              className="h-5 w-5 text-muted-foreground"
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
        <nav className="flex h-[calc(100%-80px)] flex-col overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
              >
                Home
              </Link>
            </li>

            <li className="py-2">
              <div className="px-4 py-2 text-xs font-semibold tracking-wider text-primary uppercase">
                Services
              </div>
              <ul className="mt-1 space-y-0.5">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <li key={index}>
                      <Link
                        to={service.href}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
                      >
                        <Icon className="h-4 w-4 text-primary/60" />
                        {service.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li className="section-divider my-3" />

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
                  className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <Link to="/lets-talk" onClick={closeMobileMenu}>
              <Button className="w-full rounded-full py-5 shadow-lg shadow-primary/20">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
