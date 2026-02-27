import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import { Button } from 'flowbite-react'
import HeroSlider from  '../../../components/gsapcarousel'
import HeroSliderAutomatic from '../../../components/automaticGSAPCarousel'
import React from 'react'
import { fileURLToPath } from 'url'
import gsap from 'gsap'

import config from '@/payload.config'
import HomePageClient from './homePageView'
// import './styles.css'

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
      {/* <div> */}
        {/* <HomePageClient /> */}
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
      <HeroSliderAutomatic slides={products as []}/>
      
    </div>
  )
}
