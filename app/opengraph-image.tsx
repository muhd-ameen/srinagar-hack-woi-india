import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.fullName}, Srinagar, ${site.month}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Image() {
  const poppins = await readFile(join(process.cwd(), "assets/Poppins-Medium.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#FFFFFF",
          color: "#0B0B0B",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 4, color: "#393D7E" }}>
          WOI INDIA · THE GREAT INDIAN STARTUP MONTH
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 96, height: 10, background: "#F5B70A", marginBottom: 36 }} />
          <div style={{ fontSize: 148, lineHeight: 1, letterSpacing: -6 }}>Build for</div>
          <div style={{ fontSize: 148, lineHeight: 1, letterSpacing: -6, color: "#393D7E" }}>Kashmir.</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #E4E2DD",
            paddingTop: 28,
            fontSize: 26,
            color: "#66625B",
          }}
        >
          <span>{site.tagline}</span>
          <span>
            {site.city} · {site.month}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Poppins", data: poppins, style: "normal", weight: 500 }],
    },
  );
}
