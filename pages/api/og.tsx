import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const config = {
    runtime: 'edge',
}

export default async function handler(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || 'tnixc.space'

    const font = await fetch('https://utfs.io/f/LBZvH38TQ23f2dw6sn0iUJZCX0YV2PFoTMO7lIanb5vHKD8z').then((res) => res.arrayBuffer())

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
                    background: '#2463EB'
                }}
            >
                <div
                    style={{
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        paddingTop: 40,
                        paddingBottom: 40,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: 70,
                        lineHeight: 1,
                        fontStyle: 'normal',
                        background: '#FBF7EC',
                        color: '#262624'
                    }}
                ><span>tnixc.space</span></div>
                <div
                    style={{
                        marginLeft: 60,
                        marginRight: 60,
                        marginTop: 40,
                        display: 'flex',
                        fontSize: 60,
                        lineHeight: 1.6,
                        fontStyle: 'normal',
                        color: '#FBF7EC',
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
                    name: 'Sentient',
                    data: font,
                    style: 'normal',
                    weight: 400,
                },
            ],
        }
    )
}
