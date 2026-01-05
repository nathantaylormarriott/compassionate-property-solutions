import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { href: "/sell", label: "Sell a Property" },
    { href: "/buyers", label: "Cash Buyers" },
    { href: "/how-it-works", label: "How It Works" },
  ],
  support: [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-4">
              Graceful Transitions
            </h3>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              We are a team of dedicated professionals who believe that
              navigating a home sale during life's hardest transitions should be
              handled with dignity, clarity, and profound respect. This is our
              calling, not just our business.
            </p>
            <div className="text-primary-foreground/80">
              <p className="font-medium mb-1">Speak with Someone Who Understands</p>
              <p className="text-primary-foreground/60 text-sm">
                0800 123 4567 | hello@gracefultransitions.co.uk
              </p>
              <p className="text-primary-foreground/50 text-xs mt-2">
                Monday–Friday, 9am–5pm
                <br />
                (We return evening/weekend enquiries the next business day)
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-primary-foreground/80 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-primary-foreground/80 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Graceful Transitions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
