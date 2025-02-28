import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
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

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-semibold mb-2">বিস্তারিত জানতে ভিজিট করুন</h1>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1AKEB2dger/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} className="cursor-pointer hover:text-gray-300" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} className="cursor-pointer hover:text-gray-300" />
              </a>
              <a
                href="https://youtube.com/channel/UCVvTocZ-8LLscjNf2qav7hQ?si=TatCYF9m0o2c7On_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} className="cursor-pointer hover:text-gray-300 text-red-500" />
              </a>
              <a
                href="https://wa.me/8801918976686"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} className="cursor-pointer hover:text-gray-300 text-green-500" />
              </a>
            </div>
          </div>

          {/* Admission Information */}
          <div>
            <h2 className="text-lg font-semibold mb-3">ভর্তি চলছে!</h2>
            <p className="text-sm text-gray-300 whitespace-pre-line">
              ✅ **সফলতার ৬ষ্ঠ বছর**  
              ✅ **অনলাইনে ও অফলাইনে পাঠদান**  
              ✅ **সাত বছরে দাওরায়ে হাদীস (মাওলানা কোর্স)**  
              ✅ **সপ্তাহে চার দিন ক্লাস**  
            </p>
          </div>
        </div>

        {/* Contact & Copyright */}
        <div className="mt-6 border-t border-gray-600 pt-4 text-center space-y-2">
          <p className="text-sm text-gray-300 font-semibold">📞 মুফতি আফজাল হুসাইন ফারুকী</p>
          <p className="text-sm text-gray-300">📱 ০১৯১৮-৯৭৬৬৮৬ | ০১৭৮৯-৪৮২৫৮৫</p>
          <p className="text-sm text-gray-300 mt-4">
            © 2025 মারকাযুল উলূম নৈশ মাদরাসা | সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
