import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import keysLogo from "@/assets/keys logo.svg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/70 backdrop-blur-xl border border-white/20 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant="nav"
                  size="sm"
                  className={
                    location.pathname === link.href
                      ? "text-accent"
                      : ""
                  }
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact">
              <Button size="sm">Begin a Conversation</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
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
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2">Begin a Conversation</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
