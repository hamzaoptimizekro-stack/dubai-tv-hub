import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

const blogContent: Record<string, { title: string; date: string; content: string }> = {
  "best-used-tv-brands-dubai": {
    title: "Top 5 Best Used TV Brands to Buy in Dubai in 2025",
    date: "2025-12-10",
    content: `<h2>Introduction</h2><p>When shopping for a used TV in Dubai, the brand matters significantly in terms of longevity, picture quality, and resale value. In this guide, we break down the top 5 used TV brands that offer the best value in Dubai's second-hand market.</p><h2>1. Samsung</h2><p>Samsung remains the king of the used TV market in Dubai. Their QLED and Crystal UHD series hold their value well and offer excellent picture quality even after years of use. Popular models include the Q60, Q70, and Crystal UHD series.</p><h2>2. LG</h2><p>LG's OLED TVs are a favorite among buyers looking for premium picture quality at a fraction of the new price. Their WebOS platform is intuitive and receives regular updates.</p><h2>3. Sony</h2><p>Sony Bravia TVs are known for their superior color accuracy and processing. They're a premium choice in the used market, offering cinema-quality viewing.</p><h2>4. TCL</h2><p>TCL offers incredible value in the used TV market. Their 4K models are budget-friendly and deliver solid performance for everyday viewing.</p><h2>5. Hisense</h2><p>Hisense TVs have gained popularity for offering smart features and good picture quality at affordable prices, making them great second-hand picks.</p><h2>Conclusion</h2><p>Visit UsedTV Dubai at Al Naif Road, Deira to browse our collection of quality-tested TVs from all these brands. Contact us at +971 50 123 4567 for current availability.</p>`,
  },
  "how-to-sell-used-tv-dubai": {
    title: "How to Sell Your Used TV in Dubai — Complete Step-by-Step Guide",
    date: "2025-11-25",
    content: `<h2>Why Sell Your Used TV?</h2><p>Whether you're upgrading to a newer model, relocating, or simply decluttering, selling your used TV is a smart way to recover value from your investment.</p><h2>Step 1: Assess Your TV's Condition</h2><p>Check the screen for dead pixels, test all HDMI ports, verify Wi-Fi connectivity, and note any cosmetic damage. The better the condition, the higher the price.</p><h2>Step 2: Research the Market Price</h2><p>Compare prices on platforms like Dubizzle and Facebook Marketplace. Or simply call UsedTV Dubai for an instant, no-obligation quote.</p><h2>Step 3: Choose a Buyer</h2><p>You can sell privately, but dealing with a reputable business like UsedTV Dubai saves time and guarantees payment.</p><h2>Step 4: Complete the Sale</h2><p>With UsedTV Dubai, the process is simple — call us, get a quote, and we'll pick up the TV and pay you cash on the spot.</p>`,
  },
  "used-tv-price-guide-uae": {
    title: "Used TV Price Guide UAE 2025 — What's Your TV Worth?",
    date: "2025-11-08",
    content: `<h2>Understanding Used TV Prices in UAE</h2><p>The value of your used TV depends on brand, size, technology, model year, and condition. Here's a comprehensive breakdown.</p><h2>Price by Size</h2><p>32-inch TVs range from AED 200-500, 43-inch from AED 400-900, 55-inch from AED 600-1500, and 65-inch+ from AED 1000-5000.</p><h2>Price by Brand</h2><p>Samsung and LG command the highest resale values, followed by Sony. TCL and Hisense offer lower but still fair resale prices.</p><h2>Factors That Affect Price</h2><p>Screen condition, model year, smart TV features, original purchase price, and market demand all play a role.</p><h2>Get Your Free Valuation</h2><p>Contact UsedTV Dubai at +971 50 123 4567 for an instant, accurate valuation of your used TV.</p>`,
  },
  "tips-buying-second-hand-tv": {
    title: "7 Tips for Buying a Second-Hand TV in Dubai",
    date: "2025-10-20",
    content: `<h2>Tip 1: Buy From a Verified Dealer</h2><p>Always purchase from a licensed business to avoid scams and ensure quality. UsedTV Dubai is a fully licensed and verified dealer.</p><h2>Tip 2: Check the Screen</h2><p>Look for dead pixels, backlight bleeding, and color inconsistencies by displaying a solid white or black screen.</p><h2>Tip 3: Test All Ports</h2><p>Make sure all HDMI, USB, and audio ports work correctly.</p><h2>Tip 4: Verify Smart Features</h2><p>Connect to Wi-Fi and test apps like YouTube and Netflix.</p><h2>Tip 5: Check the Remote</h2><p>Ensure the remote control is original and functional.</p><h2>Tip 6: Ask About Warranty</h2><p>Reputable dealers like UsedTV Dubai offer limited warranties on select TVs.</p><h2>Tip 7: Compare Prices</h2><p>Research market prices before buying to ensure you're getting a fair deal.</p>`,
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? blogContent[slug] : null;

  if (!blog) {
    return (
      <section className="section-padding text-center">
        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
        <Link to="/blogs" className="text-primary font-semibold">← Back to Blogs</Link>
      </section>
    );
  }

  return (
    <>
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <Link to="/blogs" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100 mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{blog.title}</h1>
          <div className="flex items-center gap-4 text-sm opacity-80">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Hassan Jamil</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container container-narrow prose-seo" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </section>
    </>
  );
}
