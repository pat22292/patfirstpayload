import React from 'react'
import './styles.css'
import { ThemeModeScript } from 'flowbite-react'
import { Button, createTheme, ThemeProvider } from 'flowbite-react'

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

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <ThemeProvider theme={customTheme}>
      <html lang="en">
        <body>
          {/*<ThemeModeScript />*/}
          <main>{children}</main>
        </body>
      </html>
    </ThemeProvider>
  )
}
