import { notFound } from 'next/navigation'
import { getPayloadClient } from '../../../lib/payload'
import RenderBlocks from '../../../../components/RenderBlocks'


type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: params.slug,
      },
    },
    limit: 1,
  })

  const page = result.docs[0]

  if (!page) return notFound()

  return (
    <main>
      <h1>{page.title}</h1>
      {/*<h2>{page.slug}</h2>*/}
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}
