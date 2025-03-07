import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import "@/app/globals.css";


// const isActive = true;


export default function Header() {
  return (
    <div className="relative w-full mb-[20rem]">
        <div className="">
      {/* <Navbar/> */}

      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-10 py-24 text-white min-h-screen">
        {/* Left Content */}
        <div className="w-full w-1/2 space-y-6">
          <h1 className="text-4xl text-white font-bold leading-tight">
            Quality Assurance, Quality Control, and Testing — the Basics of Software Quality Management
          </h1>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-[#FFAD00] text-white rounded-xl font-semibold ">
              About Us
            </button>
            <button className="px-6 py-3 bg-[#FFAD00]  text-white rounded-xl font-semibold ">
              Portfolio
            </button>
          </div>
        </div>

        {/* Right Content - Cut Shape + Image */}
        <div className="your-div">
        <img src="/warrior.png" alt="Warrior" className="h-[80%]" />
      </div>
      </div>
      </div>
    </div>
  );
}
