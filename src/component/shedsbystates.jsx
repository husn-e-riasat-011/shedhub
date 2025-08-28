import React from "react";
import { ChevronDown } from "lucide-react";

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
    <div className="bg-white py-28">
      <div className="max-w-[1538px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-normal text-[48px] leading-[56px] tracking-[-0.03em] text-center text-[#002D4A]">
            Browse Sheds by
          </h2>

          <h3 className="font-poppins font-semibold text-[48px] leading-[56px] tracking-[-0.03em] text-center text-[#002D4A]">
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
            <span className="text-base">EXPLORE MORE STATES</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
