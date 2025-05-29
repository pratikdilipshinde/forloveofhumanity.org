import React from "react";
import { FaHeart, FaArrowRight, FaQuoteRight, FaStar } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
            <div className="absolute bottom-0 left-0 w-full h-full opacity-90 mb-[-30px] bg-[url('/vector-img.png')] bg-repeat-x bg-bottom z-10"></div>

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
                        <p className="text-[#fcb12f] text-2xl font-bold">Dir. Robin Perez</p>  
                    </div>

                    {/* Column 2: Under Construction */}
                    <div className="flex items-start justify-center sm:mt-6 md:mt-10">
                        <button className="bg-[#f53756] hover:bg-[#c02b44] text-white text-3xl px-6 py-3 font-bold rounded-full ">
                            Under Construction
                        </button>
                    </div>

                    {/* Column 3: Image + Quote */}
                    <div className="flex flex-col items-center justify-center sm:mt-10 md:mt-[-100px]">
                        <p className="text-[#27c0ce] text-4xl font-bold pb-6">
                            Support Noble Cause
                        </p>
                        <Image
                        src="/about-2-img.jpg"
                        alt="Inspiration"
                        width={200}
                        height={200}
                        className="rounded-full mb-4 sm:py-4"
                        />
                        
                    </div>
                </div>
            </div>
        </section>
        <footer className="bg-[#d4e1ff] text-gray-900 py-10 px-6 md:px-16 lg:px-32">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Contact Information */}
            <div>
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-gray-900">📍 Los Angeles, California, USA</p>
                <p className="text-gray-900">📞 +1 818 613 9722 | +1 206 617 2625</p>
                
                {/* <p className="text-gray-100">📞 Phone: +91 98765 43210</p> */}
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col items-center">
                <p className="text-gray-900 text-center md:text-center mt-4">
                    © For Love of Humanity <br /> All Rights Reserved
                </p>
                <div className="flex space-x-4">
                
                </div>
            </div>

            {/* Copyright Section */}
            <div className="flex flex-col items-end justify-end md:justify-end">
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-gray-900">📧 mguleria@yahoo.com</p>
                <p className="text-gray-900">📧 robinangelaperez@gmail.com</p>
                
            </div>

            </div>
        </footer>
    </>
  );
}