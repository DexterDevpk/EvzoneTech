"use client"; // Required for React state handling in Next.js App Router

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Change useRouter to usePathname
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for open/close menu

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current path

  // Define color schemes for different pages
  const pageColors = {
    "/": { bgColor: "bg-transparent", textColor: "text-[#222222]", hoverColor: "hover:text-gray-300", activeColor: "text-white font-bold" },
    "/aboutus": { bgColor: "bg-transparent", textColor: "text-white", hoverColor: "hover:text-gray-300", activeColor: "text-white font-bold" },
    "/portfolio": { bgColor: "bg-transparent", textColor: "text-white", hoverColor: "hover:text-gray-300", activeColor: "text-white font-bold" },
    "/privacy": { bgColor: "bg-transparent", textColor: "text-white", hoverColor: "hover:text-gray-300", activeColor: "text-white font-bold" },
  };

  // Get current page color scheme or default to home
  const { bgColor, textColor, hoverColor, activeColor } = pageColors[pathname] || pageColors["/"];

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set true when scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/aboutus" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
<<<<<<< HEAD
    <nav
      className={`flex flex-col items-center py-4 fixed w-full top-0 z-50 transition-all duration-300 
        ${bgColor} ${isScrolled ? "backdrop-blur-lg bg-opacity-80 shadow-md" : ""}`}
    >
      <div className="flex justify-between items-center w-full max-w-[85%]">
=======
    // {/* Navbar Section */}
      <nav className="flex justify-between items-center px-[6rem] py-4 bg-transparent shadow-md fixed w-full top-0  z-50">
>>>>>>> main
        {/* Logo */}
        <div className="flex justify-center items-center space-x-2">
          <Image src="/images/Vector 1.png" alt="Logo" width={100} height={100} />
        </div>

<<<<<<< HEAD
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-14 font-semibold">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`relative cursor-pointer transition-colors duration-300 ${textColor} ${hoverColor} ${
                  pathname === link.path ? activeColor : ""
                }`}
              >
                {link.name}
                {/* Underline effect */}
                <span
                  className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-current transform scale-x-0 transition-transform duration-300 ${
                    pathname === link.path ? "scale-x-100" : "hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <button className="hidden md:block px-4 py-2 h-[36px] w-[135px] rounded-[16px] text-white z-50 font-semibold bg-[#222222]">
=======
        {/* Menu Items */}
        <ul className="hidden md:flex space-x-14 text-[#222222] font-semibold">
          <li className=" text-white hover:text-orange-500 cursor-pointer">
            <Link href="#" className="font-bolder text-white">Home</Link>
          </li>
          <li className="text-white hover:text-orange-500 cursor-pointer">
            <Link href="#">Portfolio</Link>
          </li>
          <li className="text-white hover:text-orange-500 cursor-pointer">
            <Link href="#">About Us</Link>
          </li>
          <li className="text-white hover:text-orange-500 cursor-pointer">
            <Link href="#">Privacy Policy</Link>
          </li>
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block px-4 py-2 h-[36px] w-[135px]  rounded-[16px] bg-[#222222] text-white  font-semibold">
>>>>>>> main
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={`absolute top-16 left-0 w-full p-5 flex flex-col items-center space-y-4 shadow-lg md:hidden transition-all duration-300 ${bgColor}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors duration-300 ${textColor} ${hoverColor} ${
                pathname === link.path ? activeColor : ""
              }`}
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
