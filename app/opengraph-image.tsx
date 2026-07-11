import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0B",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#F97316",
              display: "flex",
            }}
          />
          <span style={{ color: "#F97316", fontSize: 24, fontWeight: 600, letterSpacing: 1 }}>
            {profile.status.toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h1 style={{ color: "#F5F5F5", fontSize: 76, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
            {profile.name}
          </h1>
          <p style={{ color: "#F97316", fontSize: 38, fontWeight: 600, margin: 0 }}>{profile.role}</p>
          <p
            style={{
              color: "#A3A3A3",
              fontSize: 26,
              margin: 0,
              maxWidth: 880,
              lineHeight: 1.5,
              display: "block",
              overflow: "hidden",
            }}
          >
            {profile.tagline.split(".")[0]}.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#737373", fontSize: 22 }}>
          <span>{profile.location}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
