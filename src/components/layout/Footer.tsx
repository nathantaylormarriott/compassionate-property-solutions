import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { href: "/how-it-works", label: "How It Works" },
  ],
  support: [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-semibold text-slate-100 mb-4">
              The Next Chapter Homes
            </h3>
            <p className="text-slate-200/80 max-w-md leading-relaxed">
              We are a team of dedicated professionals who believe that
              navigating a home sale during life's hardest transitions should be
              handled with dignity, clarity, and profound respect. This is our
              calling, not just our business.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-slate-200/80 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-300/80 hover:text-slate-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-slate-200/80 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-300/80 hover:text-slate-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-300/70 text-sm">
              © {new Date().getFullYear()} The Next Chapter Homes. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-slate-300/70 hover:text-slate-100 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-slate-300/70 hover:text-slate-100 transition-colors"
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
