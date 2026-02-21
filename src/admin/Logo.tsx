import type { CustomComponent } from 'payload'

const Logo = ((props: any) => {
  return (
    <img
      src="/patlogo2.png"
      alt="Admin Logo"
      style={{ height: 60 }}
    />
  )
}) as unknown as CustomComponent

export default Logo