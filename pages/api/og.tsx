import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "[{-_-}] ZZZzz zz z...";

  const font = await fetch(
    "https://utfs.io/f/LBZvH38TQ23f2dw6sn0iUJZCX0YV2PFoTMO7lIanb5vHKD8z",
  ).then((res) => res.arrayBuffer());

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
            <span>[enochlau.com]</span>
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
