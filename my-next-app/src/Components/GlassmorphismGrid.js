"use client";
import Image from "next/image";
import { useState } from "react";

export default function GlassmorphismGrid() {
  const [isClicked, setIsClicked] = useState(false);

  const tools = [
    { name: "Playwright", img: "/Svgs/Svg_1.svg" },
    { name: "Rest Assured", img: "/Svgs/Svg_2.svg" },
    { name: "GitHub", img: "/Svgs/Svg_3.svg" },
    { name: "Selenium", img: "/Svgs/Svg_1.svg" },
    { name: "Test Rigor", img: "/Svgs/Svg_5.svg" },
    { name: "Jira", img: "/Svgs/Svg_6.svg" },
    { name: "Protractor", img: "/Svgs/Svg_7.svg" },
    { name: "Katalon", img: "/Svgs/Svg_8.svg" },
    { name: "Jenkins", img: "/Svgs/Svg_9.svg" },
    { name: "Gherkins", img: "/Svgs/Svg_10.svg" },
    { name: "TypeScript", img: "/Svgs/Svg_11.svg" },
    { name: "Postman", img: "/Svgs/Svg_12.svg" },
    { name: "JavaScript", img: "/Svgs/Svg_13.svg" },
    { name: "Python", img: "/Svgs/Svg_14.svg" },
    { name: "Cypress", img: "/Svgs/Svg_15.svg" },
    { name: "Appium", img: "/Svgs/Svg_17.svg" }
  ];

  return (
    <section className="w-full py-16 px-6 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`w-[276px] h-[157px] transition-all duration-300 ${
              isClicked ? "bg-[#FFAD00] border-white" : "bg-white/10 border-white"
            } backdrop-blur-lg border-3 rounded-lg flex flex-col items-center justify-center p-4 shadow-lg cursor-pointer`}
            onClick={() => setIsClicked(!isClicked)}
          >
            <Image
              src={tool.img}
              alt={tool.name}
              width={80}
              height={80}
              className={`object-contain transition-all duration-300 object-contain invert brightness-200 sepia hue-rotate-180 ${
                isClicked ? "invert brightness-0" : "brightness-75"
              }`}
            />
            <p className="text-white mt-2 font-semibold">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
