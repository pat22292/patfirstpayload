import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'product',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
