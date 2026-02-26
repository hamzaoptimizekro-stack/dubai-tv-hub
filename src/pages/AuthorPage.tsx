import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Shield, Building2, Award, Star, BookOpen } from "lucide-react";
import { CONTACT, SITE_URL } from "@/config/site";
import { blogs } from "@/pages/Blogs";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function AuthorPage() {
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: CONTACT.owner,
    url: `${SITE_URL}/author/hassan-jamil`,
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "UsedTV Dubai", url: SITE_URL },
    description: `${CONTACT.owner} is the founder of UsedTV Dubai and 12 other businesses in the used home appliance industry in Dubai, UAE. With over 7 years of experience, he has served 15,000+ customers across the UAE.`,
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    knowsAbout: ["Used TVs", "Second Hand Electronics", "Home Appliances", "E-commerce", "UAE Market"],
    sameAs: [],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: CONTACT.owner, item: `${SITE_URL}/author/hassan-jamil` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{CONTACT.owner} - Founder of UsedTV Dubai | Author & Expert</title>
        <meta name="description" content={`${CONTACT.owner} is the founder of UsedTV Dubai, running 12 businesses in used home appliances for 7+ years. Expert in used TV buying and selling in UAE.`} />
        <link rel="canonical" href={`${SITE_URL}/author/hassan-jamil`} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageBreadcrumb items={[{ label: CONTACT.owner }]} />

      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center text-4xl font-heading font-extrabold shrink-0">
              HJ
            </div>
            <div>
              <div className="verified-badge mb-3 bg-primary-foreground/15 text-primary-foreground">
                <Shield className="w-4 h-4" /> Verified Business Owner
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold">{CONTACT.owner}</h1>
              <p className="text-lg opacity-90 mt-1">Founder & CEO, UsedTV Dubai</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2 className="heading-highlight">About {CONTACT.owner}</h2>
          <p>
            <strong>{CONTACT.owner}</strong> is a seasoned entrepreneur and the founder of UsedTV Dubai, one of the most trusted names in the used television market across the UAE. With over <strong>7 years of experience</strong> in the used home appliance industry, Hassan has built and manages <strong>12 successful businesses</strong> all operating in the same niche of used home appliances in Dubai.
          </p>
          <p>
            His journey began in Deira, Dubai, where he recognized the growing demand for affordable, quality-tested used electronics among the diverse expatriate and resident community. Starting with a small operation, Hassan expanded his business network across all seven emirates, serving over <strong>15,000 satisfied customers</strong> to date.
          </p>

          <h2 className="heading-highlight">Expertise and Industry Knowledge</h2>
          <p>
            Hassan is widely recognized as an expert in the used electronics market in the UAE. His deep understanding of television technology, from LED and LCD to OLED and QLED, allows him to accurately assess the value and quality of every product that passes through his businesses. He personally oversees the quality inspection process to ensure that every TV sold meets the highest standards.
          </p>
          <p>
            His expertise covers all major brands including Samsung, LG, Sony, TCL, Hisense, Toshiba, Panasonic, and more. He understands the nuances of each brand's technology, pricing trends in the UAE market, and what customers look for when purchasing or selling used televisions.
          </p>

          <h2 className="heading-highlight">Business Philosophy</h2>
          <p>
            Hassan's business philosophy is built on three core principles: <strong>trust, fair pricing, and customer convenience</strong>. He believes that every customer deserves transparent pricing without hidden fees, and that the buying or selling process should be as simple and fast as possible. This is why UsedTV Dubai offers instant cash payments, free pickup, and same-day service across the UAE.
          </p>

          <h2 className="heading-highlight">Community Impact</h2>
          <p>
            Beyond business, Hassan is passionate about sustainability and reducing electronic waste in the UAE. By refurbishing and reselling used TVs, his businesses help divert thousands of televisions from landfills each year. He actively promotes the circular economy and eco-friendly shopping habits among UAE residents.
          </p>

          <div className="bg-secondary rounded-xl p-6 my-8">
            <h3 className="font-heading font-bold text-xl mb-4">Quick Facts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3"><Building2 className="w-5 h-5 text-primary mt-0.5" /><div><strong>Businesses:</strong> 12 Active in UAE</div></div>
              <div className="flex items-start gap-3"><Award className="w-5 h-5 text-primary mt-0.5" /><div><strong>Experience:</strong> 7+ Years</div></div>
              <div className="flex items-start gap-3"><Star className="w-5 h-5 text-primary mt-0.5" /><div><strong>Rating:</strong> 4.9/5 (208 Reviews)</div></div>
              <div className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary mt-0.5" /><div><strong>Customers:</strong> 15,000+ Served</div></div>
              <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary mt-0.5" /><div><strong>Location:</strong> {CONTACT.addressShort}</div></div>
              <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-primary mt-0.5" /><div><strong>Contact:</strong> {CONTACT.phoneDisplay}</div></div>
            </div>
          </div>

          <h2 className="heading-highlight">Articles by {CONTACT.owner}</h2>
          <p>Hassan regularly shares his expertise through informative articles and guides on the UsedTV Dubai blog. Here are his latest publications:</p>
          <ul>
            {blogs.map((blog) => (
              <li key={blog.slug}>
                <Link to={`/blogs/${blog.slug}`} className="text-primary font-semibold hover:underline">
                  {blog.title}
                </Link>
                <span className="text-muted-foreground text-sm ml-2">({blog.date})</span>
              </li>
            ))}
          </ul>

          <h2 className="heading-highlight">Services by {CONTACT.owner}</h2>
          <p>Explore the services offered by UsedTV Dubai:</p>
          <ul>
            <li><Link to="/service/used-tv-buyer-dubai" className="text-primary font-semibold hover:underline">Used TV Buyer in Dubai</Link></li>
            <li><Link to="/service/used-tv-seller-dubai" className="text-primary font-semibold hover:underline">Used TV Seller in Dubai</Link></li>
            <li><Link to="/about" className="text-primary font-semibold hover:underline">About UsedTV Dubai</Link></li>
            <li><Link to="/contact" className="text-primary font-semibold hover:underline">Contact Us</Link></li>
          </ul>

          <div className="bg-secondary rounded-xl p-6 my-8 text-center">
            <h3 className="font-heading font-bold text-xl mb-2">Get in Touch with {CONTACT.owner}</h3>
            <p className="text-muted-foreground mb-4">Have questions about buying or selling used TVs? Reach out directly.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg hero-gradient text-primary-foreground font-bold">
                <Phone className="w-5 h-5" /> {CONTACT.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary border font-bold hover:bg-muted transition-colors">
                <Mail className="w-5 h-5" /> Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
