import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Tv, ArrowRight, Shield, Phone } from "lucide-react";
import { CONTACT, SITE_URL, SERVICE_LOCATIONS } from "@/config/site";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/service` },
  ],
};

const allLocations = [
  { slug: "dubai", name: "Dubai", buyerSlug: "used-tv-buyer-dubai", sellerSlug: "used-tv-seller-dubai", areas: ["Deira", "Bur Dubai", "Marina", "JBR", "JLT", "Downtown", "Business Bay", "Al Barsha", "Silicon Oasis"] },
  ...SERVICE_LOCATIONS.map((loc) => ({
    slug: loc.slug,
    name: loc.name,
    buyerSlug: `used-tv-buyer-${loc.slug}`,
    sellerSlug: `used-tv-seller-${loc.slug}`,
    areas: loc.areas.slice(0, 6),
  })),
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services - Used TV Buyer & Seller Across UAE | UsedTV Dubai</title>
        <meta name="description" content="Explore all UsedTV Dubai services. Buy and sell used TVs in Dubai, Sharjah, Ajman, Abu Dhabi, RAK, Fujairah & UAQ. Free pickup, instant cash, quality tested." />
        <link rel="canonical" href={`${SITE_URL}/service`} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageBreadcrumb items={[{ label: "Services" }]} />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <div className="verified-badge mb-4 bg-primary-foreground/15 text-primary-foreground">
            <Shield className="w-4 h-4" /> Serving All 7 Emirates in UAE
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Used TV Services Across UAE</h1>
          <p className="text-lg opacity-90 mb-6">
            UsedTV Dubai offers professional used TV buying and selling services across all seven emirates. Free pickup, instant cash for sellers. Quality-tested TVs with free delivery for buyers.
          </p>
          <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary font-bold">
            <Phone className="w-5 h-5" /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center mb-3">What We Offer</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you want to sell your old TV for instant cash or buy a quality-tested used TV at up to 70% off, we have you covered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-card rounded-xl border p-8 card-elevated">
              <Tv className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">Used TV Buying Service</h3>
              <p className="text-muted-foreground mb-4">
                Sell your used TV for the best price. We buy all brands (Samsung, LG, Sony, TCL, Hisense) in any condition. Working, broken, cracked screen - we accept them all.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-primary" /> Instant cash payment</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-primary" /> Free pickup from your doorstep</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-primary" /> Same-day service available</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-primary" /> All brands and conditions accepted</li>
              </ul>
              <Link to="/service/used-tv-buyer-dubai" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Sell Your TV <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card rounded-xl border p-8 card-elevated">
              <Tv className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">Used TV Selling Service</h3>
              <p className="text-muted-foreground mb-4">
                Buy quality-tested used TVs at 40-70% off retail prices. Every TV passes our 15-point quality inspection. Samsung, LG, Sony and all major brands in stock.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent" /> 15-point quality tested</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent" /> Free delivery across UAE</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent" /> Limited warranty on select models</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent" /> Bulk orders for hotels & offices</li>
              </ul>
              <Link to="/service/used-tv-seller-dubai" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Buy a TV <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Location Grid */}
          <h2 className="text-3xl font-extrabold text-center mb-3">Service Locations</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            We serve all seven emirates with free pickup and delivery. Click any location to explore services in your area.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allLocations.map((loc) => (
              <div key={loc.slug} className="bg-card rounded-xl border p-6 card-elevated">
                <h3 className="font-heading font-bold text-lg flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary" /> {loc.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Serving: {loc.areas.join(", ")} & more
                </p>
                <div className="flex flex-col gap-2">
                  <Link to={`/service/${loc.buyerSlug}`} className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline">
                    <ArrowRight className="w-3.5 h-3.5" /> Used TV Buyer in {loc.name}
                  </Link>
                  <Link to={`/service/${loc.sellerSlug}`} className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline">
                    <ArrowRight className="w-3.5 h-3.5" /> Used TV Seller in {loc.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-gradient">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Buy or Sell a Used TV?</h2>
          <p className="text-muted-foreground mb-6">Contact us today for the best prices and fastest service across the UAE.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg hero-gradient text-primary-foreground font-bold">
              <Phone className="w-5 h-5" /> {CONTACT.phoneDisplay}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-bold">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
