import React from 'react';
import Marquee from "react-fast-marquee";
import { FaFacebook, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from '../assets/madraha_logo-removebg-preview.png'
const Admission = () => {
    return (
        <div className='my-4 flex flex-col items-center'>
            {/* Marquee for Admission Announcement */}
            <Marquee 
                pauseOnHover={true} 
                speed={90} 
                delay={0}  
                className='text-2xl md:text-3xl text-white bg-red-600 py-3 px-6 rounded-md font-semibold shadow-md w-full'
            >
                ভর্তি চলছে! কোরআন শিক্ষা বিভাগ, কিতাব বিভাগ, মাদানী নেসাব
            </Marquee>

            {/* Video & Information Section */}
            <div className='grid grid-cols-4 gap-6 mt-6 w-full px-4 md:px-12'>
                {/* Address & Social Links */}
                <div className='col-span-4 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left bg-gray-900 text-white p-6 rounded-lg shadow-lg'>
                    {/* Logo & Address */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />
                        <p className="text-lg font-semibold">মারকাযুল উলূম নৈশ মাদরাসা</p>
                        <p className="text-sm text-gray-300">
                            ১-ডি/৬-এফ, পাওয়ার হাউস, ওয়াপদা রোড, পশ্চিম রামপুরা, ঢাকা।
                        </p>
                        <p className="text-sm text-gray-300">
                            বাংলাদেশ কওমী মাদরাসা শিক্ষা বোর্ড (বেফাকুল মাদারিসিল আরাবিয়াহ) ও হাইয়াতুল উলইয়া কর্তৃক নিবন্ধিত।
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="mt-4 flex flex-col items-center md:items-start">
                        <h1 className="text-lg font-semibold mb-2">বিস্তারিত জানতে ভিজিট করুন</h1>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1AKEB2dger/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} className="cursor-pointer hover:text-gray-300" />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} className="cursor-pointer hover:text-gray-300" />
                            </a>
                            <a href="https://youtube.com/channel/UCVvTocZ-8LLscjNf2qav7hQ?si=TatCYF9m0o2c7On_" target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={24} className="cursor-pointer hover:text-gray-300 text-red-500" />
                            </a>
                            <a href="https://wa.me/8801918976686" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={24} className="cursor-pointer hover:text-gray-300 text-green-500" />
                            </a>
                        </div>
                    </div>
                    {/* Contact Info */}
                    <p className="text-sm text-gray-300 font-semibold mt-4">📞 মুফতি আফজাল হুসাইন ফারুকী</p>
                    <p className="text-sm text-gray-300">📱 ০১৯১৮-৯৭৬৬৮৬ | ০১৭৮৯-৪৮২৫৮৫</p>
                </div>

                {/* YouTube Video */}
                <div className='col-span-4 md:col-span-2 flex justify-center'>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/MfBM_9eFT48?si=R-gyDPNwdWkoNRMx" 
                        title="YouTube video player" 
                        className="rounded-lg shadow-lg w-full md:w-[560px] h-[315px]"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Admission;
