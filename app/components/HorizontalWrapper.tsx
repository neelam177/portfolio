'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'

const HorizontalWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // 🔹 refresh pe hamesha top
    window.scrollTo(0, 0)

    const container = containerRef.current
    const scrollContainer = trackRef.current

    if (container && scrollContainer) {
      const scrollTween = gsap.to(scrollContainer, {
        xPercent: -100,
        x: () => window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => "+=" + scrollContainer.offsetWidth + "px",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      })

      return () => {
        scrollTween.kill()
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <div
        ref={trackRef}
        className="flex h-full"
        style={{ width: '300vw' }}
      >
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  )
}

export default HorizontalWrapper
