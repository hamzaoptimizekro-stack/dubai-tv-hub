import { Phone, Shield, CheckCircle, MapPin, Star, Truck, BadgeCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CONTACT, SITE_URL, SERVICE_LOCATIONS } from "@/config/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const locationData: Record<string, {
  name: string;
  areas: string[];
  nearby: string[];
  landmarks: string;
  description: string;
}> = {
  sharjah: {
    name: "Sharjah",
    areas: ["Al Majaz", "Al Nahda", "Al Taawun", "Muwaileh", "University City", "Al Khan", "Al Qasimia", "Industrial Area", "Al Buhairah Corniche", "Sharjah Waterfront City"],
    nearby: ["Dubai", "Ajman"],
    landmarks: "near University City, Al Majaz Waterfront, and Sharjah Corniche",
    description: "Sharjah is one of the largest emirates in the UAE with a vibrant community of residents and families who value quality electronics at affordable prices.",
  },
  ajman: {
    name: "Ajman",
    areas: ["Al Rashidiya", "Al Nuaimiya", "Ajman Downtown", "Emirates City", "Al Jurf", "Al Rawda", "Al Mowaihat", "Al Zahya", "Garden City"],
    nearby: ["Sharjah", "Dubai"],
    landmarks: "near Ajman Corniche, City Centre Ajman, and Al Rashidiya",
    description: "Ajman is the smallest emirate but has a growing population looking for affordable and quality used electronics including TVs of all brands and sizes.",
  },
  "abu-dhabi": {
    name: "Abu Dhabi",
    areas: ["Khalifa City", "Al Reem Island", "Musaffah", "Al Shamkha", "Yas Island", "Mohammed Bin Zayed City", "Al Khalidiyah", "Tourist Club Area", "Mussafah Industrial"],
    nearby: ["Al Ain", "Dubai"],
    landmarks: "serving all areas including Khalifa City, MBZ, Yas Island, and Al Reem Island",
    description: "Abu Dhabi, the capital of the UAE, has a large expat community and residents who regularly upgrade their televisions, creating a thriving market for quality used TVs.",
  },
  "ras-al-khaimah": {
    name: "Ras Al Khaimah",
    areas: ["Al Nakheel", "Al Hamra", "Khuzam", "Al Dhait", "Julphar", "Al Jazeera", "RAK City", "Al Marjan Island", "Corniche Area"],
    nearby: ["Umm Al Quwain", "Sharjah"],
    landmarks: "covering Al Nakheel, Al Hamra Village, and RAK City Center area",
    description: "Ras Al Khaimah is a rapidly growing emirate with new residential communities and families looking for affordable electronics solutions.",
  },
  fujairah: {
    name: "Fujairah",
    areas: ["Fujairah City", "Dibba Al Fujairah", "Kalba", "Al Faseel", "Merashid", "Sakamkam", "Rugaylat", "Masafi"],
    nearby: ["Sharjah", "Ras Al Khaimah"],
    landmarks: "serving Fujairah City, Dibba, and the East Coast communities",
    description: "Fujairah is the only emirate on the east coast of the UAE. We provide used TV services to all Fujairah communities with reliable pickup and delivery.",
  },
  "umm-al-quwain": {
    name: "Umm Al Quwain",
    areas: ["UAQ City", "Al Salamah", "Al Raas", "Old Town", "Al Aahad", "Falaj Al Mualla", "Al Humra"],
    nearby: ["Ajman", "Ras Al Khaimah"],
    landmarks: "covering UAQ City, Old Town, and Al Salamah areas",
    description: "Umm Al Quwain is a peaceful emirate with a close-knit community. We extend our used TV buying and selling services to all UAQ residents.",
  },
};

interface Props {
  type: "buyer" | "seller";
}

