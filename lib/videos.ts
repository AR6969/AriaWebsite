export type VideoReview = {
  id: string;
  hash: string;
  seconds: number;
  width: number;
  height: number;
  uploaded: string;
  // Horizontal focus (percent) for the portrait card crop of wide videos.
  focus?: number;
};
export const videoReviews: VideoReview[] = [
  {
    id: "1217070628",
    hash: "73e6cf43ae",
    seconds: 60,
    width: 1280,
    height: 2276,
    uploaded: "2026-08-10",
  },
  {
    id: "1173387577",
    hash: "52630b5a13",
    seconds: 57,
    width: 1280,
    height: 2276,
    uploaded: "2026-03-13",
  },
  {
    id: "1196127279",
    hash: "20a99aed8b",
    seconds: 43,
    width: 1280,
    height: 2276,
    uploaded: "2026-05-27",
  },
  {
    id: "1173389089",
    hash: "8250b3f09a",
    seconds: 38,
    width: 1280,
    height: 2276,
    uploaded: "2026-03-13",
  },
  {
    id: "1225010492",
    hash: "31498a6171",
    seconds: 77,
    width: 1280,
    height: 1280,
    uploaded: "2026-09-08",
  },
  {
    id: "1225008961",
    hash: "eb0f27a393",
    seconds: 31,
    width: 1280,
    height: 1280,
    uploaded: "2026-09-08",
  },
  {
    id: "1173383417",
    hash: "6bb1c55b91",
    seconds: 127,
    width: 1280,
    height: 720,
    uploaded: "2026-03-13",
    focus: 68,
  },
  {
    id: "1171862621",
    hash: "4e991afabf",
    seconds: 30,
    width: 1280,
    height: 720,
    uploaded: "2026-03-09",
    focus: 0,
  },
  {
    id: "1171863501",
    hash: "2f7ab48b51",
    seconds: 32,
    width: 1280,
    height: 720,
    uploaded: "2026-03-09",
    focus: 42,
  },
];
export const embedUrl = (v: VideoReview) =>
  `https://player.vimeo.com/video/${v.id}?h=${v.hash}`;
export const formatDuration = (s: number) =>
  `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
export const testimonialDisclaimer =
  "Testimonials from actual clients. They do not constitute a guarantee, warranty, or prediction regarding the outcome of your legal matter. Results depend on the facts of each case.";
