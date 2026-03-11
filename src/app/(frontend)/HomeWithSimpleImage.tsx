'use client'


import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const HomeWithSimpleImage = () => {

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef<HTMLInputElement>(null);

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
let tl = gsap.timeline({
  scrollTrigger: {
    // markers: true,
    // trigger: ".slanted-image",
    scrub: true,
    pin: true,
    start: 'top top', // Start animation when the top of the trigger hits the center of the viewport
    end: `${window.innerHeight  }` , // End animation when the bottom of the trigger hits the top of the viewport
  }
});

tl.to(".slanted-image", {
  // rotate : .15,
  translateY: "+=480%",
  // scale:6,
  ease: "ease.inOut",
  duration: 5,
})
tl.to(".slanted-image", {
  rotate : .15,
  // translateY: "+=550%",
  scale:5,
  ease: " ease.inOut",
  duration: 5,
})

        }, { scope: ref })


  return (
    <div ref={ref} className='bg-[#00592b]'>
    <section  className=' flex w-screen h-screen  items-center justify-center '>

      

        <div className=' flex-col font-[anton] text-center leading-[.9] text-[200px] text-[#1ce585]'>
 <span className='-z-10 text-shadow-lg/20' >TIME TO MEET</span><br/>

        <span className='z-50 relative text-shadow-lg/20'>YOUR SUCCESS</span>
        </div>
       
    </section>
    <section className=' flex w-screen h-screen  items-center justify-center'>
         {/* <img className='slanted-image w-[300] h-[180] z-0 object-cover  mx-auto absolute -rotate-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src="/pexels-divinetechygirl-1181675.jpg" alt="Image" /> */}
       {/* <iframe
        src={`https://res.cloudinary.com/dgd6bxkak/video/upload/v1773197174/5240956-hd_1920_1080_30fps_cgbjy0.mp4`}
        title="YouTube video player"
        className='slanted-image w-[300] h-[180] z-0 object-cover  mx-auto absolute -rotate-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        allow="autoplay; mute; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
        <video className='slanted-image shadow-lg shadow-black  w-[300] h-[180] z-0 object-cover  mx-auto absolute -rotate-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' autoPlay muted loop>
          <source src={`https://res.cloudinary.com/dgd6bxkak/video/upload/v1773213492/14482698_1920_1080_25fps_hezkzr.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>x
         
    </section>
    <section className=' w-screen h-screen  flex items-center justify-center'>
<h1>Next.js</h1>
    </section>
      </div>
  )
}

export default HomeWithSimpleImage