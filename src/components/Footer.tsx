import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { to: "/contact", label: "Contact" },
      { to: "/blogs", label: "Blogs" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/used-tv-buyer-dubai", label: "Used TV Buyer in Dubai" },
      { to: "/used-tv-seller-dubai", label: "Used TV Seller in Dubai" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms-and-conditions", label: "Terms & Conditions" },
      { to: "/return-refund-policy", label: "Return & Refund Policy" },
      { to: "/trading-license", label: "Trading License" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg hero-gradient flex items-center justify-center font-heading font-extrabold text-lg">TV</div>
              <span className="font-heading font-bold text-lg">UsedTV<span className="text-accent">Dubai</span></span>
            </div>
            <p className="text-sm opacity-70 mb-4">
              Dubai's most trusted destination for buying and selling used TVs. Serving the UAE community for 7+ years with verified quality products.
            </p>
            <div className="flex items-center gap-2 mb-2 text-sm opacity-80">
              <Shield className="w-4 h-4 text-accent" /> Licensed & Verified Business
            </div>
            <p className="text-xs opacity-50 mt-4">Owner: Hassan Jamil</p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-accent">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-all">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-wrap gap-6 text-sm opacity-70">
          <a href="tel:+971501234567" className="flex items-center gap-2 hover:text-accent"><Phone className="w-4 h-4" /> +971 50 123 4567</a>
          <a href="mailto:info@usedtvdubai.ae" className="flex items-center gap-2 hover:text-accent"><Mail className="w-4 h-4" /> info@usedtvdubai.ae</a>
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Al Naif Road, Deira, Near California Hotel, Dubai</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Sat–Thu 9AM–9PM</span>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10 flex flex-wrap items-center justify-between gap-4 text-xs opacity-50">
          <p>© {new Date().getFullYear()} UsedTV Dubai. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-accent">Privacy</Link>
            <Link to="/terms-and-conditions" className="hover:text-accent">Terms</Link>
            <Link to="/sitemap.xml" className="hover:text-accent">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
