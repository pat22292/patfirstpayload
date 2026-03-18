'use client'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin'

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function xHomePageClient() {
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
              end: `${window.innerHeight * 10 }`, // Adjust end point based on viewport height
                        },
            scaleX: 0, 
            transformOrigin: "left center", 
            ease: "none",
            stagger: 1
          });
         
              gsap.to('.greetext', {
       scrollTrigger: {
             
              trigger: ".greetext",
              scrub: true,
              // pin: true,
              start: "top top",
            },
            duration: 1500,
             ease: "slow",
            text: "We have a",
            stagger: 1
          });

               gsap.to("#typeWriterText", {
            scrollTrigger: {
             
              trigger: "#typeWriterText",
              toggleClass: "sm:-translate-x-1/2",
              scrub: true,
              // pin: true,
              // start: "+0%",
            },
            duration: 20,
            ease: "none",
            stagger: 1
          });

                 gsap.to(".textKo", {
            scrollTrigger: {
              trigger: ".textKo",
              scrub: true,
              // pin: true,
              start: `+=${window.innerHeight * 1}%`,
              end: "+=150%"
            },
            duration:20,
            text: " Designer.",
            ease: "slow",
            stagger: 1
          });
           gsap.to(".textKo", {
            scrollTrigger: {
              trigger: ".textKo",
              scrub: true,
              // pin: true,
              start: `+${window.innerHeight * 2}%`,
              end: "+=150%"
            },
            duration: 20,
            text: " Web/API Dev.",
            ease: "slow",
            stagger: 1
          });
           gsap.to(".textKo", {
            scrollTrigger: {
              trigger: ".textKo",
              scrub: true,
              // pin: true,
              start: `+${window.innerHeight * 3}%`,
              end: "+=50%"
            },
            duration: 1,
            text: " Mobile Dev.",
            ease: "slow",
            stagger: 1
          });

              gsap.from(".slanted-text", {
            scrollTrigger: {
              markers: true,
              trigger: ".slanted-text",
              scrub: true,
              // pin: true,
              start: "bottom bottom",
              end: "+=50%",
            },
            duration: 500,
            translateX: "-70%",
            ease: "slow",
            stagger: 1
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
   <section  className="panel orange text-gray-900 sm:grid sm:grid-cols-2   h-screen justify-center items-center ">
     
      <div className='text-center sm:col-span-1 flex items-center justify-center'>
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
  <div id='typeWriterText' className='text-center transition-transform duration-300 ease-in-out  sm:-translate-x-1/2  md:col-span-1 col-span-1   content-center place-items-center h-screen justify-center items-center  '>

    <div className='whole-text  h-screen flex items-center justify-center  '>
    
      <h1 className='font-[roboto] sm:text-[200px] md:text-[150px] text-[100px] text-[#1ce585] font-black leading-40  drop-shadow-xl md:inline-block'>
        <span className="greetext  font-black "> Hi! We're a team.</span>
         <span className="textKo  font-black ">  </span>
      {/* <span className="blinking-cursor">|</span> */}
      {/* <button onClick={() => {console.log(window.innerHeight)}} className='text-2xl font-extrabold drop-shadow-xl inline-block '>Click Me
     </button> */}
      </h1>
    

      {/* <h1  className='text-2xl font-extrabold drop-shadow-xl md:hidden inline-block '>Hi, I can be a  
        
        <span className="textKoSM text-2xl font-extrabold">  </span>
     <span className="blinking-cursor">|</span>
     </h1> */}

    </div>
    <span className="line line-2  "></span>
     <div className='md:flex col-span-1 hidden flex-col h-screen justify-center items-center  mx-32'>
    
   
    {/* <span className=' '>


    This orange panel gets pinned when its top edge hits the top of the viewport, then the line's animation is linked with the scroll position until it has traveled 100% of the viewport's height (<code>end: "+=100%"</code>), then the orange panel is unpinned and normal scrolling resumes. Padding is added automatically to push the rest of the content down so that it catches up with the scroll when it unpins. You can set <code>pinSpacing: false</code> to prevent that if you prefer.
    </span> */}
    </div> 
    </div>
  </section>
  
  <section className='slante-text-container     h-screen relative  '>

 


      <div className='relative w-full  h-screen bg-transparent overflow-hidden flex items-center justify-center '>
      <div className= 'absolute h-25 w-[150%] -top-.5 z-50  -rotate-6  opacity-80  bg-[#1ce585]  flex items-center justify-center ' >
<h1 className='slanted-text text-[#00592b] text-6xl  font-[roboto] font-black '>ALL YOU BEEN LOOKING FOR A WEBSITE IS WE MAKE CHEAPER YET AWESOME!</h1>
      </div>
{/* <svg className='absolute w-[200%]  text-blue-500 opacity-80 z-50'  width="4966" height="1333" viewBox="0 0 4966 1333" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="4997.65" height="341.714" transform="matrix(0.979873 -0.19962 -0.19962 -0.979873 68.2129 1332.46)" fill="black"/>
<rect x="10" y="10" width="180" height="100" fill="#4CAF50" stroke="black" strokeWidth="2" />
  <text 
    x="1000" 
    y="65" 
    fontFamily="Arial, sans-serif" 
    fontSize="20" 
    fill="white" 
    textAnchor="middle" 
    dominantBaseline="middle">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maiores ab consequatur? Ipsam at necessitatibus facilis. Enim dolorem quisquam saepe? Tenetur, nobis. Eaque incidunt nemo debitis. Ipsum incidunt modi cumque.

  </text>
</svg> */}


        </div>


{/* <span className='text-8xl  w-[500%]   text-white  font-black text-center'>THIS IS A COOL APP FROM MY PREVIOUS PROJECTS.</span> */}
    
    
   
</section>
  </div>
)
}