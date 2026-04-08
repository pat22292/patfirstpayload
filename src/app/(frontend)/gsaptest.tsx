'use client'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin'

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const GsapTest = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    const ref = useRef<HTMLInputElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    

    useEffect(() => {
        const handleResize = () => {
          setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        handleResize(); // Initial set
        // window.addEventListener('resize', handleResize);
        // return () => window.removeEventListener('resize', handleResize);
      }, []);
     
           useGSAP(
        () => {
          var tl = gsap.timeline({
              scrollTrigger: {
                trigger: ".first-section",
                // markers: true,
                scrub: true,
                pin: true,
                start: 'bottom bottom',
                end: "+=300%",
              },
             ease: "power1.out",
         stagger: 1
            });
           
               tl.from(".first-section", {rotate: 30, autoAlpha: 0, duration: 500},1)
               .to(".first-section", {rotate: 0, autoAlpha: 1, duration: 500}, 1);

          },
        { scope: ref }
      );
  return (
    <div ref={ref} >
      <section className='first-section flex items-center self-center origin-center justify-center w-screen h-screen bg-amber-600'>
        <h1 className="greetext text-8xl font-extrabold"> First Section</h1>
        <div className="orange scale-">
          <div className="line-2"></div>
        </div>
        <h1 id="typeWriterText"></h1>
      </section>
    </div>
  );
};

export default GsapTest;