import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, CTA, ContactBand, JsonLd } from "@/components/ui";
import { pageMeta, site } from "@/lib/site";
export const metadata = pageMeta(
  "Aria Noosha | Founder & Attorney",
  "Meet Aria Noosha, founder of InstaLaw Group: Harvard Law School J.D., former Orrick, Herrington & Sutcliffe attorney. Personal injury and immigration representation. Admitted in California since 2021 and Washington since 2025.",
  "/attorneys/aria-noosha",
);
export default function Aria() {
  return (
    <>
      <section className="wrap inner-hero">
        <Breadcrumbs
          items={[{ label: "Aria Noosha", href: "/attorneys/aria-noosha" }]}
        />
        <div className="bio-grid">
          <div>
            <p className="eyebrow">FOUNDER & ATTORNEY</p>
            <h1>Aria Noosha</h1>
            <p className="lead">
              Personal injury and immigration attorney. Harvard Law School J.D.
              Former Big Law attorney at Orrick.
            </p>
            <p>
              Aria earned his J.D. from Harvard Law School in 2021 and practiced
              at Orrick, Herrington & Sutcliffe LLP in San Francisco until 2023.
              He founded InstaLaw Group to help people navigate personal injury
              and immigration matters with clear communication and personal
              attention.
            </p>
            <p>
              His injury practice includes car accidents, medical malpractice,
              wrongful death, slip and fall, and workplace accidents. He also
              assists with family petitions, visas, citizenship, and
              humanitarian immigration inquiries.
            </p>
            <CTA />
          </div>
          <div className="bio-photo">
            <Image
              src="/team/aria-office.jpg"
              alt="Portrait of Aria Noosha, founder and attorney at InstaLaw Group"
              fill
              loading="eager"
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>
      <section className="section wrap bio-details">
        <div>
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Big Law training. Individual clients.</h2>
        </div>
        <div>
          <div className="admission">
            <h3>Orrick, Herrington & Sutcliffe LLP</h3>
            <p>
              Attorney, San Francisco · 2020–2023
              <br />
              Joined the global firm as a summer associate in 2020 and practiced
              there for more than three years.
            </p>
          </div>
          <div className="admission">
            <h3>U.S. Department of Justice</h3>
            <p>
              Legal Associate & Innovation Intern, Washington, D.C. · 2019
              <br />
              Worked with the Senior Counsel for Legal Innovation on an
              operational project with division management and staff attorneys.
            </p>
          </div>
          <div className="admission">
            <h3>Harvard Law Entrepreneurship Project</h3>
            <p>
              Director of Outreach & Communications, Project Director · 2018
              <br />
              Advised early-stage companies on corporate structuring.
            </p>
          </div>
        </div>
      </section>
      <section className="section wrap bio-details">
        <div>
          <p className="eyebrow">EDUCATION & ADMISSIONS</p>
          <h2>
            Harvard Law.
            <br />
            California.
            <br />
            Washington.
          </h2>
        </div>
        <div>
          <div className="admission">
            <h3>Harvard Law School</h3>
            <p>
              Juris Doctor (J.D.), 2021
              <br />
              Harvard Law Entrepreneurship Project, La Alianza, Middle Eastern
              Law Students Association
            </p>
          </div>
          <div className="admission">
            <h3>State Bar of California</h3>
            <p>
              Bar number 339638
              <br />
              Admitted November 18, 2021
            </p>
            <a
              className="text-link"
              href="https://apps.calbar.ca.gov/attorney/Licensee/Detail/339638"
              target="_blank"
              rel="noreferrer"
            >
              View California Bar profile ↗
            </a>
          </div>
          <div className="admission">
            <h3>Washington State Bar Association</h3>
            <p>
              Bar number 63731
              <br />
              Admitted 2025
            </p>
            <a
              className="text-link"
              href="https://www.mywsba.org/PersonifyEbusiness/LegalDirectory.aspx"
              target="_blank"
              rel="noreferrer"
            >
              Washington legal directory ↗
            </a>
          </div>
        </div>
      </section>
      <section className="wrap section article-prose">
        <h2>How Aria works with clients</h2>
        <p>
          Legal questions rarely arrive on their own. An injury can bring
          medical bills, interrupted work, and unfamiliar insurance demands. An
          immigration matter can affect a family’s plans, education, or career.
          Aria’s work begins with understanding those practical concerns.
        </p>
        <p>
          In an initial consultation, the firm discusses the circumstances,
          available information, and potential next steps. If representation is
          offered, the scope of work and terms are explained before moving
          forward.
        </p>
        <p>
          Explore the firm’s{" "}
          <Link href="/personal-injury">personal injury practice</Link> or{" "}
          <Link href="/immigration">immigration services</Link>, or contact us
          to start with your own situation.
        </p>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${site.url}/attorneys/aria-noosha#person`,
          name: "Aria Noosha",
          jobTitle: "Founder and Attorney",
          url: `${site.url}/attorneys/aria-noosha`,
          image: `${site.url}/team/aria-office.jpg`,
          worksFor: { "@id": `${site.url}/#firm` },
          description:
            "Founder of InstaLaw Group. J.D., Harvard Law School (2021). Former attorney at Orrick, Herrington & Sutcliffe LLP (2020–2023).",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Harvard Law School",
          },
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "degree",
              name: "Juris Doctor, Harvard Law School",
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "California State Bar admission #339638",
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "Washington State Bar admission #63731",
            },
          ],
        }}
      />
      <ContactBand />
    </>
  );
}
