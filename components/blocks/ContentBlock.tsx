import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = {
  text: any
}

export default function ContentBlock({ text }: Props) {
  return (
    <section>
      <RichText data={text} />
    </section>
  )
}
