import { Phone, Shield, Tv, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function UsedTvSellerDubai() {
  return (
    <>
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <div className="verified-badge mb-4 bg-primary-foreground/15 text-primary-foreground">
            <Shield className="w-4 h-4" /> #1 Used TV Seller in Dubai
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Used TV for Sale in Dubai — Quality Tested & Best Prices</h1>
          <p className="text-lg opacity-90 mb-6">Buy quality second-hand TVs from Dubai's most trusted seller. All brands, all sizes, fully tested.</p>
          <a href="tel:+971501234567" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary font-bold">
            <Phone className="w-5 h-5" /> Browse Our Collection
          </a>
        </div>
      </section>

      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2>Buy Used TVs in Dubai — Premium Quality at Affordable Prices</h2>
          <p>Looking for a <strong>used TV for sale in Dubai</strong>? UsedTV Dubai offers the widest selection of quality-tested second-hand televisions at unbeatable prices. Whether you need a compact 32-inch TV for your bedroom or a massive 75-inch screen for your living room, we have it all.</p>

          <h2>Our Quality Promise</h2>
          <p>Every TV sold at UsedTV Dubai undergoes a thorough <strong>15-point inspection</strong> to ensure it meets our quality standards:</p>
          <ul>
            <li>Screen quality check — no dead pixels, burns, or color issues</li>
            <li>Sound output testing on all speakers</li>
            <li>All ports verified — HDMI, USB, AV, Ethernet</li>
            <li>Wi-Fi and Bluetooth connectivity tested</li>
            <li>Smart TV apps and operating system verification</li>
            <li>Remote control and power supply inspection</li>
            <li>Physical condition assessment and cleaning</li>
          </ul>

          <h2>Brands Available</h2>
          <ul>
            <li><strong>Samsung</strong> — Smart TV, QLED, Crystal UHD, The Frame</li>
            <li><strong>LG</strong> — OLED, NanoCell, WebOS Smart TVs</li>
            <li><strong>Sony</strong> — Bravia, OLED, Android TV</li>
            <li><strong>TCL, Hisense, Toshiba, Panasonic, Philips</strong> and more</li>
          </ul>

          <h2>Price Range</h2>
          <ul>
            <li><strong>32" LED:</strong> AED 200 – 500</li>
            <li><strong>43" Smart TV:</strong> AED 400 – 900</li>
            <li><strong>55" 4K UHD:</strong> AED 600 – 1,500</li>
            <li><strong>65" QLED/OLED:</strong> AED 1,000 – 3,000</li>
            <li><strong>75"+:</strong> AED 1,500 – 5,000</li>
          </ul>

          <h2>Why Buy From Us?</h2>
          <ul>
            <li><strong>Quality guaranteed</strong> — Every TV is tested and verified before sale.</li>
            <li><strong>Best prices</strong> — Save 40-70% compared to brand new TVs.</li>
            <li><strong>Delivery available</strong> — Free delivery across Dubai.</li>
            <li><strong>Limited warranty</strong> on select models.</li>
            <li><strong>Licensed business</strong> — Buy with confidence from a verified dealer.</li>
          </ul>

          <div className="bg-secondary rounded-xl p-6 my-8 text-center">
            <h3 className="font-heading font-bold text-xl mb-2">Visit Our Showroom</h3>
            <p className="text-muted-foreground mb-2">Al Naif Road, Deira, Near California Hotel, Dubai</p>
            <p className="text-muted-foreground mb-4">Or call for current inventory</p>
            <a href="tel:+971501234567" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg hero-gradient text-primary-foreground font-bold">
              <Phone className="w-5 h-5" /> +971 50 123 4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
