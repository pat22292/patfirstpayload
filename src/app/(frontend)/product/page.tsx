import { getPayload } from 'payload'
import config from '@/payload.config'
import { use } from 'react';


type PageProps = {
  searchParams: Promise<{
    id?: string
  }>
}

export default async function Product({ searchParams }: PageProps) {
   const { id } = await searchParams

  if (!id) {
    return <div>No product id provided</div>
  }
  const payload =  getPayload({
    config,
  })

  let product

  try {
    product =  (await payload).findByID({
      collection: 'product',
      id,
    })
  } catch (e) {
    return <div>Product not found</div>
  }
//  const product  = await payload.findByID({ collection: 'product', id: `${id}`})


  return (
    <div className="grid place-items-center">
      <h1></h1>
{/* 
          // <h1>{product.filename}</h1>
      <div className=' inset-0 flex items-center justify-center'>

          <img
            src={`${product.thumbnailURL}`}
            alt={product.alt}
            className=" h-full object-cover"
          />
      </div> */}
  
    </div>
  )
}
