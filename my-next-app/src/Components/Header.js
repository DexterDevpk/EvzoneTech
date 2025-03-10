import Image from "next/image";
import CutShapeSvg from "./CutShapeSvg";

export default function Header() {
  const headingText = [
    "Quality Assurance,",
    "Quality Control, and",
    "Testing — the",
    "Basics of Software Quality",
    "Management",
  ];

  return (
    <>
    <div className="relative w-full mb-[2rem] pl-12">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-10 py-24 text-white min-h-screen">
        {/* Left Content */}
        <div className="w-[50%] space-y-6">
          <h1 className="text-4xl text-white font-bold leading-tight">
            {headingText.map((text, index) => (
              <span key={index}>
                {text}
                <br />
              </span>
            ))}
          </h1>

          <div className="flex space-x-4 relative z-50">
  {/* About Us Button */}
  <a href="/aboutus" className="no-underline">
    <button
      className="px-6 py-3 rounded-xl font-semibold cursor-pointer bg-gradient-to-r from-[#222222] to-[#FFAD00] 
      hover:from-[#FFAD00] hover:to-[#222222] hover:text-[#222222] transition-all duration-300"
      style={{ boxShadow: "3px 5px 4px 5px rgb(8, 8, 8)" }}
    >
      About Us
    </button>
  </a>

  {/* Portfolio Button */}
  <a href="/portfolio" className="no-underline">
    <button
      className="px-6 py-3 text-white rounded-xl cursor-pointer font-semibold bg-gradient-to-r from-[#222222] to-[#FFAD00] 
      hover:from-[#FFAD00] hover:to-[#222222] hover:text-[#222222] transition-all duration-300"
      style={{ boxShadow: "3px 5px 4px 5px rgb(8, 8, 8)" }}
    >
      Portfolio
    </button>
  </a>
</div>

        </div>

        {/* Right Content - Cut Shape + Image */}
        <div className="w-full h-[60%] absolute right-0 top-[15rem] flex justify-end items-center">
          <CutShapeSvg className="absolute top-0 right-0 w-full h-full z-0" />

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
    </>

    
  );
}
