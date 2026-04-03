import { Label } from 'flowbite-react'
import type { CollectionConfig, FieldHook } from 'payload'
import { number, password } from 'payload/shared'
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import { OAuth2Client } from "google-auth-library"
import crypto from 'crypto'
import { g } from 'node_modules/vitest/dist/chunks/suite.d.BJWk38HB';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


const generatePin = () => Math.floor(1000 + Math.random() * 9000).toString();


export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
   access: {
    // This specifically controls who can log into the Admin UI
    admin: ({ req: { user } }) => {
      if (user && user.googleAuthPassword !== null) {
        return true; // Allow access
      }
      return false; // Deny access
    },
         create: () => true, 
    // read: ({ req: { user } }) => user?.role === 'admin',
    read: ({ req: { user } }) => {
      if (user && user.role !== 'admin') {
        return {
          id: {
            equals: user.id,
          },
        }
      }
      else
      {
        return true; // Admin can read all, non-admins can read only their own record
      }
      // If no user is logged in, deny access
      return false
    },
    update: ({ req: { user }, id }) => user?.role === 'admin' || user?.id === id,
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  auth: true,
  
  fields: [
    {
       
      name: 'pinCode', // The field name in MongoDB
      type: 'text',
      required: false, // Set to true if required
      admin: {
        description: 'Enter a 4-digit PIN',
      hidden: true, // Hide from admin UI
    },
    
    },
     {
      name: 'hashedPincode', // Persisted field
      type: 'text',
      admin: { readOnly: true, hidden: true }, // Hide from admin UI and make read-only
    },
       {
      name: "googleId",
      type: "text",
      unique: true,
    },
    {
      name: "avatar",
      type: "text",
    },
    {
  name: "googleAuthPassword",
  type: "text",
  admin: {hidden: true} // Hide from admin UI and make read-only
},
  {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      required: true,
      defaultValue: 'user', // Non-admin by default
    },
    // Email added by default
    // Add more fields as needed
  ],
     endpoints: [
    {
      path: "/login-pin",
      method: "post",
      handler: async (req: any) => {
        const { email, pinCode, password } = await req.json() as {
          email: string
          pinCode: string
          password: string
        }

        const payload = req.payload

        const users = await payload.find({
          collection: "users",
          where: {
            email: { equals: email },
          },
          overideAccess: true,
        })

        const user = users.docs[0]

        if (!user) {
          return Response.json(
            { error: "User not found" },
            { status: 404 }
          )
        }

        if (!bcrypt.compareSync(pinCode.toString(), user.pinCode)) {
          return Response.json(
            { error: "Invalid PIN" },
            { status: 401 }
          )
        }
        else {
             const result = await payload.login({
        collection: "users",
        data: {
          email: user.email,
          password: password, // PIN must match password
        },
        req,
      })

      return Response.json(result)
        }
 
      },
    },
     {
      path: "/google",
      method: "post",
      handler: async (req: any) => {
        const body = await req.json() as { token: string }
        const { token } = body

        const payload = req.payload

        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.GOOGLE_CLIENT_ID,
        })

        // console.log("Google payload:", ticket.getPayload()) // Debug log
        const googlePayload = ticket.getPayload()

        if (!googlePayload) {
          return Response.json(
            { error: "Invalid Google token" },
            { status: 401 }
          )
        }

        const {
          sub,
          email,
          name,
          picture,
        } = googlePayload

        if (!email) {
          return Response.json(
            { error: "Email not provided" },
            { status: 400 }
          )
        }

        // check existing user
        const existing = await payload.find({
          collection: "users",
          where: {
        googleId: { equals: sub },
      },
          overrideAccess: true,
        })

        let user = existing.docs[0]
const generatedPassword = crypto.randomUUID()
        // create user if not exists
        if (!user) {
          user = await payload.create({
            collection: "users",
            data: {
              email,
              password: generatedPassword, // random password since we won't use it
              googleAuthPassword: generatedPassword,
              googleId: sub,
              avatar: picture,
            },
          })
        }
        else {
          // Update avatar and name on each login
          user = await payload.update({
            collection: "users",
            id: user.id,
            data: {
              password: generatedPassword, // Keep existing password
              googleAuthPassword: generatedPassword, // Keep existing googleAuthPassword
            },
          })
          console.log("Existing user found:", user) // Debug log
        }
// console.log("Authenticated user:", user.password) // Debug log
        // login (creates session)
        const result = await payload.login({
          collection: "users",
          data: {
            email: user.email,
            password: user.googleAuthPassword, // Use the generated password for login
          },
          req
                })
         await payload.update({
            collection: "users",
            id: user.id,
            data: {
               // Keep existing password
              googleAuthPassword: null, // Keep existing googleAuthPassword
            },
          }) // Remove sensitive info before sending response
        
                // console.log("Login result:", r) // Debug log
        return  Response.json(result);
      },
    },
    
  ],
   hooks: {
    // beforeValidate: [
    //   async ({ data, req }) => {
    //     // 1. Hash the raw number if it exists
    //     if (data?.pinCode) {
    //       const salt = await bcrypt.genSalt(10);
    //       data.hashedPincode = await bcrypt.hash(data.pinCode.toString(), salt);
          
    //       // 2. Remove the raw number from data before it hits the DB
    //       delete data.pinCode;
    //     }
    //     return data;
    //   },
    // ],
    beforeChange: [
       ({ data, req }) => {
      // If the password is empty, remove it from the data
      // so it doesn't trigger validation
      if (data && !data.password) {
        delete data.password;
      }
      return data;
    },
//      async ({ data, operation, req }) => {
//         // Generate pin only on create, or when a specific flag is set
//         if (operation === 'create' && !data?.pinCode) {
//           // data.pinCode = generatePin();
//           const pin = generatePin();
          
//          await req.payload.sendEmail({
//   to: data.email,
//   subject: 'Hello',
//   html: `<h1>Welcome! here's your code: ${pin}</h1>`,
// });
//        const salt = await bcrypt.genSalt(10);
//           data.pinCode = await bcrypt.hash(pin.toString(), salt);
//           // data.hashedPincode = pin;

//         }
//         return data;
//       },
    ],
  },
  
  
}


