import { getPayload } from 'payload'
import config from '@/payload.config'
import { use } from 'react';
import Link from 'next/link'
import GoogleLogin from 'components/googlesignin';



export default async function GoogSignIn() {
   
  return (
    <div className="grid place-items-center w-screen h-screen ">
     <GoogleLogin />
    </div>
  )
}
