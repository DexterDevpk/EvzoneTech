export default function ImageWithText() {
    return (
      <div className="relative flex items-center justify-center w-full h-[400px]">
        {/* Custom Clipped Image */}
        <div className="relative w-[85%px] h-[340px]">
          <img
            src="/Portfolio/rectangle.png"
            alt="Background"
            className="w-full h-full object-cover clip-path-custom"
          />
          {/* Overlay Text with Glassmorphism */}
          <div className="absolute inset-18 flex flex-col items-center justify-center text-center p-6 
                           bg-opacity-10 backdrop-blur-[5px] rounded-lg">
            <h2 className="text-white text-lg font-semibold">
              Feeling weighed down by<br /> thoughts that shouldn’t be<br /> weighing you down?
            </h2>
            <button className="mt-4 text-md px-6 py-3 bg-[#222222] rounded-md text-white shadow-lg 
                   transform skew-x-[-20deg] relative overflow-hidden">
                    <span className="inline-block transform skew-x-[20deg]">
                        Reach Out, We're Ready!
                        </span>
                        </button>
          </div>
        </div>
      </div>
    );
  }
  