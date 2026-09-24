"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { embedUrl, formatDuration, type VideoReview } from "@/lib/videos";
export function VideoReviews({
  videos,
  columns = 4,
}: {
  videos: VideoReview[];
  columns?: 3 | 4;
}) {
  const [active, setActive] = useState<VideoReview | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (active) dialog.current?.showModal();
  }, [active]);
  return (
    <>
      <ul className={`video-grid video-grid-${columns}`}>
        {videos.map((v, i) => (
          <li key={v.id}>
            <button
              type="button"
              className="video-card"
              onClick={() => setActive(v)}
              aria-label={`Play client video review ${i + 1} (${formatDuration(v.seconds)})`}
            >
              <Image
                src={`/reviews/${v.id}.jpg`}
                alt=""
                fill
                sizes="(max-width: 760px) 50vw, 25vw"
                style={{ objectPosition: `${v.focus ?? 50}% 30%` }}
              />
              <span className="video-play" aria-hidden="true" />
              <span className="video-time">{formatDuration(v.seconds)}</span>
            </button>
          </li>
        ))}
      </ul>
      <dialog
        ref={dialog}
        className="video-dialog"
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
      >
        {active && (
          <div
            className="video-frame"
            style={{
              aspectRatio: `${active.width} / ${active.height}`,
              width: `min(92vw, calc(82vh * ${active.width / active.height}))`,
            }}
          >
            <iframe
              src={`${embedUrl(active)}&autoplay=1`}
              title="Client video review"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        <button
          type="button"
          className="video-close"
          onClick={() => dialog.current?.close()}
        >
          Close ✕
        </button>
      </dialog>
    </>
  );
}
