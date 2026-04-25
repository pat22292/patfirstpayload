import type { CollectionConfig, CustomComponent, Field } from 'payload'
import { CustomJSONComponent } from '../components/CustomJSONComponent'
import { PostsModal } from '@/components/PostsModal'
import { SiblingVariations } from '@/components/SiblingVariations/Index'

const PostsModalComponent: CustomComponent = PostsModal as unknown as CustomComponent
const SiblingVariationsComponent: CustomComponent = SiblingVariations as unknown as CustomComponent

export const ProductVariations: CollectionConfig = {
  slug: 'productVariation',
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
  admin: {
    useAsTitle: 'Title',
    hidden: true,
    components: {
      edit: {
        beforeDocumentControls: [PostsModalComponent, SiblingVariationsComponent],
      },
      // fires when list view loads
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
      name: 'variationOptions',
      type: 'json',
      label: 'Variation Options',
      // By default, this field is not required and thus nullable
      required: false, // This is implicit if omitted, but can be explicit
      admin: {
        components: {
          Field: CustomJSONComponent as any,
        },
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
        delete doc.filename
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
