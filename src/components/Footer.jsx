import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function Footer() {
  return (
    <>
        <section className="bg-[#25a3d6] text-gray-900 font-bold py-4 px-1 md:px-4 lg:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <p className="">Sect. Kavita Singh</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="">CEO Mini Guleria</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="">Dir. Lalita Jaswal</p>
                </div>
                
            </div>
        </section>
    
    <footer className="bg-[#d4e1ff] text-gray-900 py-10 px-6 md:px-16 lg:px-32">
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Contact Information */}
            <div className="flex flex-col items-center justify-center md:justify-start md:items-start">
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-gray-900">📍 Los Angeles, California, USA</p>
                <p className="text-gray-900">📞 +1 818 613 9722</p>
                
                {/* <p className="text-gray-100">📞 Phone: +91 98765 43210</p> */}
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col items-center">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                />
                
                <p className="text-gray-900 text-center md:text-center mt-1">
                    © For Love of Humanity <br /> All Rights Reserved
                </p>
                <div className="flex space-x-4">
                
                </div>
            </div>

            {/* Copyright Section */}
            <div className="flex flex-col items-center justify-center md:justify-end md:items-end">
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-gray-900">📧 mguleria@yahoo.com</p>
                {/* <p className="text-gray-900">📧 robinangelaperez@gmail.com</p> */}
                
            </div>

            </div>
        </footer>
    </>
  );
}