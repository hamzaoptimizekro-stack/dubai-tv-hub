import { Phone, CheckCircle, ArrowRight, Shield, Tv, Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function UsedTvBuyerDubai() {
  return (
    <>
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <div className="verified-badge mb-4 bg-primary-foreground/15 text-primary-foreground">
            <Shield className="w-4 h-4" /> #1 Used TV Buyer in Dubai
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Used TV Buyer in Dubai — We Buy All Brands & Conditions</h1>
          <p className="text-lg opacity-90 mb-6">Sell your used TV for the best price in Dubai. Instant cash, free pickup, and hassle-free process.</p>
          <a href="tel:+971501234567" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary font-bold">
            <Phone className="w-5 h-5" /> Get Your Free Quote
          </a>
        </div>
      </section>

      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2>Sell Your Used TV in Dubai — Fast & Easy</h2>
          <p>Looking to sell your old television? UsedTV Dubai is the <strong>leading used TV buyer in Dubai</strong>. We purchase all brands including Samsung, LG, Sony, TCL, Hisense, and more. No matter the size, age, or condition — working, non-working, or damaged — we offer fair prices and instant cash payment.</p>

          <h2>How It Works</h2>
          <ol>
            <li><strong>Call or WhatsApp us</strong> with your TV details (brand, size, model, condition).</li>
            <li><strong>Receive a free quote</strong> within minutes — no obligation.</li>
            <li><strong>Schedule a free pickup</strong> at your convenience, anywhere in Dubai.</li>
            <li><strong>Get instant cash</strong> on the spot when our team collects your TV.</li>
          </ol>

          <h2>What TVs Do We Buy?</h2>
          <ul>
            <li>LED, LCD, OLED, QLED, Plasma TVs</li>
            <li>Smart TVs and non-smart TVs</li>
            <li>All sizes from 24-inch to 85-inch+</li>
            <li>Working, partially working, and non-working TVs</li>
            <li>TVs with cracked screens or cosmetic damage</li>
          </ul>

          <h2>Why Sell to UsedTV Dubai?</h2>
          <ul>
            <li><strong>Best prices</strong> — We offer the highest buyback rates in Dubai.</li>
            <li><strong>Free pickup</strong> — No need to transport heavy TVs. We come to you.</li>
            <li><strong>Instant cash</strong> — No waiting, no bank transfers. Cash on the spot.</li>
            <li><strong>7+ years trusted</strong> — Thousands of satisfied sellers across UAE.</li>
          </ul>

          <h2>Areas Covered</h2>
          <p>We buy used TVs from all areas of Dubai including Deira, Bur Dubai, Marina, JBR, JLT, Downtown, Al Barsha, Silicon Oasis, International City, Mirdif, Al Nahda, Al Qusais, and more. We also serve Sharjah, Ajman, and other emirates.</p>

          <div className="bg-secondary rounded-xl p-6 my-8 text-center">
            <h3 className="font-heading font-bold text-xl mb-2">Ready to Sell Your TV?</h3>
            <p className="text-muted-foreground mb-4">Call us now for the best price in Dubai.</p>
            <a href="tel:+971501234567" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg hero-gradient text-primary-foreground font-bold">
              <Phone className="w-5 h-5" /> +971 50 123 4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
