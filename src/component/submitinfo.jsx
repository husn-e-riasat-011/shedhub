import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // dropdown arrow icon

export default function ShedSearchFilter() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(150000);

  const [location, setLocation] = useState("");
  // const [priceRange, setPriceRange] = useState([0, 5000]);
  const [buildingWidth, setBuildingWidth] = useState("");
  const [buildingHeight, setBuildingHeight] = useState("");
  // const [shopDelivery, setShopDelivery] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const colors = [
    { name: "Orange", value: "orange", class: "bg-orange-500" },
    { name: "Yellow", value: "yellow", class: "bg-yellow-500" },
    { name: "Blue", value: "blue", class: "bg-blue-500" },
    { name: "Green", value: "green", class: "bg-green-500" },
    { name: "Red", value: "red", class: "bg-red-500" },
    { name: "Purple", value: "purple", class: "bg-purple-500" },
    { name: "Black", value: "black", class: "bg-black" },
    { name: "Gray", value: "gray", class: "bg-gray-500" },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 max-w-[2560px] mx-auto">
      <div className="max-w-[1538px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side */}
          <div className="flex-1 lg:max-w-md sm:block hidden">
            <h2 className="font-poppins font-normal text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] leading-[56px] tracking-[-0.03em] text-[#002D4A] mb-2">
              Refine Your
            </h2>
            <h3 className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] leading-[56px] tracking-[-0.03em] text-[#002D4A] mb-2">
              Shed Search
            </h3>
            <p className="font-poppins font-normal text-[22px] leading-[34px] tracking-[-0.03em] text-[#002D4A] max-w-[400px]">
              Discover your ideal shed with ease. filter by trusted
              manufacturers, budget range, and dimensions to find the{" "}
              <span className="font-semibold">perfect fit.</span>
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 bg-white rounded-xl p-8 shadow-lg w-full">
            <div className="flex flex-col md:flex-row gap-8 w-full">
              {/* Left Column */}
              <div className="flex-1 space-y-6 w-full">
                {/* Location */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#002D4A] mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21c4.5-4.5 7.5-8.25 7.5-12a7.5 7.5 0 10-15 0c0 3.75 3 7.5 7.5 12z"
                      />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    Location
                  </label>

                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full border-b-2 border-[#002D4A] focus:border-[#002D4A] outline-none py-1"
                  />
                </div>

                {/* Price Range */}

                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-6 gap-1">
                    <svg
                      width="17"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.77 6.77H6.77962M3.4645 1.90133L1.90133 3.4645C1.56869 3.79714 1.40236 3.96347 1.28342 4.15757C1.17797 4.32965 1.10025 4.51726 1.05314 4.71352C1 4.93486 1 5.17008 1 5.64051V8.38033C1 8.85076 1 9.08599 1.05314 9.30736C1.10025 9.50354 1.17797 9.69117 1.28342 9.8633C1.40236 10.0574 1.56868 10.2237 1.90133 10.5564L9.27601 17.931C10.4185 19.0735 10.9898 19.6448 11.6484 19.8588C12.2279 20.0471 12.8521 20.0471 13.4315 19.8588C14.0902 19.6448 14.6615 19.0735 15.804 17.931L17.931 15.804C19.0735 14.6615 19.6448 14.0902 19.8588 13.4315C20.0471 12.8521 20.0471 12.2279 19.8588 11.6484C19.6448 10.9898 19.0735 10.4185 17.931 9.27601L10.5564 1.90133C10.2237 1.56869 10.0574 1.40236 9.8633 1.28342C9.69117 1.17797 9.50354 1.10025 9.30736 1.05314C9.08599 1 8.85076 1 8.38033 1H5.64051C5.17008 1 4.93486 1 4.71352 1.05314C4.51726 1.10025 4.32965 1.17797 4.15757 1.28342C3.96347 1.40236 3.79715 1.56868 3.4645 1.90133ZM7.25084 6.77C7.25084 7.03556 7.03556 7.25084 6.77 7.25084C6.50445 7.25084 6.28917 7.03556 6.28917 6.77C6.28917 6.50445 6.50445 6.28917 6.77 6.28917C7.03556 6.28917 7.25084 6.50445 7.25084 6.77Z"
                        stroke="#002D4A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Price Range
                  </label>

                  {/* Dual Range Slider */}
                  <div className="relative w-full h-1 bg-gray-300 rounded-full">
                    {/* Filled Track */}
                    <div
                      className="absolute h-1 bg-black  rounded-full"
                      style={{
                        left: `${(min / 150000) * 100}%`,
                        right: `${100 - (max / 150000) * 100}%`,
                      }}
                    ></div>

                    {/* Left end circle */}
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-400"></div>
                    {/* Right end circle */}
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-400"></div>

                    {/* Min Handle */}
                    <input
                      type="range"
                      min="0"
                      max="150000"
                      value={min}
                      onChange={(e) =>
                        setMin(Math.min(Number(e.target.value), max - 1000))
                      }
                      className="absolute -top-[6px] -left-2 w-full appearance-none bg-transparent pointer-events-auto
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-black
          [&::-webkit-slider-thumb]:cursor-pointer
         "
                    />

                    {/* Max Handle */}
                    <input
                      type="range"
                      min="0"
                      max="150000"
                      value={max}
                      onChange={(e) =>
                        setMax(Math.max(Number(e.target.value), min + 1000))
                      }
                      className="absolute -top-[6px] left-2 w-full appearance-none bg-transparent pointer-events-auto
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-black
          [&::-webkit-slider-thumb]:cursor-pointer
         "
                    />
                  </div>

                  {/* Min & Max labels */}
                  <div className="flex items-center justify-between mt-10 mb-3">
                    <div className="border rounded-full px-4 py-2 text-sm text-gray-600">
                      Min. {min}
                    </div>
                    <div className="border rounded-full px-4 py-2 text-sm text-gray-600">
                      Max. {max}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="flex items-center text-gray-700 font-medium mb-3">
                    <span className="mr-3">
                      <svg
                        width="20"
                        height="23"
                        viewBox="0 0 20 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3.1C8.6193 3.1 7.5 4.27525 7.5 5.725C7.5 7.17475 8.6193 8.35 10 8.35C11.3807 8.35 12.5 7.17475 12.5 5.725C12.5 4.27525 11.3807 3.1 10 3.1ZM10 3.1V1M19 14.5844C16.8012 17.2001 13.5841 18.85 10 18.85C6.41592 18.85 3.19883 17.2001 1 14.5844M8.7448 7.99477L1 22M11.2552 7.99477L19 22"
                          stroke="#002D4A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    Shop by Manufacturer
                  </label>
                  <select className="w-full px-5 py-3 border border-gray-300 rounded-[36px] appearance-none bg-white">
                    <option value="">Shop by Manufacturer</option>
                    <option value="8ft">9 ft</option>
                    <option value="10ft">10 ft</option>
                    <option value="12ft">12 ft</option>
                    <option value="14ft">14 ft</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-12 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 space-y-6 w-full">
                {/* Building Width */}
                <div className="relative">
                  <label className="flex items-center text-gray-700 font-medium mb-3">
                    <span className="mr-3">
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 9.5H16M4 9.5L6 6.66667M4 9.5L6 12.3333M16 9.5L14 6.66667M16 9.5L14 12.3333M19 18V1M1 18V1"
                          stroke="#002D4A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    Shop Shed by width
                  </label>
                  <select
                    value={buildingWidth}
                    onChange={(e) => setBuildingWidth(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[36px] appearance-none bg-white "
                  >
                    <option value="">Shed width</option>
                    <option value="8ft">8 ft</option>
                    <option value="10ft">10 ft</option>
                    <option value="12ft">12 ft</option>
                    <option value="14ft">14 ft</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-12 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>

                {/* Building Height */}
                <div className="relative">
                  <label className="flex items-center text-gray-700 font-medium mb-3">
                    <span className="mr-3">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 17.6667V4.33333M11 17.6667L7.66667 15.4444M11 17.6667L14.3333 15.4444M11 4.33333L7.66667 6.55556M11 4.33333L14.3333 6.55556M21 1H1M21 21H1"
                          stroke="#002D4A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    Shop Shed by Height
                  </label>
                  <select
                    value={buildingHeight}
                    onChange={(e) => setBuildingHeight(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[36px] appearance-none bg-white "
                  >
                    <option value="">Shed Height</option>
                    <option value="8ft">8 ft</option>
                    <option value="9ft">9 ft</option>
                    <option value="10ft">10 ft</option>
                    <option value="12ft">12 ft</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-12 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>

                {/* Shed Color */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium my-3">
                    <span className="mr-3">🎨</span>
                    Shed Color
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className={`w-9 h-9 rounded-full ${
                          color.class
                        } border-2 ${
                          selectedColor === color.value
                            ? "border-gray-800 scale-110"
                            : "border-gray-300 hover:border-gray-400"
                        } transition-all duration-200 shadow-sm`}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button className="w-full bg-[#FFA424] hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-[21px] transition-colors duration-200 shadow-lg">
                Search Sheds
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
