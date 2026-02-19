import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/lib/payload'
import { Page as PageType } from '../../../../components/types/payload'

// import { payload } from '@/lib/payloadClient'

import RenderBlocks from '../../../../components/RenderBlocks'


// type Props = {
//   params: { slug: string }
// }

type PageProps = {
  params: any
}

export default async function Page({ params }: PageProps) {
  const slug = await params.slug

  const payload = await getPayloadClient()

  const result = await payload.findOne({
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
      {/*<h2>{page.slug}</h2>*/}
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}
