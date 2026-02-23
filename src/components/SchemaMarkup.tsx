export default function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "UsedTV Dubai - Buy & Sell Used TVs in UAE",
    image: "https://usedtvdubai.ae/logo.png",
    "@id": "https://usedtvdubai.ae",
    url: "https://usedtvdubai.ae",
    telephone: "+971501234567",
    email: "info@usedtvdubai.ae",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Naif Road, Deira, Near California Hotel",
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
    founder: {
      "@type": "Person",
      name: "Hassan Jamil",
    },
    description:
      "Dubai's most trusted used TV buyer and seller. We buy and sell all brands of used televisions including Samsung, LG, Sony, TCL and more. Serving UAE for 7+ years.",
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UsedTV Dubai",
    url: "https://usedtvdubai.ae",
    logo: "https://usedtvdubai.ae/logo.png",
    founder: { "@type": "Person", name: "Hassan Jamil" },
    foundingDate: "2017",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971501234567",
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

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where can I sell my used TV in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can sell your used TV at UsedTV Dubai located at Al Naif Road, Deira, Near California Hotel, Dubai. We offer instant cash payment and free pickup across Dubai.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I get for my used TV in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price depends on the brand, size, model, and condition. Samsung, LG, and Sony TVs typically get the best prices. Contact us for a free valuation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you buy broken TVs in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we buy TVs in all conditions including broken, cracked screen, or non-working TVs. We offer fair prices based on the condition and parts value.",
        },
      },
      {
        "@type": "Question",
        name: "Which TV brands do you buy and sell?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We buy and sell all major brands including Samsung, LG, Sony, TCL, Hisense, Toshiba, Panasonic, Philips, and more.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free pickup for used TVs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer free pickup service across Dubai, Sharjah, Ajman, and other UAE emirates. Our team will come to your location at your convenience.",
        },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://usedtvdubai.ae/" },
      { "@type": "ListItem", position: 2, name: "Used TV Buyer Dubai", item: "https://usedtvdubai.ae/used-tv-buyer-dubai" },
      { "@type": "ListItem", position: 3, name: "Used TV Seller Dubai", item: "https://usedtvdubai.ae/used-tv-seller-dubai" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviews) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
