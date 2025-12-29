import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "[{-_-}] ZZZzz zz z...";

  const fontUrl = new URL("/Lilex-Italic.ttf", req.url);
  const font = await fetch(fontUrl).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#2463EB",
          position: "relative",
          overflow: "hidden",
          padding: 80,
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontWeight: 500,
              color: "#FBF7EC",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ opacity: 0.4 }}>[</span>
            <span>enochlau.com</span>
            <span style={{ opacity: 0.4 }}>]</span>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <div
              style={{
                display: "flex",
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 24,
                  opacity: 0.2,
                  background:
                    "repeating-linear-gradient(-45deg, #FBF7EC, #FBF7EC 7px, transparent 7px, transparent 14px)",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 48,
                  opacity: 0.4,
                  background:
                    "repeating-linear-gradient(-45deg, #FBF7EC, #FBF7EC 7px, transparent 7px, transparent 14px)",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 72,
                  opacity: 0.6,
                  background:
                    "repeating-linear-gradient(-45deg, #FBF7EC, #FBF7EC 7px, transparent 7px, transparent 14px)",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 96,
                  opacity: 0.8,
                  background:
                    "repeating-linear-gradient(-45deg, #FBF7EC, #FBF7EC 7px, transparent 7px, transparent 14px)",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 120,
                  background:
                    "repeating-linear-gradient(-45deg, #FBF7EC, #FBF7EC 7px, transparent 7px, transparent 14px)",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 72,
            lineHeight: 1.3,
            fontWeight: 400,
            color: "#FBF7EC",
            display: "flex",
          }}
        >
          <span>{title}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Sentient",
          data: font,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
