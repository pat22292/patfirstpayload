import { notFound } from 'next/navigation'
import {getPayloadClient}from '../src/lib/payload'
import RenderBlocks from '../components/RenderBlocks'


type Props = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const page = result.docs[0]

  if (!page) return notFound()

  return (
    <main>
      <h1>{page.title}</h1>
      {/*<RenderBlocks blocks={layout} />*/}
    </main>
  )
}
