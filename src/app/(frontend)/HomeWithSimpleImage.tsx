'use client'

import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HomePageClient from './homePageView'

const HomeWithSimpleImage = () => {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef<HTMLInputElement>(null)

  // useGSAP(
  //     () => {

  //       gsap.to(".slanted-image", {
  //         scrollTrigger: {
  //           markers: true,
  //           trigger: ".slanted-image",
  //           scrub: true,
  //           pin: true,
  //           start: 'top top', // Start animation when the top of the trigger hits the center of the viewport
  //           end: '+=70%' , // End animation when the bottom of the trigger hits the top of the viewport
  //     },
  //         // scaleX: 50,
  //         // transformOrigin: "left center",
  //         rotate : .15,
  //         translateY: "+=185%",
  //         scale:6,
  //         ease: " slow.power1",
  //         // toggleClass: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",

  //         // stagger: 1
  //       });

  //     }, { scope: ref })
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          // trigger: ".slanted-image",
          scrub: true,
          pin: true,
          start: 'top top', // Start animation when the top of the trigger hits the center of the viewport
          end: `${window.innerHeight / 2}`, // End animation when the bottom of the trigger hits the top of the viewport
        },
      })

      tl.to('.slanted-image', {
        // rotate : .15,
        translateY: `${window.innerHeight * 0.75}`,
        // scale:6,
        stagger: 1,
        ease: 'expoScale(0.5,7,none)',
        duration: 5,
      })

      if (ScrollTrigger.isTouch === 1) {
        tl.to('.slanted-image', {
          rotate: 0.15,
          // translateY: "+=550%",
          scale: `${(window.innerWidth / window.innerHeight) * 3}`,
          ease: 'expoScale(0.5,7,none)',
          duration: 5,
          stagger: 1,
        })
      } else {
        tl.to('.slanted-image', {
          rotate: 0.15,
          // translateY: "+=550%",
          scale: `${(window.innerWidth / window.innerHeight) * 2.9}`,
          ease: 'expoScale(0.5,7,none)',
          duration: 5,
          stagger: 1,
        })
      }

      // tl.to(".slanted-image", {
      //   // rotate : .15,
      //   translateY:  `${window.innerHeight} `,
      //   // scale:6,
      //   ease: "ease.inOut",
      //   duration: 5,
      // })
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className="">
      <section className=" flex w-full h-screen items-center justify-center ">
        <div
          id="bannerText"
          className=" flex-col font-[anton] text-center leading-[.9] sm:text-[200px] md:text-[200px] text-[100px] text-[#1ce585] text-shadow-lg/20"
        >
          <span className="-z-10 ">TIME TO MEET</span>
          <br />

          <span className="z-50 relative">YOUR SUCCESS</span>
        </div>
      </section>
      <section className=" flex w-full h-screen items-center justify-center">
        {/* <img className='slanted-image w-[300] h-[180] z-0 object-cover  mx-auto absolute -rotate-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src="/pexels-divinetechygirl-1181675.jpg" alt="Image" /> */}
        {/* <iframe
        src={`https://res.cloudinary.com/dgd6bxkak/video/upload/v1773197174/5240956-hd_1920_1080_30fps_cgbjy0.mp4`}
        title="YouTube video player"
        className='slanted-image w-[300] h-[180] z-0 object-cover  mx-auto absolute -rotate-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        allow="autoplay; mute; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
        <video
          className="slanted-image  shadow-sm shadow-black  sm:w-[300] sm:h-[180] w-[300] h-[300] sm:scale-100 scale-40 z-0 object-cover  mx-auto absolute -rotate-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          autoPlay
          muted
          loop
        >
          <source
            src={`https://res.cloudinary.com/dgd6bxkak/video/upload/v1773213492/14482698_1920_1080_25fps_hezkzr.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>
      <HomePageClient />

      {/* <section className=' w-full h-screen  flex items-center justify-center'>
<h1>Next.js</h1>
    </section> */}
    </div>
  )
}

export default HomeWithSimpleImage
