import React from "react";
import "swiper/css";
import "swiper/css/pagination";

export default function Footer() {
  return (
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
                <p className="text-gray-900 text-center md:text-center mt-4">
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
  );
}