"use client"; // Required for React state handling in Next.js App Router

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for open/close menu

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter(); // Get current route

  // Define color schemes for different pages
  const pageColors = {
    "/": { bgColor: "bg-transparent", textColor: "text-white", hoverColor: "hover:text-[#222222]" },
    "/aboutus": { bgColor: "bg-[#f3f3f3]", textColor: "text-black", hoverColor: "hover:text-[#222222]" },
    "/portfolio": { bgColor: "bg-[#1a1a1a]", textColor: "text-gray-300", hoverColor: "hover:text-[#222222]" },
    "/privacy": { bgColor: "bg-[#333333]", textColor: "text-yellow-400", hoverColor: "hover:text-[#222222]" },
  };

  // Get current page color scheme or default to home
  const { bgColor, textColor, hoverColor } = pageColors[router.pathname] || pageColors["/"];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/aboutus" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <nav className={`flex flex-col items-center py-4 fixed w-full top-0 z-50 transition-all duration-300 ${bgColor}`}>
      <div className="flex justify-between items-center w-full max-w-[85%]">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-2">
          <Image src="/images/Vector 1.png" alt="Logo" width={150} height={150} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-14 font-semibold">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`cursor-pointer transition-colors duration-300 ${textColor} ${hoverColor}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <button className={`hidden md:block px-4 py-2 h-[36px] w-[135px] rounded-[16px] text-white z-50 font-semibold bg-[#222222]`}>
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Shortened Bottom Border */}
      <div className="w-[85%] border-b border-[#F9E68C] mt-2"></div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={`absolute top-16 left-0 w-full p-5 flex flex-col items-center space-y-4 shadow-lg md:hidden transition-all duration-300 ${bgColor}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors duration-300 ${textColor} ${hoverColor}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="px-4 py-2 h-[36px] w-[135px] rounded-[16px] bg-orange-500 text-white font-semibold" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
