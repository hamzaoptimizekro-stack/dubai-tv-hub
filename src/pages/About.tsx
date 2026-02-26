import { Phone, MapPin, Mail, Clock, Shield, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT, SITE_URL } from "@/config/site";
import { Helmet } from "react-helmet-async";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About UsedTV Dubai - 7+ Years Trusted | {CONTACT.owner}</title>
        <meta name="description" content={`Learn about UsedTV Dubai, founded by ${CONTACT.owner}. 7+ years serving UAE with 12 businesses in used home appliances.`} />
        <link rel="canonical" href={`${SITE_URL}/about`} />
      </Helmet>

      <PageBreadcrumb items={[{ label: "About" }]} />

      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About UsedTV Dubai</h1>
          <p className="text-lg opacity-90">Dubai's most trusted name in used TV buying and selling, founded by <Link to="/author/hassan-jamil" className="underline hover:opacity-80">{CONTACT.owner}</Link>.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2 className="heading-highlight">Who We Are</h2>
          <p>
            UsedTV Dubai is the leading platform for buying and selling used televisions across the UAE. Founded by <Link to="/author/hassan-jamil" className="text-primary font-semibold hover:underline">{CONTACT.owner}</Link>, a seasoned entrepreneur with <strong>7+ years of experience</strong> in the used home appliance industry and <strong>12 successful businesses</strong> operating in the same niche, we have served over 15,000 customers throughout Dubai, Sharjah, Ajman, and beyond.
          </p>

          <h2 className="heading-highlight">Our Mission</h2>
          <p>
            Our mission is to make quality electronics accessible and affordable to everyone in the UAE. We believe that a perfectly working television should not go to waste when someone else can benefit from it.
          </p>

          <h2 className="heading-highlight">Our Location</h2>
          <p>
            Visit our showroom at <strong>{CONTACT.address}</strong>. We are located in one of the most accessible commercial areas in Dubai.
          </p>

          <div className="bg-secondary rounded-xl p-6 my-8">
            <h3 className="font-heading font-bold text-xl mb-4">Business Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3"><Building2 className="w-5 h-5 text-primary mt-0.5" /><div><strong>Owner:</strong> {CONTACT.owner}</div></div>
              <div className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary mt-0.5" /><div><strong>Experience:</strong> 7+ Years, 12 Businesses</div></div>
              <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary mt-0.5" /><div><strong>Address:</strong> {CONTACT.address}</div></div>
              <div className="flex items-start gap-3"><Users className="w-5 h-5 text-primary mt-0.5" /><div><strong>Customers Served:</strong> 15,000+</div></div>
              <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-primary mt-0.5" /><div><strong>Phone:</strong> {CONTACT.phoneDisplay}</div></div>
              <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-primary mt-0.5" /><div><strong>Hours:</strong> {CONTACT.hoursShort}</div></div>
            </div>
          </div>

          <h2 className="heading-highlight">Our Services</h2>
          <ul>
            <li><Link to="/service/used-tv-buyer-dubai" className="text-primary font-semibold hover:underline">Used TV Buyer in Dubai</Link> - Sell your TV for instant cash</li>
            <li><Link to="/service/used-tv-seller-dubai" className="text-primary font-semibold hover:underline">Used TV Seller in Dubai</Link> - Buy quality tested used TVs</li>
          </ul>

          <h2 className="heading-highlight">Why Trust Us?</h2>
          <p>
            With a rating of 4.9/5 from 208 verified reviews, we are among the highest-rated used electronics dealers in Dubai. Read our <Link to="/blogs" className="text-primary font-semibold hover:underline">blog</Link> for expert tips.
          </p>
        </div>
      </section>
    </>
  );
}
