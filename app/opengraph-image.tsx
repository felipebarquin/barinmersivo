import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0F19",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.28em",
              opacity: 0.75,
            }}
          >
            IMMERSIVE SPORTS SL
          </div>

          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
            Infinite Stadiums
          </div>

          <div style={{ fontSize: 26, opacity: 0.85, maxWidth: 980, lineHeight: 1.4 }}>
            A scalable platform for premium immersive sports experiences — venues, StadiumXR modular systems, and franchising.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 18, opacity: 0.7 }}>
            Spain HQ · Global expansion platform
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.22)",
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 18,
              opacity: 0.9,
            }}
          >
            Partners & Sponsors
          </div>
        </div>
      </div>
    ),
    size
  );
}
