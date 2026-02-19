import HeroBlock from './blocks/HeroBlock'
import ContentBlock from './blocks/ContentBlock'

type Props = {
  blocks: any[]
}

export default function RenderBlocks({ blocks }: Props) {
  if (!blocks || !blocks.length) return null

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'hero':
            return <HeroBlock key={index} {...block} />

          case 'content':
            return <ContentBlock key={index} {...block} />

          default:
            return null
        }
      })}
    </>
  )
}
