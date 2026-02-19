import Link from 'next/link'

type HeaderProps = {
  logo?: {
    url?: string
  }
  navigation?: {
    label: string
    url: string
    id?: string
  }[]
}

export default function Header({ logo, navigation }: HeaderProps) {

  let newURL: string = ''
  if (logo?.url != undefined) {
    newURL = logo.url.replace('/api/media/file/', '')
  }

  return (
    <header className=" top-0 left-0 z-50 w-full  ">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        {logo?.url && (
          <img
            src={`https://res.cloudinary.com/dgd6bxkak/image/upload/v1/media/${newURL}`}
            alt="Logo"
            className="w-14"
          />
        )}
        {/*<Link href="/" className="text-lg font-semibold">*/}
        {/*  DreamApp*/}
        {/*</Link>*/}

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul>
            {navigation?.map((item) => (
              <Link
                className="text-sm text-gray-700 hover:text-black mx-2"
                key={item.id || item.url}
                href={item.url}
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </nav>
        {/*<nav className="hidden md:flex items-center gap-8">*/}
        {/*  <Link href="/" className="text-sm text-gray-700 hover:text-black">*/}
        {/*    Home*/}
        {/*  </Link>*/}
        {/*  <Link href="/projects" className="text-sm text-gray-700 hover:text-black">*/}
        {/*    Projects*/}
        {/*  </Link>*/}
        {/*  <Link href="/about" className="text-sm text-gray-700 hover:text-black">*/}
        {/*    About*/}
        {/*  </Link>*/}
        {/*  <Link href="/contact" className="text-sm text-gray-700 hover:text-black">*/}
        {/*    Contact*/}
        {/*  </Link>*/}
        {/*</nav>*/}

        {/* Mobile button */}
        <button
          // onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/*{open ? (*/}
            {/*  <path*/}
            {/*    strokeLinecap="round"*/}
            {/*    strokeLinejoin="round"*/}
            {/*    strokeWidth={2}*/}
            {/*    d="M6 18L18 6M6 6l12 12"*/}
            {/*  />*/}
            {/*) : (*/}
            {/*  <path*/}
            {/*    strokeLinecap="round"*/}
            {/*    strokeLinejoin="round"*/}
            {/*    strokeWidth={2}*/}
            {/*    d="M4 6h16M4 12h16M4 18h16"*/}
            {/*  />*/}
            {/*)}*/}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="hidden"
        // className={`md:hidden overflow-hidden transition-all duration-300 ${
        //   open ? 'max-h-60' : 'max-h-0'
        // }`}
      >
        {/*<nav className="flex flex-col gap-4 px-4 pb-4 pt-2">*/}
        {/*  <Link  href="/">*/}
        {/*    Home*/}
        {/*  </Link>*/}
        {/*  <Link  href="/projects">*/}
        {/*    Projects*/}
        {/*  </Link>*/}
        {/*  <Link  href="/about">*/}
        {/*    About*/}
        {/*  </Link>*/}
        {/*  <Link  href="/contact">*/}
        {/*    Contact*/}
        {/*  </Link>*/}
        {/*</nav>*/}
      </div>
    </header>
    // <header className="site-header">
    //   <div className="container">
    //     <div className="logo">
    //       {logo?.url && (
    //         <img
    //           src={`https://res.cloudinary.com/dgd6bxkak/image/upload/v1/media/${newURL}`}
    //           alt="Logo"
    //         />
    //       )}
    //     </div>
    //
    //     <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
    //       <ul>
    //         {navigation?.map((item) => (
    //           <li key={item.id || item.url}>
    //             <a href={item.url}>{item.label}</a>
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  )
}
