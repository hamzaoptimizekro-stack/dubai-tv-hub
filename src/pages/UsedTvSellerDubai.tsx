import { Phone, Shield, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CONTACT, SITE_URL, SERVICE_LOCATIONS } from "@/config/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const faqs = [
  { q: "Where can I buy a used TV in Dubai?", a: `UsedTV Dubai has the widest selection of quality-tested used TVs in Dubai. Visit our showroom at ${CONTACT.address} or call ${CONTACT.phoneDisplay} to check current inventory. We also deliver across all of Dubai.` },
  { q: "Are used TVs from UsedTV Dubai tested?", a: "Yes, every TV undergoes our comprehensive 15-point quality inspection covering screen quality, sound output, all ports (HDMI, USB, AV), Wi-Fi connectivity, smart features, remote control, and physical condition." },
  { q: "What brands of used TVs are available?", a: "We stock all major brands including Samsung, LG, Sony, TCL, Hisense, Toshiba, Panasonic, Philips, Sharp, Skyworth, and more. Our inventory changes daily so call for current availability." },
  { q: "What is the price range for used TVs in Dubai?", a: "Prices vary: 32-inch LED (AED 200-500), 43-inch Smart TV (AED 400-900), 55-inch 4K (AED 600-1,500), 65-inch QLED/OLED (AED 1,000-3,000), 75-inch+ (AED 1,500-5,000)." },
  { q: "Do you offer delivery for used TVs in Dubai?", a: "Yes, we offer free delivery across all areas of Dubai. Delivery is typically arranged within the same day or next day depending on your location." },
  { q: "Do used TVs come with warranty?", a: "Yes, we provide a limited warranty on select models. This covers major functionality issues and gives you confidence in your purchase." },
  { q: "Can I test the TV before buying?", a: "Absolutely! You can visit our showroom to see and test any TV before purchasing. We encourage customers to verify the picture quality, sound, and smart features in person." },
  { q: "Do you sell TVs for hotels and offices?", a: "Yes, we supply used TVs in bulk for hotels, offices, furnished apartments, and commercial establishments. We offer special bulk pricing and delivery." },
  { q: "How do I choose the right size TV?", a: "We recommend 32-43 inch for bedrooms, 50-55 inch for medium rooms, and 65-75 inch+ for large living rooms. Our team can help you choose based on your room size and viewing distance." },
  { q: "Can I exchange my old TV for a newer model?", a: "Yes, we offer exchange options. You can sell your current TV to us and use the cash toward purchasing a better model from our inventory." },
];

