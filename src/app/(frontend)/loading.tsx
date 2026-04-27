'use client'

import { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  useEffect(() => {
    // Standard instant scroll
    window.scrollTo(0, 0)

    // Optional: Smooth scroll
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6">
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        {/* Header Skeleton */}
        <header className="bg-neutral-950 sticky top-0 z-50">
          <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-4 py-1">
            <Skeleton width={300} height={16} baseColor="#3f3f46" highlightColor="#52525b" />
            <Skeleton width={200} height={16} baseColor="#3f3f46" highlightColor="#52525b" />
          </div>
          <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <Skeleton
                circle
                width={48}
                height={48}
                baseColor="#3f3f46"
                highlightColor="#52525b"
              />
              <div className="hidden md:block">
                <Skeleton width={120} height={28} baseColor="#3f3f46" highlightColor="#52525b" />
              </div>
            </div>
            <div className="grow max-w-3xl flex flex-col pt-1">
              <Skeleton height={40} baseColor="#3f3f46" highlightColor="#52525b" />
            </div>
            <Skeleton
              circle
              width={32}
              height={32}
              baseColor="#3f3f46"
              highlightColor="#52525b"
              className="shrink-0"
            />
          </div>
        </header>

        {/* Main Content Skeleton */}
        <main className="grow max-w-7xl mx-auto w-full px-0 md:px-4 py-4 space-y-4">
          {/* Banner Section Skeleton */}
          <section className="bg-white rounded-none md:rounded flex flex-col md:flex-row gap-2 shadow-sm p-4 h-auto md:h-[240px]">
            <div className="w-full md:w-2/3 h-[150px] md:h-full relative overflow-hidden">
              <Skeleton
                containerClassName="block h-full w-full"
                className="h-full absolute inset-0"
              />
            </div>
            <div className="hidden md:flex w-1/3 flex-col gap-2">
              <div className="flex-1 relative">
                <Skeleton
                  containerClassName="block h-full w-full"
                  className="h-full absolute inset-0"
                />
              </div>
              <div className="flex-1 relative">
                <Skeleton
                  containerClassName="block h-full w-full"
                  className="h-full absolute inset-0"
                />
              </div>
            </div>
          </section>

          {/* Categories Section Skeleton */}
          <section className="bg-white rounded-none md:rounded shadow-sm p-4">
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-y-6 gap-x-2">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-start ${i >= 8 ? 'hidden lg:flex' : ''}`}
                >
                  <div className="mb-2">
                    <Skeleton circle width={48} height={48} />
                  </div>
                  <Skeleton width={60} height={12} />
                </div>
              ))}
            </div>
          </section>

          {/* Big Categories Grid Section Skeleton */}
          <section className="bg-white rounded-none md:rounded shadow-sm mt-4 relative">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <Skeleton width={120} height={24} />
            </div>
            <div className="overflow-hidden py-2 px-2 md:px-0">
              <div className="grid grid-rows-2 grid-flow-col auto-cols-[100px] md:auto-cols-[160px] gap-px bg-gray-100 border border-gray-100">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white flex flex-col items-center justify-center p-3 h-[120px] md:h-[160px] border-r border-b border-gray-100"
                  >
                    <div className="mb-3">
                      <Skeleton circle width={60} height={60} />
                    </div>
                    <Skeleton width={80} height={14} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Flash Deals Section Skeleton */}
          <section className="bg-white rounded-none md:rounded shadow-sm">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-4">
                <Skeleton width={150} height={32} />
                <Skeleton width={100} height={24} />
              </div>
              <Skeleton width={80} height={20} />
            </div>
            <div className="p-4 flex overflow-hidden gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="min-w-[120px] md:min-w-[160px] shrink-0">
                  <div className="aspect-square relative p-2 border border-gray-100 rounded">
                    <Skeleton
                      containerClassName="block h-full w-full"
                      className="h-full absolute inset-0"
                    />
                  </div>
                  <div className="mt-2 text-center flex flex-col items-center">
                    <Skeleton width={80} height={24} className="mb-1.5" />
                    <Skeleton width={100} height={16} className="rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Daily Discover Grid Skeleton */}
          <section className="bg-transparent mt-4">
            <div className="flex bg-white sticky top-[60px] md:top-[84px] z-40 border-b shadow-sm rounded-t">
              <div className="flex-1 py-4 flex justify-center border-b-4 border-gray-200">
                <Skeleton width={120} height={24} />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded border border-gray-100 overflow-hidden flex flex-col h-full shadow-sm"
                >
                  <div className="aspect-square relative w-full bg-gray-50 shrink-0 p-2">
                    <Skeleton
                      containerClassName="block h-full w-full"
                      className="h-full absolute inset-0"
                    />
                  </div>
                  <div className="p-2.5 flex flex-col grow">
                    <Skeleton count={2} height={16} className="mb-2" />
                    <div className="flex gap-1 mb-2">
                      <Skeleton width={40} height={16} />
                      <Skeleton width={50} height={16} />
                    </div>
                    <div className="mt-auto flex justify-between items-center">
                      <Skeleton width={60} height={24} />
                      <Skeleton width={40} height={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer Skeleton */}
        <footer className="bg-white mt-8 border-t py-12 px-4 md:px-0">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={
                  i === 2
                    ? 'col-span-2 md:col-span-1 border-t md:border-t-0 pt-6 md:pt-0'
                    : i >= 3
                      ? 'border-t lg:border-t-0 pt-6 lg:pt-0'
                      : ''
                }
              >
                <Skeleton width={120} height={20} className="mb-4" />
                <div className="space-y-2.5">
                  {[...Array(5)].map((_, j) => (
                    <Skeleton key={j} width={j % 2 === 0 ? 100 : 140} height={16} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </SkeletonTheme>
  )
}
