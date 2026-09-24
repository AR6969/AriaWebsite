import Link from "next/link";
import { notFound } from "next/navigation";
import { practices } from "@/lib/practices";
import { pageMeta, site } from "@/lib/site";
import { CTA, Arrow, Breadcrumbs, ContactBand, FAQs } from "@/components/ui";
export function generateStaticParams() {
  return [
    ...practices.map((p) => ({ slug: p.slug })),
    { slug: "personal-injury" },
    { slug: "immigration" },
  ];
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "personal-injury")
    return pageMeta(
      "Personal Injury Lawyers | California & Washington",
      "Explore InstaLaw Group’s personal injury services, from car accidents to medical malpractice. Founder Aria Noosha serves California and Washington.",
      "/personal-injury",
    );
  if (slug === "immigration")
    return pageMeta(
      "Immigration Attorney | Visas, Family & Citizenship",
      "InstaLaw Group helps with family petitions, employment and student visas, citizenship, and humanitarian immigration. Discuss your options in a free consultation.",
      "/immigration",
    );
  const p = practices.find((p) => p.slug === slug);
  return p ? pageMeta(p.title, p.description, `/${slug}`) : {};
}
export default async function PracticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "personal-injury")
    return (
      <>
        <section className="inner-hero wrap">
          <Breadcrumbs
            items={[{ label: "Personal injury", href: "/personal-injury" }]}
          />
          <p className="eyebrow">PERSONAL INJURY · CALIFORNIA & WASHINGTON</p>
          <h1>Personal Injury Lawyer in California & Washington</h1>
          <p className="lead">
            InstaLaw Group represents people injured by someone else’s
            negligence. Free consultation, and no attorney fees unless you
            recover compensation.
          </p>
          <CTA />
        </section>
        <section className="wrap section overview-grid">
          {practices.map((p) => (
            <Link className="overview-item" href={`/${p.slug}`} key={p.slug}>
              <h2>
                {p.name} <Arrow />
              </h2>
              <p>{p.intro}</p>
              <span className="text-link">
                {p.name} lawyer <Arrow />
              </span>
            </Link>
          ))}
        </section>
        <section className="wrap article-prose section">
          <h2>What a free case review covers</h2>
          <p>
            An injury claim starts with the circumstances of the incident, the
            harm it caused, and the evidence available. We ask about the place
            and date, the people involved, treatment, and communications from
            insurers. We also discuss the effect on your work and daily life.
          </p>
          <p>
            Not every injury supports a legal claim. The initial consultation is
            a chance to explore those questions and decide whether further
            review makes sense. If we offer representation, the agreement will
            explain the work we are taking on and how fees and expenses are
            handled.
          </p>
          <h2>Led by attorney Aria Noosha</h2>
          <p>
            InstaLaw Group’s founder is a Harvard Law School graduate and former
            Orrick, Herrington & Sutcliffe attorney, admitted in California and
            Washington. <Link href="/attorneys/aria-noosha">Meet Aria</Link> or{" "}
            <Link href="/contact">contact the firm</Link> to discuss a specific
            situation. You can also learn more about our{" "}
            <Link href="/locations/san-francisco">
              San Francisco personal injury practice
            </Link>
            .
          </p>
        </section>
        <FAQs />
        <ContactBand />
      </>
    );
  if (slug === "immigration")
    return (
      <>
        <section className="inner-hero wrap">
          <Breadcrumbs
            items={[{ label: "Immigration", href: "/immigration" }]}
          />
          <p className="eyebrow">IMMIGRATION · INSTALAW GROUP</p>
          <h1>Immigration Attorney for Families, Workers & Students</h1>
          <p className="lead">
            Help with family petitions, work and student visas, citizenship, and
            humanitarian cases, from a Harvard Law–trained attorney.
          </p>
          <CTA label="Request an immigration consultation" />
        </section>
        <section className="wrap section immigration-grid">
          <div>
            <h2>Start with your goal</h2>
            <p className="large-copy">
              A useful conversation begins with what you hope to do, your
              current situation, and any notices or deadlines you have received.
            </p>
            <p>
              Aria Noosha’s practice includes immigration alongside personal
              injury. An initial review helps identify what further information
              is needed and whether the firm can assist.
            </p>
            <p>
              Consultation terms and any representation fees will be discussed
              for your immigration matter. Personal injury contingency terms do
              not automatically apply to immigration services.
            </p>
          </div>
          <div className="service-rows">
            {[
              [
                "Family petitions",
                "Discuss a family-based immigration goal and the relationships and records relevant to your inquiry.",
              ],
              [
                "Citizenship",
                "Review your interest in naturalization and the information needed to assess next steps.",
              ],
              [
                "Work visas",
                "Discuss employment-related visa questions and your proposed work in the United States.",
              ],
              [
                "Fiancé visas",
                "Talk through plans to join a fiancé in the U.S. and the questions your situation raises.",
              ],
              [
                "Student visas",
                "Explore an education-related visa inquiry and your proposed course of study.",
              ],
              [
                "U visas, T visas & VAWA",
                "Ask about humanitarian immigration pathways in a private consultation. Avoid sending sensitive details in an initial email.",
              ],
            ].map(([title, text]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section wrap article-prose">
          <h2>What to prepare for a consultation</h2>
          <p>
            Keep immigration notices and correspondence together, note any dates
            listed on them, and make a brief timeline of your immigration
            history. Let us know your main goal. You do not need to choose a
            visa category before asking for help.
          </p>
          <p>
            For the first email, send your name, a way to reach you, and a short
            description of the type of help you need. Save identity documents,
            immigration numbers, and detailed personal history for an
            appropriate follow-up.
          </p>
          <a className="text-link" href={`mailto:${site.email}`}>
            Email our team <Arrow />
          </a>
        </section>
        <ContactBand />
      </>
    );
  const p = practices.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <section className="inner-hero wrap">
        <Breadcrumbs
          items={[
            { label: "Personal injury", href: "/personal-injury" },
            { label: p.name, href: `/${p.slug}` },
          ]}
        />
        <p className="eyebrow">{p.name.toUpperCase()} · INSTALAW GROUP</p>
        <h1>{p.h1}</h1>
        <p className="lead">{p.intro}</p>
        <CTA />
      </section>
      <div className="wrap article-layout section">
        <article className="article-prose">
          {p.sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </section>
          ))}
          <section>
            <h2>{p.question}</h2>
            <p>{p.answer}</p>
          </section>
          <p className="legal-note">
            General information only. The facts and applicable law determine
            your options. A consultation does not establish representation.
          </p>
        </article>
        <aside className="article-aside">
          <p className="eyebrow">FREE CASE REVIEW</p>
          <h2>What to have ready</h2>
          <p>Helpful, but not required. Call even if you don’t have these.</p>
          <ul>
            {p.checklist.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <CTA />
          <a className="call-link" href={site.tel}>
            {site.phone} <Arrow />
          </a>
          <div className="aside-founder">
            <strong>Aria Noosha</strong>
            <p>
              Founder & Attorney
              <br />
              Harvard J.D.
              <br />
              Former Orrick attorney
              <br />
              California #339638
              <br />
              Washington #63731
            </p>
            <Link href="/attorneys/aria-noosha">
              Meet Aria <Arrow />
            </Link>
          </div>
        </aside>
      </div>
      <section className="wrap related-section">
        <p className="eyebrow">RELATED PRACTICE AREAS</p>
        {practices
          .filter((x) => x.slug !== p.slug)
          .map((x) => (
            <Link href={`/${x.slug}`} key={x.slug}>
              {x.name} <Arrow />
            </Link>
          ))}
      </section>
      <ContactBand />
    </>
  );
}