export default function UsedTvSellerDubai() {
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
    name: "UsedTV Dubai - Used TV Seller in Dubai",
    "@id": `${SITE_URL}/used-tv-seller-dubai`,
    url: `${SITE_URL}/used-tv-seller-dubai`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: { "@type": "PostalAddress", streetAddress: "Al Musalla Rd", addressLocality: "Dubai", addressCountry: "AE" },
    priceRange: "AED 200 - AED 5000",
    description: "Buy quality-tested used TVs in Dubai. All brands, all sizes, free delivery. Save 40-70% compared to new.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Used TV Selling Service in Dubai",
    provider: { "@type": "LocalBusiness", name: "UsedTV Dubai" },
    areaServed: { "@type": "City", name: "Dubai" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Used TV for Sale in Dubai", item: `${SITE_URL}/used-tv-seller-dubai` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Used TV for Sale in Dubai - Quality Tested, Best Prices | UsedTV Dubai</title>
        <meta name="description" content={`Buy quality used TVs in Dubai. Samsung, LG, Sony & all brands. 15-point tested, free delivery, warranty available. Call ${CONTACT.phoneDisplay}.`} />
        <link rel="canonical" href={`${SITE_URL}/used-tv-seller-dubai`} />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />


      <PageBreadcrumb items={[{ label: "Used TV for Sale in Dubai" }]} />

      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <div className="verified-badge mb-4 bg-primary-foreground/15 text-primary-foreground">
            <Shield className="w-4 h-4" /> #1 Used TV Seller in Dubai
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Used TV for Sale in Dubai - Quality Tested & Best Prices</h1>
          <p className="text-lg opacity-90 mb-6">Buy quality second-hand TVs from Dubai's most trusted seller. All brands, all sizes, fully tested with warranty.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary font-bold">
              <Phone className="w-5 h-5" /> Browse Our Collection
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary-foreground/30 font-bold hover:bg-primary-foreground/10 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2 className="heading-highlight">Buy Used TVs in Dubai - Premium Quality at Affordable Prices</h2>
          <p>
            Looking for a <strong>used TV for sale in Dubai</strong>? UsedTV Dubai offers the widest selection of quality-tested second-hand televisions at unbeatable prices. Whether you need a compact 32-inch TV for your bedroom or a massive 75-inch screen for your living room, we have it all. Every TV in our inventory has been thoroughly inspected by our team of technicians to ensure it meets our strict quality standards.
          </p>
          <p>
            With over 7 years of experience and 15,000+ satisfied customers, <Link to="/author/hassan-jamil" className="text-primary font-semibold hover:underline">{CONTACT.owner}</Link> and the UsedTV Dubai team have earned a reputation as the most reliable used TV dealer in the UAE. Our showroom at <strong>{CONTACT.address}</strong> features a large collection of TVs from all major brands at prices 40-70% lower than new retail prices.
          </p>

          <h2 className="heading-highlight">Our 15-Point Quality Inspection</h2>
          <p>Every TV sold at UsedTV Dubai undergoes a thorough quality inspection to ensure it meets our standards. Our testing process includes:</p>
          <ul>
            <li>Screen quality check for dead pixels, color burn, and backlight uniformity</li>
            <li>Sound output testing on all built-in speakers</li>
            <li>All ports verification including HDMI, USB, AV, optical audio, and Ethernet</li>
            <li>Wi-Fi and Bluetooth connectivity testing</li>
            <li>Smart TV apps and operating system functionality verification</li>
            <li>Remote control and power supply inspection</li>
            <li>Physical condition assessment, cleaning, and polishing</li>
          </ul>

          <h2 className="heading-highlight">Brands Available in Our Showroom</h2>
          <p>We maintain a diverse inventory of all major TV brands popular in the UAE market:</p>
          <ul>
            <li><strong>Samsung</strong> - Smart TV, QLED, Crystal UHD, The Frame, Neo QLED series</li>
            <li><strong>LG</strong> - OLED, NanoCell, WebOS Smart TVs, UHD models</li>
            <li><strong>Sony</strong> - Bravia XR, OLED, Android TV, X-series</li>
            <li><strong>TCL</strong> - Affordable 4K Smart TVs, QLED models</li>
            <li><strong>Hisense</strong> - ULED, Laser TV, budget Smart TVs</li>
            <li><strong>Toshiba, Panasonic, Philips, Sharp, Skyworth, Haier</strong> and more</li>
          </ul>

          <h2 className="heading-highlight">Used TV Price Range in Dubai</h2>
          <p>Save significantly compared to buying new. Here are typical prices for quality-tested used TVs:</p>
          <ul>
            <li><strong>32-inch LED TV</strong> - AED 200 to AED 500</li>
            <li><strong>43-inch Smart TV</strong> - AED 400 to AED 900</li>
            <li><strong>55-inch 4K UHD TV</strong> - AED 600 to AED 1,500</li>
            <li><strong>65-inch QLED/OLED TV</strong> - AED 1,000 to AED 3,000</li>
            <li><strong>75-inch+ Premium TV</strong> - AED 1,500 to AED 5,000</li>
          </ul>

          <h2 className="heading-highlight">Why Buy From UsedTV Dubai?</h2>
          <ul>
            <li><strong>Quality guaranteed</strong> - Every TV is tested, verified, and cleaned before sale.</li>
            <li><strong>Best prices in Dubai</strong> - Save 40-70% compared to brand new TVs from retail stores.</li>
            <li><strong>Free delivery across Dubai</strong> - We deliver to your doorstep at no extra cost.</li>
            <li><strong>Limited warranty</strong> on select models for your peace of mind.</li>
            <li><strong>Licensed business</strong> - Buy with confidence from a verified, legal dealer.</li>
            <li><strong>Exchange options</strong> - Trade in your old TV and upgrade to a better model.</li>
            <li><strong>Bulk orders welcome</strong> - Special pricing for hotels, offices, and furnished apartments.</li>
          </ul>

          <h2 className="heading-highlight">Our Delivery Coverage</h2>
          <p>We deliver used TVs to all areas of Dubai and extend our service to other emirates:</p>
          <ul>
            <li><strong>All Dubai areas</strong> - Deira, Bur Dubai, Marina, JBR, JLT, Downtown, Business Bay, Al Barsha, Silicon Oasis, Sports City, International City, and more</li>
            <li><strong>Other Emirates</strong> - Sharjah, Ajman, Abu Dhabi, and beyond</li>
          </ul>

          <h2 className="heading-highlight">Browse Used TVs by Location</h2>
          <ul>
            {SERVICE_LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link to={`/used-tv-seller-${loc.slug}`} className="text-primary font-semibold hover:underline">
                  Used TV for Sale in {loc.name}
                </Link>
              </li>
            ))}
          </ul>

          <p>
            Want to sell instead? Check out our <Link to="/used-tv-buyer-dubai" className="text-primary font-semibold hover:underline">Used TV Buyer in Dubai</Link> service. |{" "}
            <Link to="/blogs" className="text-primary font-semibold hover:underline">Read Our Blog</Link>
          </p>

          <div className="bg-secondary rounded-xl p-6 my-8 text-center">
            <h3 className="font-heading font-bold text-xl mb-2">Visit Our Showroom</h3>
            <p className="text-muted-foreground mb-2">{CONTACT.address}</p>
            <p className="text-muted-foreground mb-4">Or call for current inventory</p>
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
          <h2 className="text-3xl font-extrabold text-center mb-10">Frequently Asked Questions About Buying Used TVs in Dubai</h2>
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
