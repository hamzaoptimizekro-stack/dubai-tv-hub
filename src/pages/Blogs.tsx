import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User } from "lucide-react";

const blogs = [
  {
    slug: "best-used-tv-brands-dubai",
    title: "Top 5 Best Used TV Brands to Buy in Dubai in 2025",
    excerpt: "Looking for the best used TV brand in Dubai? Here's our expert guide to the top 5 brands that offer the best value for money in the second-hand market.",
    date: "2025-12-10",
    author: "Hassan Jamil",
  },
  {
    slug: "how-to-sell-used-tv-dubai",
    title: "How to Sell Your Used TV in Dubai — Complete Step-by-Step Guide",
    excerpt: "Want to sell your old TV in Dubai? Follow this complete guide to get the best price for your used television quickly and hassle-free.",
    date: "2025-11-25",
    author: "Hassan Jamil",
  },
  {
    slug: "used-tv-price-guide-uae",
    title: "Used TV Price Guide UAE 2025 — What's Your TV Worth?",
    excerpt: "Find out how much your used TV is worth in the UAE market. Our comprehensive price guide covers all brands, sizes, and conditions.",
    date: "2025-11-08",
    author: "Hassan Jamil",
  },
  {
    slug: "tips-buying-second-hand-tv",
    title: "7 Tips for Buying a Second-Hand TV in Dubai",
    excerpt: "Don't get scammed! Follow these 7 essential tips when buying a used television in Dubai to ensure you get the best deal.",
    date: "2025-10-20",
    author: "Hassan Jamil",
  },
];

export default function Blogs() {
  return (
    <>
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog — Used TV Tips & Guides</h1>
          <p className="text-lg opacity-90">Expert advice on buying and selling used TVs in Dubai and UAE.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                to={`/blogs/${blog.slug}`}
                className="block bg-card rounded-xl border p-6 card-elevated group"
              >
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {blog.author}</span>
                </div>
                <h2 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">{blog.title}</h2>
                <p className="text-muted-foreground text-sm mb-3">{blog.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
