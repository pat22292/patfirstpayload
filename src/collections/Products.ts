import type { CollectionConfig, Field } from 'payload'

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
      type: 'relationship',
      relationTo: 'productVariation',
      hasMany: true,
    },
    

  ],
  upload: true,
  orderable: true,
  hooks: {
    afterRead: [
  ({ doc }) => {
    if (doc.cloudinary?.secure_url) {
      doc.url = doc.cloudinary.secure_url
    }
    delete doc.cloudinary
        delete doc.url;
        delete doc.mimeType;
        delete doc.filesize;
        delete doc.width;
        delete doc.height;
        delete doc.focalX;
        delete doc.focalY;
    return doc
  }
]
  },
}

