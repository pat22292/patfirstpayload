import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import HeroSliderAutomatic from '../../../components/automaticGSAPCarousel'
import React from 'react'

import config from '@/payload.config'
import HomePageClient from './homePageView'
import HomeWithSimpleImage from './HomeWithSimpleImage'
  import GsapTest from './gsaptest'
// import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: products } = await payload.find({ collection: 'product' })
  const getPosts = async () => {
    const posts = await payload.find({
      collection: 'product',
      depth: 2, // Fetch full image data
    })
    return posts.docs
  }


  return (
    // <div className="home">
      <div className=''>
        {/* <GsapTest /> */}
        {/* <HomePageClient /> */}
    <nav className="flex absolute top-0 inset-x-0 items-center  justify-between p-4 bg-transparent">
  
  <div className="text-2xl font-[anton]  text-[#1ce585]">
    BRAND
  </div>
  
  
  <div className="hidden font-[roboto] md:flex text-lg items-center gap-6 text-[white]">
    <a href="#" className="hover:text-black">Home</a>
    <a href="#" className="hover:text-black">About</a>
    <a href="#" className="hover:text-black">Services</a>
  </div>
  
  
  <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
    Contact
  </a>
</nav>

<HomeWithSimpleImage/>




        {/* <div className="links p-5 flex text-center justify-center">
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
        </div> */}
      
 <HeroSliderAutomatic slides={products as []}/>
 {/* <HomePageClient/> */}
      
     
      
    </div>
  )
}
