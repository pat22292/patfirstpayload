'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

type Media = {
  url: string
}

type Slide = {
  id: string
  title: string
  image: Media
}

type Product = {
  "createdAt": string,
  "updatedAt": string,
  "alt":string,
  "url": string,
  "filename": string,
  "mimeType": string,
  "filesize": number,
  "width": number,
  "height": number,
  "focalX": number,
  "focalY": number,
  "id": string,
  "thumbnailURL": null
}

interface ChildProps {
  data: Product[] // Passing collection
}

const HeroSlider: React.FC<{ data: any[] }> = ({ data }) => {
  // export default function HeroSlider({ data  }: []) {
  const [slides, setSlides] = useState<Slide[]>([])
  const [active, setActive] = useState(0)
  const slideRefs = useRef<HTMLDivElement[]>([])

  // Fetch from Payload CMS
  // useEffect(() => {
  //   async function load() {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/product?limit=10`)
  //     const data = await res.json()
  //
  //     setSlides(data.docs)
  //   }
  //
  //   load()
  // }, [])

  // GSAP animation on slide change
  useEffect(() => {
    if (!slideRefs.current.length) return

    slideRefs.current.forEach((el, i) => {
      if (!el) return

      gsap.to(el, {
        autoAlpha: i === active ? 1 : 0,
        scale: i === active ? 1 : 1.05,
        duration: 0.8,
        ease: 'power3.out',
      })
    })
  }, [active, slides])

  const next = () => {
    setActive((prev) => (prev + 1) % data.length)
  }

  if (!data.length) return null

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {data.map((slide, i) => (
        <div
          key={slide.id}
          ref={(el) => {
            if (el) slideRefs.current[i] = el
          }}
          className="absolute inset-0 opacity-0"
        >
          <Image
            src={`https://res.cloudinary.com/dgd6bxkak/image/upload/v1/media/${slide.filename}`}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h1 className="text-white text-4xl font-bold">{slide.filename}</h1>
          </div>
        </div>
      ))}

      <button
        onClick={next}
        className="absolute right-6 bottom-6 z-10 rounded bg-white px-4 py-2 text-black"
      >
        Next
      </button>
    </section>
  )
}

export  default HeroSlider;
