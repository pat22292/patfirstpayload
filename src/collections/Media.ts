import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    // read: () => true,
      create: ({ req: { user } }) => {
      if (user && (user.role === 'admin' )) {
        return true;
      }
      return false;
    },
    update: ({ req: { user } }) => {
      if (user && (user.role === 'admin' )) {
        return true;
      }
      return false;
    },
    delete: ({ req: { user } }) => {
      if (user && (user.role === 'admin' )) {
        return true;
      }
      return false;
    }, 
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
  name: 'cloudinaryData',
  type: 'json',
  access: {
    read: () => false, // Hides field from API responses
  },
},
  ],
  upload: {
    crop: false,
    
  }
}
