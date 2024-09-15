import Head from 'next/head'

export default function Page() {
  const title = "Vercel Edge Network" // You can make this dynamic if needed
  const encodedTitle = encodeURIComponent(title)

  return (
    <div>
      <Head>
        <meta name="og:title" content={title} />
        <meta name="og:description" content={title} />
        <meta
          name="og:image"
          content={
            `${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
            }/api/vercel?title=${encodedTitle}`
          }
        />
      </Head>
    </div>
  )
}
