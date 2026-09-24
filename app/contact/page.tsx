import { Breadcrumbs } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { mainOffice, pageMeta, site } from "@/lib/site";
export const metadata = pageMeta(
  "Free Case Evaluation & Contact",
  "Call 888-383-8022 or email info@instalawgroup.com for a free initial consultation. Speak with InstaLaw Group about your personal injury or immigration matter.",
  "/contact",
);
export default function Contact() {
  return (
    <section className="wrap contact-page">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <div className="contact-grid">
        <div>
          <p className="eyebrow">CONTACT INSTALAW GROUP</p>
          <h1>Free Case Evaluation</h1>
          <p className="lead">Call {site.phone} to speak with our team now.</p>
          <p>
            Tell us what happened and we’ll let you know whether we can help.
            The consultation is free, and there are no attorney fees unless you
            recover compensation.
          </p>
          <div className="contact-method">
            <span>CALL THE FIRM</span>
            <a href={site.tel}>{site.phone} →</a>
          </div>
          <div className="contact-method">
            <span>EMAIL OUR TEAM</span>
            <a href={`mailto:${site.email}`}>{site.email} →</a>
          </div>
          <div className="contact-expect">
            <h2>What happens next</h2>
            <p>
              We review your inquiry, discuss the details in an initial
              consultation, and explain potential next steps. If we offer
              representation, we confirm the scope and fees in a written
              agreement.
            </p>
            <p>
              <strong>San Francisco office</strong>
              <br />
              {mainOffice.street.join(", ")}
              <br />
              {mainOffice.city}, {mainOffice.state} {mainOffice.zip}
            </p>
            <p>
              Offices in San Francisco, Sacramento, Los Angeles, and Seattle.
              Call ahead to schedule an in-person meeting.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
