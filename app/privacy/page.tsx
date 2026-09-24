import { Breadcrumbs } from "@/components/ui";
import { pageMeta, site } from "@/lib/site";
export const metadata = pageMeta(
  "Privacy & Website Terms",
  "How this website handles consultation inquiries, email preparation, and general legal information.",
  "/privacy",
);
export default function Privacy() {
  return (
    <section className="wrap inner-hero article-prose">
      <Breadcrumbs items={[{ label: "Privacy & terms", href: "/privacy" }]} />
      <p className="eyebrow">PRIVACY & WEBSITE TERMS</p>
      <h1>
        Your information.
        <br />
        Handled thoughtfully.
      </h1>
      <h2>Contacting the firm</h2>
      <p>
        The consultation form prepares an email on your device. The form itself
        does not submit your information to a website database. You choose
        whether to open your email application and send the message. Email sent
        to the firm is processed by the email services involved in delivery.
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
        addresses and request logs to deliver and protect the site. This
        implementation does not add advertising pixels or third-party analytics
        scripts. Links to external websites are subject to those websites’
        privacy practices.
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
