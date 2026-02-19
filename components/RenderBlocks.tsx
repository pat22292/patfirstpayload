import HeroBlock from './blocks/HeroBlock'
import ContentBlock from './blocks/ContentBlock'
import { PageBlock } from './types/payload'



type BlockRendererProps = {
  blocks: PageBlock[]
}

const blocksMap: Record<string, React.FC<any>> = {
  hero: HeroBlock,
  contentBlock: ContentBlock,
}


export default function RenderBlocks({ blocks }: BlockRendererProps) {
  if (!blocks || !blocks.length) return null

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'hero':
            return <HeroBlock heading={''} key={index} {...block} />

          case 'content':
            return <ContentBlock text={undefined} key={index} {...block} />

          default:
            return null
        }
      })}
    </>
  )
}
