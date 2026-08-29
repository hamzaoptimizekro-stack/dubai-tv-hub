import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, Shield, MapPin, Star, CheckCircle, Tv, ArrowRight, Users, Clock, BadgeCheck, ThumbsUp, Truck } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import BrandSlider from "@/components/BrandSlider";
import { CONTACT, SITE_URL, SERVICE_LOCATIONS } from "@/config/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  { icon: BadgeCheck, title: "7+ Years Trusted", desc: "Serving Dubai with 12 businesses in used home appliances." },
  { icon: Truck, title: "Free Pickup & Delivery", desc: "We come to your doorstep across Dubai, Sharjah & Ajman." },
  { icon: ThumbsUp, title: "Best Prices Guaranteed", desc: "Fair market valuations and instant cash payments." },
  { icon: Shield, title: "Licensed & Verified", desc: "Fully licensed trading business in Dubai, UAE." },
];

const testimonials = [
  { name: "Ahmed K.", area: "Deira, Dubai", text: "Sold my 55-inch Samsung TV within 2 hours. Got the best price compared to 5 other buyers. Highly recommended!", rating: 5 },
  { name: "Fatima S.", area: "Al Nahda, Sharjah", text: "Bought a second-hand LG OLED TV at an unbeatable price. Works like brand new. Excellent service!", rating: 5 },
  { name: "Rajesh P.", area: "JLT, Dubai", text: "Hassan and his team are very professional. Quick response, fair pricing, and free pickup. The best used TV dealer in Dubai.", rating: 5 },
  { name: "Maria L.", area: "Abu Hail, Dubai", text: "I've been buying and selling used electronics with them for 3 years. Always honest and reliable.", rating: 5 },
];

