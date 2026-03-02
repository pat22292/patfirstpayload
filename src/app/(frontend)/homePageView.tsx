'use client'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin'

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HomePageClient() {
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
       
          gsap.from(".line-2", {
            scrollTrigger: {
              // markers: true,
              trigger: ".orange",
              scrub: true,
              pin: true,
              start: "top top",
              end: `${window.innerHeight * 5  }`, // Adjust end point based on viewport height
                        },
            scaleX: 0, 
            transformOrigin: "left center", 
            ease: "none",
            stagger: 1
          });
         
              gsap.to('.greetext', {
       scrollTrigger: {
             
              trigger: ".greetext",
             markers: true,
              scrub: true,
              // pin: true,
              start: "top top",
            },
            duration: 1500,
             ease: "slow",
            text: "I can be your",
            stagger: 1
          });

               gsap.to("#typeWriterText", {
            scrollTrigger: {
             
              trigger: "#typeWriterText",
              toggleClass: "-translate-x-1/2",
              scrub: true,
              // pin: true,
              // start: "+0%",
            },
            duration: .05,
            ease: "slow",
            stagger: 1
          });

                 gsap.to(".textKo", {
            scrollTrigger: {
              trigger: ".textKo",
              scrub: true,
              // pin: true,
              start: `+=${window.innerHeight * 1}%`,
              end: "+=200%"
            },
            duration:.01,
            text: " Designer.",
            ease: "power2",
            stagger: 1
          });
           gsap.to(".textKo", {
            scrollTrigger: {
              trigger: ".textKo",
              scrub: true,
              // pin: true,
              start: `+=${window.innerHeight * 2}%`,
              end: "+=100%"
            },
            duration:.1,
            text: " Web/API Dev.",
            ease: "power2",
            stagger: 1
          });
           gsap.to(".textKo", {
            scrollTrigger: {
              trigger: ".textKo",
              scrub: true,
              // pin: true,
              start: `+=${window.innerHeight * 3}%`,
              end: "+=50%"
            },
            duration:.1,
            text: " Mobile Dev.",
            ease: "none",
          });
// ScrollTrigger.create({
// 	trigger: '#id',
// 	start: 'top top',
// 	endTrigger: '#otherID',
// 	end: 'bottom 50%+=100px',
// 	onToggle: (self) => console.log('toggled, isActive:', self.isActive),
// 	onUpdate: (self) => {
// 		console.log(
// 			'progress:',
// 			self.progress.toFixed(3),
// 			'direction:',
// 			self.direction,
// 			'velocity',
// 			self.getVelocity()
// 		);
// 	},
//     markers: true,
// });
        }, { scope: ref })
    

return (
  <div ref={ref}>
   <section  className="panel orange text-gray-900 md:grid md:grid-cols-2 hidden h-screen justify-center items-center ">
     
      <div className='text-center  md:col-span-1 col-span-1   flex items-center justify-center'>
        {/* <Image
                                            src="file.svg"
                                            // loader={imageLoader}
                                            width={1000}
                                            height={1000}
                                           quality={100}
                                            alt="Picture"
                                            className="w-96 my-image opacity-0"
                                        /> */}
      {/* <Image */}
      </div>
  <div id='typeWriterText' className='text-center transition-transform duration-300 ease-in-out  -translate-x-1/2  md:col-span-1 col-span-1   content-center place-items-center h-screen justify-center items-center  '>

    <div className='whole-text  h-screen flex items-center justify-center  '>
    
      <h1 className='text-8xl font-akshar     font-black  drop-shadow-xl md:inline-block hidden'>
        <span className="greetext font-akshar text-8xl   font-black "> Hi! I'm Patrick.</span>
         <span className="textKo font-akshar text-8xl   font-black ">  </span>
      <span className="blinking-cursor">|</span>
      <button onClick={() => {console.log(window.innerHeight)}} className='text-2xl font-extrabold drop-shadow-xl inline-block '>Click Me
     </button>
      </h1>
    

      <h1  className='text-2xl font-extrabold drop-shadow-xl md:hidden inline-block '>Hi, I can be a  
        
        <span className="textKoSM text-2xl font-extrabold">  </span>
     <span className="blinking-cursor">|</span>
     </h1>

    </div>
    <span className="line line-2  "></span>
     <div className='md:flex col-span-1 hidden flex-col h-screen justify-center items-center  mx-32'>
    
   
    {/* <span className=' '>


    This orange panel gets pinned when its top edge hits the top of the viewport, then the line's animation is linked with the scroll position until it has traveled 100% of the viewport's height (<code>end: "+=100%"</code>), then the orange panel is unpinned and normal scrolling resumes. Padding is added automatically to push the rest of the content down so that it catches up with the scroll when it unpins. You can set <code>pinSpacing: false</code> to prevent that if you prefer.
    </span> */}
    </div> 
    </div>
  </section>
  </div>
)
}