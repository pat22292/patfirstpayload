'use client'
// In your Next.js component (e.g., app/page.tsx)
import { CldImage } from 'next-cloudinary';
import React from 'react';

// Assume 'image' is an object retrieved from Payload's API


const ImageDisplay = ({ image, imageALT }: { image: any; imageALT: string }) => {
  return (
    <CldImage
      width={400} // Set a default width
      height={300} // Set a default height
      src={image} // Use the public_id here
      alt={imageALT}
      // You can add transformations easily
      crop="fill"
      gravity="auto"
      // ... other props for optimization
    />
  )
}

export default ImageDisplay;
