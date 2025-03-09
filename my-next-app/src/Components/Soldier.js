import Image from "next/image";

const headingText = [
  "Quality Assurance,",
  "Quality Control, and",
  "Testing — the Basics",
  " of Software Quality",
  "Management",
];

export default function Soldier() {
  return (
    <section className="flex w-full h-screen items-center">
  {/* Text area */}
  <div className="w-[45%] pl-[3.5rem]"> {/* Reduced width & padding */}
    <div className="text-4xl text-white pl-10 font-bold leading-15">
      {headingText.map((text, index) => (
        <span key={index}>
          {text}
          <br />
        </span>
      ))}
    </div>
  </div>

  {/* Image area */}
  <div className="w-[55%] relative h-[600px] ml-[-2rem]"> {/* Reduced width & adjusted margin-left */}
    <Image
      src="/Aboutus/Soldier.png"  
      alt="Soldier Image"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  </div>
</section>

  );
}
