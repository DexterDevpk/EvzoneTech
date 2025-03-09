"use client"; // Required for React state handling in Next.js App Router

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for open/close menu

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter(); // Get current route

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/aboutus" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
<<<<<<< Updated upstream
    // {/* Navbar Section */}
      <nav className="flex justify-between items-center px-[5rem] py-4 bg-transparent shadow-md fixed w-full top-0  z-50">
=======
    <nav className="flex flex-col items-center py-4 bg-transparent fixed w-full top-0 z-50">
      <div className="flex justify-between items-center w-full max-w-[85%]">
>>>>>>> Stashed changes
        {/* Logo */}
        <div className="flex justify-center items-center space-x-2">
          <Image src="/images/Vector 1.png" alt="Logo" width={150} height={150} />
        </div>

<<<<<<< Updated upstream
        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 text-[#222222] font-semibold">
          <li className="hover:text-orange-500 cursor-pointer">
            <Link href="#" className="font-bolder text-black">Home</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link href="#">Portfolio</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link href="#">About Us</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link href="#">Privacy Policy</Link>
          </li>
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block px-4 py-2 h-[36px] w-[135px]  rounded-[16px] bg-[#222222] text-white rounded-md font-semibold">
=======
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-14 font-semibold">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`cursor-pointer transition-colors duration-300 ${
                  router.pathname === link.path
                    ? "text-orange-500" // Active link color
                    : "text-white hover:text-orange-500" // Default color with hover effect
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <button className="hidden md:block px-4 py-2 h-[36px] w-[135px] rounded-[16px] bg-[#222222] text-white font-semibold">
>>>>>>> Stashed changes
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
        <div className="absolute top-16 left-0 w-full bg-[#222222] text-white p-5 flex flex-col items-center space-y-4 shadow-lg md:hidden transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors duration-300 ${
                router.pathname === link.path ? "text-orange-500" : "hover:text-orange-500"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            className="px-4 py-2 h-[36px] w-[135px] rounded-[16px] bg-orange-500 text-white font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
