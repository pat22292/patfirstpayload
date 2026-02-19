import Image from 'next/image'
import { backgroundImage } from 'flowbite-react/plugin/tailwindcss/theme'

type Props = {
  heading: string
  subheading?: string
  backgroundImage?: img
}
type img = {
  createdAt: '2026-02-19T14:14:18.866Z'
  updatedAt: '2026-02-19T14:14:18.866Z'
  alt: 'test-lang-utoy'
  url: '/api/media/file/cn-11134207-7ras8-m7xcckjpjgv11b.jpg'
  filename: string
  mimeType: 'image/jpeg'
  filesize: 150448
  width: 1001
  height: 1001
  focalX: 50
  focalY: 50
  id: '69971aba073126555fd8dea4'
  thumbnailURL: null
}

export default function HeroBlock({ heading, subheading, backgroundImage }: Props) {
  return (
    <section className="hero">
      <h1>{heading}</h1>
      {subheading && <p className='text-white'>{subheading}</p>}
          <Image
            src={`https://res.cloudinary.com/dgd6bxkak/image/upload/v1/media/${backgroundImage?.filename}`}
            alt='2'
            height={200}
            width={200}
            unoptimized
          />
    </section>
  )
}
