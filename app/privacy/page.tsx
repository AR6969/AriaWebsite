import { Breadcrumbs } from "@/components/ui";
import { pageMeta, site } from "@/lib/site";
export const metadata = pageMeta(
  "Privacy & Website Terms",
  "How the InstaLaw Group website handles case review requests, analytics, embedded videos, and general legal information.",
  "/privacy",
);
export default function Privacy() {
  return (
    <section className="wrap inner-hero article-prose">
      <Breadcrumbs items={[{ label: "Privacy & terms", href: "/privacy" }]} />
      <p className="eyebrow">PRIVACY & WEBSITE TERMS</p>
      <h1>Privacy Policy & Website Terms</h1>
      <h2>Case review requests</h2>
      <p>
        When you submit the case review form, the information you enter (name,
        phone number, case type, and any optional email or description) is sent
        to the firm by email through an email delivery provider. The website
        does not keep a database of submissions. If direct sending is
        unavailable, the form instead prepares an email on your device that you
        can choose to send.
      </p>
      <h2>Keep initial inquiries brief</h2>
      <p>
        Use your first inquiry to share contact details and the general nature
        of your matter. Please do not include medical records, government
        identification numbers, or other sensitive documents. Ask the firm how
        to provide documents appropriately.
      </p>
      <h2>Website operation</h2>
      <p>
        The hosting provider may process technical information such as IP
        addresses and request logs to deliver and protect the site. The site may
        use Google Analytics to understand how visitors use it, for example
        which pages lead to calls or case review requests. Google Analytics uses
        cookies; you can block them in your browser settings. Client video
        reviews are hosted by Vimeo and load only when you press play. Links to
        external websites are subject to those websites’ privacy practices.
      </p>
      <h2>No attorney-client relationship</h2>
      <p>
        This website is for general information and is attorney advertising. It
        is not legal advice. Browsing the site, calling, or sending an inquiry
        does not by itself create an attorney-client relationship.
        Representation requires an agreement with the firm. Do not rely on an
        unanswered inquiry to protect a deadline.
      </p>
      <h2>Fees and results</h2>
      <p>
        Any fee arrangement is governed by the written agreement for your
        matter. Client comments describe individual experiences; they do not
        promise a particular result.
      </p>
      <h2>Questions</h2>
      <p>
        Contact <a href={`mailto:${site.email}`}>{site.email}</a> with questions
        about information you have shared with the firm.
      </p>
    </section>
  );
}
