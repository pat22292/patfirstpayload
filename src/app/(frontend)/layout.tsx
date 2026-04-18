import React from 'react'
import Script from 'next/script'
import './styles.css'
import { ThemeModeScript } from 'flowbite-react'
import { Button, createTheme, ThemeProvider } from 'flowbite-react'
import Header from './Header'
import { getHeader } from './globalheader'
import { Anton, Roboto } from 'next/font/google'
import SmoothScrollProvider from '../../../components/SmoothScroll'
import localFont from 'next/font/local'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

// const myFont = localFont({
//   src: '../../../public/fonts/BagwisBaybayinFontRegular-ZV3MK.woff2', // Path relative to this file
//   // display: 'swap',
//   // variable: '--font-bagwis', // Optional: for Tailwind CSS integration
// })

const roboto = Roboto({
  weight: ['400', '700'], // Specify desired weights
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto', // Optional: for CSS variable usage
})

const customTheme = createTheme({
  button: {
    color: {
      primary: 'bg-red-500 hover:bg-red-600',
      secondary: 'bg-blue-500 hover:bg-blue-600',
    },
    size: {
      lg: 'px-6 py-3 text-lg',
    },
  },
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const header = await getHeader()
  return (
    <ThemeProvider theme={customTheme}>
      <html
        lang="en"
        className={`${anton.variable} ${roboto.variable} 
        
        antialiased `}
      >
        <body
          suppressHydrationWarning={true}
          className={`${anton.variable} ${roboto.variable}
           
           antialiased`}
        >
          {/* <Header logo={header.logo} navigation={header.navigation} /> */}
          {/*<ThemeModeScript />*/}
          <main>
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          </main>
          <Script src="https://accounts.google.com/gsi/client" strategy="beforeInteractive" />
          {/* <script src="https://google.com" async defer></script> */}
          <script src="https://accounts.google.com/gsi/client?hl=en" async></script>
        </body>
      </html>
    </ThemeProvider>
  )
}
