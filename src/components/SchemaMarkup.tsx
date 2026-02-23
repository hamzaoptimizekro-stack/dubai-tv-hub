import { CONTACT, SITE_URL } from "@/config/site";

export default function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "UsedTV Dubai - Buy & Sell Used TVs in UAE",
    image: `${SITE_URL}/logo.png`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Musalla Rd",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2697,
      longitude: 55.3095,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    priceRange: "AED 200 - AED 5000",
    founder: { "@type": "Person", name: CONTACT.owner },
    description: "Dubai's most trusted used TV buyer and seller. We buy and sell all brands of used televisions including Samsung, LG, Sony, TCL and more. Serving UAE for 7+ years.",
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UsedTV Dubai",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    founder: { "@type": "Person", name: CONTACT.owner },
    foundingDate: "2017",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic", "Urdu", "Hindi"],
    },
  };

  const reviews = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Used TV Buy & Sell Services in Dubai",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ahmed K." },
        datePublished: "2025-12-15",
        reviewBody: "Sold my old Samsung TV in less than 2 hours. Best used TV buyer in Dubai!",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Fatima S." },
        datePublished: "2025-11-20",
        reviewBody: "Bought a quality LG TV at amazing price. Fully tested and working perfectly.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Used TV Buyer Dubai", item: `${SITE_URL}/used-tv-buyer-dubai` },
      { "@type": "ListItem", position: 3, name: "Used TV Seller Dubai", item: `${SITE_URL}/used-tv-seller-dubai` },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Used TV Buying and Selling Service",
    provider: { "@type": "LocalBusiness", name: "UsedTV Dubai" },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Abu Dhabi" },
    ],
    description: "Professional used TV buying and selling service across UAE. Free pickup, instant cash, all brands.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviews) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    </>
  );
}
