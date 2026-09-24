import { ImageResponse } from "next/og";
export const alt = "InstaLaw Group — San Francisco Personal Injury Lawyers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0f2340",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        padding: "70px 80px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", fontSize: 36 }}>InstaLaw Group</div>
      <div
        style={{
          display: "flex",
          fontWeight: 800,
          fontSize: 80,
          lineHeight: 1.05,
        }}
      >
        San Francisco
        <br />
        Personal Injury Lawyers
      </div>
      <div style={{ display: "flex", fontSize: 25, color: "#fdba74" }}>
        Free consultation · California & Washington · 888-383-8022
      </div>
    </div>,
    size,
  );
}
