import type { Block } from 'payload'

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Contents',
  },
  fields: [
    {
      name: 'text',
      type: 'richText',
      required: true,
    },
  ],
}
