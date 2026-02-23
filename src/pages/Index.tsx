import { Link } from "react-router-dom";
import { Phone, Shield, MapPin, Star, CheckCircle, Tv, ArrowRight, Users, Clock, BadgeCheck, ThumbsUp, Truck } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";

const features = [
  { icon: BadgeCheck, title: "7+ Years Trusted", desc: "Serving Dubai with 12 businesses in used home appliances." },
  { icon: Truck, title: "Free Pickup & Delivery", desc: "We come to your doorstep across Dubai, Sharjah & Ajman." },
  { icon: ThumbsUp, title: "Best Prices Guaranteed", desc: "Fair market valuations and instant cash payments." },
  { icon: Shield, title: "Licensed & Verified", desc: "Fully licensed trading business in Dubai, UAE." },
];

const brands = ["Samsung", "LG", "Sony", "TCL", "Hisense", "Toshiba", "Panasonic", "Philips", "Sharp", "Skyworth"];

const testimonials = [
  { name: "Ahmed K.", area: "Deira, Dubai", text: "Sold my 55-inch Samsung TV within 2 hours. Got the best price compared to 5 other buyers. Highly recommended!", rating: 5 },
  { name: "Fatima S.", area: "Al Nahda, Sharjah", text: "Bought a second-hand LG OLED TV at an unbeatable price. Works like brand new. Excellent service!", rating: 5 },
  { name: "Rajesh P.", area: "JLT, Dubai", text: "Hassan and his team are very professional. Quick response, fair pricing, and free pickup. The best used TV dealer in Dubai.", rating: 5 },
  { name: "Maria L.", area: "Abu Hail, Dubai", text: "I've been buying and selling used electronics with them for 3 years. Always honest and reliable.", rating: 5 },
];

const faqs = [
  { q: "Where can I sell my used TV in Dubai?", a: "You can sell your used TV at UsedTV Dubai located at Al Naif Road, Deira, Near California Hotel, Dubai. We offer instant cash payment and free pickup across Dubai, Sharjah, and Ajman." },
  { q: "How much can I get for my used TV?", a: "The price depends on brand, size, model year, and condition. Samsung, LG, and Sony TVs typically get the best resale value. Contact us for a free, no-obligation valuation." },
  { q: "Do you buy broken or damaged TVs?", a: "Yes, we purchase TVs in all conditions — working, non-working, cracked screen, or damaged. We offer fair prices based on parts and repair value." },
  { q: "Which TV brands do you buy and sell?", a: "We deal in all major brands: Samsung, LG, Sony, TCL, Hisense, Toshiba, Panasonic, Philips, Sharp, Skyworth, and more." },
  { q: "Do you offer free pickup service?", a: "Absolutely! We provide free pickup across Dubai, Sharjah, Ajman, and other UAE emirates. Our team will visit your location at a time convenient for you." },
  { q: "How fast is the process?", a: "Most transactions are completed within 1-2 hours. Call us, get a quote, and we'll arrange immediate pickup or delivery." },
];

