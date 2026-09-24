export type GoogleRating = {
  rating: number;
  count: number;
  url?: string;
};
// Last known values from the Google Business Profile (Sept 23, 2026).
const fallback: GoogleRating = { rating: 5, count: 6 };
// Hide the review count until it is large enough to help, not hurt.
export const SHOW_COUNT_FROM = 25;
// Live rating from the Google Places API, refreshed daily. Set
// GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID to enable; otherwise the
// fallback above is used.
export async function getGoogleRating(): Promise<GoogleRating> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const place = process.env.GOOGLE_PLACE_ID;
  if (!key || !place) return fallback;
  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${place}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri",
        },
        next: { revalidate: 86400 },
      },
    );
    if (!res.ok) return fallback;
    const d = await res.json();
    if (typeof d.rating !== "number") return fallback;
    return {
      rating: d.rating,
      count: d.userRatingCount ?? fallback.count,
      url: d.googleMapsUri,
    };
  } catch {
    return fallback;
  }
}
export function ratingLabel(r: GoogleRating) {
  const stars = `${r.rating.toFixed(1)} ★ on Google`;
  return r.count >= SHOW_COUNT_FROM ? `${stars} · ${r.count} reviews` : stars;
}
