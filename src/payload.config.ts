import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { v2 as cloudinary } from 'cloudinary'
import { cloudinaryStorage } from 'payload-cloudinary'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { HandleDelete, HandleUpload } from '@payloadcms/plugin-cloud-storage/types'
import type { UploadApiResponse } from 'cloudinary'
import { Header } from './globals/Header'
import { Pages } from '@/collections/Pages'
// import SaveButton from './admin/SaveButton'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)


// const Header: GlobalConfig = {
//   slug: 'header',
//   label: 'Header Nav', // Optional: changes how it's displayed in the admin
//   fields: [
//     // Add fields for your logo, links, etc.
//   ],
// }

//setting up clodinary CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// creating cloudinary adapter
//setting up clodinary CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})




export default buildConfig({

  admin: {
theme: 'light',
    user: Users.slug,
  //    components: {
  //     // Logo: async () => (await import('@/admin/Logo')).default,
  //     // edit :{
  //     //    SaveButton: { component: SaveButton },
  //     // },  
  //   // graphics: {
  //   //   Logo,
  //   // },
  
  // }  as any,
  },
  collections: [Users, Media, Products, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [
    cloudinaryStorage({

      config: {

        cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
        api_key: process.env.CLOUDINARY_API_KEY!,
        api_secret: process.env.CLOUDINARY_API_SECRET!,

      },

      collections: {

        media: true,
        product:  true,
      },

      folder: 'payload-media',

    }),
    // payloadCloudPlugin(),
    // cloudStoragePlugin({
    //   collections: {
    //     media: {
    //       adapter: cloudinaryAdapter,
    //       disableLocalStorage: true,
    //       generateFileURL: ({ filename }) => {
    //         // Since we uploaded the file with a "media/" prefix in its public_id,
    //         // we include "media/" here to correctly generate the Cloudinary URL for the file.
    //         return cloudinary.url(`media/${filename}`, { secure: true })
    //       },
    //     },
    //     product: {
    //       adapter: cloudinaryAdapter,
    //       disableLocalStorage: true,
    //       generateFileURL: ({ filename }) => {
    //         // Since we uploaded the file with a "media/" prefix in its public_id,
    //         // we include "media/" here to correctly generate the Cloudinary URL for the file.
    //         return cloudinary.url(`media/${filename}`, { secure: true })
    //       },
    //     },
    //   },
    // }),

    // storage-adapter-placeholder
  ],
  globals: [Header],
})
