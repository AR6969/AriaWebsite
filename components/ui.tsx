import Image from "next/image";
import Link from "next/link";
import { site, faqs, offices } from "@/lib/site";
import { team } from "@/lib/team";
export function Arrow() {
  return <span aria-hidden="true">→</span>;
}
export function CTA({ label = "Get a Free Case Review" }: { label?: string }) {
  return (
    <Link href="/contact" className="button">
      {label}
      <Arrow />
    </Link>
  );
}
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link href="/">Home</Link>
        {items.map((x, i) => (
          <span key={x.href}>
            <span aria-hidden="true"> / </span>
            {i === items.length - 1 ? (
              <span aria-current="page">{x.label}</span>
            ) : (
              <Link href={x.href}>{x.label}</Link>
            )}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [{ label: "Home", href: "/" }, ...items].map(
            (x, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: x.label,
              item: new URL(x.href, site.url).href,
            }),
          ),
        }}
      />
    </>
  );
}
export function TeamGrid() {
  return (
    <ul className="team-grid">
      {team.map((m) => (
        <li key={m.slug}>
          <div className="team-photo">
            <Image
              src={m.photo}
              alt={m.alt}
              fill
              sizes="(max-width: 760px) 50vw, 25vw"
            />
          </div>
          <strong>{m.name}</strong>
          <span>{m.role}</span>
        </li>
      ))}
    </ul>
  );
}
export function FAQs() {
  return (
    <section className="section wrap faq-section">
      <div>
        <p className="eyebrow">FAQ</p>
        <h2>Personal injury questions</h2>
        <p>
          Don’t see your question? Call us and we’ll answer it in a free
          consultation.
        </p>
        <a className="text-link" href={site.tel}>
          Call {site.phone} <Arrow />
        </a>
      </div>
      <div className="faq-list">
        {faqs.map((x) => (
          <details key={x.q}>
            <summary>
              {x.q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{x.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((x) => ({
            "@type": "Question",
            name: x.q,
            acceptedAnswer: { "@type": "Answer", text: x.a },
          })),
        }}
      />
    </section>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="wrap">
        <div>
          <p className="eyebrow">FREE CONSULTATION</p>
          <h2>Injured? Talk to a lawyer today.</h2>
          <p>
            Free case review. No attorney fees unless you recover compensation.
          </p>
        </div>
        <div className="contact-band-actions">
          <CTA />
          <a className="big-phone" href={site.tel}>
            {site.phone}
          </a>
          <span>
            Or email <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <Link className="brand" href="/">
              <span className="brand-mark" aria-hidden="true">
                i.
              </span>
              <span>
                InstaLaw<span className="brand-group">G R O U P</span>
              </span>
            </Link>
            <p>
              Personal injury law firm in San Francisco, serving California and
              Washington.
            </p>
            <a href={site.tel}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <h3>How we help</h3>
            <Link href="/personal-injury">Personal injury</Link>
            <Link href="/car-accidents">Car accidents</Link>
            <Link href="/medical-malpractice">Medical malpractice</Link>
            <Link href="/wrongful-death">Wrongful death</Link>
            <Link href="/slip-and-fall">Slip & fall</Link>
            <Link href="/workplace-accidents">Workplace accidents</Link>
            <Link href="/immigration">Immigration</Link>
          </div>
          <div>
            <h3>The firm</h3>
            <Link href="/attorneys/aria-noosha">Aria Noosha</Link>
            <Link href="/our-team">Our team</Link>
            <Link href="/reviews">Client reviews</Link>
            <Link href="/locations/san-francisco">San Francisco</Link>
            <Link href="/contact">Contact the firm</Link>
            <Link href="/privacy">Privacy & website terms</Link>
          </div>
          <div>
            <h3>Licensed attorney</h3>
            <p>
              Aria Noosha, founder
              <br />
              California Bar #339638
              <br />
              Washington Bar #63731
            </p>
          </div>
        </div>
        <div className="wrap footer-offices">
          {offices.map((o) => (
            <address key={o.city}>
              <strong>
                {o.city}, {o.state === "CA" ? "California" : "Washington"}
              </strong>
              {o.street.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <span>
                {o.city}, {o.state} {o.zip}
              </span>
            </address>
          ))}
          <Link className="footer-other" href="/contact">
            Other locations <Arrow />
          </Link>
        </div>
        <div className="wrap footer-bottom">
          <p>
            © {new Date().getFullYear()} InstaLaw Group. Attorney advertising.
          </p>
          <p>
            This website provides general information, not legal advice.
            Contacting the firm does not create an attorney-client relationship.
            Past results do not guarantee future outcomes.
          </p>
        </div>
      </footer>
      <div className="mobile-contact">
        <a href={site.tel}>Call now · Free consult</a>
        <Link href="/contact">
          Free case review <Arrow />
        </Link>
      </div>
    </>
  );
}
