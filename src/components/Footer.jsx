import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/madraha_logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Logo & Address */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />
            <p className="text-lg font-semibold">মারকাযুল উলূম নৈশ মাদরাসা</p>
            <p className="text-sm text-gray-300">
              ১-ডি/৬-এফ, পাওয়ার হাউস, ওয়াপদা রোড, পশ্চিম রামপুরা, ঢাকা।
            </p>
            <p className="text-sm text-gray-300">
              বাংলাদেশ কওমী মাদরাসা শিক্ষা বোর্ড (বেফাকুল মাদারিসিল আরাবিয়াহ) ও
              হাইয়াতুল উলইয়া কর্তৃক নিবন্ধিত।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">দ্রুত লিঙ্কসমূহ</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Admission Information */}
          <div>
            <h2 className="text-lg font-semibold mb-3">ভর্তি চলছে!</h2>
            <p className="text-sm text-gray-300">
              ✅ **সফলতার ৬ষ্ঠ বছর**  
              ✅ **অনলাইনে ও অফলাইনে পাঠদান**  
              ✅ **সাত বছরে দাওরায়ে হাদীস (মাওলানা কোর্স)**  
              ✅ **সপ্তাহে চার দিন ক্লাস**  
            </p>
          </div>
        </div>

        {/* Contact & Social Media */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-4">
          <div className="text-center md:text-left text-sm text-gray-300">
            <p>📞 **মুফতি আফজাল হুসাইন ফারুকী**</p>
            <p>📱 ০১৯১৮-৯৭৬৬৮৬ | ০১৭৮৯-৪৮২৫৮৫</p>
          </div>

          <div className="flex space-x-4 mt-3 md:mt-0">
            <FaFacebook size={24} className="cursor-pointer hover:text-gray-300" />
            <FaTwitter size={24} className="cursor-pointer hover:text-gray-300" />
            <FaYoutube size={24} className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-300 mt-4">
          © 2025 মারকাযুল উলূম নৈশ মাদরাসা | সর্বস্বত্ব সংরক্ষিত
        </div>
      </div>
    </footer>
  );
};

export default Footer;
