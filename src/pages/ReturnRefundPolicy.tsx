import { Helmet } from "react-helmet-async";
import { CONTACT, SITE_URL } from "@/config/site";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function ReturnRefundPolicy() {
  return (
    <>
      <Helmet>
        <title>Return & Refund Policy | UsedTV Dubai - 48 Hour Returns</title>
        <meta name="description" content="UsedTV Dubai return and refund policy. 48-hour return window, exchange options, and refund process for used TV purchases in Dubai." />
        <link rel="canonical" href={`${SITE_URL}/return-refund-policy`} />
      </Helmet>

      <PageBreadcrumb items={[{ label: "Return & Refund Policy" }]} />

      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Return & Refund Policy</h1>
          <p className="text-lg opacity-90">Last updated: January 2026</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2>Return Policy</h2>
          <p>At UsedTV Dubai, we want you to be completely satisfied with your purchase. If you are not happy with your used TV, you may return it within <strong>48 hours</strong> of purchase, subject to the following conditions:</p>
          <ul>
            <li>The TV must be in the same condition as when purchased.</li>
            <li>All original accessories (remote, cables, stand) must be returned.</li>
            <li>The return must be initiated by contacting us at {CONTACT.phoneDisplay}.</li>
          </ul>

          <h2>Refund Process</h2>
          <p>Once the returned TV is inspected and the return is approved, a full refund will be issued in cash within 24 hours. Refunds will be processed in the same form as the original payment.</p>

          <h2>Non-Returnable Items</h2>
          <ul>
            <li>TVs purchased "as-is" with disclosed defects</li>
            <li>TVs damaged after purchase by the buyer</li>
            <li>Items returned after the 48-hour window</li>
          </ul>

          <h2>Exchange Policy</h2>
          <p>We offer exchanges for TVs of equal or greater value within 48 hours of purchase. Any price difference must be paid at the time of exchange.</p>

          <h2>Contact Us</h2>
          <p>For return or refund inquiries, contact us at {CONTACT.email} or call {CONTACT.phoneDisplay}.</p>
        </div>
      </section>
    </>
  );
}
