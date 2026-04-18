'use client'
import React, { useState, useRef } from 'react'
import AuthButtons from './authbuttons'
import Image from 'next/image'
import Link from 'next/link'

type Product = {
  createdAt: string
  updatedAt: string
  alt: string
  url: string
  Title: string
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
  focalX: number
  focalY: number
  id: string
  thumbnailURL: null
}

type Props = {
  slides: Product[]
}

export default function Shop({ slides }: Props) {
  const [activeTab, setActiveTab] = useState('Daily Discover')
  const categoriesRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      {/* Header */}
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
          <div className="flex items-center gap-2 shrink-0 cursor-pointer">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl shadow-inner">
              <svg className="w-5 h-5 md:w-8 md:h-8" fill="black" viewBox="0 0 24 24">
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
              </svg>
            </div>
            <span className="hidden  md:block text-2xl font-bold tracking-tight">ᜆᜒᜈ᜔ᜇᜑᜈ᜔</span>
          </div>

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

      {/* Main Content */}
      <main className="grow max-w-7xl mx-auto w-full px-0 md:px-4 py-4 space-y-4">
        {/* Banner Section */}
        <section className="bg-white rounded-none md:rounded flex flex-col md:flex-row gap-2 shadow-sm p-4 h-auto md:h-[240px]">
          <div className="w-full md:w-2/3 h-[150px] md:h-full bg-linear-to-r from-orange-400 via-pink-500 to-purple-500 rounded relative overflow-hidden flex items-center justify-center text-white flex-col">
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-2">
              MEGA SALE
            </h2>
            <p className="text-sm md:text-lg opacity-90 font-medium">UP TO 50% OFF!</p>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${i === 0 ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </div>
          <div className="hidden md:flex w-1/3 flex-col gap-2">
            <div className="flex-1 bg-linear-to-r from-teal-400 to-blue-500 rounded flex items-center justify-center text-white shadow-inner cursor-pointer hover:opacity-90 transition-opacity">
              <span className="font-bold text-xl drop-shadow-md">Free Shipping</span>
            </div>
            <div className="flex-1 bg-linear-to-r from-rose-400 to-red-500 rounded flex items-center justify-center text-white shadow-inner cursor-pointer hover:opacity-90 transition-opacity">
              <span className="font-bold text-xl drop-shadow-md">Daily Vouchers</span>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-white rounded-none md:rounded shadow-sm p-4">
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-y-6 gap-x-2">
            {[
              { name: 'Mall', color: 'bg-red-100 text-red-500' },
              { name: 'Free Shipping', color: 'bg-green-100 text-green-500' },
              { name: 'Coins Rewards', color: 'bg-yellow-100 text-yellow-500' },
              { name: 'Load & Bills', color: 'bg-blue-100 text-blue-500' },
              { name: 'Vouchers', color: 'bg-orange-100 text-black' },
              { name: 'Global Deals', color: 'bg-purple-100 text-purple-500' },
              { name: 'Gadget Zone', color: 'bg-gray-100 text-gray-500' },
              { name: 'Fashion', color: 'bg-pink-100 text-pink-500' },
              { name: 'Beauty', color: 'bg-rose-100 text-rose-500', hiddenMobile: true },
              { name: 'Sports', color: 'bg-teal-100 text-teal-500', hiddenMobile: true },
            ].map((cat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-start cursor-pointer group ${cat.hiddenMobile ? 'hidden lg:flex' : ''}`}
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform shadow-sm border border-transparent group-hover:border-${cat.color.split('-')[1]}-200 ${cat.color}`}
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path
                      fillRule="evenodd"
                      d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-[10px] md:text-xs text-center leading-tight text-gray-700 font-medium">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Big Categories Grid Section */}
        <section className="bg-white rounded-none md:rounded shadow-sm mt-4 relative group/cat">
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <h2 className="text-gray-500 font-bold text-sm md:text-base uppercase tracking-wider">
              Categories
            </h2>
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => {
              if (categoriesRef.current) {
                categoriesRef.current.scrollBy({ left: -400, behavior: 'smooth' })
              }
            }}
            className="absolute left-0 top-[60%] -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2.5 shadow-md hover:shadow-lg hover:scale-110 transition-all z-30 hidden md:flex items-center justify-center text-gray-500 opacity-0 group-hover/cat:opacity-100 border border-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              if (categoriesRef.current) {
                categoriesRef.current.scrollBy({ left: 400, behavior: 'smooth' })
              }
            }}
            className="absolute right-0 top-[60%] -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2.5 shadow-md hover:shadow-lg hover:scale-110 transition-all z-30 hidden md:flex items-center justify-center text-gray-500 opacity-0 group-hover/cat:opacity-100 border border-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={categoriesRef}
            className="overflow-x-hidden scrollbar-hide py-2 px-2 md:px-0 scroll-smooth"
          >
            <div className="grid grid-rows-2 grid-flow-col auto-cols-[100px] md:auto-cols-[160px] gap-px bg-gray-100 border border-gray-100">
              {[
                "Men's Apparel",
                'Mobile & Gadgets',
                'Mobiles Accessories',
                'Home & Living',
                'Makeup & Fragrances',
                'Home Appliances',
                "Women's Apparel",
                'Laptops & Computers',
                'Audio',
                'Health & Personal Care',
                "Women's Shoes",
                "Men's Shoes",
                "Women's Bags",
                'Toys, Kids & Babies',
                'Watches',
                "Men's Bags & Accessories",
                'Motors',
                'Groceries',
                'Pet Care',
                'Gaming & Consoles',
              ].map((cat, i) => (
                <div
                  key={i}
                  className="bg-white hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center p-3 h-[120px] md:h-[160px] border-r border-b border-gray-100 hover:border-gray-300 relative group z-10 hover:z-20"
                >
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-gray-50 mb-3 flex items-center justify-center group-hover:scale-105 transition-transform text-gray-400">
                    <svg
                      className="w-6 h-6 md:w-10 md:h-10"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-sm text-center leading-snug text-gray-800 line-clamp-2 px-1">
                    {cat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flash Deals Section */}
        <section className="bg-white rounded-none md:rounded shadow-sm">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center gap-4">
              <h2 className="text-red-500 font-black text-lg md:text-2xl uppercase italic tracking-tighter">
                Flash Deals
              </h2>
              <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
                <span className="bg-black text-white text-xs px-2 py-1 rounded shadow-inner font-mono">
                  01
                </span>
                <span className="text-black font-bold animate-pulse">:</span>
                <span className="bg-black text-white text-xs px-2 py-1 rounded shadow-inner font-mono">
                  45
                </span>
                <span className="text-black font-bold animate-pulse">:</span>
                <span className="bg-black text-white text-xs px-2 py-1 rounded shadow-inner font-mono">
                  12
                </span>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center text-black text-xs md:text-sm hover:underline font-medium"
            >
              See All{' '}
              <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="p-4 flex overflow-x-auto gap-4 scrollbar-hide snap-x">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((deal) => (
              <div
                key={deal}
                className="min-w-[120px] md:min-w-[160px] snap-start shrink-0 cursor-pointer group"
              >
                <div className="aspect-square bg-gray-50 relative items-center justify-center flex p-2 border border-gray-100 rounded group-hover:border-orange-500 transition-colors">
                  <div className="text-gray-300 w-full h-full border-2 border-dashed border-gray-200 flex items-center justify-center flex-col gap-2 bg-white">
                    <svg className="w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs">Product</span>
                  </div>
                  {/* Discount badge */}
                  <div className="absolute top-0 right-0 bg-yellow-400 text-orange-600 font-bold text-[10px] px-1 py-0.5 rounded-bl shadow-sm">
                    -50%
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <div className="text-black font-bold md:text-lg">
                    ₱{(((deal * 47) % 500) + 50).toFixed(0)}
                  </div>
                  <div className="mt-1.5 bg-orange-200 rounded-full h-3 md:h-4 w-full relative overflow-hidden group-hover:bg-orange-300 transition-colors">
                    <div
                      className="absolute left-0 top-0 h-full bg-neutral-950 rounded-full"
                      style={{ width: `${((deal * 17) % 80) + 10}%` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center text-[8px] md:text-[10px] text-white font-bold tracking-wider z-10 z-[1] drop-shadow-md">
                      {((deal * 23) % 100) + 10} SOLD
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Discover Grid */}
        <section className="bg-transparent mt-4">
          <div className="flex bg-white sticky top-[60px] md:top-[84px] z-40 border-b shadow-sm rounded-t">
            <button className="flex-1 py-4 text-center text-orange-600 border-b-4 border-orange-600 font-bold bg-gray-50/50">
              Daily Discover
            </button>
            {/* Additional tabs could go here */}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2">
            {/* {Array.from({ length: 24 }).map((_, i) => (
             */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className="bg-white hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer relative group rounded border border-transparent hover:border-orange-500 overflow-hidden flex flex-col h-full shadow-sm"
              >
                <Link
                  key={slide.id}
                  href={{
                    pathname: '/product',
                    query: {
                      id: slide.id,
                    },
                  }}
                  scroll={true}
                >
                  {/* Product Image */}
                  <div className="aspect-square relative w-full bg-gray-50 shrink-0 flex items-center justify-center p-2">
                    <div className="w-full h-full bg-white flex items-center justify-center text-gray-200 border border-gray-100 rounded-sm">
                      <Image
                        src={`${slide.thumbnailURL}`}
                        alt={slide.alt}
                        className=" w-full h-full"
                        width={500}
                        height={500}
                      />
                      {/* <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg> */}
                    </div>
                    {/* Tags */}
                    {index % 3 === 0 && (
                      <div className="absolute top-0 left-0 bg-red-500 text-white text-[10px] px-1.5 py-0.5 font-bold rounded-br shadow-sm z-10">
                        Mall
                      </div>
                    )}
                    {index % 4 === 1 && (
                      <div className="absolute top-0 right-0 bg-yellow-400 text-orange-600 text-[10px] px-1 py-0.5 font-bold shadow-sm z-10 flex flex-col items-center leading-none">
                        <span>{((index * 7) % 30) + 10}%</span>
                        <span className="text-[8px]">OFF</span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-2.5 flex flex-col grow">
                    <h3 className="text-xs md:text-sm text-gray-800 line-clamp-2 min-h-[32px] md:min-h-[40px] leading-snug">
                      {slide.Title}
                      {/* {
                      [
                        'Wireless Bluetooth Earbuds Pro with Noise Cancelling',
                        "Men's Casual Short Sleeve Graphic T-Shirt",
                        'Smart Watch Fitness Tracker Heart Rate Monitor',
                        'Ultra-thin Soft Silicone Phone Case Cover',
                      ][index % 4]
                    } */}
                    </h3>

                    {/* Promo tags */}
                    <div className="flex flex-wrap gap-1 mt-1 mb-2">
                      <span className="text-[9px] border border-red-500 text-red-500 px-1 py-0.5 rounded-sm font-medium">
                        Free Return
                      </span>
                      {index % 2 === 0 && (
                        <span className="text-[9px] bg-teal-100 text-teal-600 px-1 py-0.5 rounded-sm font-medium">
                          Free Shipping
                        </span>
                      )}
                    </div>

                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-start text-black">
                        <span className="text-[10px] mt-0.5 font-medium">₱</span>
                        <span className="text-base md:text-lg font-bold">
                          {((index * 113) % 1500) + 50}
                        </span>
                      </div>
                      <div className="text-[10px] text-gray-500 font-medium">
                        {((index * 3) % 8) + 1},{(index * 7) % 9}k sold
                      </div>
                    </div>
                  </div>

                  {/* Hover Find Similar Overlay */}
                  <div className="absolute w-full bottom-0 left-0 bg-neutral-950 text-white text-center py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-full group-hover:translate-y-0 z-20 font-medium">
                    Find Similar
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 mb-4">
            <button className="bg-white hover:bg-gray-50 px-12 md:px-32 py-3 border border-gray-300 shadow-sm rounded text-gray-600 text-sm md:text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              See More Products
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-8 border-t py-12 px-4 md:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
          <div>
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-xs">Customer Service</h4>
            <ul className="text-gray-500 space-y-2.5 text-xs">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  How To Buy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Return & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-xs">About Us</h4>
            <ul className="text-gray-500 space-y-2.5 text-xs">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  About Our Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Store Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Seller Centre
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 border-t md:border-t-0 pt-6 md:pt-0">
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-xs">Payment</h4>
            <div className="flex flex-wrap gap-2">
              <div className="w-[50px] h-8 border shadow-sm rounded-sm flex items-center justify-center bg-white text-[10px] font-bold text-blue-800">
                VISA
              </div>
              <div className="w-[50px] h-8 border shadow-sm rounded-sm flex items-center justify-center bg-white text-[10px] font-bold text-red-600">
                MC
              </div>
              <div className="w-[50px] h-8 border shadow-sm rounded-sm flex items-center justify-center bg-white text-[10px] font-bold text-green-700">
                JCB
              </div>
            </div>
            <h4 className="font-bold text-gray-800 mt-6 mb-4 uppercase text-xs">Logistics</h4>
            <div className="flex flex-wrap gap-2">
              <div className="w-[50px] h-8 border shadow-sm rounded-sm flex items-center justify-center bg-white text-[10px] font-bold text-orange-600">
                SPX
              </div>
              <div className="w-[50px] h-8 border shadow-sm rounded-sm flex items-center justify-center bg-white text-[10px] font-bold text-red-500">
                J&T
              </div>
            </div>
          </div>

          <div className="border-t lg:border-t-0 pt-6 lg:pt-0">
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-xs">Follow Us</h4>
            <ul className="text-gray-500 space-y-3 text-xs">
              <li>
                <a href="#" className="hover:text-black transition-colors flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>{' '}
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>{' '}
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>{' '}
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-1 border-t lg:border-t-0 pt-6 lg:pt-0">
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-xs">App Download</h4>
            <div className="flex gap-3">
              <div className="w-20 h-20 bg-white p-1 border shadow-sm flex items-center justify-center rounded">
                <div className="w-full h-full border-2 border-dashed border-gray-200 text-[8px] text-gray-400 flex items-center justify-center text-center leading-tight">
                  QR Code Placeholder
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <div className="bg-white border rounded shadow-sm px-3 py-1.5 text-center text-[10px] min-w-[100px] font-medium cursor-pointer hover:bg-gray-50 transition-colors">
                  App Store
                </div>
                <div className="bg-white border rounded shadow-sm px-3 py-1.5 text-center text-[10px] min-w-[100px] font-medium cursor-pointer hover:bg-gray-50 transition-colors">
                  Google Play
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4 text-center md:text-left">
          <div>© 2024 AppMarket. All Rights Reserved.</div>
          <div className="flex flex-wrap justify-center md:justify-end gap-2 text-[10px] text-gray-400">
            Country & Region:
            <a href="#" className="hover:text-gray-600 transition-colors">
              Singapore
            </a>{' '}
            |
            <a href="#" className="hover:text-gray-600 transition-colors">
              Indonesia
            </a>{' '}
            |
            <a href="#" className="hover:text-gray-600 transition-colors">
              Taiwan
            </a>{' '}
            |
            <a href="#" className="hover:text-gray-600 transition-colors">
              Thailand
            </a>{' '}
            |
            <a href="#" className="hover:text-gray-600 transition-colors">
              Malaysia
            </a>{' '}
            |
            <a href="#" className="hover:text-gray-600 transition-colors">
              Vietnam
            </a>{' '}
            |
            <a href="#" className="hover:text-gray-600 transition-colors">
              Philippines
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
