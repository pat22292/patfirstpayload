import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true, // 👈 IMPORTANT
  },
  admin: {  
      hidden: ({ user }) => user?.role !== 'admin' , // Only show to admins
  },
  label: 'Header',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'navigation',
      label: 'Navigation',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages', // 👈 your Pages collection
          required: true,
        },
      ],
    },
  ],
}
