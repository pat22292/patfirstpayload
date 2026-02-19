import { CollectionConfig } from 'payload'
import { Hero } from '@/blocks/Hero'
import { Content } from '@/blocks/Content'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'showInNav',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show in navigation',
    },
    // ⭐ THIS is your custom layout
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [Hero, Content],
    },
  ],
}
