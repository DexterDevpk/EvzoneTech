
import Image from "next/image";

export default function Footer() {
  return (
    <>

    <section className="w-full pt-[5rem] pb-10 bg-[#FFAD00] border-2 border-[#222222] shadow-[inset_0px_10px_24px_0px_rgba(0,0,0,1)] p-6 text-white text-lg font-bold text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 items-center">
        {/* Left-aligned Column */}
        <div className="text-left w-[496px] h-[150px]">
            <Image
            src="/images/Vector 1_black.png"
            width={200}
            height={200}
            alt="Footer_Vector"

            />
          {/* <h2 className="text-3xl font-bold text-gray-900">Left Aligned Content</h2> */}
          <p className="mt-4 text-gray-700">
          Simplify, Organize, and Beautify with Evzone Tech.
          </p>
          {/* <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg">Learn More</button> */}
        </div>

        {/* Right-aligned Columns */}
        <div className="col-span-2 flex justify-end">
        <div className="flex justify-between text-[#222222] space-x-10">
          <div>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
          </div>

          <div>
          <h3>Support</h3>
          <ul>
            <li>Term & Condition</li>
            <li>Privacy Policy</li>
          </ul>
          </div>
          
        </div>
        </div>
      </div>
      <div className="flex grid grid-cols-3 gap-x-2 mt-10 pt-20">
        <div className="h-1 flex items-center rounded-full w-full bg-[#222222]"></div>
        <div className=" flex items-center justify-center">&copy; 2023 | Evzone Tech support .  All rights reserved</div>  
        <div className="h-1 w-full rounded-full bg-[#222222]"></div>
      </div>
    </section>
    </>
  )
}
