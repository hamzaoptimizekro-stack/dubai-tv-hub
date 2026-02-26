import { Helmet } from "react-helmet-async";
import { CONTACT, SITE_URL } from "@/config/site";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | UsedTV Dubai - Service Agreement</title>
        <meta name="description" content="Terms and conditions for UsedTV Dubai services. Understand our policies on pricing, payment, product condition, and liability for used TV transactions." />
        <link rel="canonical" href={`${SITE_URL}/terms-and-conditions`} />
      </Helmet>

      <PageBreadcrumb items={[{ label: "Terms & Conditions" }]} />

      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms & Conditions</h1>
          <p className="text-lg opacity-90">Last updated: January 2026</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using the UsedTV Dubai website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.</p>

          <h2>Services</h2>
          <p>UsedTV Dubai provides a platform for buying and selling used televisions and related electronics in the UAE. All transactions are subject to availability, inspection, and mutual agreement on pricing.</p>

          <h2>Pricing & Payment</h2>
          <p>All prices are quoted in UAE Dirhams (AED) and are subject to change based on inspection and market conditions. Payment for purchased TVs is due at the time of pickup or delivery. Payment for sold TVs is made in cash upon collection.</p>

          <h2>Product Condition</h2>
          <p>While we thoroughly test all products, used electronics may show signs of wear. We provide honest descriptions of all items and any known defects will be disclosed prior to sale.</p>

          <h2>Limitation of Liability</h2>
          <p>UsedTV Dubai shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or products purchased through us.</p>

          <h2>Governing Law</h2>
          <p>These terms are governed by and construed in accordance with the laws of the United Arab Emirates and the Emirate of Dubai.</p>

          <h2>Contact</h2>
          <p>For questions about these Terms, contact us at {CONTACT.email} or visit our office at {CONTACT.address}.</p>
        </div>
      </section>
    </>
  );
}
