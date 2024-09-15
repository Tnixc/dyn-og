import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const config = {
    runtime: 'edge',
}

export default async function handler(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || 'Vercel Edge Network'

    const font = await fetch('https://github.com/orioncactus/pretendard/raw/main/packages/pretendard-std/dist/public/static/PretendardStd-Light.otf').then((res) => res.arrayBuffer())

    return new ImageResponse(
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
                        <path d="M72.768 99.88C71.296 99.88 70.16 99.48 69.36 98.68C68.592 97.88 68.208 96.744 68.208 95.272V56.68C68.208 55.208 68.592 54.072 69.36 53.272C70.16 52.472 71.296 52.072 72.768 52.072H80.4V55.624H73.152C72.384 55.624 72 56.024 72 56.824V95.08C72 95.88 72.384 96.28 73.152 96.28H80.4V99.88H72.768ZM105.677 91C103.501 91 101.789 90.472 100.541 89.416C99.2933 88.36 98.6693 86.456 98.6693 83.704V70.648H92.6213V67.192H96.2213C97.8533 67.192 98.7973 66.392 99.0533 64.792L99.7253 61.096H102.701V67.192H112.205V70.648H102.701V83.704C102.701 85.048 103.005 85.992 103.613 86.536C104.253 87.08 105.341 87.352 106.877 87.352H112.205V91H105.677ZM121.787 91V67.192H125.147L125.579 70.792H125.819C126.459 69.64 127.467 68.664 128.843 67.864C130.219 67.032 131.803 66.616 133.595 66.616C136.507 66.616 138.683 67.48 140.123 69.208C141.595 70.936 142.331 73.432 142.331 76.696V91H138.299V77.176C138.299 75.064 137.835 73.416 136.907 72.232C135.979 71.016 134.539 70.408 132.587 70.408C130.699 70.408 129.099 71.064 127.787 72.376C126.475 73.656 125.819 75.512 125.819 77.944V91H121.787ZM160.456 62.968C159.496 62.968 158.696 62.648 158.056 62.008C157.416 61.368 157.096 60.6 157.096 59.704C157.096 58.776 157.416 58.008 158.056 57.4C158.696 56.76 159.496 56.44 160.456 56.44C161.384 56.44 162.168 56.76 162.808 57.4C163.48 58.008 163.816 58.776 163.816 59.704C163.816 60.6 163.48 61.368 162.808 62.008C162.168 62.648 161.384 62.968 160.456 62.968ZM151.144 91V87.544H158.728V71.848C158.728 71.048 158.328 70.648 157.528 70.648H151.96V67.192H158.488C161.336 67.192 162.76 68.616 162.76 71.464V87.544H170.344V91H151.144ZM178.629 91L186.741 79.096L178.437 67.192H182.901L189.525 76.792L196.149 67.192H200.613L192.309 79.096L200.421 91H195.957L189.525 81.352L183.045 91H178.629ZM218.69 91.576C216.546 91.576 214.626 91.08 212.93 90.088C211.266 89.096 209.938 87.672 208.946 85.816C207.954 83.928 207.458 81.688 207.458 79.096C207.458 76.504 207.954 74.28 208.946 72.424C209.938 70.536 211.282 69.096 212.978 68.104C214.706 67.112 216.61 66.616 218.69 66.616C221.634 66.616 223.986 67.352 225.746 68.824C227.506 70.296 228.626 72.264 229.106 74.728H224.978C224.594 73.416 223.858 72.376 222.77 71.608C221.682 70.808 220.306 70.408 218.642 70.408C217.426 70.408 216.274 70.728 215.186 71.368C214.098 72.008 213.218 72.968 212.546 74.248C211.874 75.528 211.538 77.144 211.538 79.096C211.538 81.048 211.874 82.68 212.546 83.992C213.218 85.272 214.098 86.232 215.186 86.872C216.274 87.512 217.426 87.832 218.642 87.832C220.402 87.832 221.794 87.432 222.818 86.632C223.874 85.832 224.594 84.776 224.978 83.464H229.106C228.498 85.992 227.298 87.976 225.506 89.416C223.746 90.856 221.474 91.576 218.69 91.576ZM247.088 91.096C246.096 91.096 245.248 90.76 244.544 90.088C243.84 89.416 243.488 88.584 243.488 87.592C243.488 86.632 243.84 85.816 244.544 85.144C245.248 84.472 246.096 84.136 247.088 84.136C248.08 84.136 248.928 84.472 249.632 85.144C250.336 85.816 250.688 86.632 250.688 87.592C250.688 88.584 250.336 89.416 249.632 90.088C248.928 90.76 248.08 91.096 247.088 91.096ZM276.109 91.576C273.069 91.576 270.605 90.872 268.717 89.464C266.861 88.024 265.821 86.056 265.597 83.56H269.773C269.965 84.872 270.605 85.944 271.693 86.776C272.813 87.608 274.317 88.024 276.205 88.024C277.997 88.024 279.325 87.64 280.189 86.872C281.085 86.104 281.533 85.224 281.533 84.232C281.533 82.888 281.005 81.976 279.949 81.496C278.893 80.984 277.309 80.6 275.197 80.344C272.669 80.056 270.573 79.368 268.909 78.28C267.245 77.192 266.413 75.56 266.413 73.384C266.413 71.432 267.229 69.816 268.861 68.536C270.493 67.256 272.717 66.616 275.533 66.616C278.317 66.616 280.509 67.256 282.109 68.536C283.709 69.784 284.621 71.576 284.845 73.912H280.861C280.765 72.76 280.205 71.848 279.181 71.176C278.189 70.472 276.941 70.12 275.437 70.12C273.869 70.12 272.653 70.424 271.789 71.032C270.925 71.608 270.493 72.376 270.493 73.336C270.493 74.296 270.973 75.096 271.933 75.736C272.925 76.344 274.477 76.744 276.589 76.936C278.253 77.128 279.773 77.448 281.149 77.896C282.525 78.344 283.613 79.048 284.413 80.008C285.245 80.968 285.661 82.312 285.661 84.04C285.693 85.48 285.293 86.776 284.461 87.928C283.661 89.048 282.541 89.944 281.101 90.616C279.661 91.256 277.997 91.576 276.109 91.576ZM293.994 101.56V67.192H297.258L297.738 71.128H298.026C298.634 69.848 299.61 68.776 300.954 67.912C302.298 67.048 303.882 66.616 305.706 66.616C307.626 66.616 309.354 67.096 310.89 68.056C312.458 69.016 313.69 70.44 314.586 72.328C315.482 74.184 315.93 76.456 315.93 79.144C315.93 81.8 315.466 84.056 314.538 85.912C313.642 87.768 312.394 89.176 310.794 90.136C309.226 91.096 307.418 91.576 305.37 91.576C303.546 91.576 301.994 91.192 300.714 90.424C299.466 89.624 298.57 88.696 298.026 87.64V101.56H293.994ZM304.89 87.736C306.906 87.736 308.57 87.032 309.882 85.624C311.194 84.184 311.85 82.008 311.85 79.096C311.85 76.184 311.194 74.024 309.882 72.616C308.57 71.176 306.906 70.456 304.89 70.456C302.874 70.456 301.21 71.176 299.898 72.616C298.586 74.024 297.93 76.184 297.93 79.096C297.93 82.008 298.586 84.184 299.898 85.624C301.21 87.032 302.874 87.736 304.89 87.736ZM331.415 91.576C329.527 91.576 327.959 91.24 326.711 90.568C325.463 89.896 324.535 89.016 323.927 87.928C323.319 86.808 323.015 85.592 323.015 84.28C323.015 81.848 323.895 80.008 325.655 78.76C327.447 77.48 329.831 76.84 332.807 76.84H339.335V76.36C339.335 72.2 337.431 70.12 333.623 70.12C332.087 70.12 330.791 70.456 329.735 71.128C328.711 71.8 328.055 72.856 327.767 74.296H323.639C323.799 72.696 324.327 71.32 325.223 70.168C326.151 69.016 327.335 68.136 328.775 67.528C330.215 66.92 331.831 66.616 333.623 66.616C337.015 66.616 339.479 67.512 341.015 69.304C342.583 71.064 343.367 73.416 343.367 76.36V91H339.911L339.575 87.304H339.239C338.535 88.456 337.591 89.464 336.407 90.328C335.255 91.16 333.591 91.576 331.415 91.576ZM332.135 88.024C333.671 88.024 334.967 87.656 336.023 86.92C337.111 86.184 337.927 85.208 338.471 83.992C339.047 82.776 339.335 81.448 339.335 80.008H333.143C330.967 80.008 329.431 80.376 328.535 81.112C327.671 81.848 327.239 82.824 327.239 84.04C327.239 85.288 327.655 86.264 328.487 86.968C329.319 87.672 330.535 88.024 332.135 88.024ZM362.597 91.576C360.453 91.576 358.533 91.08 356.837 90.088C355.173 89.096 353.845 87.672 352.853 85.816C351.861 83.928 351.365 81.688 351.365 79.096C351.365 76.504 351.861 74.28 352.853 72.424C353.845 70.536 355.189 69.096 356.885 68.104C358.613 67.112 360.517 66.616 362.597 66.616C365.541 66.616 367.893 67.352 369.653 68.824C371.413 70.296 372.533 72.264 373.013 74.728H368.885C368.501 73.416 367.765 72.376 366.677 71.608C365.589 70.808 364.213 70.408 362.549 70.408C361.333 70.408 360.181 70.728 359.093 71.368C358.005 72.008 357.125 72.968 356.453 74.248C355.781 75.528 355.445 77.144 355.445 79.096C355.445 81.048 355.781 82.68 356.453 83.992C357.125 85.272 358.005 86.232 359.093 86.872C360.181 87.512 361.333 87.832 362.549 87.832C364.309 87.832 365.701 87.432 366.725 86.632C367.781 85.832 368.501 84.776 368.885 83.464H373.013C372.405 85.992 371.205 87.976 369.413 89.416C367.653 90.856 365.381 91.576 362.597 91.576ZM391.234 91.576C388.994 91.576 387.01 91.064 385.282 90.04C383.586 88.984 382.242 87.528 381.25 85.672C380.258 83.784 379.762 81.592 379.762 79.096C379.762 76.6 380.242 74.424 381.202 72.568C382.194 70.68 383.554 69.224 385.282 68.2C387.01 67.144 389.026 66.616 391.33 66.616C393.634 66.616 395.602 67.144 397.234 68.2C398.866 69.224 400.114 70.584 400.978 72.28C401.842 73.976 402.274 75.8 402.274 77.752C402.274 78.104 402.258 78.456 402.226 78.808C402.226 79.16 402.226 79.56 402.226 80.008H383.746C383.842 81.768 384.242 83.24 384.946 84.424C385.682 85.576 386.594 86.44 387.682 87.016C388.802 87.592 389.986 87.88 391.234 87.88C392.994 87.88 394.37 87.512 395.362 86.776C396.354 86.04 397.106 85.016 397.618 83.704H401.602C401.058 85.912 399.922 87.784 398.194 89.32C396.466 90.824 394.146 91.576 391.234 91.576ZM391.234 70.216C389.378 70.216 387.746 70.776 386.338 71.896C384.962 73.016 384.114 74.584 383.794 76.6H398.29C398.162 74.616 397.442 73.064 396.13 71.944C394.85 70.792 393.218 70.216 391.234 70.216ZM413.775 99.88V96.28H421.023C421.791 96.28 422.175 95.88 422.175 95.08V56.824C422.175 56.024 421.791 55.624 421.023 55.624H413.775V52.072H421.407C422.879 52.072 423.999 52.472 424.767 53.272C425.567 54.072 425.967 55.208 425.967 56.68V95.272C425.967 96.744 425.567 97.88 424.767 98.68C423.999 99.48 422.879 99.88 421.407 99.88H413.775Z"
                            fill="black"
                            style={{ fill: "black", fillOpacity: 1 }}
                        />

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
    )
}