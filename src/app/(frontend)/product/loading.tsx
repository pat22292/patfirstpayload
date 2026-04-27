'use client'

import { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SingleProductLoading() {
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
        <main className="max-w-6xl mx-auto w-full px-2 md:px-4 py-4 space-y-4">
          {/* Breadcrumb */}
          <div className="py-2">
            <Skeleton width={300} height={20} />
          </div>

          {/* Product Overview Section */}
          <section className="bg-white p-4 md:p-6 rounded shadow-sm flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Left: Images */}
            <div className="w-full lg:w-[450px] shrink-0 flex flex-col gap-3">
              <Skeleton className="aspect-square w-full" style={{ borderRadius: '0.25rem' }} />
              <div className="flex gap-2.5">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} width={80} height={80} style={{ borderRadius: '0.25rem' }} />
                ))}
              </div>
              <div className="mt-2 flex justify-center">
                <Skeleton width={250} height={20} />
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col grow pt-2">
              <Skeleton count={2} height={28} className="mb-2" />

              <div className="my-4">
                <Skeleton width={250} height={20} />
              </div>

              <div className="bg-orange-50/10 p-4 md:p-5 rounded mb-6 border border-gray-100">
                <Skeleton height={20} width={80} className="mb-2" />
                <Skeleton height={40} width={180} />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4 md:gap-8">
                  <Skeleton width={64} height={20} />
                  <Skeleton width={120} height={20} />
                </div>
                <div className="flex gap-4 md:gap-8">
                  <Skeleton width={64} height={20} />
                  <div className="flex flex-wrap gap-2.5">
                    {[...Array(8)].map((_, i) => (
                      <Skeleton key={i} width={60} height={32} />
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 md:gap-8">
                  <Skeleton width={64} height={20} />
                  <div className="flex flex-wrap gap-2.5">
                    {[...Array(5)].map((_, i) => (
                      <Skeleton key={i} width={40} height={32} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-8 mt-2">
                  <Skeleton width={64} height={20} />
                  <Skeleton width={120} height={32} />
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Skeleton width={160} height={48} />
                <Skeleton width={160} height={48} />
              </div>
            </div>
          </section>

          {/* Shop Info Section */}
          <section className="bg-white p-4 md:p-6 rounded shadow-sm flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-4 md:w-1/3 w-full">
              <Skeleton circle width={64} height={64} className="shrink-0" />
              <div className="flex flex-col grow">
                <Skeleton width={150} height={24} className="mb-1" />
                <Skeleton width={100} height={16} className="mb-2" />
                <div className="flex gap-2">
                  <Skeleton width={80} height={28} />
                  <Skeleton width={80} height={28} />
                </div>
              </div>
            </div>
            <div className="hidden md:flex border-l pl-8 grow justify-between">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <Skeleton width={120} height={20} />
                  <Skeleton width={120} height={20} />
                </div>
              ))}
            </div>
          </section>

          {/* Description Section */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-3/4 flex flex-col gap-4">
              <section className="bg-white p-4 md:p-6 rounded shadow-sm">
                <Skeleton width={200} height={24} className="mb-4" />
                <Skeleton count={4} height={20} className="mb-2" />
                <br />
                <Skeleton width={200} height={24} className="mb-4 mt-6" />
                <Skeleton count={8} height={20} className="mb-2" />
              </section>
            </div>
            <div className="hidden lg:block lg:w-1/4">
              <section className="bg-white p-4 rounded shadow-sm">
                <Skeleton width={150} height={20} className="mb-4" />
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-3 mb-4">
                    <Skeleton width={80} height={80} className="shrink-0" />
                    <div className="w-full">
                      <Skeleton count={2} height={16} />
                      <Skeleton width={60} height={20} className="mt-2" />
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </main>
      </div>
    </SkeletonTheme>
  )
}
