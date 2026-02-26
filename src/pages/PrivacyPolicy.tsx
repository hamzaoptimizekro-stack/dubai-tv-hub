import { Helmet } from "react-helmet-async";
import { CONTACT, SITE_URL } from "@/config/site";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | UsedTV Dubai - Your Data Protection</title>
        <meta name="description" content="Read UsedTV Dubai's privacy policy. Learn how we collect, use, and protect your personal information when using our used TV buying and selling services." />
        <link rel="canonical" href={`${SITE_URL}/privacy-policy`} />
      </Helmet>

      <PageBreadcrumb items={[{ label: "Privacy Policy" }]} />

      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">Last updated: January 2026</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container container-narrow prose-seo">
          <h2>Introduction</h2>
          <p>UsedTV Dubai ("we", "us", or "our") operates the usedtvdubai.ae website. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our service.</p>

          <h2>Information We Collect</h2>
          <p>We collect information you provide directly, including your name, phone number, email address, and location when you contact us or use our services. We may also collect information about the electronics you wish to buy or sell.</p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To process transactions and send related information</li>
            <li>To send promotional communications (with your consent)</li>
          </ul>

          <h2>Data Security</h2>
          <p>The security of your personal information is important to us. We implement appropriate security measures to protect your data against unauthorized access, alteration, or destruction.</p>

          <h2>Third-Party Services</h2>
          <p>We may employ third-party companies and individuals to facilitate our service. These third parties have access to your personal information only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at {CONTACT.email} or visit us at {CONTACT.address}.</p>
        </div>
      </section>
    </>
  );
}
