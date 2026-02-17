import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'


import React from 'react'
import { fileURLToPath } from 'url'
import ImageDisplay from '../../../components/cloudinaryimage'
import { CldImage } from 'next-cloudinary'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const { docs: products } = await payload.find({ collection: 'product' })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
  const getPosts = async () => {
    const posts = await payload.find({
      collection: 'product',
      depth: 2, // Fetch full image data
    })
    return posts.docs
  }

  return (
    <div className="home">
      <div className="content">
        <picture>
          <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
          <Image
            alt="Payload Logo"
            height={65}
            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
            width={65}
          />
        </picture>
        {!user && <h1>Welcome to your new project.</h1>}
        {user && <h1>Welcome back, {user.email}</h1>}
        <div className="links">
          <a
            className="admin"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
          <a
            className="docs"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </a>
        </div>
      </div>
      <div className="footer">
        <p>Update this page by editing</p>
        <a className="codeLink" href={fileURL}>
          <code>app/(frontend)/page.tsx</code>
        </a>
      </div>
      <div>
        {products.map((product) => (
          <div key={product.id}>

            <Image
              src={`https://res.cloudinary.com/dgd6bxkak/image/upload/v1/media/${product.filename}`}
              alt={product.alt || 'Featured Image'}
              height={200}
              width={200}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
