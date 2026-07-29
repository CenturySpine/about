import { ImageResponse } from "next/og";
import { ogPhotoDataUri } from "@/lib/og-photo";

export const alt = "Bruno Chappe";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          background: "#fdfbf7",
          color: "#211d17",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ogPhotoDataUri}
          width={340}
          height={340}
          style={{ borderRadius: "50%", display: "flex" }}
        />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2, display: "flex" }}>
            Bruno Chappe
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 28,
              lineHeight: 1.35,
              color: "#6f6656",
              display: "flex",
            }}
          >
            Developer, passionate about hiking and mountains
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
