'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HorizontalScroll = () => {
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
        <div ref={containerRef} className="main-container h-screen overflow-hidden">
            <div 
                ref={scrollContainerRef} 
                className="extra-long-container flex h-full"
                style={{ width: '400vw' }} // 4 panels = 400vw
            >
                {/* Panel 1 - Blue */}
                <div className="w-screen h-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <h1 className="text-white text-6xl font-bold">BLUE PANEL 1</h1>
                </div>

                {/* Panel 2 - Green */}
                <div className="w-screen h-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <h1 className="text-white text-6xl font-bold">GREEN PANEL 2</h1>
                </div>

                {/* Panel 3 - Purple */}
                <div className="w-screen h-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <h1 className="text-white text-6xl font-bold">PURPLE PANEL 3</h1>
                </div>

                {/* Panel 4 - Pink */}
                <div className="w-screen h-full bg-pink-600 flex items-center justify-center flex-shrink-0">
                    <h1 className="text-white text-6xl font-bold">PINK PANEL 4</h1>
                </div>
            </div>
        </div>
    )
}

export default HorizontalScroll