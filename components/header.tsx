'use client'

import Link from 'next/link'
import AuthButtons from './authbuttons'

const Header = () => {
  return (
    <header className="bg-neutral-950 text-white sticky top-0 z-50">
      {/* Top Nav (Desktop) */}
      <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-4 py-1 text-sm">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white/80 transition">
            Seller Centre
          </a>
          <span className="opacity-50">|</span>
          <a href="#" className="hover:text-white/80 transition">
            Download
          </a>
          <span className="opacity-50">|</span>
          <span className="flex items-center space-x-2">
            <span>Follow us on</span>
            {/* Social placeholders */}
            <div className="flex space-x-1">
              <a href="#" className="hover:opacity-80">
                FB
              </a>
              <a href="#" className="hover:opacity-80">
                IG
              </a>
            </div>
          </span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="flex items-center hover:text-white/80 transition">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            Notifications
          </a>
          <a href="#" className="flex items-center hover:text-white/80 transition">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Help
          </a>
          {/* <span className="opacity-50">|</span>
            <a href="#" className="hover:text-white/80 transition text-white font-medium">
              Sign Up
            </a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:text-white/80 transition text-white font-medium">
              Login
            </a> */}
          <AuthButtons />
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 shrink-0 cursor-pointer">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl shadow-inner">
              <svg className="w-5 h-5 md:w-8 md:h-8" fill="black" viewBox="0 0 24 24">
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
              </svg>
            </div>
            <span className="hidden font-[baybayin] md:block text-3xl  tracking-tight">
              tindahan
              {/* ᜆᜒᜈ᜔ᜇᜑᜈ᜔ */}
            </span>
          </div>
        </Link>
        {/* Search Bar */}
        <div className="grow max-w-3xl flex flex-col pt-1">
          <div className="flex w-full bg-white rounded shadow-sm p-1">
            <input
              type="text"
              placeholder="Search for items, brands and shops"
              className="grow px-3 py-1.5 md:py-2 text-gray-800 outline-none rounded-l text-sm"
            />
            <button className="bg-neutral-950 hover:bg-orange-600 text-white px-4 md:px-6 rounded flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {/* Quick searches */}
          <div className="hidden md:flex gap-3 text-xs text-white/90 mt-2 px-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <a href="#" className="hover:text-white">
              Face Mask
            </a>
            <a href="#" className="hover:text-white">
              Headphone
            </a>
            <a href="#" className="hover:text-white">
              Phone Case
            </a>
            <a href="#" className="hover:text-white">
              Shoes
            </a>
            <a href="#" className="hover:text-white">
              Watch
            </a>
            <a href="#" className="hover:text-white">
              Lipstick
            </a>
          </div>
        </div>

        {/* Cart */}
        <div className="shrink-0 px-2 md:px-4 cursor-pointer relative hover:scale-105 transition-transform">
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
          <span className="absolute top-0 right-0 md:right-2 bg-white text-black rounded-full w-4 h-4 md:w-5 md:h-5 text-[10px] md:text-xs flex items-center justify-center font-bold border border-neutral-950">
            2
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
