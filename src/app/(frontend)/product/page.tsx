import { getPayload } from 'payload'
import config from '@/payload.config'


type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}


async function getData(id: any) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
 const product  = await payload.findByID({ collection: 'product', id: `${id}`})
  // const res = await fetch(`${process.env.API_URL}product/${id}`)


  return product;
}


export default async function Product({ searchParams }: Props) {
 const product = await getData(searchParams.id);

console.log(product)
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
