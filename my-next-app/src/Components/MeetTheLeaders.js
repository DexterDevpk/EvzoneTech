import Image from "next/image";

export default function MeetTheLeaders() {
  const leaders = [
    {
      name: "Yousuf Murad",
      role: "Frontman (War Leader)",
      description:
        "As a frontman, I ensure seamless team excellence. My visionary strategies are molded in every project.",
      image: "/Aboutus/card.png",
    },
    {
      name: "Yousuf Murad",
      role: "Frontman (War Leader)",
      description:
        "As Designers, lead teams to formulate solutions, weave new experiences, innovation, and reliability in every project.",
      image: "/Aboutus/card.png",
    },
    {
      name: "Yousuf Murad",
      role: "Frontman (War Leader)",
      description:
        "As a frontman, I ensure seamless team excellence. My visionary strategies are molded in every project.",
      image: "/Aboutus/card.png",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold uppercase">Meet The Leaders</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Our commitment is to elevate your digital journey, unlocking limitless
          possibilities in shaping a future where technology transforms visions
          into reality.
        </p>
      </div>

      {/* Leader Cards with Elevated Middle Card */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`bg-[#FFAD00] p-4 rounded-lg shadow-lg w-[320px] text-center relative ${
              index === 1 ? "mt-[-40px]" : "mt-0"
            }`} // Middle card is elevated
          >
            <div className="relative w-full h-80"> {/* Increased height for full image */}
              <Image
                src={leader.image}
                alt={leader.name}
                width={280}  // Set fixed width
                height={320} // Increased height to show full image
                objectFit="contain" // Ensures full image is visible
                className="rounded-lg"
              />
            </div>
            <h3 className="font-bold text-lg text-[#222222]"> “{leader.name}”</h3>
            <div className="text-[#FFAD00] text-center flex justify-center"><p className="text-sm max-w-[60%] p-2 rounded-xl bg-[#222222]">{leader.role}</p></div>
            <p className="text-[#FFAD00] mt-2 text-sm bg-[#222222] p-2 rounded-xl">{leader.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