export default function LocationServicePage({ type }: Props) {
  const params = useParams<{ location: string }>();
  const loc = params.location ? locationData[params.location] : null;

  if (!loc) {
    return (
      <section className="section-padding text-center">
        <h1 className="text-2xl font-bold mb-4">Location Not Found</h1>
        <Link to="/" className="text-primary font-semibold">Go to Home</Link>
      </section>
    );
  }

  const isBuyer = type === "buyer";
  const title = isBuyer
    ? `Used TV Buyer in ${loc.name} - We Buy All Brands & Sizes`
    : `Used TV for Sale in ${loc.name} - Quality Tested & Best Prices`;
  const h1 = isBuyer
    ? `Used TV Buyer in ${loc.name} - Instant Cash, Free Pickup`
    : `Buy Used TV in ${loc.name} - Affordable, Quality Tested`;
  const slug = isBuyer ? `used-tv-buyer-${params.location}` : `used-tv-seller-${params.location}`;

  const faqs = isBuyer
    ? [
        { q: `Where can I sell my used TV in ${loc.name}?`, a: `UsedTV Dubai provides free pickup service across ${loc.name}. We buy all brands of used TVs and offer instant cash payment. Call us at ${CONTACT.phoneDisplay} to schedule a free pickup from ${loc.areas.slice(0, 4).join(", ")} and all other areas in ${loc.name}.` },
        { q: `How much can I get for my used TV in ${loc.name}?`, a: `The price depends on brand, size, model, and condition. We offer the best prices in the market. A 32-inch LED can fetch AED 150-400 while a 65-inch OLED can get you AED 1,000-3,000. Contact us for a free valuation.` },
        { q: `Do you pick up TVs from ${loc.name} for free?`, a: `Yes, we offer completely free pickup from all areas of ${loc.name} including ${loc.areas.slice(0, 5).join(", ")}. Our team will come to your location at your preferred time.` },
        { q: `Do you buy broken TVs in ${loc.name}?`, a: `Absolutely. We purchase TVs in all conditions - working, non-working, cracked screens, or water damaged. We offer fair prices based on the parts and repair value.` },
        { q: `How fast is the pickup in ${loc.name}?`, a: `We typically arrange same-day or next-day pickup in ${loc.name}. In most cases, our team reaches you within 2-3 hours of confirming the appointment.` },
        { q: `What brands of TVs do you buy in ${loc.name}?`, a: `We buy all brands including Samsung, LG, Sony, TCL, Hisense, Toshiba, Panasonic, Philips, Sharp, and any other brand available in the UAE market.` },
        { q: `Is instant cash payment available in ${loc.name}?`, a: `Yes, we pay instant cash on the spot when our team collects your TV from your location in ${loc.name}. No bank transfers or delays.` },
        { q: `What sizes of TVs do you buy?`, a: `We buy all sizes from small 24-inch TVs to large 85-inch+ screens. Every size and type including LED, LCD, OLED, QLED, and Plasma TVs.` },
      ]
    : [
        { q: `Where can I buy a used TV in ${loc.name}?`, a: `UsedTV Dubai delivers quality-tested used TVs across ${loc.name}. We have a wide selection of brands and sizes. Call ${CONTACT.phoneDisplay} to check current inventory and arrange delivery to ${loc.areas.slice(0, 4).join(", ")} or any other area.` },
        { q: `What used TV brands are available in ${loc.name}?`, a: `We stock all major brands including Samsung, LG, Sony, TCL, Hisense, Toshiba, Panasonic, and more. Our inventory changes daily, so call us for the latest availability.` },
        { q: `Do you deliver used TVs to ${loc.name}?`, a: `Yes, we offer free delivery to all areas of ${loc.name} including ${loc.areas.slice(0, 5).join(", ")}. Delivery is typically completed within 24 hours.` },
        { q: `Are the used TVs tested before sale?`, a: `Every TV undergoes our 15-point quality inspection covering screen quality, sound, ports, Wi-Fi, smart features, and physical condition. You get a fully tested and verified product.` },
        { q: `What is the price range for used TVs in ${loc.name}?`, a: `Prices vary by brand and size: 32-inch LED (AED 200-500), 43-inch Smart TV (AED 400-900), 55-inch 4K (AED 600-1,500), 65-inch+ (AED 1,000-5,000).` },
        { q: `Do you offer warranty on used TVs in ${loc.name}?`, a: `Yes, we provide a limited warranty on select models. This covers major functionality issues and gives you peace of mind with your purchase.` },
        { q: `Can I visit a showroom to see TVs before buying?`, a: `Yes, you can visit our showroom at ${CONTACT.address}. We have a large collection on display. Call ahead to check specific models.` },
        { q: `Do you offer installation service in ${loc.name}?`, a: `We can assist with basic setup and installation during delivery. For wall mounting, we can recommend trusted service providers in ${loc.name}.` },
      ];

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
    name: `UsedTV Dubai - ${isBuyer ? "Used TV Buyer" : "Used TV Seller"} in ${loc.name}`,
    image: `${SITE_URL}/logo.png`,
    "@id": `${SITE_URL}/${slug}`,
    url: `${SITE_URL}/${slug}`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Musalla Rd",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    areaServed: { "@type": "City", name: loc.name },
    priceRange: "AED 200 - AED 5000",
    description: `${isBuyer ? "Sell your used TV" : "Buy quality used TVs"} in ${loc.name}. Free ${isBuyer ? "pickup" : "delivery"}, instant cash, all brands. Serving ${loc.areas.slice(0, 5).join(", ")} and more.`,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isBuyer ? `Used TV Buying Service in ${loc.name}` : `Used TV Selling in ${loc.name}`,
    provider: { "@type": "LocalBusiness", name: "UsedTV Dubai" },
    areaServed: { "@type": "City", name: loc.name },
    description: `Professional ${isBuyer ? "used TV buying" : "used TV selling"} service in ${loc.name}, UAE. All brands, all sizes, best prices.`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: isBuyer ? "Used TV Buyer Dubai" : "Used TV Seller Dubai", item: `${SITE_URL}/${isBuyer ? "used-tv-buyer-dubai" : "used-tv-seller-dubai"}` },
      { "@type": "ListItem", position: 3, name: `${isBuyer ? "Used TV Buyer" : "Used TV Seller"} ${loc.name}`, item: `${SITE_URL}/${slug}` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title} | UsedTV Dubai</title>
        <meta name="description" content={`${isBuyer ? "Sell your used TV" : "Buy quality used TVs"} in ${loc.name}, UAE. Best prices, free ${isBuyer ? "pickup" : "delivery"}, all brands. Call ${CONTACT.phoneDisplay}.`} />
        <link rel="canonical" href={`${SITE_URL}/${slug}`} />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <div className="verified-badge mb-4 bg-primary-foreground/15 text-primary-foreground">
            <Shield className="w-4 h-4" /> #1 {isBuyer ? "Used TV Buyer" : "Used TV Seller"} in {loc.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{h1}</h1>
          <p className="text-lg opacity-90 mb-6">
            {isBuyer
              ? `Looking to sell your used TV in ${loc.name}? Get the best price with free pickup and instant cash payment from UAE's most trusted buyer.`
              : `Find quality-tested second-hand TVs in ${loc.name} at unbeatable prices. All brands, all sizes, free delivery across ${loc.name}.`}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary font-bold">
              <Phone className="w-5 h-5" /> {CONTACT.phoneDisplay}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary-foreground/30 font-bold hover:bg-primary-foreground/10 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2 className="heading-highlight">
            {isBuyer ? `Sell Your Used TV in ${loc.name} for the Best Price` : `Buy Quality Used TVs in ${loc.name} at Affordable Prices`}
          </h2>
          <p>
            {isBuyer
              ? `Are you looking for a reliable used TV buyer in ${loc.name}? UsedTV Dubai is the UAE's most trusted name for buying used televisions across all emirates. ${loc.description} Our service covers all areas of ${loc.name} including ${loc.areas.join(", ")}. Whether you have a Samsung, LG, Sony, TCL, Hisense, or any other brand, we offer the best buyback prices with instant cash payment.`
              : `Looking for a used TV for sale in ${loc.name}? UsedTV Dubai brings you the widest selection of quality-tested second-hand televisions at prices that fit every budget. ${loc.description} We deliver to all areas of ${loc.name} including ${loc.areas.join(", ")}. From 32-inch bedroom TVs to 75-inch living room displays, we have the perfect used TV for your needs.`}
          </p>

          <h2 className="heading-highlight">
            {isBuyer ? `Why Sell Your TV to UsedTV Dubai in ${loc.name}?` : `Why Buy a Used TV from UsedTV Dubai in ${loc.name}?`}
          </h2>
          {isBuyer ? (
            <>
              <p>Selling your used TV in {loc.name} has never been easier. Our streamlined process means you can turn your old television into cash within hours. Here is why thousands of residents in {loc.name} choose UsedTV Dubai:</p>
              <ul>
                <li><strong>Free pickup from {loc.name}</strong> - Our team will come to your doorstep in {loc.areas.slice(0, 3).join(", ")} or any other area. No need to transport heavy TVs.</li>
                <li><strong>Instant cash payment</strong> - Get paid immediately when our team picks up your TV. No waiting for bank transfers.</li>
                <li><strong>Best prices guaranteed</strong> - We offer the highest buyback rates for used TVs in {loc.name} and across the UAE.</li>
                <li><strong>All brands accepted</strong> - Samsung, LG, Sony, TCL, Hisense, Toshiba, Panasonic, Philips, Sharp, Skyworth and all other brands.</li>
                <li><strong>Any condition</strong> - Working, non-working, cracked screen, or damaged. We buy TVs in every condition.</li>
                <li><strong>Same-day service</strong> - In most cases, we arrange pickup within hours of your call.</li>
              </ul>
            </>
          ) : (
            <>
              <p>Buying a used TV in {loc.name} from UsedTV Dubai gives you access to premium televisions at 40-70% less than retail prices. Here is what makes us the preferred choice:</p>
              <ul>
                <li><strong>15-point quality inspection</strong> - Every TV is thoroughly tested for screen quality, sound, ports, Wi-Fi, and smart features before sale.</li>
                <li><strong>Free delivery to {loc.name}</strong> - We deliver to {loc.areas.slice(0, 3).join(", ")} and all areas at no extra cost.</li>
                <li><strong>Wide selection</strong> - Samsung, LG, Sony, TCL, Hisense and more. LED, OLED, QLED in all sizes from 32 to 85 inches.</li>
                <li><strong>Limited warranty</strong> - Select models come with warranty for your peace of mind.</li>
                <li><strong>Save 40-70%</strong> - Get premium brand TVs at a fraction of the new price.</li>
                <li><strong>Licensed business</strong> - Buy with confidence from a verified, licensed dealer with 7+ years experience.</li>
              </ul>
            </>
          )}

          <h2 className="heading-highlight">
            {isBuyer ? "How to Sell Your Used TV in " + loc.name : "How to Buy a Used TV in " + loc.name}
          </h2>
          {isBuyer ? (
            <>
              <p>The process is simple and takes just a few steps. Most sellers in {loc.name} complete the entire process within 2 hours.</p>
              <ol>
                <li><strong>Contact us</strong> - Call or WhatsApp at {CONTACT.phoneDisplay} with your TV details including brand, model, size, and condition.</li>
                <li><strong>Get a free quote</strong> - Our team will provide a fair market valuation within minutes. No obligation whatsoever.</li>
                <li><strong>Schedule pickup</strong> - Choose a time that works for you. We pick up from any location in {loc.name}.</li>
                <li><strong>Get instant cash</strong> - Our team inspects the TV at your location and pays you cash immediately.</li>
              </ol>
              <p>We buy all types of used TVs in {loc.name}. LED TVs, LCD TVs, OLED TVs, QLED TVs, Plasma TVs, Smart TVs, and even non-smart older models. No TV is too old or too small for us to consider.</p>
            </>
          ) : (
            <>
              <p>Finding the perfect used TV in {loc.name} is easy with UsedTV Dubai. Here is how to get started:</p>
              <ol>
                <li><strong>Browse our inventory</strong> - Call or WhatsApp {CONTACT.phoneDisplay} to check current stock and available models.</li>
                <li><strong>Choose your TV</strong> - Tell us your preferred brand, size, and budget. We will suggest the best options.</li>
                <li><strong>Schedule delivery</strong> - We deliver to any area in {loc.name} at a time that suits you.</li>
                <li><strong>Enjoy your TV</strong> - Your quality-tested TV is ready to use from day one.</li>
              </ol>
              <p>Our inventory includes TVs from all major brands and changes daily. We stock everything from budget-friendly 32-inch LED TVs starting at AED 200 to premium 75-inch OLED displays. Every TV is cleaned, tested, and verified before delivery.</p>
            </>
          )}

          <h2 className="heading-highlight">{isBuyer ? "TV Brands We Buy" : "TV Brands Available"} in {loc.name}</h2>
          <p>{isBuyer ? "We purchase" : "We stock"} all major television brands that are available in the UAE market. Our {loc.name} service covers:</p>
          <ul>
            <li><strong>Samsung</strong> - Crystal UHD, QLED, Neo QLED, The Frame, Smart TV series</li>
            <li><strong>LG</strong> - OLED, NanoCell, UHD, WebOS Smart TVs</li>
            <li><strong>Sony</strong> - Bravia XR, OLED, X-series, Android TV models</li>
            <li><strong>TCL</strong> - Budget-friendly 4K and QLED options</li>
            <li><strong>Hisense</strong> - ULED, Laser TV, affordable smart TVs</li>
            <li><strong>Others</strong> - Toshiba, Panasonic, Philips, Sharp, Skyworth, Haier, JVC, and more</li>
          </ul>

          <h2 className="heading-highlight">Areas We Cover in {loc.name}</h2>
          <p>Our {isBuyer ? "used TV buying" : "used TV selling"} service is available across all areas of {loc.name}. We provide free {isBuyer ? "pickup" : "delivery"} to:</p>
          <ul>
            {loc.areas.map((area) => (
              <li key={area}><strong>{area}</strong></li>
            ))}
          </ul>
          <p>
            We also serve nearby emirates including {loc.nearby.join(" and ")}. Our main office is located at{" "}
            <strong>{CONTACT.address}</strong>. You can visit our showroom or call us for doorstep service in {loc.name}.
          </p>

          <h2 className="heading-highlight">
            {isBuyer ? `Used TV Prices in ${loc.name} - What You Can Expect` : `Used TV Price Range in ${loc.name}`}
          </h2>
          <p>{isBuyer ? "The buyback price for your used TV depends on several factors:" : "Here is what you can expect to pay for a used TV in " + loc.name + ":"}</p>
          <ul>
            <li><strong>32-inch LED TV</strong> - AED {isBuyer ? "100 - 350" : "200 - 500"}</li>
            <li><strong>43-inch Smart TV</strong> - AED {isBuyer ? "200 - 600" : "400 - 900"}</li>
            <li><strong>55-inch 4K UHD TV</strong> - AED {isBuyer ? "400 - 1,200" : "600 - 1,500"}</li>
            <li><strong>65-inch QLED/OLED TV</strong> - AED {isBuyer ? "800 - 2,500" : "1,000 - 3,000"}</li>
            <li><strong>75-inch+ Premium TV</strong> - AED {isBuyer ? "1,200 - 4,000" : "1,500 - 5,000"}</li>
          </ul>

          <h2 className="heading-highlight">About UsedTV Dubai</h2>
          <p>
            UsedTV Dubai is founded by <strong>{CONTACT.owner}</strong>, who has been running 12 successful businesses in the used home appliance niche for over 7 years in Dubai.
            With more than 15,000 satisfied customers and a rating of 4.8/5 from 1,250+ verified reviews, we are the most trusted name for used TVs in the UAE.
            Our commitment to fair pricing, quality testing, and customer convenience has made us the go-to choice for both buying and selling used televisions across all seven emirates.
          </p>

          <p>
            Explore our other services:{" "}
            <Link to="/used-tv-buyer-dubai" className="text-primary font-semibold hover:underline">Used TV Buyer in Dubai</Link>,{" "}
            <Link to="/used-tv-seller-dubai" className="text-primary font-semibold hover:underline">Used TV Seller in Dubai</Link>.
            {" "}Read our <Link to="/blogs" className="text-primary font-semibold hover:underline">blog articles</Link> for expert tips on buying and selling used TVs.
          </p>

          {/* CTA */}
          <div className="bg-secondary rounded-xl p-6 my-8 text-center">
            <h3 className="font-heading font-bold text-xl mb-2">
              {isBuyer ? `Sell Your Used TV in ${loc.name} Today` : `Buy a Quality Used TV in ${loc.name}`}
            </h3>
            <p className="text-muted-foreground mb-4">Call us now for the best price and fastest service.</p>
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
          <h2 className="text-3xl font-extrabold text-center mb-10">
            Frequently Asked Questions - {isBuyer ? "Selling" : "Buying"} Used TVs in {loc.name}
          </h2>
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
