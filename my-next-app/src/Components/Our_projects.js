"use client";
import Image from "next/image";

export default function Our_projects() {
  const projects = [
    {
      name:(
        <>
        <p className="text-4xl tracking-wider font-bold">Quality Assurance</p>
        </>
      ),
      description: (
        <>
        <p className="text-2xl tracking-tight">
        Delivering excellence through innovation, <br />
        strategy, and unwavering commitment.
        </p>
         
        </>
      ),
      textsize:"font-normal",
      logo: "/images/projects_1.png",
      bgColor: "bg-[#FFAD00]",
      textColor: "text-[#ffffff] text-md",
      buttonBg: "shadow-xl rounded-full] bg-[#222222]",
    },
    {
      name:(
        <>
        <h1 className="text-4xl tracking-wider font-bold">Quality Assurance</h1>
        </>
      ),
      description: (
        <>
        <p className="text-2xl tracking-tight">
        Delivering excellence through innovation, <br />
        strategy, and unwavering commitment.
        </p>
         
        </>
      ),
      logo: "/images/projects_2.png",
      bgColor: "bg-[#222222] ",
      textColor: "text-white",
      buttonBg: "shadow-xl bg-[#FFAD00]",
    },
  ];

  return (
    <section className="w-full py-16 px-6  text-white">
      {/* Title */}
      
      <div className="text-center mb-12">
        <h2 className="text-lg font-semibold tracking-wide uppercase opacity-80">
          Our Projects
        </h2>
        <h3 className="text-4xl font-bold">We’re Dedicated to Exceeding Your Expectations</h3>
      </div>

      {/* Projects Container */}
      <div className="space-y-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
         <div
         key={index}
         className={`relative w-[1200px] h-[300px] flex flex-col shadow-xl md:flex-row items-center justify-between p-8 md:p-12 rounded-xl ${project.bgColor} ${project.textsize}`}
         style={{ boxShadow: "3px 10px 12px 5px rgb(8, 8, 8)" }} // Add custom shadow
       >
       
            {/* Logo */}
            <div className="w-1/3 flex justify-center">
              <Image
                src={project.logo}
                alt={project.name}
                width={280}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <div className={`w-2/3 ${project.textColor} text-start`}>
              <div className="text-2xl md:text-3xl font-bold">{project.name}</div>
              <span className="text-lg mt-2">{project.description}</span>

              {/* GitHub Button */}
              <button
                // style={{ boxShadow: "3px 5px 12px 5px rgb(43, 41, 41)" }}
                className={`mt-4 px-5 py-2 rounded-lg font-medium ${project.buttonBg} hover:opacity-80 transition`}
              >
                GitHub
              </button>
            </div>

            {/* Spartan Background Icon (For Styling, Optional) */}
            <div className="absolute top-[2px] right-5 bottom-5 opacity-100">
              <Image
                src="/images/footer_bg.png"
                alt="Spartan"
                width={250}
                height={250}
                className="object-cover opacity-100 mix-blend-normal pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

//  {/* Background Image Positioned to the Right */}
//   <Image 
//     src="/images/footer_bg.png" // Change to your actual image path
//     width={300}
//     height={412}
//     alt="Background Image"
//     className="absolute right-5 bottom-10 opacity-100 mix-blend-multiply pointer-events-none"
//   />
