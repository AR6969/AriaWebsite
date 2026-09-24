import { Breadcrumbs, CTA, ContactBand, JsonLd } from "@/components/ui";
import { VideoReviews } from "@/components/video-reviews";
import { pageMeta, site } from "@/lib/site";
import { getGoogleRating, ratingLabel } from "@/lib/google-rating";
import { embedUrl, testimonialDisclaimer, videoReviews } from "@/lib/videos";
export const metadata = pageMeta(
  "Client Reviews",
  "Watch video reviews from InstaLaw Group clients and read what they say on Google, where the firm is rated 5.0. Free consultation: 888-383-8022.",
  "/reviews",
);
export default async function Reviews() {
  const google = await getGoogleRating();
  return (
    <>
      <section className="wrap inner-hero">
        <Breadcrumbs items={[{ label: "Reviews", href: "/reviews" }]} />
        <p className="eyebrow">CLIENT REVIEWS</p>
        <h1>InstaLaw Group Client Reviews</h1>
        <p className="lead">
          Hear directly from clients about working with Aria Noosha and the
          InstaLaw team. Rated {google.rating.toFixed(1)} on Google.
        </p>
        <CTA />
      </section>
      <section className="wrap section reviews-page">
        <h2>Client video reviews</h2>
        <VideoReviews videos={videoReviews} columns={3} />
        <p className="fine-print">{testimonialDisclaimer}</p>
      </section>
      <section className="section wrap review-section">
        <div>
          <p className="eyebrow">GOOGLE REVIEWS</p>
          <h2>Rated {google.rating.toFixed(1)} on Google</h2>
          <p className="review-source">
            {google.url ? (
              <a href={google.url} target="_blank" rel="noreferrer">
                {ratingLabel(google)} ↗
              </a>
            ) : (
              ratingLabel(google)
            )}
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": videoReviews.map((v, i) => ({
            "@type": "VideoObject",
            name: `InstaLaw Group client review ${i + 1}`,
            description: `A client of InstaLaw Group describes working with attorney Aria Noosha and the firm's personal injury team.`,
            thumbnailUrl: `${site.url}/reviews/${v.id}.jpg`,
            uploadDate: v.uploaded,
            duration: `PT${Math.floor(v.seconds / 60)}M${v.seconds % 60}S`,
            embedUrl: embedUrl(v),
          })),
        }}
      />
      <ContactBand />
    </>
  );
}
