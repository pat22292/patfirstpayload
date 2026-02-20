"use client";

import { useEffect, useRef, useState } from "react";
import gsap from 'gsap'

type Product = {
  createdAt: string
  updatedAt: string
  alt: string
  url: string
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
  interval?: number // milliseconds
}

export default function HeroSliderAutomatic({ slides,interval = 5000,}: Props) {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const timerRef = useRef<gsap.core.Tween | null>(null);

  const [active, setActive] = useState(0);

  // initial state
  useEffect(() => {
    if (!slidesRef.current.length) return;

    gsap.set(slidesRef.current, { autoAlpha: 0 });
    gsap.set(slidesRef.current[0], { autoAlpha: 1 });
  }, []);

  // transition animation
  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;

      if (index === active) {
        gsap.fromTo(
          slide,
          { autoAlpha: 0, scale: 1.05 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
      } else {
        gsap.to(slide, {
          autoAlpha: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    });
  }, [active]);

  // ✅ GSAP automatic transition
  useEffect(() => {
    if (slides.length <= 1) return;

    const play = () => {
      timerRef.current = gsap.delayedCall(interval / 1000, () => {
        setActive((prev) => (prev + 1) % slides.length);
        play();
      });
    };

    play();

    return () => {
      timerRef.current?.kill();
      timerRef.current = null;
    };
  }, [slides.length, interval]);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => {
            if (el) slidesRef.current[index] = el
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={`${slide.url}`}
            alt={slide.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 text-center text-white px-6">
            

            {/* {slide.height && <p className="mt-4 text-lg md:text-xl">{slide.width}</p>} */}
          </div>

          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
    </div>
  )
}
