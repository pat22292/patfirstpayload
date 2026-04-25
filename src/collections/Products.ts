import type { CollectionConfig, CustomComponent, Field } from 'payload'
// import { PostsModal } from '@/components/PostsModal'

// const PostsModalComponent: CustomComponent = PostsModal as unknown as CustomComponent

export const Products: CollectionConfig = {
  slug: 'product',
  admin: {
    // useAsTitle: 'Title',
    // hidden: true,
    useAsTitle: 'Title',
    defaultColumns: ['filename', 'Title', 'alt', 'variation'],
  },
  // admin: {
  //   components: {
  //     edit: {
  //       beforeDocumentControls: [PostsModalComponent],
  //     },
  //     // fires when list view loads
  //   },
  // },
  access: {
    // read: () => true,
    create: ({ req: { user } }) => {
      if (user && (user.role === 'admin' || user.role === 'editor')) {
        return true
      }
      return false
    },
    update: ({ req: { user } }) => {
      if (user && (user.role === 'admin' || user.role === 'editor')) {
        return true
      }
      return false
    },
    delete: ({ req: { user } }) => {
      if (user && (user.role === 'admin' || user.role === 'editor')) {
        return true
      }
      return false
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
      filterOptions: async ({ req }) => {
        const used = await req.payload.find({
          collection: 'product',
          limit: 1000,
        })

        const usedMedia = await used.docs.map((doc) => doc.variation)

        const results = getAllIds(usedMedia)

        console.log(results)
        return {
          id: {
            not_in: results,
          },
        }
      },
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
        delete doc.url
        delete doc.mimeType
        delete doc.filesize
        delete doc.width
        delete doc.height
        delete doc.focalX
        delete doc.focalY
        return doc
      },
    ],
  },
}

function getAllIds(obj: any, keyName: string = 'id'): any[] {
  let ids: any[] = []

  for (const key in obj) {
    if (key === keyName) {
      ids.push(obj[key])
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      // Recursively search nested objects or arrays
      ids = ids.concat(getAllIds(obj[key], keyName))
    }
  }
  return ids
}
