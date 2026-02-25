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
  { slug: "sell-broken-tv-dubai", title: "How to Sell a Broken TV in Dubai - Get Cash for Damaged TVs", excerpt: "Yes, you can sell broken and damaged TVs in Dubai. Learn how to get the best price for non-working televisions.", date: "2026-01-28", author: "Hassan Jamil" },
  { slug: "used-oled-tv-dubai-guide", title: "Used OLED TV Buying Guide for Dubai - What to Know", excerpt: "Everything you need to know before buying a used OLED TV in Dubai, including price ranges and what to check.", date: "2026-01-20", author: "Hassan Jamil" },
  { slug: "used-tv-warranty-dubai", title: "Do Used TVs Come with Warranty in Dubai?", excerpt: "Learn about warranty options when buying used TVs in Dubai and how to protect your purchase.", date: "2026-01-15", author: "Hassan Jamil" },
  { slug: "best-tv-size-for-room", title: "Best TV Size for Your Room - Complete Sizing Guide", excerpt: "Not sure what TV size to buy? Our guide helps you choose the perfect screen size based on your room dimensions.", date: "2026-01-10", author: "Hassan Jamil" },
  { slug: "used-tv-market-trends-uae-2025", title: "Used TV Market Trends UAE 2025 - Industry Analysis", excerpt: "An in-depth analysis of the used TV market in the UAE including pricing trends, popular brands, and future outlook.", date: "2026-01-05", author: "Hassan Jamil" },
  { slug: "eco-friendly-electronics-dubai", title: "Eco-Friendly Electronics Shopping in Dubai - Buy Used, Save the Planet", excerpt: "How buying used electronics in Dubai helps reduce e-waste and supports sustainability in the UAE.", date: "2025-12-28", author: "Hassan Jamil" },
  { slug: "used-tv-vs-new-tv-dubai", title: "Used TV vs New TV - Which is Better Value in Dubai?", excerpt: "A honest comparison between buying new and used TVs in Dubai. Find out which option saves you more money.", date: "2025-12-20", author: "Hassan Jamil" },
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
