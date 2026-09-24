import Image from "next/image";
import Link from "next/link";
import { Arrow, Breadcrumbs, ContactBand, JsonLd } from "@/components/ui";
import { pageMeta, site } from "@/lib/site";
import { team } from "@/lib/team";
export const metadata = pageMeta(
  "Our Team",
  "Meet the InstaLaw Group team: founder and attorney Aria Noosha, paralegal Carlos Mauricio, and case managers Alejandra Naranjo and Beau Brines.",
  "/our-team",
);
export default function OurTeam() {
  return (
    <>
      <section className="wrap inner-hero">
        <Breadcrumbs items={[{ label: "Our team", href: "/our-team" }]} />
        <p className="eyebrow">OUR TEAM</p>
        <h1>Our Personal Injury Team</h1>
        <p className="lead">
          Attorney Aria Noosha, paralegal Carlos Mauricio, and case managers
          Alejandra Naranjo and Beau Brines handle every case from intake to
          resolution.
        </p>
      </section>
      <section className="wrap team-list">
        {team.map((m) => (
          <article key={m.slug} id={m.slug}>
            <div className="team-photo">
              <Image
                src={m.photo}
                alt={m.alt}
                fill
                sizes="(max-width: 760px) 100vw, 360px"
              />
            </div>
            <div>
              <p className="eyebrow">{m.role.toUpperCase()}</p>
              <h2>{m.name}</h2>
              {m.bio.map((para) => (
                <p key={para}>{para}</p>
              ))}
              {m.slug === "aria-noosha" && (
                <Link className="text-link" href="/attorneys/aria-noosha">
                  Read Aria’s full profile <Arrow />
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: team.map((m, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Person",
              name: m.name,
              jobTitle: m.role,
              image: `${site.url}${m.photo}`,
              worksFor: { "@id": `${site.url}/#firm` },
            },
          })),
        }}
      />
      <ContactBand />
    </>
  );
}
