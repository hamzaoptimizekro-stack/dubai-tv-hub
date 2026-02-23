import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { EMIRATES, SERVICE_LOCATIONS } from "@/config/site";

export default function ServiceArea() {
  return (
    <section className="section-padding section-gradient">
      <div className="container">
        <h2 className="text-3xl font-extrabold text-center mb-2">We Serve All Emirates in UAE</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Free pickup and delivery for used TVs across the United Arab Emirates.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* UAE Map SVG */}
          <div className="flex justify-center">
            <svg viewBox="0 0 600 350" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
              {/* Abu Dhabi - largest */}
              <path d="M50,180 L180,120 L280,130 L320,160 L300,220 L260,260 L180,280 L80,260 L40,230 Z" className="fill-primary/15 stroke-primary stroke-[1.5]" />
              <text x="160" y="200" className="fill-primary text-[13px] font-bold" textAnchor="middle">Abu Dhabi</text>

              {/* Dubai */}
              <path d="M280,130 L360,100 L400,110 L410,140 L380,170 L320,160 Z" className="fill-primary/30 stroke-primary stroke-[2]" />
              <text x="345" y="140" className="fill-primary text-[12px] font-bold" textAnchor="middle">Dubai</text>

              {/* Sharjah */}
              <path d="M400,110 L440,95 L455,105 L450,130 L410,140 Z" className="fill-primary/20 stroke-primary stroke-[1.5]" />
              <text x="430" y="118" className="fill-primary text-[10px] font-bold" textAnchor="middle">Sharjah</text>

              {/* Ajman */}
              <path d="M440,95 L460,88 L465,100 L455,105 Z" className="fill-accent/25 stroke-accent stroke-[1.5]" />
              <text x="455" y="78" className="fill-accent text-[9px] font-bold" textAnchor="middle">Ajman</text>

              {/* Umm Al Quwain */}
              <path d="M460,88 L485,75 L490,90 L465,100 Z" className="fill-primary/20 stroke-primary stroke-[1.5]" />
              <text x="478" y="68" className="fill-primary text-[8px] font-bold" textAnchor="middle">UAQ</text>

              {/* Ras Al Khaimah */}
              <path d="M485,75 L510,40 L530,50 L520,80 L490,90 Z" className="fill-primary/20 stroke-primary stroke-[1.5]" />
              <text x="510" y="65" className="fill-primary text-[9px] font-bold" textAnchor="middle">RAK</text>

              {/* Fujairah */}
              <path d="M455,105 L465,100 L490,90 L520,80 L540,100 L510,150 L470,160 L450,130 Z" className="fill-accent/20 stroke-accent stroke-[1.5]" />
              <text x="495" y="125" className="fill-accent text-[10px] font-bold" textAnchor="middle">Fujairah</text>

              {/* Gulf label */}
              <text x="300" y="310" className="fill-muted-foreground/40 text-[11px] italic" textAnchor="middle">Arabian Gulf</text>
            </svg>
          </div>

          {/* Location Links */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Dubai */}
              <div className="bg-card rounded-xl border p-4 card-elevated">
                <h3 className="font-heading font-bold text-sm flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" /> Dubai
                </h3>
                <div className="flex flex-col gap-1 text-sm">
                  <Link to="/used-tv-buyer-dubai" className="text-muted-foreground hover:text-primary transition-colors">Used TV Buyer in Dubai</Link>
                  <Link to="/used-tv-seller-dubai" className="text-muted-foreground hover:text-primary transition-colors">Used TV Seller in Dubai</Link>
                </div>
              </div>

              {SERVICE_LOCATIONS.map((loc) => (
                <div key={loc.slug} className="bg-card rounded-xl border p-4 card-elevated">
                  <h3 className="font-heading font-bold text-sm flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" /> {loc.name}
                  </h3>
                  <div className="flex flex-col gap-1 text-sm">
                    <Link to={`/used-tv-buyer-${loc.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                      Used TV Buyer in {loc.name}
                    </Link>
                    <Link to={`/used-tv-seller-${loc.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                      Used TV Seller in {loc.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
