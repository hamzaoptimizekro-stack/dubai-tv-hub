import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CONTACT, SITE_URL } from "@/config/site";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export const blogs = [
  { slug: "best-used-tv-brands-dubai", title: "Top 5 Best Used TV Brands to Buy in Dubai in 2025", excerpt: "Looking for the best used TV brand in Dubai? Here is our expert guide to the top 5 brands that offer the best value for money.", date: "2025-12-10", author: "Hassan Jamil" },
  { slug: "how-to-sell-used-tv-dubai", title: "How to Sell Your Used TV in Dubai - Complete Step-by-Step Guide", excerpt: "Want to sell your old TV in Dubai? Follow this complete guide to get the best price quickly and hassle-free.", date: "2025-11-25", author: "Hassan Jamil" },
  { slug: "used-tv-price-guide-uae", title: "Used TV Price Guide UAE 2025 - What Is Your TV Worth?", excerpt: "Find out how much your used TV is worth in the UAE market with our comprehensive price guide.", date: "2025-11-08", author: "Hassan Jamil" },
  { slug: "tips-buying-second-hand-tv", title: "7 Tips for Buying a Second-Hand TV in Dubai", excerpt: "Follow these 7 essential tips when buying a used television in Dubai to ensure you get the best deal.", date: "2025-10-20", author: "Hassan Jamil" },
  { slug: "samsung-vs-lg-used-tv-dubai", title: "Samsung vs LG: Which Used TV Should You Buy in Dubai?", excerpt: "A detailed comparison of Samsung and LG used TVs available in Dubai covering price, features, and reliability.", date: "2026-02-15", author: "Hassan Jamil" },
  { slug: "where-to-buy-cheap-tv-dubai", title: "Where to Buy Cheap TVs in Dubai - Complete Guide 2025", excerpt: "Discover the best places to find affordable TVs in Dubai, from used TV dealers to online marketplaces.", date: "2026-02-10", author: "Hassan Jamil" },
  { slug: "used-smart-tv-deals-uae", title: "Best Used Smart TV Deals in UAE - Save Up to 70%", excerpt: "Find incredible deals on used smart TVs in the UAE. Samsung, LG, Sony smart TVs at unbeatable prices.", date: "2026-02-05", author: "Hassan Jamil" },
  
  { slug: "used-oled-tv-dubai-guide", title: "Used OLED TV Buying Guide for Dubai - What to Know", excerpt: "Everything you need to know before buying a used OLED TV in Dubai, including price ranges and what to check.", date: "2026-01-20", author: "Hassan Jamil" },
  { slug: "used-tv-warranty-dubai", title: "Do Used TVs Come with Warranty in Dubai?", excerpt: "Learn about warranty options when buying used TVs in Dubai and how to protect your purchase.", date: "2026-01-15", author: "Hassan Jamil" },
  { slug: "best-tv-size-for-room", title: "Best TV Size for Your Room - Complete Sizing Guide", excerpt: "Not sure what TV size to buy? Our guide helps you choose the perfect screen size based on your room dimensions.", date: "2026-01-10", author: "Hassan Jamil" },
  { slug: "used-tv-market-trends-uae-2025", title: "Used TV Market Trends UAE 2025 - Industry Analysis", excerpt: "An in-depth analysis of the used TV market in the UAE including pricing trends, popular brands, and future outlook.", date: "2026-01-05", author: "Hassan Jamil" },
  { slug: "eco-friendly-electronics-dubai", title: "Eco-Friendly Electronics Shopping in Dubai - Buy Used, Save the Planet", excerpt: "How buying used electronics in Dubai helps reduce e-waste and supports sustainability in the UAE.", date: "2025-12-28", author: "Hassan Jamil" },
  { slug: "used-tv-vs-new-tv-dubai", title: "Used TV vs New TV - Which is Better Value in Dubai?", excerpt: "A honest comparison between buying new and used TVs in Dubai. Find out which option saves you more money.", date: "2025-12-20", author: "Hassan Jamil" },
  { slug: "how-to-check-used-tv-before-buying", title: "How to Check a Used TV Before Buying - Complete Inspection Checklist", excerpt: "Step-by-step inspection checklist for testing a used TV before purchase. Screen tests, port checks, and smart feature verification.", date: "2026-02-20", author: "Hassan Jamil" },
  { slug: "best-used-tv-for-gaming-dubai", title: "Best Used TVs for Gaming in Dubai - Top Picks for PS5 & Xbox", excerpt: "Find the best used gaming TVs in Dubai with HDMI 2.1, low input lag, and 4K 120Hz support for PS5 and Xbox Series X.", date: "2026-02-18", author: "Hassan Jamil" },
  { slug: "used-tv-for-hotel-apartments-dubai", title: "Used TVs for Hotels & Furnished Apartments in Dubai - Bulk Supply Guide", excerpt: "Complete guide to sourcing used TVs in bulk for hotels, serviced apartments, and commercial properties in Dubai and UAE.", date: "2026-02-12", author: "Hassan Jamil" },
  { slug: "how-to-wall-mount-used-tv", title: "How to Wall Mount a Used TV in Dubai - Complete DIY Guide", excerpt: "Step-by-step guide to wall mounting your used TV in Dubai. Tools needed, bracket types, cable management and professional services.", date: "2026-02-08", author: "Hassan Jamil" },
  { slug: "used-tv-delivery-all-emirates-uae", title: "Used TV Delivery to All Emirates in UAE - Free Shipping Guide", excerpt: "How UsedTV Dubai delivers quality-tested used TVs to all 7 emirates including Dubai, Sharjah, Ajman, Abu Dhabi, RAK, Fujairah and UAQ.", date: "2026-02-03", author: "Hassan Jamil" },
  { slug: "best-gaming-tv-setup-guide-dubai", title: "Best Gaming TV Setup Guide for Dubai - PS5, Xbox & PC Gaming", excerpt: "Complete guide to setting up the best gaming TV in Dubai. HDMI 2.1, 4K 120Hz, low input lag TVs for PS5, Xbox Series X, and PC gaming.", date: "2026-03-05", author: "Hassan Jamil" },
  { slug: "how-to-clean-used-tv-screen-safely", title: "How to Clean Your TV Screen Safely in Dubai - Complete Guide", excerpt: "Learn how to safely clean your TV screen in Dubai's dusty environment. Step-by-step guide for LED, OLED, and QLED screens.", date: "2026-03-02", author: "Hassan Jamil" },
  { slug: "best-tv-for-movies-home-theater-dubai", title: "Best TV for Movies and Home Theater Setup in Dubai 2025", excerpt: "Find the best TV for movies and home theater in Dubai. OLED vs QLED for cinema experience, Dolby Vision, Atmos setup guide.", date: "2026-02-28", author: "Hassan Jamil" },
  { slug: "complete-tv-buying-checklist-dubai", title: "Complete Used TV Buying Checklist for Dubai - Never Get Scammed", excerpt: "The ultimate checklist for buying a used TV in Dubai. 20-point inspection guide covering screen tests, port checks, and red flags.", date: "2026-02-25", author: "Hassan Jamil" },
  { slug: "best-streaming-apps-smart-tv-uae", title: "Best Streaming Apps for Smart TV in UAE 2025 - Complete Guide", excerpt: "Complete guide to the best streaming apps available on smart TVs in the UAE. Netflix, Disney+, Shahid, OSN+, and more.", date: "2026-02-22", author: "Hassan Jamil" },
  { slug: "tv-repair-vs-buy-used-dubai", title: "TV Repair vs Buy Used in Dubai - Which Saves More Money?", excerpt: "Should you repair your old TV or buy a used replacement in Dubai? Complete cost comparison and expert advice.", date: "2026-02-19", author: "Hassan Jamil" },
  { slug: "best-places-buy-used-electronics-dubai", title: "Best Places to Buy Used Electronics in Dubai - Local Area Guide 2025", excerpt: "Complete local guide to the best places and areas to buy used electronics in Dubai. From Al Fahidi to Deira.", date: "2026-02-16", author: "Hassan Jamil" },
  { slug: "how-to-connect-devices-smart-tv", title: "How to Connect All Devices to Your Smart TV - Complete Setup Guide", excerpt: "Step-by-step guide to connect gaming consoles, soundbars, laptops, phones, and streaming devices to your smart TV.", date: "2026-02-14", author: "Hassan Jamil" },
  { slug: "led-vs-oled-vs-qled-tv-guide", title: "LED vs OLED vs QLED TV - Complete Comparison Guide for Dubai Buyers", excerpt: "Comprehensive comparison of LED, OLED, and QLED TV technologies. Which is best for Dubai homes?", date: "2026-02-11", author: "Hassan Jamil" },
  { slug: "outdoor-tv-setup-guide-dubai", title: "Outdoor TV Setup Guide for Dubai - Balcony, Garden & Pool Area", excerpt: "Complete guide to setting up an outdoor TV in Dubai for balconies, gardens, and pool areas with weather protection tips.", date: "2026-02-07", author: "Hassan Jamil" },
  { slug: "used-tv-energy-saving-tips-dubai", title: "TV Energy Saving Tips for Dubai - Reduce Your DEWA Bill", excerpt: "Practical tips to reduce your TV's energy consumption and lower your DEWA electricity bill in Dubai.", date: "2026-02-04", author: "Hassan Jamil" },
  { slug: "complete-selling-guide-used-tv-dubai", title: "Complete Guide to Selling Your Used TV in Dubai 2025 - Get Maximum Cash", excerpt: "Step-by-step guide to selling your used TV in Dubai for maximum cash. Pricing tips, where to sell, and instant cash offers.", date: "2026-03-10", author: "Hassan Jamil" },
  { slug: "who-buys-gaming-tvs-dubai", title: "Who Buys Gaming TVs in Dubai - Sell Your Gaming TV for Top Cash", excerpt: "Find out who buys gaming TVs in Dubai and how to sell yours for the best price. LG OLED, Samsung QLED gaming TVs wanted.", date: "2026-03-09", author: "Hassan Jamil" },
  { slug: "best-tv-for-movie-lovers-dubai", title: "Best TV for Movie Lovers in Dubai - Buy Used Cinema-Quality TVs", excerpt: "Find the best used TVs for movie watching in Dubai. OLED vs QLED for cinema experience and home theater setup tips.", date: "2026-03-08", author: "Hassan Jamil" },
  { slug: "rent-tv-dubai-short-term-guide", title: "Rent a TV in Dubai - Short Term TV Rental and Used TV Alternative Guide", excerpt: "Complete guide to TV rental options in Dubai. Compare renting vs buying used TVs for short stays and events.", date: "2026-03-07", author: "Hassan Jamil" },
  { slug: "ultimate-used-tv-buying-guide-dubai", title: "Ultimate Used TV Buying Guide for Dubai 2025 - Expert Tips and Advice", excerpt: "The most comprehensive used TV buying guide for Dubai. Expert tips on brands, sizes, features, and pricing.", date: "2026-03-06", author: "Hassan Jamil" },
  { slug: "sell-old-tv-for-cash-dubai", title: "Sell Your Old TV for Cash in Dubai - Same Day Pickup and Payment", excerpt: "Sell your old TV for instant cash in Dubai. Same-day pickup and payment for all brands and conditions.", date: "2026-03-04", author: "Hassan Jamil" },
  { slug: "best-used-tv-kids-room-dubai", title: "Best Used TV for Kids Room in Dubai - Safe, Budget-Friendly Guide", excerpt: "Find the best used TV for your kids' room in Dubai. Safe sizes, parental controls, and budget options.", date: "2026-03-03", author: "Hassan Jamil" },
  { slug: "used-tv-for-bachelor-accommodation-dubai", title: "Used TVs for Bachelor Accommodation in Dubai - Affordable Entertainment Guide", excerpt: "Best used TVs for bachelor accommodation and shared flats in Dubai. Budget-friendly entertainment from AED 200.", date: "2026-03-01", author: "Hassan Jamil" },
  { slug: "how-to-spot-fake-tv-deals-dubai", title: "How to Spot Fake TV Deals in Dubai - Avoid Scams When Buying Used TVs", excerpt: "Protect yourself from fake TV deals and scams in Dubai. Learn the red flags and common scam tactics.", date: "2026-02-27", author: "Hassan Jamil" },
  { slug: "used-tv-for-sports-fans-dubai", title: "Best Used TV for Sports Fans in Dubai - Football, Cricket and F1 Guide", excerpt: "Find the best used TV for watching football, cricket, and F1 in Dubai. Motion handling and sports streaming setup.", date: "2026-02-26", author: "Hassan Jamil" },
  { slug: "used-tv-negotiation-tips-dubai", title: "How to Negotiate Used TV Prices in Dubai - Expert Bargaining Tips", excerpt: "Master the art of negotiating used TV prices in Dubai. Expert bargaining tips and fair price strategies.", date: "2026-02-24", author: "Hassan Jamil" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_URL}/blogs` },
  ],
};

export default function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blog - Used TV Tips & Guides | UsedTV Dubai</title>
        <meta name="description" content="Expert tips and guides on buying and selling used TVs in Dubai and UAE. Price guides, brand comparisons, and market analysis." />
        <link rel="canonical" href={`${SITE_URL}/blogs`} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageBreadcrumb items={[{ label: "Blogs" }]} />

      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog - Used TV Tips & Guides</h1>
          <p className="text-lg opacity-90">Expert advice on buying and selling used TVs in Dubai and UAE by <Link to="/author/hassan-jamil" className="underline hover:opacity-80">{CONTACT.owner}</Link>.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {blogs.map((blog) => (
              <Link key={blog.slug} to={`/blogs/${blog.slug}`} className="block bg-card rounded-xl border p-6 card-elevated group">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {blog.author}</span>
                </div>
                <h2 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">{blog.title}</h2>
                <p className="text-muted-foreground text-sm mb-3">{blog.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold">Read More <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
