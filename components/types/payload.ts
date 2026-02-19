// types/payload.ts
export type PageBlock = {
  blockType: string
  [key: string]: any
}

export type Page = {
  id: string
  title: string
  slug: string
  layout: PageBlock[]
}