export default function Index() {
  return (
    <>
      <SchemaMarkup />
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(200_85%_60%_/_0.3),_transparent_60%)]" />
        <div className="container relative">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="verified-badge mb-6 bg-primary-foreground/15 text-primary-foreground">
              <BadgeCheck className="w-4 h-4" /> Verified & Licensed Business — 7+ Years in Dubai
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Buy & Sell Used TVs in Dubai, UAE — Best Prices Guaranteed
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed max-w-2xl">
              Dubai's #1 trusted destination for buying and selling used televisions. We buy all brands — Samsung, LG, Sony, TCL & more. Instant cash, free pickup, and same-day service across UAE.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+971501234567" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary font-bold hover:opacity-90 transition-opacity">
                <Phone className="w-5 h-5" /> Call for Best Price
              </a>
              <Link to="/used-tv-seller-dubai" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary-foreground/30 font-bold hover:bg-primary-foreground/10 transition-colors">
                Sell Your TV <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm opacity-80">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-current" /> 4.8/5 (1,250+ Reviews)</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 15,000+ Happy Customers</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Same Day Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding section-gradient">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-xl p-6 card-elevated">
                <f.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main SEO Content */}
      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2>Used TV for Sale in Dubai — Your Complete Guide to Buying Second-Hand Televisions in UAE</h2>
          <p>
            Are you looking for a <strong>used TV for sale in Dubai</strong>? Whether you're searching for a budget-friendly television for your apartment, a large screen for your living room, or a premium brand like Samsung, LG, or Sony at a fraction of the original cost, UsedTV Dubai is your ultimate destination. We are the UAE's most trusted platform for buying and selling <strong>second-hand televisions in Dubai</strong>, Sharjah, Ajman, and across the Emirates.
          </p>
          <p>
            With over <strong>7 years of experience</strong> in the used home appliance market and 12 successful businesses operating under the same niche, our founder <strong>Hassan Jamil</strong> has built a reputation that thousands of UAE residents trust. Our showroom is conveniently located at <strong>Al Naif Road, Deira, Near California Hotel, Dubai</strong> — one of the busiest commercial hubs in the emirate.
          </p>

          <h2>Why Buy a Used TV in Dubai?</h2>
          <p>
            Dubai is a city of rapid upgrades. Many residents and expats frequently upgrade their electronics, leaving perfectly functional televisions available at significantly reduced prices. Buying a <strong>used TV in Dubai</strong> is not just about saving money — it's about smart, sustainable consumption. Here's why thousands of people choose to buy <strong>pre-owned televisions in UAE</strong>:
          </p>
          <ul>
            <li><strong>Save 40-70% off retail prices</strong> — Get premium brands at a fraction of the cost of brand new TVs in Dubai malls.</li>
            <li><strong>Quality tested & verified</strong> — Every TV at UsedTV Dubai goes through a rigorous 15-point inspection before being listed for sale.</li>
            <li><strong>Wide selection of brands and sizes</strong> — From 32-inch LED TVs to 85-inch OLED and QLED displays, we carry all sizes and technologies.</li>
            <li><strong>Eco-friendly choice</strong> — Reduce electronic waste by giving a quality television a second life instead of buying new.</li>
            <li><strong>Perfect for short-term stays</strong> — Ideal for expats, students, and temporary residents who need affordable electronics without long-term commitments.</li>
          </ul>

          <h2>Best Used TV Brands Available in Dubai</h2>
          <p>
            At UsedTV Dubai, we stock all major television brands that are popular in the UAE market. Whether you're looking for a <strong>used Samsung TV in Dubai</strong>, a <strong>second-hand LG TV</strong>, or an affordable <strong>Sony Bravia</strong>, we have it all. Our inventory includes:
          </p>
          <ul>
            <li><strong>Samsung</strong> — Crystal UHD, QLED, Neo QLED, The Frame, Smart TV series</li>
            <li><strong>LG</strong> — OLED, NanoCell, UHD, WebOS Smart TVs</li>
            <li><strong>Sony</strong> — Bravia XR, OLED, X-series, Android TV models</li>
            <li><strong>TCL</strong> — Budget-friendly 4K and QLED options</li>
            <li><strong>Hisense</strong> — ULED, Laser TV, affordable smart TVs</li>
            <li><strong>Toshiba, Panasonic, Philips, Sharp, Skyworth</strong> — Various models and sizes</li>
          </ul>
          <p>
            Every television is thoroughly tested for picture quality, sound output, connectivity (HDMI, USB, Wi-Fi, Bluetooth), smart features, and overall functionality. We provide a <strong>limited warranty on select models</strong> to give you complete peace of mind.
          </p>

          <h2>How to Sell Your Used TV in Dubai — Get Instant Cash Today</h2>
          <p>
            Planning to <strong>sell your used TV in Dubai</strong>? We make the process incredibly simple. Whether you have a working TV you want to upgrade from, or even a damaged television taking up space, we'll buy it. Here's how our streamlined selling process works:
          </p>
          <ol>
            <li><strong>Contact us</strong> — Call or WhatsApp us at +971 50 123 4567 with details about your TV (brand, model, size, condition, and age).</li>
            <li><strong>Get a free valuation</strong> — Our experts will provide you with a fair market price within minutes.</li>
            <li><strong>Schedule pickup</strong> — We offer free pickup from anywhere in Dubai, Sharjah, Ajman, and surrounding areas.</li>
            <li><strong>Get instant cash</strong> — Once our team inspects the TV at your location, you'll receive immediate cash payment.</li>
          </ol>
          <p>
            We buy <strong>all types of used TVs</strong> — LED, LCD, OLED, QLED, Plasma, Smart TVs, and even broken or non-functioning units. No matter the condition, we'll offer you the best price in the market.
          </p>

          <h2>Used TV Prices in Dubai — What to Expect</h2>
          <p>
            The price of a <strong>used TV in Dubai</strong> varies based on several factors including the brand, screen size, technology (LED, OLED, QLED), model year, and condition. Here's a general guide to help you understand the market:
          </p>
          <ul>
            <li><strong>32-inch LED TV</strong> — AED 200 to AED 500</li>
            <li><strong>43-inch Smart TV</strong> — AED 400 to AED 900</li>
            <li><strong>55-inch 4K UHD TV</strong> — AED 600 to AED 1,500</li>
            <li><strong>65-inch QLED/OLED TV</strong> — AED 1,000 to AED 3,000</li>
            <li><strong>75-inch+ Premium TV</strong> — AED 1,500 to AED 5,000</li>
          </ul>
          <p>
            These are approximate ranges. For the most accurate pricing, visit our showroom at <strong>Al Naif Road, Deira</strong> or call us for a personalized quote. We pride ourselves on offering the <strong>best prices for used TVs in Dubai</strong> — whether you're buying or selling.
          </p>

          <h2>Areas We Serve in UAE</h2>
          <p>
            Our <strong>used TV buying and selling services</strong> cover the entire UAE, with primary focus on Dubai and the Northern Emirates. We provide <strong>free pickup and delivery</strong> to the following areas:
          </p>
          <ul>
            <li><strong>Dubai</strong> — Deira, Bur Dubai, JBR, Marina, JLT, Downtown, Business Bay, Al Barsha, Silicon Oasis, Sports City, International City, Al Nahda, Al Qusais, Mirdif, Jumeirah, and all other Dubai communities</li>
            <li><strong>Sharjah</strong> — Al Majaz, Al Nahda, Al Taawun, Muwaileh, University City, Industrial Area</li>
            <li><strong>Ajman</strong> — Al Rashidiya, Al Nuaimiya, Ajman Downtown, Emirates City</li>
            <li><strong>Ras Al Khaimah, Fujairah, Umm Al Quwain</strong> — Available on request</li>
          </ul>

          <h2>Why Choose UsedTV Dubai Over Other Dealers?</h2>
          <p>
            The used electronics market in Dubai can be overwhelming. Many buyers and sellers face issues with trust, fair pricing, and product quality. At UsedTV Dubai, we've solved these problems with a customer-first approach that has earned us <strong>4.8/5 stars from over 1,250 verified reviews</strong>. Here's what makes us different:
          </p>
          <ul>
            <li><strong>Transparency</strong> — No hidden fees, no last-minute price changes. The price we quote is the price you get.</li>
            <li><strong>Expertise</strong> — Our team of technicians tests every TV thoroughly before buying or selling.</li>
            <li><strong>Speed</strong> — Most transactions are completed within 1-2 hours from the initial call.</li>
            <li><strong>Convenience</strong> — Free door-to-door service across the UAE. You don't need to carry heavy TVs anywhere.</li>
            <li><strong>Trust</strong> — Founded by Hassan Jamil, who has been in the used home appliance business for 7+ years with 12 active businesses.</li>
          </ul>

          <h2>Tips for Buying a Used TV in Dubai</h2>
          <p>
            If you're in the market for a <strong>second-hand television in Dubai</strong>, keep these tips in mind to ensure you get the best deal:
          </p>
          <ul>
            <li><strong>Check the screen carefully</strong> — Look for dead pixels, color inconsistencies, and backlight bleeding.</li>
            <li><strong>Test all ports</strong> — Ensure HDMI, USB, audio, and ethernet ports are functioning.</li>
            <li><strong>Verify smart features</strong> — Connect to Wi-Fi and test streaming apps like Netflix, YouTube, and Shahid.</li>
            <li><strong>Ask about the model year</strong> — Newer models will have better features and longer software support.</li>
            <li><strong>Request a warranty</strong> — At UsedTV Dubai, we offer limited warranties on eligible products.</li>
            <li><strong>Buy from verified dealers</strong> — Always purchase from licensed businesses to avoid scams.</li>
          </ul>

          <h2>Used TV Market Trends in Dubai 2025</h2>
          <p>
            The <strong>used TV market in Dubai</strong> is booming, driven by the constant influx of new residents and the rapid pace at which technology evolves. With the release of new models from Samsung, LG, and Sony every year, perfectly good 1-2 year old TVs flood the second-hand market at incredible prices. Smart TVs with 4K resolution have become the standard, making older Full HD models available at bargain prices.
          </p>
          <p>
            The sustainability movement is also pushing more UAE residents toward buying pre-owned electronics. The government's emphasis on reducing e-waste aligns perfectly with our mission of giving used TVs a second life. Whether you're a budget-conscious buyer or an environmentally aware consumer, the <strong>second-hand TV market in Dubai</strong> offers tremendous value.
          </p>

          <h2>Contact UsedTV Dubai — Get Your Free Quote Today</h2>
          <p>
            Ready to <strong>buy or sell a used TV in Dubai</strong>? Contact UsedTV Dubai today for the best prices and fastest service in the UAE. Whether you're upgrading your home entertainment system or clearing out old electronics, we're here to help.
          </p>
          <p>
            <strong>Owner:</strong> Hassan Jamil — Running 12 businesses in the used home appliance niche for 7+ years in Dubai.<br />
            <strong>Address:</strong> Al Naif Road, Deira, Near California Hotel, Dubai, UAE<br />
            <strong>Phone:</strong> +971 50 123 4567<br />
            <strong>Email:</strong> info@usedtvdubai.ae<br />
            <strong>Working Hours:</strong> Saturday to Thursday, 9:00 AM to 9:00 PM
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding section-gradient">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center mb-10">TV Brands We Buy & Sell</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((b) => (
              <span key={b} className="px-5 py-2.5 rounded-full bg-card card-elevated text-sm font-semibold text-foreground border">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center mb-4">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">Rated 4.8/5 from 1,250+ verified reviews across Dubai and UAE.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-6 card-elevated border">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-gradient">
        <div className="container container-narrow">
          <h2 className="text-3xl font-extrabold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-card rounded-xl border card-elevated group">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-foreground flex items-center justify-between">
                  {f.q}
                  <ArrowRight className="w-4 h-4 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Buy or Sell Your Used TV?</h2>
          <p className="text-lg opacity-90 mb-8">Get the best prices in Dubai with instant cash payment and free pickup. Call us now!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971501234567" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-foreground text-primary font-bold text-lg hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" /> +971 50 123 4567
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 font-bold text-lg hover:bg-primary-foreground/10 transition-colors">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Section Placeholder */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center mb-4">Our Showroom & Products</h2>
          <p className="text-center text-muted-foreground mb-10">Browse our collection of quality-tested used TVs.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-secondary border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Tv className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p className="text-xs opacity-60">Image {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
