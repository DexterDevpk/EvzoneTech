import Image from "next/image";
import Link from "next/link";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Navbar from "./Navbar";
import "@/app/globals.css";
=======
=======
>>>>>>> Stashed changes
import CutShapeSvg from "./CutShapeSvg";
// import Navbar from "./Navbar";
// import "@/app/globals.css";

const headingText = [
  "Quality Assurance,",
  "Quality Control,and",
  "Testing — the",
  "Basics of Software Quality",
  "Management",
];
>>>>>>> Stashed changes


// const isActive = true;


export default function Header() {
  return (
    <div className="relative w-full mb-[20rem]">
        <div className="">
      {/* <Navbar/> */}

      {/* Hero Section */}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <div className="relative flex flex-col md:flex-row items-center justify-between px-10 py-24 text-white min-h-screen">
=======
      <div className="relative  flex flex-col md:flex-row items-center justify-between px-15 py-24 text-white min-h-screen">
>>>>>>> Stashed changes
=======
      <div className="relative  flex flex-col md:flex-row items-center justify-between px-15 py-24 text-white min-h-screen">
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
        {/* Right Content - Cut Shape + Image */}
        <div className="your-div">
        <img src="/warrior.png" alt="Warrior" className="h-[80%]" />
      </div>
      </div>
=======
=======
>>>>>>> Stashed changes
       <div className="w-full h-[60%] absolute right-0 top-[15rem] flex justify-end items-center">
  {/* SVG Cut Shape (Aligned to the Right Border) */}
  <CutShapeSvg className="absolute top-0 right-0 w-full h-full z-0" />

  {/* Image (Above the SVG) */}
  <Image 
    src="/images/Header_img.png" 
    alt="Warrior" 
    width={300}
    height={2000}
      objectFit="cover"
    className="absolute top-0 right-0 h-full z-50"
  />
</div>


<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      </div>
    </div>
  );
}
