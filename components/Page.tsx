import { notFound } from 'next/navigation'
import {getPayloadClient}from '../src/lib/payload'
import RenderBlocks from '../components/RenderBlocks'
import HeroBlock from './blocks/HeroBlock'
import  ContentBlock from './blocks/ContentBlock'


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
      <RenderBlocks blocks={page} />
    </main>
  )
}
