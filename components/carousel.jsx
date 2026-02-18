// components/ScrollCarousel.jsx
'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/dist/Observer'
import { useEffect, useState } from 'react'


// Register the plugin globally (or within useGSAP hook)
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer)

const ScrollCarousel = () => {
  const containerRef = useRef(null)
  const panels = useRef([])
  const [sections, setSections] = useState('')


  useEffect(() => {

    // This code runs only in the browser
    if (typeof document !== 'undefined') {
      // const myElement = document.getElementById('some-id')
      const sections = document.querySelectorAll('section')
      if (sections) {
        setSections(sections)
      }
    }
  }, []) // The empty dependency array ensures it runs once after mounting
  // useGSAP(() => {
  //   // Ensure ScrollTrigger is registered inside the context if preferred
  //   // gsap.registerPlugin(ScrollTrigger);
  //
  //   const panelsArr = gsap.utils.toArray(panels.current);
  //
  //   // Create the horizontal scroll effect
  //   gsap.to(panelsArr, {
  //     xPercent: -200 * (panelsArr.length - 1), // Move the full width of all but one panel
  //       trigger: ".scroll-container",
  //               scrub: true,
  //               pin: true,
  //               start: "top top",
  //               end: "+=100%"
  //
  //   });
  //
  // }, { scope: containerRef }); // Use the container ref as the scope

  let currentIndex = -1
  let animating

  const translateAmount = 30,
    rotateAmount = 10

  const wrap = gsap.utils.wrap(0, sections.length)

  const goTo = (index, direction = 'down') => {
    index = wrap(index)
    animating = true
    let leave, enter
    const defaultPos = { transform: 'none', autoAlpha: 1 }

    const tl = gsap.timeline({
      defaults: { duration: 0.75, ease: 'power2.inOut', autoAlpha: 0 },
      onComplete: () => {
        animating = false
      },
    })

    switch (direction) {
      // case 'up':
      //   leave = { yPercent: translateAmount, rotationX: -rotateAmount }
      //   enter = { yPercent: -translateAmount, rotationX: rotateAmount }
      //   break
      // case 'down':
      //   leave = { yPercent: -translateAmount, rotationX: rotateAmount }
      //   enter = { yPercent: translateAmount, rotationX: -rotateAmount }
      //   break
      case 'left':
        leave = { xPercent: -translateAmount, rotationY: -rotateAmount }
        enter = { xPercent: translateAmount, rotationY: rotateAmount }
        break
      case 'right':
        leave = { xPercent: translateAmount, rotationY: rotateAmount }
        enter = { xPercent: -translateAmount, rotationY: -rotateAmount }
        break
    }

    tl.fromTo(sections[index], enter, defaultPos)

    if (currentIndex > -1) {
      tl.to(sections[currentIndex], leave, 0).set(sections[currentIndex], { transform: 'none' })
    }

    currentIndex = index
  }

  function goToPanel(index) {
    animating = true
    gsap.to(window, {
      scrollTo: { y: index * innerHeight, autoKill: false },
      duration: 1,
      onComplete: () => (animating = false),
    })
    currentIndex = index
  }

  goTo(0)

  Observer.create({
    wheelSpeed: -1,
    tolerance: 20,
    // onDown: () => !animating && goTo(currentIndex - 1, 'up'),
    // onUp: () => !animating && goTo(currentIndex + 1, 'down'),
    onLeft: () => !animating && goTo(currentIndex + 1, 'left'),
    onRight: () => !animating && goTo(currentIndex - 1, 'right'),
    preventDefault: true,
  })
  // Helper function to add a ref to each panel element
  const addToPanels = (el) => {
    if (el && !panels.current.includes(el)) {
      panels.current.push(el)
    }
  }

  return (
    <div>
      <header>scroll &middot; drag &middot; swipe</header>
      <section>
        <div>1</div>
      </section>
      <section>
        <div>2</div>
      </section>
      <section>
        <div>3</div>
      </section>
      <section>
        <div>4</div>
      </section>
      <section>
        <div>5</div>
      </section>
    </div>
    // <div ref={containerRef} className="scroll-container h-screen w-screen flex flex-nowrap overflow-hidden">
    //   {/* Example Carousel Items (Panels) */}
    //   <div ref={addToPanels} className="panel w-screen h-screen bg-red-400 flex items-center justify-center text-4xl">
    //     Slide 1
    //   </div>
    //   <div ref={addToPanels} className="panel w-screen h-screen bg-blue-400 flex items-center justify-center text-4xl">
    //     Slide 2
    //   </div>
    //   <div ref={addToPanels} className="panel w-screen h-screen bg-green-400 flex items-center justify-center text-4xl">
    //     Slide 3
    //   </div>
    //   <div ref={addToPanels} className="panel w-screen h-screen bg-purple-400 flex items-center justify-center text-4xl">
    //     Slide 4
    //   </div>
    // </div>
  )
};

export default ScrollCarousel;
