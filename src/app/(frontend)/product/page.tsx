

import { getPayload } from 'payload'
import config from '@/payload.config'


type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}


async function getData(param: any) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
 const product  = await payload.findByID({ collection: 'product', id: `${param.id}`})
  // const res = await fetch(`${process.env.API_URL}product/${id}`)


  return product;
}


export default async function Product({ searchParams }: Props) {
  const { param } = await searchParams;
  const product = await getData(param);

  return (
    <div className="grid place-items-center h-screen">

          <h1>{product.filename}</h1>
      <div className=' inset-0 flex items-center justify-center'>

          <img
            src={`${product.thumbnailURL}`}
            alt={product.alt}
            className=" h-full object-cover"
          />
      </div>
  
    </div>
  )
}
