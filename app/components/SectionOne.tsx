// components/SectionOne.tsx
import Image from "next/image"
const SectionOne = () => {
    return (
        <div className="h-screen flex w-screen relative">
            {/* First Div - Full Height */}
            <div className="w-[37%] h-full bg-[#CACACA] pl-[80px] py-[80px] relative -z-10">
                <h1 className="font-general font-medium text-[#D05700] text-[40px] leading-[60px]">/ / User Interface & <br /> Experience Designer / /</h1>
                <div className="flex flex-col text-[#333] text-[20px] bottom-20 absolute gap-[12px]">
                    <p>Linkedin</p>
                    <p>Behance</p>
                    <p>@27rarp@gmail.com</p>
                </div>
            </div>

            {/* Second Div - Full Height */}
            <div className="w-[25%] h-full bg-black relative">
                {/* Image positioned absolutely to span across divs */}
                <div className="relative inset-0 w-[700px] h-full -translate-x-[100px]">
                    <Image src="/image.png" alt="Image" fill className="object-cover" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-[#111] font-general text-[108px] font-semibold leading-normal whitespace-nowrap">RANJEET RAJPUROHIT</h1>
                    </div>
                </div>
            </div>
            {/* Third Div - Full Height */}
            <div className="w-[37%] h-full bg-[#CACACA] pr-[80px] py-[80px] relative -z-10">
                <div className="text-[#333] text-right text-[24px] flex flex-col gap-[12px]">
                    <p>@Me</p>
                    <p>Projects</p>
                    <p>Connect Now</p>
                    <div className="absolute  bottom-20 text-[#333] text-[24px] right-[80px]">
                        <p>Illusion or what</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne