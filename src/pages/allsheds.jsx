import React, { useState } from "react";
import Navbar from "../component/navbar";
import FinanceAd from "../component/financeAd";
import { FaSearch } from "react-icons/fa";
import Footer from "../component/footer";

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
];

const Allsheds = () => {
  const [sheds] = useState(shedsData);

  // ✅ Filter States
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [status, setStatus] = useState("");
  const [priceRange, setPriceRange] = useState([0, 20000]);

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

      {/* Heading + view toggle (sirf top pe rakha hai) */}

      <div className="flex max-w-7xl mx-auto p-6 gap-6">
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
            {["Backyard", "Cottage", "Garage"].map((cat) => (
              <label key={cat} className="block">
                <input
                  type="radio"
                  name="category"
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                />{" "}
                {cat}
              </label>
            ))}
          </div>

          {/* By Color */}
          <h3 className="font-semibold">By Color</h3>
          <div className="space-y-2 mb-4">
            {["Gray", "Red", "Brown"].map((clr) => (
              <label key={clr} className="block">
                <input
                  type="radio"
                  name="color"
                  checked={color === clr}
                  onChange={() => setColor(clr)}
                />{" "}
                {clr}
              </label>
            ))}
          </div>

          {/* By Status */}
          <h3 className="font-semibold">By Status</h3>
          <div className="space-y-2 mb-4">
            {["Available", "Sold"].map((st) => (
              <label key={st} className="block">
                <input
                  type="radio"
                  name="status"
                  checked={status === st}
                  onChange={() => setStatus(st)}
                />{" "}
                {st}
              </label>
            ))}
          </div>

          {/* By Price */}
          <h3 className="font-semibold mb-2">By Price</h3>
          <input
            type="range"
            min="0"
            max="20000"
            step="500"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full"
          />
          <p className="text-sm text-gray-600">
            Up to: <b>${priceRange[1].toLocaleString()}</b>
          </p>
        </div>

        {/* Shed Listings */}
        <div className="w-3/4">
          <div className="flex justify-between items-center max-w-7xl mx-auto mt-4 mb-6">
            <h1 className="text-2xl font-bold">Sheds for Sale in Kentucky</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setView("list")}
                className={`px-4 py-2 rounded-md border ${
                  view === "list" ? "bg-orange-500 text-white" : "bg-white"
                }`}
              >
                List
              </button>
              <button
                onClick={() => setView("grid")}
                className={`px-4 py-2 rounded-md border ${
                  view === "grid" ? "bg-orange-500 text-white" : "bg-white"
                }`}
              >
                Grid
              </button>
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
                    <span className="text-orange-500 font-bold text-lg">
                      ${shed.price.toLocaleString()}
                    </span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
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
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-2 w-full">
                      Contact Seller
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Allsheds;
