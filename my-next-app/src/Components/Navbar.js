"use client"; // Required for React state handling in Next.js App Router

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // {/* Navbar Section */}
      <nav className="flex justify-between items-center px-[6rem] py-4 bg-transparent shadow-md fixed w-full top-0  z-50">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Image src="/images/Vector 1.png" alt="Logo" width={150} height={150} />
          {/* <span className="text-gray-900">Evzone Tech</span> */}
        </div>

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
          Contact Us
        </button>
      </nav>
  );
};

export default Navbar;
