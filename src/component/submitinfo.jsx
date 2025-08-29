import React, { useState } from "react";

export default function ShedSearchFilter() {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [buildingWidth, setBuildingWidth] = useState("");
  const [buildingHeight, setBuildingHeight] = useState("");
  const [shopDelivery, setShopDelivery] = useState("");
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
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Text Content Only */}
          <div className="flex-1 lg:max-w-md">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              Refine Your
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-blue-700 mb-6">
              Shed Search
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              Use these shed filters to narrow down your options. Look for
              sheds, garages and other building types for every need.
            </p>
          </div>

          {/* Right Side - Form Section with 2 columns */}
          <div className="flex-1 bg-white rounded-xl p-8 shadow-lg">
            <div className="flex gap-8">
              {/* Left Column in Form */}
              <div className="flex-1 space-y-6">
                {/* Location */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Price Range */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    Price Range
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>Min</span>
                      <span>Max</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column in Form */}
              <div className="flex-1 space-y-6">
                {/* Building Width */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-3">
                    <span className="text-lg mr-3">🏗️</span>
                    Building Width
                  </label>
                  <select
                    value={buildingWidth}
                    onChange={(e) => setBuildingWidth(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Any width</option>
                    <option value="8ft">8 ft</option>
                    <option value="10ft">10 ft</option>
                    <option value="12ft">12 ft</option>
                    <option value="14ft">14 ft</option>
                  </select>
                </div>

                {/* Building Height */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-3">
                    <span className="text-lg mr-3">📏</span>
                    Shop Delivery Height
                  </label>
                  <select
                    value={buildingHeight}
                    onChange={(e) => setBuildingHeight(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Any height</option>
                    <option value="8ft">8 ft</option>
                    <option value="9ft">9 ft</option>
                    <option value="10ft">10 ft</option>
                    <option value="12ft">12 ft</option>
                  </select>
                </div>

                {/* Shop Delivery */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-3">
                    <span className="text-lg mr-3">🚚</span>
                    Shop Delivery
                  </label>
                  <select
                    value={shopDelivery}
                    onChange={(e) => setShopDelivery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select delivery option</option>
                    <option value="pickup">Store Pickup</option>
                    <option value="delivery">Home Delivery</option>
                    <option value="installation">
                      Delivery + Installation
                    </option>
                  </select>
                </div>

                {/* Shed Color */}
                <div>
                  <label className="flex items-center text-gray-700 font-medium mb-3">
                    <span className="text-lg mr-3">🎨</span>
                    Shed Color
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className={`w-8 h-8 rounded-full ${
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

            {/* Search Button - Full Width */}
            <div className="mt-8">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg">
                Search Sheds
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        .slider::-webkit-slider-track {
          background: #e5e7eb;
          height: 8px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
