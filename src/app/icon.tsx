import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#070707",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e8b923",
          fontWeight: 800,
          fontSize: 16,
          letterSpacing: -1,
        }}
      >
        G7
      </div>
    ),
    { ...size }
  );
}
