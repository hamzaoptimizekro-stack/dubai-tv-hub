import { Phone, MapPin, Mail, Clock, Shield, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About UsedTV Dubai</h1>
          <p className="text-lg opacity-90">Dubai's most trusted name in used TV buying and selling — serving UAE for 7+ years.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2>Who We Are</h2>
          <p>
            UsedTV Dubai is the leading platform for buying and selling used televisions across the UAE. Founded by <strong>Hassan Jamil</strong>, a seasoned entrepreneur with <strong>7+ years of experience</strong> in the used home appliance industry and <strong>12 successful businesses</strong> operating in the same niche, we have served over 15,000 customers throughout Dubai, Sharjah, Ajman, and beyond.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to make quality electronics accessible and affordable to everyone in the UAE. We believe that a perfectly working television should not go to waste when someone else can benefit from it. By facilitating the buying and selling of used TVs, we contribute to a more sustainable and eco-friendly Dubai.
          </p>

          <h2>Our Location</h2>
          <p>
            Visit our showroom at <strong>Al Naif Road, Deira, Near California Hotel, Dubai</strong>. We're located in one of the most accessible commercial areas in Dubai, making it easy for customers from all parts of the city to reach us.
          </p>

          <div className="bg-secondary rounded-xl p-6 my-8">
            <h3 className="font-heading font-bold text-xl mb-4">Business Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-primary mt-0.5" />
                <div><strong>Owner:</strong> Hassan Jamil</div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-0.5" />
                <div><strong>Experience:</strong> 7+ Years, 12 Businesses</div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div><strong>Address:</strong> Al Naif Road, Deira, Near California Hotel, Dubai</div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-0.5" />
                <div><strong>Customers Served:</strong> 15,000+</div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div><strong>Phone:</strong> +971 50 123 4567</div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div><strong>Hours:</strong> Sat–Thu, 9AM–9PM</div>
              </div>
            </div>
          </div>

          <h2>Why Trust Us?</h2>
          <p>
            With a rating of 4.8/5 from over 1,250 verified reviews, we are among the highest-rated used electronics dealers in Dubai. Our transparent pricing, professional service, and commitment to quality have earned us the trust of the UAE community.
          </p>
        </div>
      </section>
    </>
  );
}
