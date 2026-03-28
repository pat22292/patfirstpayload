import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import HeroSliderAutomatic from '../../../components/automaticGSAPCarousel'
import React from 'react'
import config from '@/payload.config'
import HomeWithSimpleImage from './HomeWithSimpleImage'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: products } = await payload.find({ collection: 'product' })

  return (
    <div className="bg-[#00592b]">
      <nav className="flex absolute top-0 inset-x-0 items-center justify-between p-4 bg-transparent">
        <div className="text-2xl font-[anton] text-[#1ce585]">BRAND</div>

        <div className="hidden font-[roboto] md:flex text-lg items-center gap-6 text-white">
          <a href="#" className="hover:text-black">
            Home
          </a>
          <a href="#" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Services
          </a>
        </div>

        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
          Contact
        </a>
      </nav>

      <HomeWithSimpleImage />

      <HeroSliderAutomatic slides={products as []} />
    </div>
  )
}
