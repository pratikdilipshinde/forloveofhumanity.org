import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  return (
    <>
        {/* <section className="relative w-full bg-[#24304b] text-white overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/banner-bg-shape.svg')] bg-cover bg-center opacity-20 z-10"></div>
            
            <div className="absolute bottom-0 left-0 w-full h-full opacity-30 mb-[-30px] bg-[url('/vector-img.png')] bg-repeat-x bg-bottom z-10"></div>
            <div className="container mx-auto h-[600px] relative z-20">
                <div className="w-full space-y-6 z-20 top-0">
                    <Image
                        src="/logo-transparent-png.png"
                        width={300}
                        height={350}
                        alt="Logo"
                        className="relative z-20 object-cover rounded-full"
                    />
                </div>
            </div>
        </section> */}
        <section className="relative w-full bg-[#fcfdff] text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/banner-bg-shape.svg')] bg-cover bg-center opacity-60 z-0"></div>

            {/* Decorative Vector at Bottom */}
            {/* <div className="absolute bottom-0 left-0 w-full h-full opacity-90 mb-[-30px] bg-[url('/vector-img.png')] bg-repeat-x bg-bottom z-10"></div> */}

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center min-h-[100vh] px-4 text-center">
                <div className="">
                    <Image
                        src="/logo-transparent-png.png"
                        alt="Logo"
                        width={350}
                        height={350}
                        className="w-full h-auto object-contain"
                    />
                </div>
                {/* 3 Column Section */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 align-text-top">
                    {/* Column 1: Names */}
                    <div className="space-y-2 mx-auto sm:mt-10 md:mt-[-50px] sm:text-center md:text-left">
                        <p className="text-[#ffb22d] text-2xl font-bold">CEO Mini Guleria</p>
                        <p className="text-[#fcb12f] text-2xl font-bold">Sect. Kavita Singh</p>
                        <p className="text-[#fcb12f] text-2xl font-bold">Dir. Lalita Jaswal</p>
                        {/* <p className="text-[#fcb12f] text-2xl font-bold">Dir. Robin Perez</p>   */}
                    </div>

                    {/* Column 2: Under Construction */}
                    <div className="flex items-start justify-center mt-20 md:mt-10">
                        <button className="bg-[#f53756] hover:bg-[#c02b44] text-white text-3xl px-6 py-3 font-bold rounded-full ">
                            Under Construction
                        </button>
                    </div>

                    {/* Column 3: Image + Quote */}
                    <div className="flex flex-col items-center justify-center mt-24 md:mt-[-25px]">
                        <p className="text-[#27c0ce] text-4xl font-bold pb-6">
                            Support Noble Cause
                        </p>
                        {/* <Image
                        src="/about-2-img.jpg"
                        alt="Inspiration"
                        width={200}
                        height={200}
                        className="rounded-full mb-4 sm:py-4"
                        /> */}
                        
                    </div>
                </div>
            </div>
        </section>
        
    </>
  );
}