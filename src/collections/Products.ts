import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'product',
  access: {
    read: () => true,
  },
  fields: [
     {
      name: 'Title',
      type: 'text',
      required: false,
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'variation',
      type: 'json',
      label: 'Optional JSON Field',
      // By default, this field is not required and thus nullable
      required: false, // This is implicit if omitted, but can be explicit
    },
  ],
  upload: true,
  orderable: true,
}
