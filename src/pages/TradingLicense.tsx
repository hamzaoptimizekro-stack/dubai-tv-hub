import { Shield, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CONTACT, SITE_URL } from "@/config/site";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function TradingLicense() {
  return (
    <>
      <Helmet>
        <title>Trading License | UsedTV Dubai - Verified Licensed Business</title>
        <meta name="description" content="UsedTV Dubai is a fully licensed trading business registered with Dubai DED. Verify our commercial trading license for used electronic equipment." />
        <link rel="canonical" href={`${SITE_URL}/trading-license`} />
      </Helmet>

      <PageBreadcrumb items={[{ label: "Trading License" }]} />

      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Trading License</h1>
          <p className="text-lg opacity-90">UsedTV Dubai is a fully licensed and registered business in Dubai, UAE.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2>Licensed Business</h2>
          <p>UsedTV Dubai operates under a valid trading license issued by the Department of Economic Development (DED), Government of Dubai. Our business is fully compliant with all UAE regulations governing the trade of used electronics and home appliances.</p>

          <div className="bg-secondary rounded-xl p-6 my-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="font-heading font-bold text-xl">License Information</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> <strong>Business Name:</strong> UsedTV Dubai</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> <strong>Owner:</strong> {CONTACT.owner}</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> <strong>License Type:</strong> Commercial Trading License</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> <strong>Issuing Authority:</strong> Department of Economic Development (DED), Dubai</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> <strong>Activities:</strong> Trading in Used Electronic Equipment & Home Appliances</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> <strong>Status:</strong> Active & Valid</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> <strong>Address:</strong> {CONTACT.address}</div>
            </div>
          </div>

          <h2>Compliance</h2>
          <p>We adhere to all UAE consumer protection laws and trading regulations. Our operations are transparent, and we maintain proper records of all transactions as required by law.</p>

          <h2>Verification</h2>
          <p>Customers can verify our trading license by visiting our showroom or contacting the DED directly. We believe in complete transparency and are happy to share our license details upon request.</p>
        </div>
      </section>
    </>
  );
}
