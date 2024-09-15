import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  const title = 'Vercel Edge Network';
  const font = await fetch('https://github.com/orioncactus/pretendard/raw/main/packages/pretendard-std/dist/public/static/PretendardStd-Light.otf').then((res) => res.arrayBuffer());
  const image = new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          backgroundImage: 'linear-gradient(45deg, lightgray 0%, #E3E3E3 100%)',
          backgroundSize: '150px 150px',
        }}
      >
        <svg width="1200" height="150" viewBox="0 0 1200 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="svgTitle">
          <mask id="mask0_37_28" maskUnits="userSpaceOnUse" x="0" y="0" width="1200" height="150">
            <rect width="1200" height="150" fill="#CCCCCC" style={{ fill: "#CCCCCC", fillOpacity: 1 }} />
          </mask>
          <g mask="url(#mask0_37_28)">
            <rect width="1200" height="150" fill="#CCCCCC" style={{ fill: "#CCCCCC", fillOpacity: 1 }} />
            <circle cx="1232" cy="75" r="166.5" stroke="black" style={{ stroke: "black", strokeOpacity: 1 }} />
            <circle cx="1000.5" cy="75.5" r="123.5" stroke="black" style={{ stroke: "black", strokeOpacity: 1 }} strokeWidth="4" />
            <circle cx="875.5" cy="75.5" r="125" stroke="black" style={{ stroke: "black", strokeOpacity: 1 }} strokeDasharray="8 8" />
            PATH HERE 
            <line x1="654" y1="74.5" x2="1171" y2="74.5" stroke="black" style={{ stroke: "black", strokeOpacity: 1 }} />
            <circle cx="238" cy="-254" r="403.5" stroke="black" style={{ stroke: "black", strokeOpacity: 1 }} strokeDasharray="12 12" />
            <line x1="653.646" y1="74.6464" x2="910.646" y2="-182.354" stroke="black" style={{ stroke: "black", strokeOpacity: 1 }} />
            <line x1="585.646" y1="331.646" x2="842.646" y2="74.6465" stroke="black" style={{ stroke: "black", strokeOpacity: 1 }} />
          </g>
        </svg>
        <div
          style={{
            padding: 60,
            display: 'flex',
            fontSize: 60,
            fontStyle: 'normal',
            color: 'black',
          }}
        >
          <span>{title}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'Overused Grotesk',
          data: font,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
  return image;
}
