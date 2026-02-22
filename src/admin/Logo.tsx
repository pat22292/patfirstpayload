import type { CustomComponent } from 'payload'

const Logo = ((props: any) => {
  return (
    <img
      src="https://res.cloudinary.com/dgd6bxkak/image/upload/v1771475603/media/patlogo2.png"
      alt="Admin Logo"
      style={{ height: 60 }}
    />
  )
}) as unknown as CustomComponent

export default Logo