const faqs = [
  { q: "Where can I sell my used TV in Dubai?", a: `You can sell your used TV at UsedTV Dubai. We are located at ${CONTACT.address}. We offer instant cash payment and free pickup across Dubai, Sharjah, Ajman, and all other emirates.` },
  { q: "How much can I get for my used TV?", a: "The price depends on brand, size, model year, and condition. Samsung, LG, and Sony TVs typically get the best resale value. Contact us for a free, no-obligation valuation." },
  { q: "What condition should my TV be in to sell it?", a: "We buy used TVs in working condition only. The TV should turn on, display a clear picture, and have functional sound. Minor cosmetic wear or a missing remote is acceptable." },
  { q: "Which TV brands do you buy and sell?", a: "We deal in all major brands: Samsung, LG, Sony, TCL, Hisense, Toshiba, Panasonic, Philips, Sharp, Skyworth, Haier, JVC, Hitachi, and more." },
  { q: "Do you offer free pickup service?", a: "Yes, we provide free pickup across Dubai, Sharjah, Ajman, Abu Dhabi, and other UAE emirates. Our team will visit your location at a time convenient for you." },
  { q: "How fast is the buying/selling process?", a: "Most transactions are completed within 1-2 hours. Call us, get a quote, and we arrange immediate pickup or delivery." },
  { q: "What sizes of TVs do you buy and sell?", a: "We handle all sizes from 24-inch to 85-inch+ TVs. LED, LCD, OLED, QLED, Plasma, Smart and non-smart models are all welcome." },
  { q: "Do you provide warranty on used TVs?", a: "Yes, we offer a limited warranty on select models to give you peace of mind with your purchase." },
  { q: "Can I visit your showroom to see the TVs?", a: `Yes, our showroom is located at ${CONTACT.address}. You are welcome to visit during our working hours (${CONTACT.hours}).` },
  { q: "Do you buy TVs from companies and hotels?", a: "Absolutely! We buy bulk quantities from hotels, offices, furnished apartments, and any commercial establishments. Special bulk pricing is available." },
  { q: "What payment methods do you accept?", a: "We pay instant cash on the spot for TVs we buy. For purchases, we accept cash and bank transfers." },
  { q: "Do you deliver used TVs in Dubai?", a: "Yes, we offer free delivery across all areas of Dubai. We also deliver to Sharjah, Ajman, and other emirates." },
  { q: "How do I know if a used TV is good quality?", a: "Every TV at UsedTV Dubai undergoes a 15-point quality inspection. We test screen quality, sound, all ports, Wi-Fi, smart features, and physical condition before selling." },
  { q: "Can I exchange my old TV for a newer model?", a: "Yes, we offer trade-in and exchange options. Sell your current TV to us and use the cash toward a better model from our inventory." },
  { q: "Are smart TV features working on used TVs?", a: "Yes, we verify all smart features including Wi-Fi, app store, streaming apps like Netflix and YouTube, and system updates before selling any smart TV." },
  { q: "What is the best brand for a used TV in Dubai?", a: "Samsung and LG are the most popular and reliable brands in the used market. Sony is great for premium quality. TCL and Hisense offer excellent value for budget buyers." },
  { q: "Do you buy TVs with missing remotes?", a: "Yes, we buy TVs even without remote controls or original packaging, as long as the TV is in working condition with a clear picture and functional sound." },
  { q: "How do you determine the price of a used TV?", a: "We consider the brand, model, screen size, technology (LED, OLED, QLED), manufacturing year, condition, and current market demand to provide a fair valuation." },
  { q: "Do you serve areas outside Dubai?", a: "Yes, we serve all seven emirates including Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah, Fujairah, and Umm Al Quwain with free pickup and delivery options." },
  { q: "Is UsedTV Dubai a licensed business?", a: `Yes, UsedTV Dubai is a fully licensed and registered trading business in Dubai, UAE. Founded by ${CONTACT.owner} with 7+ years of experience and 12 active businesses.` },
  { q: "What if the TV stops working after I buy it?", a: "Select models come with a limited warranty. If any issue arises within the warranty period, contact us and we will resolve it promptly." },
  { q: "Do you sell TV wall mounts and accessories?", a: "We primarily deal in televisions, but some TVs come with original stands and remotes. We can recommend trusted accessory suppliers for wall mounts." },
  { q: "Can I buy a used TV online from you?", a: `Currently, you can browse our inventory by calling ${CONTACT.phoneDisplay} or visiting our showroom. We will guide you through available options and arrange delivery.` },
  { q: "What is the best TV size for a bedroom?", a: "For bedrooms, we recommend 32 to 43-inch TVs depending on room size. For living rooms, 55 to 75-inch TVs are ideal. Our team can help you choose the right size." },
  { q: "Why should I buy a used TV instead of new?", a: "Used TVs save you 40-70% compared to new retail prices. Many TVs are only 1-2 years old and work perfectly. It is also an eco-friendly choice that reduces electronic waste." },
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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "UsedTV Dubai",
  image: `${SITE_URL}/logo.png`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: CONTACT.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Musalla Rd",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "208",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UsedTV Dubai",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blogs?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "UsedTV Dubai",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Used TV Dubai | Buy & Sell Working TVs UAE",
  url: `${SITE_URL}/`,
  description: `Buy or sell working used TVs in Dubai and UAE. Samsung, LG, Sony, TCL and more with free pickup, instant cash and WhatsApp quotes at ${CONTACT.phoneDisplay}.`,
  isPartOf: { "@type": "WebSite", "@id": SITE_URL },
  about: { "@type": "Thing", name: "Used Television Trading in Dubai UAE" },
  datePublished: "2024-01-01",
  dateModified: "2026-04-28",
  inLanguage: "en",
  primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/hero-bg.jpg` },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: CONTACT.owner,
  jobTitle: "Founder & CEO",
  description: CONTACT.ownerTitle,
  url: `${SITE_URL}/author/hassan-jamil`,
  worksFor: {
    "@type": "LocalBusiness",
    name: "UsedTV Dubai",
    url: SITE_URL,
  },
  knowsAbout: ["Used TVs", "Second Hand Electronics", "TV Trading", "Dubai Electronics Market"],
  sameAs: [],
};

const homeBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
  ],
};

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Used TV Dubai | Buy & Sell Working TVs UAE</title>
        <meta name="description" content={`Buy or sell working used TVs in Dubai and UAE. Samsung, LG, Sony, TCL and more with free pickup, instant cash and WhatsApp quotes at ${CONTACT.phoneDisplay}.`} />
        <link rel="canonical" href={`${SITE_URL}/`} />
      </Helmet>
      <SchemaMarkup />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumb) }} />

      {/* Hero */}
      <section className="text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover" loading="eager" />
        </div>
        <div className="absolute inset-0 hero-gradient opacity-85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(200_85%_60%_/_0.3),_transparent_60%)]" />
        <div className="container relative">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="verified-badge mb-6 bg-primary-foreground/15 text-primary-foreground">
              <BadgeCheck className="w-4 h-4" /> Licensed Used TV Buyer & Seller in Dubai
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Used TV Buyer and Seller in Dubai, UAE
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed max-w-2xl">
              Sell your working TV for instant cash or buy a quality-tested second-hand TV at a fair price. We deal in Samsung, LG, Sony, TCL, Hisense and more with free pickup, quick WhatsApp quotes and same-day service across the UAE.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary font-bold hover:opacity-90 transition-opacity">
                <Phone className="w-5 h-5" /> Call for Best Price
              </a>
              <Link to="/service/used-tv-seller-dubai" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-primary-foreground/30 font-bold hover:bg-primary-foreground/10 transition-colors">
                Buy Used TVs <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm opacity-80">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-current" /> 4.9/5 (208 Reviews)</span>
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

      {/* Brand Slider */}
      <BrandSlider />

      {/* Main SEO Content */}
      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2 className="heading-highlight">Used TV Dubai - Trusted Place to Buy and Sell Working TVs</h2>
          <p>
            Looking for a reliable <strong>used TV buyer in Dubai</strong> or a clean <strong>used TV for sale in Dubai</strong>? UsedTV Dubai helps residents, families, offices, hotels and moving customers buy and sell working televisions without stress. We focus only on used TVs in working condition, with clear picture, functional sound and proper basic operation.
          </p>
          <p>
            Our team checks every TV carefully before purchase or resale, so sellers receive a fair market offer and buyers get a quality-tested television for their home, apartment, shop, staff accommodation or furnished property. With <strong>7+ years of experience</strong> in used home appliances, founder <strong>{CONTACT.owner}</strong> has built a trusted local service from our showroom at <strong>{CONTACT.address}</strong>.
          </p>

          <h2 className="heading-highlight">Why People Buy Used TVs in Dubai</h2>
          <p>
            Dubai has a fast-moving electronics market. Many residents upgrade from LED to OLED, from 43-inch to 65-inch, or from regular TV to Smart TV while the previous television is still in good condition. That creates strong demand for <strong>second-hand TVs in Dubai</strong> because buyers can save money and still enjoy modern features.
          </p>
          <ul>
            <li><strong>Lower cost</strong> - Get a good branded TV for less than the price of a new showroom model.</li>
            <li><strong>Tested condition</strong> - We check screen, sound, ports, remote response and smart features before selling.</li>
            <li><strong>Popular sizes available</strong> - Choose from compact 32-inch TVs to large 55, 65, 75 and 85-inch displays.</li>
            <li><strong>Useful for rentals</strong> - Ideal for tenants, holiday homes, offices, staff rooms and temporary accommodation.</li>
            <li><strong>Better value</strong> - Many branded TVs still perform very well even after light previous use.</li>
          </ul>

          <h2 className="heading-highlight">Best Used TV Brands We Buy and Sell</h2>
          <p>
            Brand, model and screen technology matter when buying or selling a used television. We regularly deal in high-demand UAE models including <strong>used Samsung TVs</strong>, <strong>LG OLED TVs</strong>, <strong>Sony Bravia TVs</strong>, TCL Smart TVs, Hisense UHD TVs and other popular brands.
          </p>
          <ul>
            <li><strong>Samsung</strong> - Crystal UHD, QLED, Neo QLED, The Frame, Smart TV series</li>
            <li><strong>LG</strong> - OLED, NanoCell, UHD, WebOS Smart TVs</li>
            <li><strong>Sony</strong> - Bravia XR, OLED, X-series, Android TV models</li>
            <li><strong>TCL</strong> - Budget-friendly 4K and QLED options</li>
            <li><strong>Hisense</strong> - ULED, Laser TV, affordable smart TVs</li>
            <li><strong>Toshiba, Panasonic, Philips, Sharp, Skyworth</strong> - Various models and sizes</li>
          </ul>
          <p>
            Every television is checked for picture quality, sound output, HDMI and USB ports, Wi-Fi, Bluetooth, smart apps and general functionality. We provide a <strong>limited warranty on select models</strong> and honest guidance so you can choose the right screen size and model for your budget.
          </p>

          <h2 className="heading-highlight">Sell Your Working Used TV in Dubai for Instant Cash</h2>
          <p>
            Planning to <strong>sell your used TV in Dubai</strong>? We make the process simple for working televisions. Send us the brand, model, screen size, age and clear photos or videos on WhatsApp. If the TV turns on, shows a proper picture and has working sound, our team can make a fair offer and arrange pickup.
          </p>
          <ol>
            <li><strong>Contact us</strong> - Call or WhatsApp us at {CONTACT.phoneDisplay} with details about your TV (brand, model, size, condition, and age).</li>
            <li><strong>Get a free valuation</strong> - Our experts will provide you with a fair market price within minutes.</li>
            <li><strong>Schedule pickup</strong> - We offer free pickup from anywhere in Dubai, Sharjah, Ajman, and surrounding areas.</li>
            <li><strong>Get instant cash</strong> - Once our team inspects the TV at your location, you will receive immediate cash payment.</li>
          </ol>
          <p>
            We buy <strong>all types of used TVs in working condition</strong> including LED, LCD, OLED, QLED, Plasma, and Smart TVs. We offer you the best price in the market. Learn more on our <Link to="/service/used-tv-buyer-dubai" className="text-primary font-semibold hover:underline">Used TV Buyer in Dubai</Link> page.
          </p>

          <h2 className="heading-highlight">Used TV Prices in Dubai - What Affects the Value?</h2>
          <p>
            The price of a <strong>used TV in Dubai</strong> depends on brand, model year, screen size, panel technology and current condition. A working Samsung 55-inch Smart TV, LG OLED, Sony Bravia, or premium QLED model usually has stronger resale value than a small older non-smart model.
          </p>
          <ul>
            <li><strong>32-inch LED TV</strong> - AED 200 to AED 500</li>
            <li><strong>43-inch Smart TV</strong> - AED 400 to AED 900</li>
            <li><strong>55-inch 4K UHD TV</strong> - AED 600 to AED 1,500</li>
            <li><strong>65-inch QLED/OLED TV</strong> - AED 1,000 to AED 3,000</li>
            <li><strong>75-inch+ Premium TV</strong> - AED 1,500 to AED 5,000</li>
          </ul>
          <p>
            These are approximate buying and selling ranges. For the most accurate quote, call or WhatsApp <strong>{CONTACT.phoneDisplay}</strong> with your TV details. We keep pricing transparent and based on real demand in Dubai and UAE.
          </p>

          <h2 className="heading-highlight">Used TV Pickup and Delivery Across UAE</h2>
          <p>
            Our <strong>used TV buying and selling services</strong> cover Dubai and all major UAE emirates. We help sellers with free pickup and buyers with convenient delivery, making the process easier for apartments, villas, offices, hotels and commercial spaces.
          </p>
          <ul>
            <li><strong>Dubai</strong> - Deira, Bur Dubai, JBR, Marina, JLT, Downtown, Business Bay, Al Barsha, Silicon Oasis, Sports City, International City, Al Nahda, Al Qusais, Mirdif, Jumeirah. <Link to="/service/used-tv-buyer-dubai" className="text-primary hover:underline">Sell TV in Dubai</Link> | <Link to="/service/used-tv-seller-dubai" className="text-primary hover:underline">Buy TV in Dubai</Link></li>
            {SERVICE_LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <strong>{loc.name}</strong> - {loc.areas.slice(0, 5).join(", ")}.{" "}
                <Link to={`/service/used-tv-buyer-${loc.slug}`} className="text-primary hover:underline">Sell TV in {loc.name}</Link> |{" "}
                <Link to={`/service/used-tv-seller-${loc.slug}`} className="text-primary hover:underline">Buy TV in {loc.name}</Link>
              </li>
            ))}
          </ul>

          <h2 className="heading-highlight">Why Choose UsedTV Dubai?</h2>
          <p>
            The used electronics market can be confusing because prices, quality and trust levels vary from seller to seller. UsedTV Dubai keeps the process clear, fast and professional with <strong>4.9/5 stars from 208 verified reviews</strong>.
          </p>
          <ul>
            <li><strong>Transparency</strong> - No hidden fees, no last-minute price changes. The price we quote is the price you get.</li>
            <li><strong>Expertise</strong> - Our team of technicians tests every TV thoroughly before buying or selling.</li>
            <li><strong>Speed</strong> - Most transactions are completed within 1-2 hours from the initial call.</li>
            <li><strong>Convenience</strong> - Free door-to-door service across the UAE. You do not need to carry heavy TVs anywhere.</li>
            <li><strong>Trust</strong> - Founded by {CONTACT.owner}, who has been in the used home appliance business for 7+ years with 12 active businesses.</li>
          </ul>

          <h2 className="heading-highlight">Checklist Before Buying a Second-Hand TV</h2>
          <p>
            If you are planning to buy a <strong>second-hand television in Dubai</strong>, do not look only at screen size and price. A proper check helps you avoid weak panels, missing features and poor picture quality. Read more in our <Link to="/blogs/tips-buying-second-hand-tv" className="text-primary hover:underline">detailed buying guide</Link>:
          </p>
          <ul>
            <li><strong>Check the screen carefully</strong> - Look for dead pixels, color inconsistencies, and backlight bleeding.</li>
            <li><strong>Test all ports</strong> - Ensure HDMI, USB, audio, and ethernet ports are functioning.</li>
            <li><strong>Verify smart features</strong> - Connect to Wi-Fi and test streaming apps like Netflix, YouTube, and Shahid.</li>
            <li><strong>Ask about the model year</strong> - Newer models will have better features and longer software support.</li>
            <li><strong>Request a warranty</strong> - At UsedTV Dubai, we offer limited warranties on eligible products.</li>
            <li><strong>Buy from verified dealers</strong> - Always purchase from licensed businesses to avoid scams.</li>
          </ul>

          <h2 className="heading-highlight">Used TV Market Trends in Dubai and UAE</h2>
          <p>
            The <strong>used TV market in Dubai</strong> remains active because people move homes, upgrade screens, furnish rental units and replace office displays throughout the year. Smart TVs with 4K resolution are now common, while OLED, QLED and large-screen models are in high demand among movie lovers, gamers and families. Read our <Link to="/blogs/used-tv-market-trends-uae-2025" className="text-primary hover:underline">complete market trends analysis</Link>.
          </p>
          <p>
            Buying and selling working used TVs also supports smarter reuse. Instead of leaving a functional television unused, sellers recover value and buyers get an affordable screen for entertainment, gaming, movies, CCTV display, meeting rooms, shops or rental properties.
          </p>

          <h2 className="heading-highlight">Our Services</h2>
          <p>Explore our dedicated service pages for more information:</p>
          <ul>
            <li><Link to="/service/used-tv-buyer-dubai" className="text-primary font-semibold hover:underline">Used TV Buyer in Dubai</Link> - Sell your TV for instant cash</li>
            <li><Link to="/service/used-tv-seller-dubai" className="text-primary font-semibold hover:underline">Used TV Seller in Dubai</Link> - Buy quality tested used TVs</li>
            {SERVICE_LOCATIONS.slice(0, 3).map((loc) => (
              <li key={loc.slug}>
                <Link to={`/service/used-tv-buyer-${loc.slug}`} className="text-primary font-semibold hover:underline">Used TV Buyer in {loc.name}</Link> |{" "}
                <Link to={`/service/used-tv-seller-${loc.slug}`} className="text-primary font-semibold hover:underline">Used TV Seller in {loc.name}</Link>
              </li>
            ))}
          </ul>

          <h2 className="heading-highlight">Buy Second-Hand TV in Dubai - Cheap Used TVs for Sale</h2>
          <p>
            Searching for a <strong>cheap used TV in Dubai</strong> that still performs like new? UsedTV Dubai stocks affordable second-hand televisions from top brands at prices 40-70% lower than new showroom models. Whether you need a <strong>used 55-inch Smart TV</strong>, a <strong>second-hand 43-inch LED TV</strong>, or a <strong>used 65-inch 4K TV</strong>, our tested inventory covers every size and budget. Browse our <Link to="/service/used-tv-seller-dubai" className="text-primary font-semibold hover:underline">used TV for sale in Dubai</Link> page to see what is available right now.
          </p>
          <ul>
            <li><strong>Used Samsung TV for sale</strong> - Crystal UHD, QLED, Neo QLED, The Frame, Smart series</li>
            <li><strong>Used LG TV for sale</strong> - OLED, NanoCell, UHD, WebOS Smart models</li>
            <li><strong>Used Sony Bravia TV</strong> - XR OLED, X-series, Android TV models</li>
            <li><strong>Used TCL TV Dubai</strong> - Budget 4K and QLED options with smart features</li>
            <li><strong>Used Hisense TV</strong> - ULED, affordable large-screen UHD models</li>
            <li><strong>Used 32-inch TV Dubai</strong> - Compact screens for bedrooms, kitchens, staff rooms</li>
          </ul>
          <p>
            Every second-hand television we sell is checked for picture clarity, sound output, HDMI and USB ports, Wi-Fi connectivity, smart apps and remote function. We also help buyers pick the right <strong>TV size for their room</strong> and budget. Call <strong>{CONTACT.phoneDisplay}</strong> for current stock and pricing.
          </p>

          <h2 className="heading-highlight">Sell Old TV in Dubai - Instant Cash for Your Used Television</h2>
          <p>
            Want to <strong>sell your old TV in Dubai</strong> quickly? UsedTV Dubai buys working used televisions for instant cash with free home pickup. If you are moving, upgrading to a bigger screen, or simply clearing space, we give you a fair price based on real UAE market demand. Send your TV details on WhatsApp and get a <strong>free TV valuation in Dubai</strong> within minutes. Visit our <Link to="/service/used-tv-buyer-dubai" className="text-primary font-semibold hover:underline">sell used TV in Dubai</Link> page to start.
          </p>
          <p>
            We buy all working TV types including <strong>used LED TVs</strong>, <strong>used OLED TVs</strong>, <strong>used QLED TVs</strong>, <strong>used Smart TVs</strong>, <strong>used 4K UHD TVs</strong> and <strong>used Android TVs</strong>. From compact 24-inch screens to large 85-inch displays, every working television has resale value with us.
          </p>
          <ol>
            <li><strong>Share TV details</strong> - Send brand, model, size, age and photos on WhatsApp at {CONTACT.phoneDisplay}.</li>
            <li><strong>Get an instant quote</strong> - Our team replies with a fair cash offer based on current market value.</li>
            <li><strong>Free home pickup</strong> - We collect the TV from your address anywhere in Dubai or nearby emirates.</li>
            <li><strong>Cash on the spot</strong> - You receive instant cash payment after a quick on-site inspection.</li>
          </ol>

          <h2 className="heading-highlight">Used TV Types and Technologies We Handle</h2>
          <p>
            The UAE used TV market includes many panel technologies and smart platforms. Understanding these helps you choose the right <strong>second-hand television</strong> or get an accurate resale value. Here is a quick breakdown of the TV types we buy and sell.
          </p>
          <ul>
            <li><strong>LED TV</strong> - The most common and affordable option. Energy efficient with bright, clear picture.</li>
            <li><strong>OLED TV</strong> - Premium picture quality with perfect blacks. Popular for movies and home cinema.</li>
            <li><strong>QLED TV</strong> - Bright, vivid colors with quantum dot technology. Great for well-lit rooms.</li>
            <li><strong>4K UHD TV</strong> - Four times the resolution of Full HD. Standard for modern content and streaming.</li>
            <li><strong>Smart TV</strong> - Built-in Wi-Fi, app store, Netflix, YouTube, Shahid and other streaming apps.</li>
            <li><strong>Android TV</strong> - Google-powered smart platform with Play Store, Chromecast and voice control.</li>
            <li><strong>Curved TV</strong> - Immersive curved screen, still in demand for gaming and movie setups.</li>
          </ul>
          <p>
            Not sure which type suits your needs? Our team can recommend the best <strong>used TV technology</strong> for your viewing habits, room size and budget. Read our guide on <Link to="/blogs/best-used-tv-for-gaming-dubai" className="text-primary hover:underline">gaming TVs in Dubai</Link> and the <Link to="/blogs/tv-electricity-consumption-guide-dubai" className="text-primary hover:underline">TV electricity consumption guide</Link> for more.
          </p>

          <h2 className="heading-highlight">Used TV for Hotels, Offices and Bulk Buyers in UAE</h2>
          <p>
            Beyond individual homes, UsedTV Dubai supplies <strong>used TVs for hotels</strong>, furnished apartments, offices, holiday homes, staff accommodation and commercial projects across the UAE. Bulk buyers get special pricing on multiple units, and we can match specific brand and size requirements for uniform room setups. Our team handles delivery, basic installation guidance and post-sale support for commercial orders.
          </p>
          <ul>
            <li><strong>Hotels and furnished apartments</strong> - Uniform branded TVs for guest rooms.</li>
            <li><strong>Offices and meeting rooms</strong> - Reliable displays for presentations and CCTV.</li>
            <li><strong>Staff and labour camps</strong> - Affordable screens for common areas.</li>
            <li><strong>Event and rental companies</strong> - Short-term use displays at competitive rates.</li>
          </ul>
          <p>
            Call <strong>{CONTACT.phoneDisplay}</strong> to discuss bulk used TV requirements anywhere in Dubai, Sharjah, Ajman or Abu Dhabi.
          </p>

          <h2 className="heading-highlight">Free TV Pickup and Same-Day Service in Dubai</h2>
          <p>
            One of the biggest reasons customers choose UsedTV Dubai is our <strong>free TV pickup service</strong>. You never have to carry a heavy television to our showroom. Whether you live in a high-rise apartment in JBR or a villa in Arabian Ranches, our team comes to your doorstep, inspects the TV on site, and pays you cash immediately. For buyers, we offer <strong>same-day used TV delivery</strong> across Dubai and nearby emirates so you can enjoy your new screen the same day you order it.
          </p>
          <ul>
            <li><strong>Free pickup</strong> - We collect from any Dubai area, no transport cost to you.</li>
            <li><strong>Same-day delivery</strong> - Buy a TV in the morning, watch it the same evening.</li>
            <li><strong>WhatsApp quotes</strong> - Quick valuation without leaving your home.</li>
            <li><strong>Instant cash payment</strong> - No bank delays, no waiting for clearance.</li>
            <li><strong>Professional team</strong> - Trained technicians handle every TV with care.</li>
          </ul>
          <p>
            <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us today</Link> to book a free pickup or arrange delivery.
          </p>

          <h2 className="heading-highlight">Trusted Used TV Dealer in Dubai - 7+ Years of Experience</h2>
          <p>
            With <strong>7+ years in the used home appliance business</strong> and 12 active businesses, founder {CONTACT.owner} has built UsedTV Dubai into one of the most trusted names for buying and selling working used TVs in the UAE. Our reputation is built on honest pricing, quality-checked products and reliable same-day service. We are a fully <strong>licensed trading business</strong> located at {CONTACT.address}, and our customers return to us because we treat every deal with transparency and respect.
          </p>
          <p>
            Whether you are selling a single TV or buying multiple screens for a hotel project, UsedTV Dubai is your reliable local partner for <strong>used televisions in Dubai</strong> and across the UAE. Read what our customers say in the reviews below, then call us for your free quote.
          </p>

          <h2 className="heading-highlight">Contact UsedTV Dubai - Get Your Free Quote Today</h2>
          <p>
            Ready to <strong>buy or sell a used TV in Dubai</strong>? Contact UsedTV Dubai today for the best prices and fastest service in the UAE.
          </p>
          <p>
            <strong>Owner:</strong> {CONTACT.owner} - {CONTACT.ownerTitle}<br />
            <strong>Address:</strong> {CONTACT.address}<br />
            <strong>Phone:</strong> {CONTACT.phoneDisplay}<br />
            <strong>Email:</strong> {CONTACT.email}<br />
            <strong>Working Hours:</strong> {CONTACT.hours}
          </p>
          <p>
            Read our <Link to="/blogs" className="text-primary font-semibold hover:underline">latest blog articles</Link> for expert tips and guides on buying and selling used TVs in the UAE.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-gradient">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center mb-4">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">Rated 4.9/5 from 208 verified reviews across Dubai and UAE.</p>
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
      <section className="section-padding">
        <div className="container container-narrow">
          <h2 className="text-3xl font-extrabold text-center mb-10">Frequently Asked Questions About Used TVs in Dubai</h2>
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

      {/* CTA */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Buy or Sell Your Used TV?</h2>
          <p className="text-lg opacity-90 mb-8">Get the best prices in Dubai with instant cash payment and free pickup. Call us now!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-foreground text-primary font-bold text-lg hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" /> {CONTACT.phoneDisplay}
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
