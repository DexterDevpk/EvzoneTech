"use client";
import Image from "next/image";

export default function GlassmorphismGrid() {
  const tools = [
    { name: "Playwright", img: "/images/playwright.png" },
    { name: "Rest Assured", img: "/images/rest_assured.png" },
    { name: "GitHub", img: "/images/github.png" },
    { name: "Selenium", img: "/images/selenium.png" },
    { name: "Test Rigor", img: "/images/test_rigor.png" },
    { name: "Jira", img: "/images/jira.png" },
    { name: "Protractor", img: "/images/protractor.png" },
    { name: "Katalon", img: "/images/katalon.png" },
    { name: "Jenkins", img: "/images/jenkins.png" },
    { name: "Gherkins", img: "/images/gherkins.png" },
    { name: "TypeScript", img: "/images/typescript.png" },
    { name: "Postman", img: "/images/postman.png" },
    { name: "JavaScript", img: "/images/javascript.png" },
    { name: "Python", img: "/images/python.png" },
    { name: "Cypress", img: "/images/cypress.png" },
    { name: "Appium", img: "/images/appium.png" }
  ];

  return (
    <section className="w-full py-16 px-6 bg-[#1a1a1a] flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="w-[276px] h-[157px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg flex flex-col items-center justify-center p-4 shadow-lg"
          >
            <Image
              src={tool.img}
              alt={tool.name}
              width={80}
              height={80}
              className="object-contain"
            />
            <p className="text-white mt-2 font-semibold">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
