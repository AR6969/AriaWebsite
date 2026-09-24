import Link from "next/link";
import { Breadcrumbs, CTA, ContactBand } from "@/components/ui";
import { pageMeta } from "@/lib/site";
export const metadata = pageMeta(
  "Personal Injury Attorney Serving San Francisco & the Bay Area",
  "InstaLaw Group represents injured people in San Francisco and the Bay Area: car accidents, slip and falls, medical malpractice, and wrongful death. Free consultation.",
  "/locations/san-francisco",
);
export default function SF() {
  return (
    <>
      <section className="wrap inner-hero">
        <Breadcrumbs
          items={[{ label: "San Francisco", href: "/locations/san-francisco" }]}
        />
        <p className="eyebrow">SERVING SAN FRANCISCO & THE BAY AREA</p>
        <h1>Personal Injury Attorney Serving San Francisco & the Bay Area</h1>
        <p className="lead">
          Representation for Bay Area residents injured in collisions, falls,
          and other accidents. Free consultation, and no attorney fees unless
          you recover compensation.
        </p>
        <CTA />
      </section>
      <section className="section wrap article-prose">
        <h2>Injury claims in San Francisco</h2>
        <p>
          Whether your inquiry concerns a collision, an unsafe property, or
          medical care, the useful starting point is the same: a clear account
          of what happened and how it affected you. Our San Francisco practice
          serves people seeking help understanding an injury claim and the
          insurance process.
        </p>
        <h2>What to bring to your consultation</h2>
        <p>
          For a collision, the street or intersection, incident report, and
          insurer correspondence can help frame the review. For a fall,
          information about the property and condition matters. For a medical
          inquiry, a treatment timeline and provider details are useful. You can
          contact us before collecting everything.
        </p>
        <p>
          Explore our <Link href="/car-accidents">car accident</Link>,{" "}
          <Link href="/slip-and-fall">slip and fall</Link>,{" "}
          <Link href="/medical-malpractice">medical malpractice</Link>,{" "}
          <Link href="/wrongful-death">wrongful death</Link>, and{" "}
          <Link href="/workplace-accidents">workplace accident</Link> services.
        </p>
        <h2>Schedule a free consultation</h2>
        <p>
          Call or email before planning a visit so the firm can confirm meeting
          arrangements. The initial consultation is free.{" "}
          <Link href="/contact">Contact InstaLaw Group</Link> to discuss your
          situation.
        </p>
        <h2>Your attorney</h2>
        <p>
          <Link href="/attorneys/aria-noosha">Aria Noosha</Link> is the founder
          of InstaLaw Group, a Harvard Law School graduate, and has been
          admitted to the California State Bar since 2021, bar number 339638.
          His practice also includes{" "}
          <Link href="/immigration">immigration matters</Link>.
        </p>
      </section>
      <ContactBand />
    </>
  );
}
