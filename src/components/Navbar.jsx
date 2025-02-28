import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/madraha_logo-removebg-preview.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img className="w-12 h-12" src={logo} alt="Madrasah Logo" />
                    <span className="text-xl  hidden md:block">Jamia Faruqia Markajul Ulum</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-lg">
                    <li className="hover:text-gray-300 transition duration-300 cursor-pointer">Home</li>
                    <li className="hover:text-gray-300 transition duration-300 cursor-pointer">About</li>
                    <li className="hover:text-gray-300 transition duration-300 cursor-pointer">Contact Us</li>
                </ul>

                {/* Login & Signup */}
                <div className="hidden md:flex space-x-4">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">Login</button>
                    <button className="bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500 transition">Sign Up</button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-blue-700 py-4">
                    <ul className="flex flex-col items-center space-y-4 text-lg">
                        <li className="hover:text-gray-300 transition duration-300 cursor-pointer">Home</li>
                        <li className="hover:text-gray-300 transition duration-300 cursor-pointer">About</li>
                        <li className="hover:text-gray-300 transition duration-300 cursor-pointer">Contact Us</li>
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">Login</button>
                        <button className="bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500 transition">Sign Up</button>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
