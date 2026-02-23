import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { to: "/used-tv-buyer-dubai", label: "Used TV Buyer in Dubai" },
      { to: "/used-tv-seller-dubai", label: "Used TV Seller in Dubai" },
    ],
  },
  { to: "/blogs", label: "Blogs" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="hero-gradient text-primary-foreground text-sm py-2">
        <div className="container flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+971501234567" className="flex items-center gap-1 hover:underline">
              <Phone className="w-3.5 h-3.5" /> +971 50 123 4567
            </a>
            <a href="mailto:info@usedtvdubai.ae" className="flex items-center gap-1 hover:underline">
              <Mail className="w-3.5 h-3.5" /> info@usedtvdubai.ae
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <MapPin className="w-3.5 h-3.5" /> Al Naif Road, Deira, Dubai
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg hero-gradient flex items-center justify-center text-primary-foreground font-heading font-extrabold text-lg">TV</div>
            <span className="font-heading font-bold text-lg text-foreground">UsedTV<span className="text-primary">Dubai</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    {link.label} <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 bg-card border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[220px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to!}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a href="tel:+971501234567" className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg hero-gradient text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-card pb-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-muted-foreground"
                  >
                    {link.label} <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen &&
                    link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setMobileOpen(false)}
                        className="block pl-10 pr-6 py-2.5 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to!}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-3 text-sm font-medium ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="px-6 pt-2">
              <a href="tel:+971501234567" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hero-gradient text-primary-foreground text-sm font-semibold">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
