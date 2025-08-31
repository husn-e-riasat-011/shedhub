// import React from "../assats/";

export default function ShedsbyStates() {
  const states = [
    {
      name: "Kentucky",
      image: "/1img.png",
    },
    {
      name: "Florida",
      image: "/2img.png",
    },
    {
      name: "Georgia",
      image: "/3img.png",
    },
    {
      name: "Pennsylvania",
      image: "/4img.png",
    },
    {
      name: "Texas",
      image: "/5img.png",
    },
    {
      name: "South Carolina",
      image: "/6img.png",
    },
    {
      name: "Arizona",
      image: "/7img.png",
    },
    {
      name: "Illinois",
      image: "/8img.png",
    },
    {
      name: "Ohio",
      image: "/9img.png",
    },
  ];

  return (
    <div className="bg-white md:py-28 py-10">
      <div className="max-w-[1538px] mx-auto">
        {/* Header */}
        <div className="md:text-center text-left mb-12">
          <h2 className="font-poppins font-normal text-[28px] sm:text-[36px] md:text-[48px] leading-[56px] tracking-[-0.03em]  text-[#002D4A]">
            Browse Sheds by
          </h2>

          <h3 className="font-poppins font-semibold text-[28px] sm:text-[36px] md:text-[48px] leading-[56px] tracking-[-0.03em]  text-[#002D4A]">
            Your State
          </h3>
        </div>

        {/* State Cards Grid - Single Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-[1538px] mx-auto">
          {states.map((state, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-[150px] h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />

                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="text-white font-bold text-sm md:text-base text-center drop-shadow-lg">
                    {state.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More States Button */}
        <div className="text-center pt-5">
          <button className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 transition-colors duration-300 group">
            <span className="text-normal">EXPLORE MORE STATES</span>
            <svg
              width="13"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6.5 7L12 1" stroke="#002C49" stroke-width="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
