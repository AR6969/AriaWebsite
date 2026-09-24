import Image from "next/image";
import Link from "next/link";
import { CTA, Arrow, FAQs, ContactBand, TeamGrid } from "@/components/ui";
import { practices } from "@/lib/practices";
import { site, pageMeta } from "@/lib/site";
import { VideoReviews } from "@/components/video-reviews";
import { testimonialDisclaimer, videoReviews } from "@/lib/videos";
import { getGoogleRating, ratingLabel } from "@/lib/google-rating";
export const metadata = pageMeta(
  "San Francisco Personal Injury Lawyer",
  "San Francisco personal injury lawyer Aria Noosha (Harvard J.D.) handles car accident, slip and fall, wrongful death, and workplace injury claims in California and Washington. Free consultation.",
  "/",
);
export default async function Home() {
  const google = await getGoogleRating();
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">PERSONAL INJURY LAW FIRM · SAN FRANCISCO</p>
          <h1>
            San Francisco
            <br />
            Personal Injury <em>Lawyers</em>
          </h1>
          <p className="hero-intro">
            Hurt in a car accident, a fall, or at work? We handle the insurance
            company and build your claim while you focus on recovering.
          </p>
          <ul className="hero-points">
            <li>Free consultation</li>
            <li>No attorney fees unless you recover compensation</li>
            <li>Led by Aria Noosha: Harvard J.D., former Orrick attorney</li>
            <li>Offices in San Francisco, Sacramento, Los Angeles & Seattle</li>
          </ul>
          <div className="hero-actions">
            <CTA />
            <a href={site.tel} className="call-link">
              Call {site.phone} <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <Image
            src="/team/aria-office.jpg"
            alt="San Francisco personal injury lawyer Aria Noosha"
            fill
            loading="eager"
            sizes="(max-width: 760px) 100vw, 48vw"
          />
          <div className="portrait-caption">
            <strong>Aria Noosha</strong>
            <p>Founder & Attorney · Harvard J.D.</p>
          </div>
        </div>
      </section>
      <div className="credentials">
        <div className="wrap">
          <Link href="/reviews">{ratingLabel(google)}</Link>
          <span>Harvard J.D.</span>
          <span>Former Big Law attorney at Orrick</span>
          <span>4 offices · Barred in CA & WA</span>
        </div>
      </div>
      <section className="section wrap practice-section">
        <div className="section-intro">
          <p className="eyebrow">PRACTICE AREAS</p>
          <h2>Personal injury cases we handle</h2>
          <p>
            If someone else’s carelessness caused your injury, you may be
            entitled to compensation for medical bills, lost income, and pain
            and suffering. We review your case for free and tell you where you
            stand.
          </p>
          <Link className="text-link" href="/personal-injury">
            All personal injury services <Arrow />
          </Link>
        </div>
        <div className="practice-list">
          {practices.map((p) => (
            <Link href={`/${p.slug}`} key={p.slug}>
              <span>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
              </span>
              <Arrow />
            </Link>
          ))}
        </div>
      </section>
      <section className="founder-section" id="approach">
        <div className="wrap founder-grid">
          <div className="founder-photo">
            <Image
              src="/team/aria-desk.jpg"
              alt="Attorney Aria Noosha, founder of InstaLaw Group"
              fill
              sizes="(max-width: 760px) 100vw, 40vw"
            />
          </div>
          <div className="founder-copy">
            <p className="eyebrow">YOUR ATTORNEY</p>
            <h2>Aria Noosha, Founder</h2>
            <p className="large-copy">
              Harvard Law School, J.D. 2021. Former attorney at Orrick,
              Herrington & Sutcliffe, a global Big Law firm.
            </p>
            <p>
              After more than three years at Orrick in San Francisco, Aria
              founded InstaLaw Group to bring Big Law standards of preparation
              to injured people, with direct access to their attorney and a
              responsive case team. His practice covers car accidents, medical
              malpractice, wrongful death, premises liability, and workplace
              injuries, along with immigration.
            </p>
            <div className="principles">
              <div>
                <p>
                  <strong>We deal with the insurance company.</strong>Adjusters
                  work to pay as little as possible. We handle the calls, the
                  paperwork, and the negotiation.
                </p>
              </div>
              <div>
                <p>
                  <strong>You get regular updates.</strong>Your case manager
                  keeps you informed at every stage and answers your questions
                  quickly.
                </p>
              </div>
              <div>
                <p>
                  <strong>You pay nothing up front.</strong>Injury cases are
                  handled on contingency. Attorney fees come only from a
                  recovery.
                </p>
              </div>
            </div>
            <Link className="text-link" href="/attorneys/aria-noosha">
              Aria’s full profile <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="section wrap team-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR TEAM</p>
            <h2>Your legal team</h2>
          </div>
          <Link className="text-link" href="/our-team">
            Meet the team <Arrow />
          </Link>
        </div>
        <TeamGrid />
      </section>
      <section className="section wrap review-section">
        <div>
          <p className="eyebrow">CLIENT REVIEWS</p>
          <h2>Rated {google.rating.toFixed(1)} on Google</h2>
          <p className="review-source">
            Plus {videoReviews.length} client video reviews.{" "}
            <Link href="/reviews">See all client reviews</Link>
          </p>
        </div>
        <figure>
          <blockquote>
            “Aria and the team were super helpful throughout the process after
            my accident. It was a total whirlwind and they kept in touch with me
            about what was going on. It relieved a lot of stress and allowed me
            to focus on my recovery.”
          </blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">
              CL
            </span>
            <span>
              <strong>Cara Lenoir</strong>
              <small>Google review</small>
            </span>
          </figcaption>
        </figure>
      </section>
      <section className="wrap video-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">VIDEO REVIEWS</p>
            <h2>Hear from our clients</h2>
          </div>
          <Link className="text-link" href="/reviews">
            Watch all {videoReviews.length} client reviews <Arrow />
          </Link>
        </div>
        <VideoReviews videos={videoReviews.slice(0, 4)} />
        <p className="fine-print">{testimonialDisclaimer}</p>
      </section>
      <section className="process-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW IT WORKS</p>
              <h2>Getting started is free</h2>
            </div>
            <CTA />
          </div>
          <div className="process-grid">
            <div>
              <span>STEP 1</span>
              <h3>Contact us</h3>
              <p>
                Call or send a short description of what happened. You don’t
                need every document to start.
              </p>
            </div>
            <div>
              <span>STEP 2</span>
              <h3>Free case review</h3>
              <p>
                We go over the facts, your injuries, and the insurance coverage,
                then tell you whether we can help.
              </p>
            </div>
            <div>
              <span>STEP 3</span>
              <h3>We build your claim</h3>
              <p>
                If we take your case, we gather the evidence, handle the
                insurers, and pursue full compensation. Fees and scope are set
                out in writing first.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section wrap service-section">
        <div>
          <p className="eyebrow">SERVICE AREAS</p>
          <h2>Serving California and Washington</h2>
        </div>
        <div>
          <p className="large-copy">
            Based in San Francisco, representing injured clients throughout
            California and Washington.
          </p>
          <p>
            Call or email to schedule a free consultation about your case,
            wherever you are in either state.
          </p>
          <Link className="text-link" href="/locations/san-francisco">
            San Francisco personal injury lawyer <Arrow />
          </Link>
          <div className="location-names">
            <span>San Francisco</span>
            <span>Sacramento</span>
            <span>Los Angeles</span>
            <span>Seattle</span>
          </div>
        </div>
      </section>
      <FAQs />
      <section className="immigration-note wrap">
        <div>
          <p className="eyebrow">ALSO AT INSTALAW</p>
          <h2>Immigration services</h2>
          <p>
            Family petitions, work and student visas, citizenship, and
            humanitarian cases.
          </p>
        </div>
        <Link className="text-link" href="/immigration">
          Immigration services <Arrow />
        </Link>
      </section>
      <ContactBand />
    </>
  );
}
