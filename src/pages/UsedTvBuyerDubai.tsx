import { Phone, Shield, CheckCircle, Star, Truck, BadgeCheck, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CONTACT, SITE_URL, SERVICE_LOCATIONS } from "@/config/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const faqs = [
  { q: "Where can I sell my used TV in Dubai?", a: `You can sell your used TV at UsedTV Dubai. We are located at ${CONTACT.address}. We offer instant cash payment and free pickup from anywhere in Dubai. Call ${CONTACT.phoneDisplay} for a free quote.` },
  { q: "How much can I get for my used TV in Dubai?", a: "The price depends on brand, size, model year, and condition. Samsung, LG, and Sony TVs typically get the best resale value. A 55-inch 4K TV can fetch AED 400-1,200 depending on condition. Contact us for a free, no-obligation valuation." },
  { q: "Do you buy broken or damaged TVs in Dubai?", a: "Yes, we purchase TVs in all conditions including working, non-working, cracked screen, water damaged, and even TVs with missing remotes. We offer fair prices based on parts and repair value." },
  { q: "Which TV brands do you buy in Dubai?", a: "We buy all major brands including Samsung, LG, Sony, TCL, Hisense, Toshiba, Panasonic, Philips, Sharp, Skyworth, Haier, JVC, Hitachi, and any other brand available in the UAE market." },
  { q: "Do you offer free pickup service in Dubai?", a: "Yes, we provide completely free pickup from any location in Dubai including Deira, Bur Dubai, Marina, JBR, JLT, Downtown, Al Barsha, Silicon Oasis, and all other areas. We also serve Sharjah, Ajman, and other emirates." },
  { q: "How fast is the used TV selling process?", a: "Most transactions are completed within 1-2 hours. Call us, get an instant quote, and we arrange immediate pickup from your location with cash payment on the spot." },
  { q: "What sizes of TVs do you buy?", a: "We buy all sizes from small 24-inch TVs to massive 85-inch+ screens. LED, LCD, OLED, QLED, Plasma, Smart TVs and non-smart older models are all accepted." },
  { q: "Do you buy TVs without a remote control?", a: "Yes, we buy TVs even without remote controls, original packaging, or stands. The TV itself is what we evaluate and pay for." },
  { q: "What documents do I need to sell my TV?", a: "No documents are required. Just call us with your TV details, receive a quote, and our team handles everything. It is a completely hassle-free process." },
  { q: "Can I sell multiple TVs at once?", a: "Absolutely! We buy bulk quantities of used TVs. If you are a hotel, office, or landlord with multiple TVs to sell, we offer special bulk pricing." },
];

