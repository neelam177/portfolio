
'use client'
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Herosection = () => {
    // const containerRef = useRef<HTMLHeadingElement>(null);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)

    //    ScrollTrigger.create({
    //   trigger: document.body,
    //   start: "top top",
    //   end: "+=300px",
    //   pinSpacing: false,
    //   pin: containerRef.current,
    // })


    //     return () => ScrollTrigger.getAll().forEach(t => t.kill())
    // }, [])

    const [open, setOpen] = useState(false);
    return (

        <div className='bg-[#FFF0F0] h-screen relative z-10'>
            <div className="fixed w-full z-10">
                <div className='max-w-7xl mx-auto py-7 bg-[#FFF0F0]'>
                    <div className='justify-between flex items-center'>
                        <div className='h-12 w-[208px] relative'>
                            <Image src="/Logo.png" alt="Logo" fill className='object-contain' />
                        </div>
                        <button className="md:hidden p-2 gap-1.5 flex flex-col" onClick={() => setOpen(!open)}>
                            <span className={`w-6 h-0.5 bg-black block transition-transform duration-500  ${open ? "rotate-45 translate-y-2" : ""}`}></span>
                            <span className={`w-6 h-0.5 bg-black block transition-opacity duration-500 ${open ? "opacity-0" : ""}`}></span>
                            <span className={`w-6 h-0.5 bg-black block transition-transform duration-500 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
                        </button>
                        <div className='hidden md:block'>
                            <ul className='flex gap-3.5 text-black cursor-pointer text-[20px] font-semibold'>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Experience</a></li>
                                <li><a href="#">Education</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`md:hidden ${open ? "h-screen" : ""}`}>
                        <ul className="gap-3 text-black cursor-pointer text-[18px] font-semibold flex flex-col">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Experience</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Herosection