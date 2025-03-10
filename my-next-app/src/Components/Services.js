export default function Services() {
  return (
    <div className="relative py-6">
      {/* Title Section */}
      <div className="text-center text-white ">
        <h2 className=" font-bold text-[48px] leading-[60px] uppercase">
          Services We Provide
        </h2>
        <p className="text-gray-300 text-lg">
          Delivering excellence through innovation, strategy, and unwavering <br/> commitment.
        </p>
      </div>

      {/* SVG Curved Line */}
      <div className="absolute top-[45%] left-0 w-full -translate-y-1/2">
        <svg className="w-full h-[14rem]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#FFAD00" strokeWidth="40"
            d="M0,200 C130,200 140,240 660,160 C1280,220 1100,160 1440,220" />
        </svg>
      </div>

      {/* Services Positioned Along the Curve */}
      <div className="relative w-full h-[15rem]">
        {[
          { name: "FUNCTIONAL TESTING", icon: "/images/G_1.png", position: "top-[120px] left-[10%]" },
          { name: "TEST AUTOMATION", icon: "/images/G_2.png", position: "top-[110px] left-[28%]" },
          { name: "API TESTING", icon: "/images/G_3.png", position: "top-[80px] left-[45%]" },
          { name: "SAP TESTING", icon: "/images/G_4.png", position: "top-[100px] left-[62%]" },
          { name: "PERFORMANCE TESTING", icon: "/images/G_5.png", position: "top-[110px] left-[77%]" }
        ].map((service, index) => (
          <div key={index} className={`absolute ${service.position} flex flex-col items-center`}>
            <div
              className="w-31 h-31 bg-[#222222] rounded-full flex items-center justify-center shadow-lg"
              style={{ boxShadow: "3px 10px 12px 5px rgb(8, 8, 8)" }}
            >
              <img src={service.icon} alt={service.name} className="w-[80%] h-[80%] object-contain rounded-full"/>
            </div>
            <p className="text-white text-sm font-medium mt-2 text-center">{service.name}</p>
          </div>
        ))}
      </div>

      {/* Second Curved Line */}
      <div className="absolute top-[77%] left-0 w-full -translate-y-1/2">
        <svg className="w-full h-[14rem]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#FFAD00" strokeWidth="50"
            d="M0,200 C130,200 140,240 660,160 C1280,220 1100,160 1440,220" />
        </svg>
      </div>

      {/* Second Row Services */}
      <div className="relative w-full h-[15rem]">
        {[
          { name: "MOBILE APP TESTING", icon: "/images/G_6.png", position: "top-[110px] left-[10%]"  },
          { name: "SECURITY TESTING", icon: "/images/G_7.png", position: "top-[100px] left-[28%]" },
          { name: "ACCESSIBILITY TESTING", icon: "/images/G_8.png", position: "top-[70px] left-[44%]" },
          { name: "AGILE TESTING", icon: "/images/G_9.png", position: "top-[100px] left-[63%]" },
          { name: "ERP TESTING", icon: "/images/G_10.png", position: "top-[110px] left-[80%]" }
        ].map((service, index) => (
          <div key={index} className={`absolute ${service.position} flex flex-col items-center`}>
            <div
              className="w-31 h-31 bg-[#222222] rounded-full flex items-center justify-center shadow-lg"
              style={{boxShadow: "3px 10px 12px 5px rgb(8, 8, 8)" }}
            >
              <img src={service.icon} alt={service.name} className="w-[80%] h-[80%] object-contain rounded-full"/>
            </div>
            <p className="text-white text-sm font-medium mt-2 text-center">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
