import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'product',
  access: {
    // read: () => true,
      create: ({ req: { user } }) => {
      if (user && (user.role === 'admin' || user.role === 'editor' )) {
        return true;
      }
      return false;
    },
    update: ({ req: { user } }) => {
      if (user && (user.role === 'admin' || user.role === 'editor' )) {
        return true;
      }
      return false;
    },
    delete: ({ req: { user } }) => {
      if (user && (user.role === 'admin' || user.role === 'editor' )) {
        return true;
      }
      return false;
    },  
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
      label: 'Variation',
      // By default, this field is not required and thus nullable
      required: false, // This is implicit if omitted, but can be explicit
    },
  ],
  upload: true,
  orderable: true,
}
