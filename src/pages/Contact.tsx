import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CONTACT, SITE_URL } from "@/config/site";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact UsedTV Dubai - Get a Free Quote | Call {CONTACT.phoneDisplay}</title>
        <meta name="description" content={`Contact UsedTV Dubai for buying or selling used TVs. Call ${CONTACT.phoneDisplay}, email ${CONTACT.email}. Visit us at ${CONTACT.addressShort}. Free quotes.`} />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
      </Helmet>

      <PageBreadcrumb items={[{ label: "Contact" }]} />

      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">Get in touch for a free quote on buying or selling your used TV in Dubai.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-5">
                <a href={`tel:${CONTACT.phone}`} className="flex items-start gap-4 p-4 bg-card rounded-xl border card-elevated">
                  <Phone className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Phone / WhatsApp</p>
                    <p className="text-muted-foreground text-sm">{CONTACT.phoneDisplay}</p>
                  </div>
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-4 p-4 bg-card rounded-xl border card-elevated">
                  <Mail className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground text-sm">{CONTACT.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border card-elevated">
                  <MapPin className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground text-sm">{CONTACT.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border card-elevated">
                  <Clock className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-muted-foreground text-sm">{CONTACT.hours}</p>
                    <p className="text-muted-foreground text-sm">Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border bg-card text-foreground" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2.5 rounded-lg border bg-card text-foreground" placeholder="+971 ..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-2.5 rounded-lg border bg-card text-foreground" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border bg-card text-foreground resize-none" placeholder="Tell us about the TV you want to buy or sell..." />
                </div>
                <button type="submit" className="w-full py-3 rounded-lg hero-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
