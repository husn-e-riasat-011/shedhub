import React, { useState } from "react";
import Navbar from "../component/navbar";
import FinanceAd from "../component/financeAd";
import { FaList, FaTh } from "react-icons/fa";

import Footer from "../component/footer";
import PropertyListings from "../component/links";

const shedsData = [
  {
    id: 1,
    image:
      "https://www.livingandhome.co.uk/cdn/shop/files/PM0063_5560953b-efb5-4e18-ad7f-57261eab7cf0.jpg?v=1725438727&width=1000",
    category: "Backyard",
    color: "Gray",
    size: "8x10",
    location: "Kentucky",
    zipcode: "40201",
    price: 13328,
    status: "Available",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/200x150",
    category: "Cottage",
    color: "Red",
    size: "10x12",
    location: "Kentucky",
    zipcode: "40202",
    price: 14500,
    status: "Sold",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200x150",
    category: "Garage",
    color: "Brown",
    size: "12x16",
    location: "Louisville",
    zipcode: "40203",
    price: 16000,
    status: "Available",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/200x150",
    category: "Backyard",
    color: "Gray",
    size: "8x10",
    location: "Kentucky",
    zipcode: "40201",
    price: 13328,
    status: "Available",
  },
];

const Allsheds = () => {
  const [sheds] = useState(shedsData);

  // ✅ Filter States
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [status, setStatus] = useState("");

  // Price filter states
  const maxPrice = Math.max(...sheds.map((s) => s.price)); // dynamic max price
  const [tempPrice, setTempPrice] = useState([0, maxPrice]);
  const [priceRange, setPriceRange] = useState([0, maxPrice]); // applied price

  // ✅ Search States
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // only apply when icon is clicked

  // ✅ View toggle state
  const [view, setView] = useState("list");

  // ✅ Filtering logic
  const filteredSheds = sheds.filter((shed) => {
    const matchesSearch =
      searchQuery === "" ||
      shed.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shed.zipcode.includes(searchQuery);

    return (
      matchesSearch &&
      (category === "" || shed.category === category) &&
      (color === "" || shed.color === color) &&
      (status === "" || shed.status === status) &&
      shed.price >= priceRange[0] &&
      shed.price <= priceRange[1]
    );
  });

  return (
    <div>
      <Navbar />
      <FinanceAd />
      <div className="bg-[#F7F7F7] max-w-[2560px] mx-auto">
        <div className="flex max-w-[1538px] mx-auto p-6 gap-6 pt-20 ">
          {/* Left Sidebar Filter */}
          <div className="w-1/4 bg-white p-4  mb-1 rounded-lg">
            {/* ✅ Search Box */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search Zip Or Location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
      w-full 
      border border-[#FFA424] 
      rounded-[35px] 
      px-5 py-4 pr-12 
      outline-none
      placeholder-[#FFA424]
      placeholder:uppercase
      placeholder:font-poppins
      placeholder:font-normal
      placeholder:text-[17px]
      placeholder:leading-[100%]
      placeholder:tracking-[0]
    "
                style={{ borderWidth: "1.5px" }}
              />
              <button
                onClick={() => setSearchQuery(searchTerm)}
                className="absolute right-3 top-3 text-[#FFA424] p-[7px] pl-3 border-l border-[#FFA424]"
                style={{ borderLeftWidth: "1.5px" }}
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 22L17.9168 17.9167M20.8333 10.9167C20.8333 16.3935 16.3935 20.8333 10.9167 20.8333C5.43984 20.8333 1 16.3935 1 10.9167C1 5.43984 5.43984 1 10.9167 1C16.3935 1 20.8333 5.43984 20.8333 10.9167Z"
                    stroke="#FFA424"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <h2
              className="
    font-poppins
    font-semibold
    text-[23px]
    leading-[100%]
    tracking-[0]
    uppercase
    mb-4
    flex items-center gap-3
    text-[#002D4A]
  "
            >
              <span>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4H13M13 4C13 5.65686 14.3431 7 16 7C17.6569 7 19 5.65685 19 4C19 2.34315 17.6569 1 16 1C14.3431 1 13 2.34315 13 4ZM7 12H19M7 12C7 13.6569 5.65685 15 4 15C2.34315 15 1 13.6569 1 12C1 10.3431 2.34315 9 4 9C5.65685 9 7 10.3431 7 12Z"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Search & Filter
            </h2>

            {/* By Category */}
            <h3
              className="
    text-[#002D4A]
    font-poppins
    font-semibold
    text-[20px]
    leading-[100%]
    tracking-[0]
    capitalize
  "
            >
              By Category
            </h3>
            <div className="space-y-1 my-5">
              {["Backyard", "Cottage", "Garage"].map((cat) => {
                const count = sheds.filter((s) => s.category === cat).length;
                return (
                  <label
                    key={cat}
                    className="flex justify-between items-center  px-3 py-1  cursor-pointer"
                  >
                    <div className="flex items-center gap-2 font-poppins font-normal text-[18px] leading-[100%] tracking-[0] capitalize">
                      <input
                        type="checkbox"
                        checked={category === cat}
                        onChange={() =>
                          setCategory(category === cat ? "" : cat)
                        }
                        className="w-6 h-6 accent-[#FFA424] border-[1.5px] border-[#9C9CA3] rounded"
                      />
                      {cat}
                    </div>
                    <span className="bg-gray-200 font-poppins font-semibold text-[13px] leading-[100%] tracking-[0] text-center align-middle capitalize px-2 py-1 rounded-[13px] text-[#9C9CA3]">
                      {count}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* By Color */}
            <h3
              className="
    text-[#002D4A]
    font-poppins
    font-semibold
    text-[20px]
    leading-[100%]
    tracking-[0]
    capitalize
  "
            >
              By Color
            </h3>
            <div className="space-y-1 my-5">
              {["Gray", "Red", "Brown"].map((clr) => {
                const count = sheds.filter((s) => s.color === clr).length;
                return (
                  <label
                    key={clr}
                    className="flex justify-between items-center  px-3 py-1  cursor-pointer"
                  >
                    <div className="flex items-center gap-2 font-poppins font-normal text-[18px] leading-[100%] tracking-[0] capitalize">
                      <input
                        type="checkbox"
                        checked={color === clr}
                        onChange={() => setColor(color === clr ? "" : clr)}
                        className="w-6 h-6 accent-[#FFA424] border-[1.5px] border-[#9C9CA3] rounded"
                      />
                      {clr}
                    </div>
                    <span className="bg-gray-200 font-poppins font-semibold text-[13px] leading-[100%] tracking-[0] text-center align-middle capitalize px-2 py-1 rounded-[13px] text-[#9C9CA3]">
                      {count}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* By Status */}
            <h3
              className="
    text-[#002D4A]
    font-poppins
    font-semibold
    text-[20px]
    leading-[100%]
    tracking-[0]
    capitalize
  "
            >
              By Status
            </h3>
            <div className="space-y-1 my-5">
              {["Available", "Sold"].map((st) => {
                const count = sheds.filter((s) => s.status === st).length;
                return (
                  <label
                    key={st}
                    className="flex justify-between items-center  px-3 py-1  cursor-pointer"
                  >
                    <div className="flex items-center gap-2 font-poppins font-normal text-[18px] leading-[100%] tracking-[0] capitalize">
                      <input
                        type="checkbox"
                        checked={status === st}
                        onChange={() => setStatus(status === st ? "" : st)}
                        className="w-6 h-6 accent-[#FFA424] border-[1.5px] border-[#9C9CA3] rounded"
                      />
                      {st}
                    </div>
                    <span className="bg-gray-200 font-poppins font-semibold text-[13px] leading-[100%] tracking-[0] text-center align-middle capitalize px-2 py-1 rounded-[13px] text-[#9C9CA3]">
                      {count}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* By Price */}
            {/* Price Range */}
            <h3
              className="
    text-[#002D4A]
    font-poppins
    font-semibold
    text-[20px]
    leading-[100%]
    tracking-[0]
    capitalize
    mb-1
  "
            >
              Price Range
            </h3>

            <div className="relative w-full my-5">
              {/* Track background */}
              <div className="relative h-1 bg-gray-300 rounded">
                <div
                  className="absolute h-1 bg-black rounded"
                  style={{
                    left: `${(tempPrice[0] / maxPrice) * 100}%`,
                    width: `${
                      ((tempPrice[1] - tempPrice[0]) / maxPrice) * 100
                    }%`,
                  }}
                />
              </div>

              {/* Min handle */}
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={tempPrice[0]}
                onChange={(e) =>
                  setTempPrice([
                    Math.min(Number(e.target.value), tempPrice[1] - 500),
                    tempPrice[1],
                  ])
                }
                className="w-full h-1 bg-transparent appearance-none cursor-pointer absolute top-0
                  [&::-webkit-slider-thumb]:appearance-none
             [&::-webkit-slider-thumb]:h-4
             [&::-webkit-slider-thumb]:w-4
             [&::-webkit-slider-thumb]:rounded-full
             [&::-webkit-slider-thumb]:bg-black
             [&::-moz-range-thumb]:h-4
             [&::-moz-range-thumb]:w-4
             [&::-moz-range-thumb]:rounded-full
             [&::-moz-range-thumb]:bg-black"
                style={{ zIndex: tempPrice[0] > maxPrice - 100 ? 5 : 10 }}
              />

              {/* Max handle */}
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={tempPrice[1]}
                onChange={(e) =>
                  setTempPrice([
                    tempPrice[0],
                    Math.max(Number(e.target.value), tempPrice[0] + 500),
                  ])
                }
                className="w-full h-1 bg-transparent appearance-none cursor-pointer absolute top-0     [&::-webkit-slider-thumb]:appearance-none
             [&::-webkit-slider-thumb]:h-4
             [&::-webkit-slider-thumb]:w-4
             [&::-webkit-slider-thumb]:rounded-full
             [&::-webkit-slider-thumb]:bg-black
             [&::-moz-range-thumb]:h-4
             [&::-moz-range-thumb]:w-4
             [&::-moz-range-thumb]:rounded-full
             [&::-moz-range-thumb]:bg-black"
                style={{ zIndex: 20 }}
              />
            </div>

            {/* Min / Max values */}
            <div className="flex items-center justify-between mt-6 mb-3">
              <div className="border rounded-full px-4 py-2 text-sm text-gray-600">
                Min. {tempPrice[0].toLocaleString()}
              </div>
              <div className="border rounded-full px-4 py-2 text-sm text-gray-600">
                Max. {tempPrice[1].toLocaleString()}
              </div>
            </div>

            {/* Apply Button */}
            <button
              onClick={() => setPriceRange(tempPrice)}
              className="w-full bg-[#FFA424]  text-white py-2 rounded-md font-semibold"
            >
              APPLY
            </button>
          </div>

          {/* Shed Listings */}
          <div className="w-3/4">
            <div className="flex justify-between items-center max-w-7xl mx-auto mt-4 mb-6">
              {/* Left Heading */}
              <h1 className="text-3xl font-bold">Sheds for Sale in Kentucky</h1>

              {/* Right View Section */}
              <div className="flex items-center gap-3">
                <span className="text-gray-600 font-medium">View:</span>
                <div className="flex gap-4 text-2xl">
                  <FaList
                    onClick={() => setView("list")}
                    className={`cursor-pointer ${
                      view === "list" ? "text-[#FFA424]" : "text-gray-600"
                    }`}
                  />
                  <FaTh
                    onClick={() => setView("grid")}
                    className={`cursor-pointer ${
                      view === "grid" ? "text-[#FFA424]" : "text-gray-600"
                    }`}
                  />
                </div>
              </div>
            </div>

            {filteredSheds.length === 0 ? (
              <p className="text-gray-500">No sheds found.</p>
            ) : view === "list" ? (
              <div className="space-y-6">
                {filteredSheds.map((shed) => (
                  <div
                    key={shed.id}
                    className="flex bg-white shadow-md rounded-xl overflow-hidden border border-gray-200"
                  >
                    {/* Left Image Section */}
                    <div className="relative">
                      <img
                        src={shed.image}
                        alt={shed.category}
                        className="w-[280px] h-[240px] object-cover"
                      />
                      {/* Status Tag */}

                      <span className="absolute bottom-2 left-2 flex items-center gap-2 bg-[#FFFFFF] text-[#002D4A] font-poppins font-semibold text-[12px] leading-[100%] tracking-[-0.03em] px-2 py-1 rounded-full">
                        <span className="w-2 h-2 bg-[#02db40] rounded-full"></span>
                        status {shed.status}
                      </span>
                      {/* Top Left heart Icon */}
                      <div className="absolute md:top-2 md:left-3 bottom-2 right-3 ">
                        <button className="bg-white p-2 rounded-full shadow w-9 h-9">
                          <svg
                            width="19"
                            height="16"
                            viewBox="0 0 19 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.6391 2.67663C8.03958 0.841744 5.37234 0.348162 3.36829 2.02837C1.36424 3.70858 1.08211 6.51783 2.65589 8.505C3.96439 10.1572 7.92435 13.6419 9.22222 14.7697C9.36742 14.8959 9.44006 14.9589 9.5247 14.9837C9.59862 15.0054 9.6795 15.0054 9.75342 14.9837C9.83806 14.9589 9.9107 14.8959 10.0559 14.7697C11.3537 13.6419 15.3137 10.1572 16.6222 8.505C18.196 6.51783 17.9483 3.69091 15.9098 2.02837C13.8713 0.36584 11.2385 0.841744 9.6391 2.67663Z"
                              stroke="#FFA424"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Middle Content */}
                    <div className="flex-1 p-4">
                      <h2 className="font-semibold text-[20px] text-[#002D4A]">
                        {shed.size} {shed.category} Shed
                      </h2>
                      <p className="text-sm text-gray-500 mb-2">
                        With Grandview LP Siding Siding
                      </p>

                      <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">🏠 Type:</span>
                          <span className="font-medium">
                            {shed.buildingType || "Studio"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">📐 Size:</span>
                          <span className="font-medium">{shed.size}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">🎨 Color:</span>
                          <span className="font-medium">{shed.color}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">⭐ Condition:</span>
                          <span className="font-medium">
                            {shed.condition || "Pre-Loved"}
                          </span>
                        </div>
                      </div>

                      {/* Seller Info */}
                      <div className="mt-4 text-xs text-gray-500 flex items-center gap-2">
                        <img
                          src="/logo.png"
                          alt="Seller Logo"
                          className="w-6 h-6 rounded-full"
                        />
                        <span>Urban Shed Concepts LLC, {shed.location}</span>
                      </div>
                    </div>

                    {/* Right Price & Button */}
                    <div className="flex flex-col justify-between items-end p-4 min-w-[180px]">
                      <div>
                        <span className="text-[#FFA424] font-bold text-xl block">
                          ${shed.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-500">+ Taxes</span>
                      </div>
                      <button className="bg-[#FFA424] text-white text-sm px-4 py-2 rounded-md mt-4 hover:bg-[#e8931d] transition">
                        Contact Seller
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-6">
                {filteredSheds.map((shed) => (
                  <div
                    key={shed.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <img
                      src={shed.image}
                      alt={shed.category}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="font-bold text-lg">
                        {shed.size} {shed.category} Shed
                      </h2>
                      <p className="text-gray-600">Location: {shed.location}</p>
                      <p className="text-gray-600">Color: {shed.color}</p>
                      <p className="text-sm text-green-600">{shed.status}</p>
                      <span className="text-orange-500 font-bold text-lg block mt-2">
                        ${shed.price.toLocaleString()}
                      </span>
                      <button className="bg-[#FFA424]  text-white px-4 py-2 rounded-md mt-2 w-full">
                        Contact Seller
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-[1538px] mx-auto p-6">
        <p className="font-poppins font-normal text-[40px] text-[#002D4A]  leading-[56px] tracking-[-0.03em]">
          Popular Search
        </p>
        <h1 className="font-poppins font-semibold text-[40px]  text-[#002D4A] leading-[56px] tracking-[-0.03em]">
          Results By Location
        </h1>
        <PropertyListings />
      </div>

      <Footer />
    </div>
  );
};

export default Allsheds;
