'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HorizontalScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // 🔹 refresh pe hamesha top
        window.scrollTo(0, 0)

        const ctx = gsap.context(() => {
            gsap.to(trackRef.current, {
                xPercent: -75, // 4 sections ke liye: -300/4 = -75%
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: () => '+=' + trackRef.current!.offsetWidth,
                    scrub: true,
                    pin: true,
                    invalidateOnRefresh: true,
                },
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className="h-screen overflow-hidden">
            <div
                ref={trackRef}
                className="flex h-full"
                style={{ width: '400vw' }} // 4 panels = 400vw
            >
                {/* Panel 1 - Blue */}
                <div className="w-screen h-screen bg-blue-600 flex items-center justify-center">
                    <h1 className="text-white text-6xl font-bold">BLUE PANEL 1</h1>
                </div>

                {/* Panel 2 - Green */}
                <div className="w-screen h-screen bg-green-600 flex items-center justify-center">
                    <h1 className="text-white text-6xl font-bold">GREEN PANEL 2</h1>
                </div>

                {/* Panel 3 - Purple */}
                <div className="w-screen h-screen bg-purple-600 flex items-center justify-center">
                    <h1 className="text-white text-6xl font-bold">PURPLE PANEL 3</h1>
                </div>

                {/* Panel 4 - Pink */}
                <div className="w-screen h-screen bg-pink-600 flex items-center justify-center">
                    <h1 className="text-white text-6xl font-bold">PINK PANEL 4</h1>
                </div>
            </div>
        </div>
    )
}

export default HorizontalScroll