import { Label } from 'flowbite-react'
import type { CollectionConfig, FieldHook } from 'payload'
import { number } from 'payload/shared'
import bcrypt from 'bcrypt';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
       
      name: 'pinCode', // The field name in MongoDB
      type: 'number',
      required: false, // Set to true if required
      min: 1000,
      max: 9999,
      admin: {
        description: 'Enter a 4-digit PIN',
      
    },
    
    },
     {
      name: 'hashedPincode', // Persisted field
      type: 'text',
      admin: { readOnly: true },
    },
    
    // Email added by default
    // Add more fields as needed
  ],
   hooks: {
    beforeValidate: [
      async ({ data, req }) => {
        // 1. Hash the raw number if it exists
        if (data?.pinCode) {
          const salt = await bcrypt.genSalt(10);
          data.hashedPincode = await bcrypt.hash(data.pinCode.toString(), salt);
          
          // 2. Remove the raw number from data before it hits the DB
          delete data.pinCode;
        }
        return data;
      },
    ],
  },
  
}
