'use client'
import React, { useState, useEffect } from 'react'
import AuthButtons from './authbuttons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ProductPage({ product }: { product: any }) {
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('White')
  const [selectedSize, setSelectedSize] = useState('L')

  const images = [
    'https://via.placeholder.com/600x600?text=White+Sweater',
    'https://via.placeholder.com/600x600?text=Black+Sweater',
    'https://via.placeholder.com/600x600?text=Red+Sweater',
    'https://via.placeholder.com/600x600?text=Blue+Sweater',
    'https://via.placeholder.com/600x600?text=Yellow+Sweater',
  ]

  useEffect(() => {
    // Standard instant scroll
    window.scrollTo(0, 0)

    // Optional: Smooth scroll
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  const colors = ['Black', 'Gray', 'White', 'Yellow', 'Green', 'Pink', 'Wine Red', 'Blue']
  const sizes = ['M', 'L', 'XL', '2XL', '3XL']

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      {/* Header */}
      <header className="bg-neutral-950 text-white sticky top-0 z-50">
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
            <AuthButtons />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-4">
          <Link href="/" scroll={true}>
            <div className="flex items-center gap-2 shrink-0 cursor-pointer">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl shadow-inner">
                <svg className="w-5 h-5 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
                </svg>
              </div>
              <span className="hidden md:block text-2xl font-bold tracking-tight">ᜆᜒᜈ᜔ᜇᜑᜈ᜔</span>
            </div>
          </Link>
          <div className="grow max-w-3xl flex flex-col pt-1">
            <div className="flex w-full bg-white rounded shadow-sm p-1">
              <input
                type="text"
                placeholder="Search for items, brands and shops"
                className="grow px-3 py-1.5 md:py-2 text-gray-800 outline-none rounded-l text-sm"
              />
              <button className="bg-neutral-950 hover:bg-black text-white px-4 md:px-6 rounded flex items-center justify-center transition-colors">
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
          </div>

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
            <span className="absolute top-0 right-0 md:right-2 bg-white text-black rounded-full w-4 h-4 md:w-5 md:h-5 text-[10px] md:text-xs flex items-center justify-center font-bold border border-black">
              2
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto w-full px-2 md:px-4 py-4 space-y-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
          <a href="#" className="text-black hover:text-black">
            Home
          </a>
          <span>{'>'}</span>
          <a href="#" className="hover:text-black text-black">
            Men's Apparel
          </a>
          <span>{'>'}</span>
          <a href="#" className="hover:text-black text-black">
            Hoodies & Sweatshirts
          </a>
          <span>{'>'}</span>
          <span className="text-gray-900 truncate">
            SweatShirt Korean Style Sweater Men's Long Sleeve Jacket
          </span>
        </div>

        {/* Product Overview Section */}
        <section className="bg-white p-4 md:p-6 rounded shadow-sm flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left: Images */}
          <div className="w-full lg:w-[450px] shrink-0 flex flex-col gap-3">
            <div className="aspect-square w-full bg-gray-100 rounded relative overflow-hidden border border-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.thumbnailURL}
                alt="Main product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2.5 overflow-x-auto snap-x scrollbar-hide">
              {product.variation.map((img: any, i: any) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveImage(i)}
                  className={`w-20 h-20 shrink-0 cursor-pointer border-2 rounded ${activeImage === i ? 'border-black' : 'border-transparent hover:border-orange-300'} transition-all`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.thumbnailURL}
                    alt={`Thumbnail ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1 font-medium">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>{' '}
                Share
              </span>
              <div className="flex gap-1.5 opacity-80">
                <div className="w-6 h-6 bg-blue-600 rounded-full text-white flex items-center justify-center text-xs font-bold">
                  f
                </div>
                <div className="w-6 h-6 bg-blue-400 rounded-full text-white flex items-center justify-center text-xs font-bold">
                  t
                </div>
                <div className="w-6 h-6 bg-red-600 rounded-full text-white flex items-center justify-center text-xs font-bold">
                  p
                </div>
              </div>
              <span className="border-l pl-4 flex items-center gap-1">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                Favorite (2.1K)
              </span>
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col grow pt-2">
            <h1 className="text-xl md:text-2xl font-medium text-gray-800 leading-snug mb-2 flex items-start gap-2">
              <span className="bg-neutral-950 text-white text-xs px-1.5 py-0.5 rounded font-bold mt-1 shrink-0">
                Mall
              </span>
              {product.Title}
              {/* SweatShirt Korean Style Sweater Men's Long Sleeve Jacket Loose Simple Versatile Trendy
              Top */}
            </h1>

            {/* Ratings & Sold */}
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <div className="flex items-center gap-1">
                <span className="text-black font-medium underline border-b border-black">4.8</span>
                <div className="flex text-black">
                  {'12345'.split('').map((i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-gray-300 border-l h-4"></span>
              <div className="flex items-center gap-1">
                <span className="font-medium underline">1.2K</span>
                <span className="text-gray-500">Ratings</span>
              </div>
              <span className="text-gray-300 border-l h-4"></span>
              <div className="flex items-center gap-1">
                <span className="font-medium">3.4K</span>
                <span className="text-gray-500">Sold</span>
              </div>
              <a href="#" className="ml-auto text-gray-500 hover:text-gray-700">
                Report
              </a>
            </div>

            {/* Price */}
            <div className="bg-orange-50/50 p-4 md:p-5 rounded flex items-center gap-4 mb-6">
              <span className="text-gray-400 line-through text-base block mb-0.5">₱200</span>
              <div className="text-black font-medium text-3xl md:text-4xl flex items-start">
                <span className="text-lg md:text-xl mt-1">₱</span>
                99 - ₱150
              </div>
              <div className="bg-neutral-950 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-sm">
                50% OFF
              </div>
            </div>

            {/* Attributes */}
            <div className="flex flex-col gap-5 text-sm">
              {/* Shipping */}
              <div className="flex items-start md:items-center gap-4 md:gap-8">
                <span className="text-gray-500 w-16 shrink-0">Shipping</span>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  <span>Free Shipping</span>
                </div>
              </div>

              {/* Color */}
              <div className="flex items-start gap-4 md:gap-8">
                <span className="text-gray-500 w-16 shrink-0 pt-2">Color</span>
                <div className="flex flex-wrap gap-2.5">
                  {product.variation.map((vrtn: any, i: any) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(vrtn.Title)}
                      className={`px-4 py-1.5 border rounded-sm text-sm hover:border-black hover:text-black transition-colors ${selectedColor === vrtn.color ? 'border-black text-black bg-orange-50' : 'border-gray-200 bg-white'}`}
                    >
                      {vrtn.Title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="flex items-start gap-4 md:gap-8">
                <span className="text-gray-500 w-16 shrink-0 pt-2">Size</span>
                <div className="flex flex-wrap gap-2.5">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-1.5 border rounded-sm text-sm hover:border-black hover:text-black transition-colors ${selectedSize === size ? 'border-black text-black bg-orange-50' : 'border-gray-200 bg-white'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 md:gap-8 mt-2">
                <span className="text-gray-500 w-16 shrink-0">Quantity</span>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50 bg-white"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                    className="w-12 h-8 border-y border-gray-300 text-center focus:outline-none focus:ring-0 text-gray-800"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50 bg-white"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500 ml-4">1239 pieces available</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-50 border border-black text-black rounded-sm hover:bg-orange-100 transition-colors font-medium text-sm md:text-base">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
                Add To Cart
              </button>
              <button className="px-8 py-3 bg-neutral-950 text-white rounded-sm hover:bg-black transition-colors font-medium text-sm md:text-base shadow-sm">
                Buy Now
              </button>
            </div>
          </div>
        </section>

        {/* Shop Info Section */}
        <section className="bg-white p-4 md:p-6 rounded shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 md:w-1/3">
            <div className="w-16 h-16 rounded-full bg-gray-200 border border-gray-300 shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl uppercase">
                Store
              </div>
              {/* Optional: <Image src="" layout="fill" ... /> */}
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-lg text-gray-800">Awesome Shop Store</h3>
              <p className="text-xs text-gray-500 mb-2">Active 4 minutes ago</p>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 border border-black text-black text-xs px-2 py-1 rounded-sm hover:bg-orange-50 transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Chat Now
                </button>
                <button className="flex items-center gap-1 border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-sm hover:bg-gray-50 transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  View Shop
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex border-l pl-8 grow justify-between text-sm text-gray-600">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between w-32">
                <span className="text-gray-400">Ratings</span>{' '}
                <span className="text-black">15.1K</span>
              </div>
              <div className="flex justify-between w-32">
                <span className="text-gray-400">products</span>{' '}
                <span className="text-black">433</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between w-32">
                <span className="text-gray-400">Response Rate</span>{' '}
                <span className="text-black">95%</span>
              </div>
              <div className="flex justify-between w-32">
                <span className="text-gray-400">Response Time</span>{' '}
                <span className="text-black">within hours</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between w-32">
                <span className="text-gray-400">Joined</span>{' '}
                <span className="text-black">3 years ago</span>
              </div>
              <div className="flex justify-between w-32">
                <span className="text-gray-400">Follower</span>{' '}
                <span className="text-black">21.8K</span>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Content Area */}
          <div className="lg:w-3/4 flex flex-col gap-4">
            {/* Product Specifications & Description */}
            <section className="bg-white p-4 md:p-6 rounded shadow-sm">
              <div className="bg-gray-50/50 p-3 mb-4 rounded text-sm font-medium uppercase text-gray-800">
                Product Specifications
              </div>
              <div className="flex flex-col gap-3 text-sm px-2 mb-8">
                <div className="flex">
                  <span className="w-32 text-gray-400 shrink-0">Category</span>{' '}
                  <a href="#" className="text-blue-600 hover:text-black truncate">
                    Shopee - Men's Apparel - Hoodies & Sweatshirts
                  </a>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-400 shrink-0">Stock</span>{' '}
                  <span className="text-gray-800">1239</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-400 shrink-0">Ships From</span>{' '}
                  <span className="text-gray-800">Metro Manila, Quezon City</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-400 shrink-0">Material</span>{' '}
                  <span className="text-gray-800">Cotton Blend</span>
                </div>
              </div>

              <div className="bg-gray-50/50 p-3 mb-4 rounded text-sm font-medium uppercase text-gray-800">
                Product Description
              </div>
              <div className="text-sm text-gray-700 leading-relaxed px-2 whitespace-pre-line">
                {
                  'Welcome to our store~\n\nFeatures:\n1. 100% Brand new and High Quality\n2. Comfortable and breathable fabric\n3. Stylish Korean design, perfect for casual outings\n4. Available in multiple colors to match your style\n\nNotes:\n- Please allow 1-3cm error due to manual measurement.\n- Colors may slightly differ due to screen setting and lighting.\n\nPackage includes: 1 x Sweater\n\nHappy Shopping!'
                }
              </div>
            </section>

            {/* Ratings */}
            <section className="bg-white p-4 md:p-6 rounded shadow-sm">
              <h2 className="text-lg font-medium text-gray-800 mb-6 uppercase">Product Ratings</h2>
              <div className="bg-orange-50/50 border border-orange-100 p-6 rounded mb-6 flex flex-col md:flex-row items-center gap-6">
                <div className="flex flex-col items-center justify-center min-w-[120px]">
                  <span className="text-black font-medium text-3xl mb-1">
                    <span className="text-4xl text-black">4.8</span>
                    <span className="text-xl text-black/80"> out of 5</span>
                  </span>
                  <div className="flex text-black">
                    {'12345'.split('').map((i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-sm">
                  {[
                    'All',
                    '5 Star (1.1K)',
                    '4 Star (50)',
                    '3 Star (20)',
                    '2 Star (9)',
                    '1 Star (1)',
                    'With Comments (800)',
                    'With Media (400)',
                  ].map((filter, i) => (
                    <button
                      key={i}
                      className={`px-4 py-1.5 border rounded-sm ${i === 0 ? 'bg-white border-black text-black' : 'bg-white border-gray-200 text-gray-700 hover:text-black hover:border-black'} transition-colors`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sample Review */}
              <div className="py-4 border-b border-gray-100 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0"></div>
                <div className="flex flex-col grow">
                  <div className="text-xs text-gray-800">m*******9</div>
                  <div className="flex text-black my-1">
                    {'12345'.split('').map((i) => (
                      <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-[11px] text-gray-400 mb-2">
                    2026-03-12 14:30 | Variation: Black, L
                  </div>
                  <div className="text-sm text-gray-800 mb-3">
                    Very nice quality! It's warm and fits me perfectly. Fast shipping as well. Will
                    highly recommend this shop to my friends.
                  </div>
                  <div className="flex gap-2">
                    <div className="w-16 h-16 bg-gray-200 rounded shrink-0"></div>
                    <div className="w-16 h-16 bg-gray-200 rounded shrink-0"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area (Top Picks) */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white p-4 rounded shadow-sm sticky top-24">
              <h3 className="text-gray-500 font-medium text-sm mb-4 uppercase">
                Top Picks From Shop
              </h3>
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 hover:bg-gray-50 p-2 -mx-2 rounded cursor-pointer transition-colors group"
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded shrink-0 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] px-1 font-bold rounded-bl">
                        -25%
                      </div>
                    </div>
                    <div className="flex flex-col w-full justify-between py-1">
                      <div className="text-sm text-gray-800 line-clamp-2 group-hover:text-black transition-colors">
                        Awesome comfortable running shoes for men
                      </div>
                      <div className="text-black font-medium tracking-tight">₱299</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
          </div>
          <div className="border-t lg:border-t-0 pt-6 lg:pt-0">
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-xs">Follow Us</h4>
            <ul className="text-gray-500 space-y-3 text-xs">
              <li>
                <a href="#" className="hover:text-black transition-colors flex items-center gap-3">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors flex items-center gap-3">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors flex items-center gap-3">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
