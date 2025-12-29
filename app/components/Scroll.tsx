'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Scroll = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const container = containerRef.current
        const scrollContainer = scrollContainerRef.current

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
                ref={scrollContainerRef} 
                className="flex h-screen w-full"
            >
                {/* Panel 1 - Red */}
                <div className="w-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <h1 className="text-white text-6xl font-bold">RED PANEL 1</h1>
                </div>
            </div>
        </div>
    )
}

export default Scroll