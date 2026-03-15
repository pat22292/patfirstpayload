import { getPayload } from 'payload'
import config from '@/payload.config'
import { use } from 'react';
import Link from 'next/link'


type PageProps = {
  searchParams: Promise<{
    id?: string
  }>
}

export default async function Product({ searchParams,  }: PageProps) {
   const { id } = await searchParams

  if (!id) {
    return <div>No product id provided</div>
  }

    // ✅ Await the client
  const payload = await getPayload({ config })

  // ✅ Await the findByID call
  const product = await payload.findByID({
    collection: 'product',
    id,
  })

  // const payload =  getPayload({
  //   config,
  // })

  // let product

  // try {
  //   product =  (await payload).findByID({
  //     collection: 'product',
  //     id,
  //   })
  // } catch (e) {
  //   return <div>Product not found</div>
  // }
//  const product  = await payload.findByID({ collection: 'product', id: `${id}`})


  return (
    <div className="grid place-items-center w-screen h-screen ">
     <Link   href={{

                pathname: '/',
                

              }}
              >
<button className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
  Back
</button>
</Link>
          <h1>{product.Title}</h1>
      <div className=' inset-0 flex items-center justify-center'>

          <img
            src={`${product.thumbnailURL}`}
            alt={product.alt}
            className=" inset-0 w-[500] h-[500]  object-cover left-1/2 transform"
          />
      </div>
  
    </div>
  )
}
