import React, { useState } from "react";
import Navbar from "../component/navbar";
import FinanceAd from "../component/financeAd";
import { FaSearch, FaList, FaTh } from "react-icons/fa";
import Footer from "../component/footer";
import PropertyListings from "../component/links";

const shedsData = [
  {
    id: 1,
    image: "https://via.placeholder.com/200x150",
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

      <div className="flex max-w-[1538px] mx-auto p-6 gap-6">
        {/* Left Sidebar Filter */}
        <div className="w-1/4 bg-white p-4 shadow-md mb-1 rounded-lg">
          {/* ✅ Search Box */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search Zip Or Location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 pr-10 outline-none"
            />
            <button
              onClick={() => setSearchQuery(searchTerm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-orange-500"
            >
              <FaSearch />
            </button>
          </div>

          <h2 className="text-lg font-bold mb-4">Search & Filter</h2>

          {/* By Category */}
          <h3 className="font-semibold">By Category</h3>
          <div className="space-y-2 mb-4">
            {["Backyard", "Cottage", "Garage"].map((cat) => {
              const count = sheds.filter((s) => s.category === cat).length;
              return (
                <label
                  key={cat}
                  className="flex justify-between items-center border rounded-md px-3 py-2 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={category === cat}
                      onChange={() => setCategory(category === cat ? "" : cat)}
                      className="w-4 h-4 accent-[#FFA424] "
                    />
                    {cat}
                  </div>
                  <span className="bg-gray-200 text-sm px-2 py-1 rounded-full">
                    {count}
                  </span>
                </label>
              );
            })}
          </div>

          {/* By Color */}
          <h3 className="font-semibold">By Color</h3>
          <div className="space-y-2 mb-4">
            {["Gray", "Red", "Brown"].map((clr) => {
              const count = sheds.filter((s) => s.color === clr).length;
              return (
                <label
                  key={clr}
                  className="flex justify-between items-center border rounded-md px-3 py-2 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={color === clr}
                      onChange={() => setColor(color === clr ? "" : clr)}
                      className="w-4 h-4 accent-[#FFA424] "
                    />
                    {clr}
                  </div>
                  <span className="bg-gray-200 text-sm px-2 py-1 rounded-full">
                    {count}
                  </span>
                </label>
              );
            })}
          </div>

          {/* By Status */}
          <h3 className="font-semibold">By Status</h3>
          <div className="space-y-2 mb-4">
            {["Available", "Sold"].map((st) => {
              const count = sheds.filter((s) => s.status === st).length;
              return (
                <label
                  key={st}
                  className="flex justify-between items-center border rounded-md px-3 py-2 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={status === st}
                      onChange={() => setStatus(status === st ? "" : st)}
                      className="w-4 h-4 accent-[#FFA424] "
                    />
                    {st}
                  </div>
                  <span className="bg-gray-200 text-sm px-2 py-1 rounded-full">
                    {count}
                  </span>
                </label>
              );
            })}
          </div>

          {/* By Price */}
          {/* Price Range */}
          <h3 className="font-semibold mb-2">Price Range</h3>

          <div className="relative w-full mt-4">
            {/* Track background */}
            <div className="relative h-1 bg-gray-300 rounded">
              <div
                className="absolute h-1 bg-black rounded"
                style={{
                  left: `${(tempPrice[0] / maxPrice) * 100}%`,
                  width: `${((tempPrice[1] - tempPrice[0]) / maxPrice) * 100}%`,
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
            <h1 className="text-2xl font-bold">Sheds for Sale in Kentucky</h1>

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
                  className="flex bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={shed.image}
                    alt={shed.category}
                    className="w-40 h-32 object-cover"
                  />
                  <div className="p-4 flex-1">
                    <h2 className="font-bold text-xl">
                      {shed.size} {shed.category} Shed
                    </h2>
                    <p className="text-gray-600">Location: {shed.location}</p>
                    <p className="text-gray-600">Color: {shed.color}</p>
                    <p className="text-sm text-green-600">{shed.status}</p>
                  </div>
                  <div className="p-4 flex flex-col justify-between items-end">
                    <span className="text-[#FFA424]  font-bold text-lg">
                      ${shed.price.toLocaleString()}
                    </span>
                    <button className="bg-[#FFA424]  text-white px-4 py-2 rounded-md">
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
