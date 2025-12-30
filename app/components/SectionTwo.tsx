// components/SectionOne.tsx
'use client'
import { useRef } from 'react'
const SectionTwo = () => {
    const revealRef = useRef<HTMLDivElement>(null)
    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = revealRef.current
        if (!el) return

        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const mask = `radial-gradient(
      circle 160px at ${x}px ${y}px,
      rgba(255,255,255,1) 0%,
      rgba(255,255,255,0.7) 45%,
      rgba(255,255,255,0) 70%
    )`

        el.style.maskImage = mask
            ; (el.style as any).webkitMaskImage = mask
    }

    const handleLeave = () => {
        const el = revealRef.current
        if (!el) return

        const hideMask = `radial-gradient(
      circle 0px at 50% 50%,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0) 100%
    )`

        el.style.maskImage = hideMask
            ; (el.style as any).webkitMaskImage = hideMask
    }

    return (
        <div className="w-screen h-screen bg-black">
            <div className="max-w-7xl mx-auto py-[80px]">
                <div className="text-[#333] text-right text-[24px] flex flex-col gap-[12px]">
                    <p className="text-[#D05700]">@Me</p>
                    <p>Projects</p>
                    <p>Connect Now</p>
                </div>
                <div
                    className="relative mt-[70px] cursor-none"
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                >
                    {/* Base text - always visible in dark gray */}
                    <div className="text-[40px] text-[#111] font-semibold leading-snug">
                        <p className="text-right">Lorem ipsum dolor sit amet consectetur. Tortor</p>
                        <p>tincidunt vitae sit a diam massa diam eget. Tristique
                            lobortis id pulvinar donec egestas convallis malesuada ridiculus. Urna morbi ultrices libero ut elit enim
                            euismod turpis consectetur. </p>
                    </div>

                    {/* Orange overlay text - initially completely hidden */}
                    <div
                        ref={revealRef}
                        className="absolute inset-0 text-[40px] font-semibold text-[#D05700] leading-snug pointer-events-none"
                        style={{
                            maskImage: 'radial-gradient(circle 0px at 50% 50%, white 0%, transparent 0%)',
                            WebkitMaskImage: 'radial-gradient(circle 0px at 50% 50%, white 0%, transparent 0%)'
                        }}
                    >
                        <p className="text-right">Lorem ipsum dolor sit amet consectetur. Tortor</p>
                        <p>tincidunt vitae sit a diam massa diam eget. Tristique
                            lobortis id pulvinar donec egestas convallis malesuada ridiculus. Urna morbi ultrices libero ut elit enim
                            euismod turpis consectetur. </p>
                    </div>
                </div>
                <div className="mt-[60px] max-w-[468px] ml-auto">
                    <p className="text-[#999] text-[20px] leading-[30px]">Lorem ipsum dolor sit amet consectetur. Tortor tincidunt vitae sit a diam massa diam eged aliquet.
                        Lorem ipsum dolor sit amet consectetur.
                        Tortor tincidunt vitae sit a diam massa diam eged aliquet.</p>
                    <div className="mt-[35px]">

                        <button className="text-[#999999] rounded-[100px] border border-[#666] bg-[#111] px-6 py-2">
                            See my world
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo


// 'use client'
// import { useRef } from 'react'

// const SectionTwo = () => {
//   const revealRef = useRef<HTMLDivElement>(null)

//   const handleMove = (e: React.MouseEvent) => {
//     const el = revealRef.current
//     if (!el) return

//     const rect = el.getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top

//     const mask = `radial-gradient(
//       circle 160px at ${x}px ${y}px,
//       rgba(255,255,255,1) 0%,
//       rgba(255,255,255,0.6) 40%,
//       rgba(255,255,255,0) 70%
//     )`

//     el.style.maskImage = mask
//     el.style.webkitMaskImage = mask
//   }

//   const handleLeave = () => {
//     const el = revealRef.current
//     if (!el) return
//     el.style.maskImage = 'none'
//     el.style.webkitMaskImage = 'none'
//   }

//   return (
//     <div
//       className="relative mt-[70px] cursor-none"
//       onMouseMove={handleMove}
//       onMouseLeave={handleLeave}
//     >
//       {/* Base dark text */}
//       <div className="text-[40px] text-[#222] font-semibold text-right leading-snug">
//         <p>Lorem ipsum dolor sit amet consectetur. Tortor</p>
//         <p>
//           tincidunt vitae sit a diam massa diam eget. Tristique
//           lobortis id pulvinar donec egestas convallis malesuada
//           ridiculus. Urna morbi ultrices libero ut elit enim
//           euismod turpis consectetur.
//         </p>
//       </div>

//       {/* Reveal spotlight text */}
//       <div
//         ref={revealRef}
//         className="absolute inset-0 text-[40px] font-semibold text-[#D05700] text-right leading-snug pointer-events-none"
//       >
//         <p>Lorem ipsum dolor sit amet consectetur. Tortor</p>
//         <p>
//           tincidunt vitae sit a diam massa diam eget. Tristique
//           lobortis id pulvinar donec egestas convallis malesuada
//           ridiculus. Urna morbi ultrices libero ut elit enim
//           euismod turpis consectetur.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default SectionTwo