export default function UsedTvBuyerDubai() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "UsedTV Dubai - Used TV Buyer in Dubai",
    "@id": `${SITE_URL}/service/used-tv-buyer-dubai`,
    url: `${SITE_URL}/service/used-tv-buyer-dubai`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: { "@type": "PostalAddress", streetAddress: "Al Musalla Rd", addressLocality: "Dubai", addressCountry: "AE" },
    priceRange: "AED 100 - AED 4000",
    description: "Dubai's #1 used TV buyer. Instant cash, free pickup, all brands and conditions accepted.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Used TV Buying Service in Dubai",
    provider: { "@type": "LocalBusiness", name: "UsedTV Dubai" },
    areaServed: { "@type": "City", name: "Dubai" },
    description: "Professional used TV buying service in Dubai. We buy all brands, all sizes, all conditions with instant cash and free pickup.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Used TV Buyer in Dubai", item: `${SITE_URL}/service/used-tv-buyer-dubai` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Used TV Buyer in Dubai - We Buy All Brands | Instant Cash | UsedTV Dubai</title>
        <meta name="description" content={`Sell your used TV in Dubai for the best price. Instant cash, free pickup, all brands accepted. Call ${CONTACT.phoneDisplay}. Trusted for 7+ years.`} />
        <link rel="canonical" href={`${SITE_URL}/service/used-tv-buyer-dubai`} />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageBreadcrumb items={[{ label: "Used TV Buyer in Dubai" }]} />

      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <div className="verified-badge mb-4 bg-primary-foreground/15 text-primary-foreground">
            <Shield className="w-4 h-4" /> #1 Used TV Buyer in Dubai
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Used TV Buyer in Dubai - We Buy All Brands & Conditions</h1>
          <p className="text-lg opacity-90 mb-6">Sell your used TV for the best price in Dubai. Instant cash, free pickup, and hassle-free process.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary font-bold">
              <Phone className="w-5 h-5" /> Get Your Free Quote
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary-foreground/30 font-bold hover:bg-primary-foreground/10 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2 className="heading-highlight">Sell Your Used TV in Dubai for the Best Price</h2>
          <p>
            Are you looking for a reliable <strong>used TV buyer in Dubai</strong>? UsedTV Dubai is the most trusted name in the UAE for buying pre-owned televisions. Whether you have a Samsung, LG, Sony, TCL, Hisense, or any other brand, we offer the highest buyback prices with instant cash payment and free pickup from your doorstep.
          </p>
          <p>
            Founded by <Link to="/author/hassan-jamil" className="text-primary font-semibold hover:underline">{CONTACT.owner}</Link>, who has been running 12 successful businesses in the used home appliance niche for over 7 years in Dubai, our company has built a reputation based on trust, fair pricing, and exceptional customer service. We have served over 15,000 satisfied customers across the UAE.
          </p>

          <h2 className="heading-highlight">Why Sell Your Used TV to UsedTV Dubai?</h2>
          <p>The used electronics market in Dubai is vast, but finding a trustworthy buyer can be challenging. Here is why thousands of Dubai residents choose us when they need to sell their used televisions:</p>
          <ul>
            <li><strong>Best prices guaranteed</strong> - We offer the highest buyback rates for used TVs in Dubai, consistently beating competitor offers by 10-20%.</li>
            <li><strong>Instant cash payment</strong> - No waiting for bank transfers or cheque clearance. You get cash in hand immediately when our team picks up your TV.</li>
            <li><strong>Free pickup from anywhere in Dubai</strong> - Our team comes to your doorstep whether you are in Deira, Bur Dubai, Marina, JBR, JLT, Downtown, Al Barsha, or any other area.</li>
            <li><strong>All brands and conditions accepted</strong> - Working, non-working, cracked screen, cosmetic damage, missing remote, old or new models, we buy them all.</li>
            <li><strong>Same-day service</strong> - Most pickups are arranged within 2-3 hours of your call. No long waiting periods.</li>
            <li><strong>No hidden fees</strong> - The price we quote is the price you get. No deductions, no surprises.</li>
            <li><strong>Licensed and verified</strong> - We are a fully licensed trading business operating legally in Dubai.</li>
          </ul>

          <h2 className="heading-highlight">How to Sell Your Used TV in Dubai - Step by Step</h2>
          <p>Selling your used TV to us is incredibly simple and can be completed in under 2 hours. Here is how our streamlined process works:</p>
          <ol>
            <li><strong>Contact us</strong> - Call or WhatsApp us at {CONTACT.phoneDisplay} with your TV details including brand, model number, screen size, and current condition.</li>
            <li><strong>Receive a free quote</strong> - Our experts will provide you with a fair market valuation within minutes. This quote is completely free and carries no obligation.</li>
            <li><strong>Schedule a free pickup</strong> - Choose a time that works for you. We offer flexible scheduling including evenings and weekends.</li>
            <li><strong>Get instant cash</strong> - When our team arrives, they inspect the TV at your location and pay you cash on the spot. The entire process takes less than 15 minutes.</li>
          </ol>

          <h2 className="heading-highlight">What Types of TVs Do We Buy?</h2>
          <p>We buy virtually every type of television available in the market. Our purchasing criteria are flexible because we have the expertise to refurbish, repair, or repurpose TVs of all conditions:</p>
          <ul>
            <li>LED, LCD, OLED, QLED, and Plasma TVs</li>
            <li>Smart TVs and non-smart (basic) TVs</li>
            <li>All sizes from 24 inches to 85 inches and above</li>
            <li>Working, partially working, and completely non-functional TVs</li>
            <li>TVs with cracked screens, dead pixels, or display issues</li>
            <li>TVs missing remote controls, stands, or original packaging</li>
            <li>Commercial and hospitality TVs (hotels, offices, restaurants)</li>
          </ul>

          <h2 className="heading-highlight">TV Brands We Buy in Dubai</h2>
          <p>Our team has expertise in evaluating all major television brands. We buy:</p>
          <ul>
            <li><strong>Samsung</strong> - Crystal UHD, QLED, Neo QLED, The Frame, and all Smart TV series</li>
            <li><strong>LG</strong> - OLED, NanoCell, UHD, WebOS Smart TVs</li>
            <li><strong>Sony</strong> - Bravia XR, OLED, X-series, Android TV models</li>
            <li><strong>TCL, Hisense, Toshiba, Panasonic, Philips, Sharp, Skyworth</strong> and more</li>
          </ul>

          <h2 className="heading-highlight">Used TV Buyback Prices in Dubai</h2>
          <p>The buyback price for your TV depends on brand, size, model year, technology, and condition. Here is a general guide:</p>
          <ul>
            <li><strong>32-inch LED TV</strong> - AED 100 to AED 350</li>
            <li><strong>43-inch Smart TV</strong> - AED 200 to AED 600</li>
            <li><strong>55-inch 4K UHD TV</strong> - AED 400 to AED 1,200</li>
            <li><strong>65-inch QLED/OLED TV</strong> - AED 800 to AED 2,500</li>
            <li><strong>75-inch+ Premium TV</strong> - AED 1,200 to AED 4,000</li>
          </ul>
          <p>For the most accurate quote, call us at <strong>{CONTACT.phoneDisplay}</strong> with your TV details. Our valuation is always free and carries no obligation.</p>

          <h2 className="heading-highlight">Areas We Cover in Dubai</h2>
          <p>Our free pickup service covers all areas of Dubai and extends to neighboring emirates:</p>
          <ul>
            <li><strong>Dubai</strong> - Deira, Bur Dubai, JBR, Marina, JLT, Downtown, Business Bay, Al Barsha, Silicon Oasis, Sports City, International City, Al Nahda, Al Qusais, Mirdif, Jumeirah, Palm Jumeirah, DIFC, and all other communities</li>
            <li><strong>Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah, Fujairah, Umm Al Quwain</strong> - Available on request</li>
          </ul>

          <h2 className="heading-highlight">Our Service Across UAE</h2>
          <p>
            While our main office is in Dubai, we extend our used TV buying service across the entire UAE. Visit our location-specific pages for more details:
          </p>
          <ul>
            {SERVICE_LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link to={`/service/used-tv-buyer-${loc.slug}`} className="text-primary font-semibold hover:underline">
                  Used TV Buyer in {loc.name}
                </Link>
              </li>
            ))}
          </ul>

          <p>
            Also explore: <Link to="/service/used-tv-seller-dubai" className="text-primary font-semibold hover:underline">Buy Used TVs in Dubai</Link> |{" "}
            <Link to="/blogs" className="text-primary font-semibold hover:underline">Read Our Blog</Link> |{" "}
            <Link to="/about" className="text-primary font-semibold hover:underline">About Us</Link>
          </p>

          <div className="bg-secondary rounded-xl p-6 my-8 text-center">
            <h3 className="font-heading font-bold text-xl mb-2">Ready to Sell Your TV?</h3>
            <p className="text-muted-foreground mb-4">Call us now for the best price in Dubai.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg hero-gradient text-primary-foreground font-bold">
                <Phone className="w-5 h-5" /> {CONTACT.phoneDisplay}
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-bold">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding section-gradient">
        <div className="container container-narrow">
          <h2 className="text-3xl font-extrabold text-center mb-10">Frequently Asked Questions About Selling Used TVs in Dubai</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border card-elevated">
                <AccordionTrigger className="px-6 text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="px-6 text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
