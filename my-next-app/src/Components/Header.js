import Image from "next/image";
import Link from "next/link";
import CutShapeSvg from "./CutShapeSvg"; // Ensure this exists
import "@/app/globals.css"; // Ensure this file exists

const headingText = [
  "Quality Assurance,",
  "Quality Control, and",
  "Testing — the",
  "Basics of Software Quality",
  "Management",
];

export default function Header() {
  return (
    <div className="relative w-full mb-[20rem]">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-10 py-24 text-white min-h-screen">
        {/* Left Content */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-4xl text-white font-bold leading-tight">
            Quality Assurance, Quality Control, and Testing — the Basics of Software Quality Management
          </h1>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-[#FFAD00] text-white rounded-xl font-semibold">
              About Us
            </button>
            <button className="px-6 py-3 bg-[#FFAD00] text-white rounded-xl font-semibold">
              Portfolio
            </button>
          </div>
        </div>

        {/* Right Content - Cut Shape + Image */}
        <div className="w-full h-[60%] absolute right-0 top-[15rem] flex justify-end items-center">
          {/* SVG Cut Shape (Aligned to the Right Border) */}
          <CutShapeSvg className="absolute top-0 right-0 w-full h-full z-0" />

          {/* Image (Above the SVG) */}
          <Image
            src="/images/Header_img.png"
            alt="Warrior"
            width={300}
            height={2000}
            className="absolute top-0 right-0 h-full z-50 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
