import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import keysLogo from "@/assets/keys logo.svg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const location = useLocation();

  // On non-home pages, always show the CTA button on mobile
  const isHomePage = location.pathname === "/";
  const showMobileCTA = !isHomePage || scrolledPastHero;

  useEffect(() => {
    const handleScroll = () => {
      // Consider "past hero" when scrolled more than 80vh
      const heroThreshold = window.innerHeight * 0.8;
      setScrolledPastHero(window.scrollY > heroThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - left (transforms to CTA on mobile when scrolled) */}
          <div className="flex-shrink-0">
            {/* Desktop: Always show logo */}
            <Link to="/" className="hidden lg:flex items-center gap-2">
              <img
                src={keysLogo}
                alt=""
                className="h-8 w-8 rounded-full object-contain"
                aria-hidden="true"
              />
              <span className="font-serif text-xl md:text-2xl font-bold text-primary">
                The Next Chapter Homes
              </span>
            </Link>

            {/* Mobile: Logo or CTA based on scroll/page */}
            <div className="lg:hidden">
              {showMobileCTA ? (
                <Link to="/#contact-form" className="animate-fade-in">
                  <Button size="sm" className="text-sm">
                    Begin a Conversation
                  </Button>
                </Link>
              ) : (
                <Link to="/" className="flex items-center gap-2">
                  <img
                    src={keysLogo}
                    alt=""
                    className="h-8 w-8 rounded-full object-contain"
                    aria-hidden="true"
                  />
                  <span className="font-serif text-xl font-bold text-primary">
                    The Next Chapter Homes
                  </span>
                </Link>
              )}
            </div>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant="nav"
                  size="default"
                  className={`text-base ${
                    location.pathname === link.href
                      ? "text-accent"
                      : ""
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA button - right */}
          <div className="hidden lg:block">
            <Link to="/#contact-form">
              <Button size="default" className="text-base px-5">Begin a Conversation</Button>
            </Link>
          </div>

          {/* Mobile Menu Button - always on the right */}
          <button
            className="lg:hidden p-2 text-foreground ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      location.pathname === link.href
                        ? "text-accent"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link to="/#contact-form" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2">Begin a Conversation</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
