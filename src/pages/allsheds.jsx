import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import FinanceAd from "../component/financeAd";
import { FaList, FaTh } from "react-icons/fa";
import { ChevronDown, Search } from "lucide-react";
import Footer from "../component/footer";
import PropertyListings from "../component/links";

// import { useSheds } from "../hooks/useSheds";

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
    image:
      "https://rowlinsongarden.co.uk/images/10x12-trentvale-metal-apex-shed-dark-grey-p165-1262_image.jpg",
    category: "Cottage",
    color: "Red",
    size: "10x12",
    location: "Kentucky",
    zipcode: "40202",
    price: 14500,
    status: "Available",
  },
  {
    id: 3,
    image:
      "https://d6bvpt6ekkwt0.cloudfront.net/5941031dca2f3a64708b4569/Product%20List/img_8991-1-.jpg?1642093417",
    category: "Garage",
    color: "Black",
    size: "12x16",
    location: "Louisville",
    zipcode: "40203",
    price: 16000,
    status: "Available",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWW4Mg8mTkiCFkorOkQ36RVNqgJxYFzLYyBw&s",
    category: "Featured",
    color: "Green",
    size: "8x10",
    location: "Kentucky",
    zipcode: "40201",
    price: 13328,
    status: "Available",
  },
];

const Allsheds = () => {
  const [sheds] = useState(shedsData);
  // console.log(shedsData);

  // const { allsheds, loading, error } = useSheds();
  // console.log(allsheds);

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = () => {
    if (!email) return;

    setIsSubmitted(true);
    console.log("Email submitted:", email);
    setEmail("");
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };

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
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setView("grid"); // md se chhoti screen → grid
      }
    };

    // run on mount
    handleResize();
    // run on resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      <div className="bg-[#F7F7F7] max-w-[2560px] mx-auto">
        {" "}
        <FinanceAd />
      </div>
      <div className="bg-[#F7F7F7] max-w-[2560px] mx-auto">
        <div className="flex max-w-[1538px] mx-auto md:p-6 p-3 gap-6 md:pt-20 ">
          {/* Left Sidebar Filter */}
          <div className="w-1/4 hidden lg:block p-4  mb-1 rounded-lg">
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
              {[
                "Featured",
                "New Listing",
                "Barn",
                "Cottage",
                "Gazebo",
                "playhouse",
                "Livestock Shelter",
                "Repo",
              ].map((cat) => {
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
              {[
                "Black",
                "Brown",
                "Burgundy",
                "Blue",
                "Green",
                "Orange",
                "Purple",
                "Red",
              ].map((clr) => {
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
              {["Available", "Online Only", "Sold"].map((st) => {
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

            <div className="  flex items-center justify-center mt-8">
              <div className="bg-[#F7F7F7] border-1 border-black rounded-lg shadow-lg p-6 w-full max-w-md border">
                {/* Bell Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 mr-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-full h-full text-[#FFA424]"
                    >
                      <path
                        d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.73 21a2 2 0 0 1-3.46 0"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="text-[#FFA424] font-semibold text-lg">
                    NOTIFY ME
                  </h2>
                </div>

                {/* Description */}
                <p className="font-poppins font-normal text-[17px] leading-[100%] tracking-[-0.03em] text-[#002D4A] mb-6">
                  Get email alerts for new ads that match your search
                  preferences
                </p>

                {/* Form */}
                <div className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-[35px] focus:outline-none focus:ring-2 focus:ring-[#FFA424] focus:border-transparent text-sm"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitted}
                    className={`w-full py-3 rounded-lg font-semibold text-white text-sm transition-colors ${
                      isSubmitted
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-[#FFA424] hover:bg-orange-500"
                    }`}
                  >
                    {isSubmitted ? "SUBSCRIBED!" : "SUBMIT"}
                  </button>
                </div>

                {isSubmitted && (
                  <p className="text-green-600 text-sm mt-3 text-center">
                    ✓ You'll receive email notifications for matching ads!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Shed Listings */}
          <div className="lg:w-3/4 w-full">
            <div className=" justify-between items-center max-w-7xl mx-auto mt-4 mb-4 hidden md:flex">
              {/* Left Heading */}
              <h1 className="text-3xl font-bold text-[#002D4A]">
                Sheds for Sale in Kentucky
              </h1>

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
            <div className=" justify-between items-center max-w-7xl mx-auto  mb-6 hidden md:flex">
              {/* Left Heading */}
              <h1 className="font-poppins font-normal text-[17px] leading-[100%] tracking-[0%] text-[#9C9CA3]">
                <span className="font-poppins font-semibold text-black text-[17px] leading-[100%] tracking-[0%]">
                  {filteredSheds.length}
                </span>{" "}
                Sheds Found
              </h1>

              {/* Right View Section */}
              <div className="flex items-center gap-3">
                <span className="text-gray-600 font-medium">Sort by:</span>
                <div className="flex justify-center items-center gap-4 font-poppins font-semibold text-[14px] leading-[100%] tracking-[0%]">
                  Newest Listing{" "}
                  <svg
                    width="6"
                    height="5"
                    viewBox="0 0 6 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.86603 4.5C3.48112 5.16667 2.51887 5.16667 2.13397 4.5L0.401924 1.5C0.0170235 0.833332 0.498149 -5.6841e-07 1.26795 -5.01112e-07L4.73205 -1.9827e-07C5.50185 -1.30972e-07 5.98298 0.833333 5.59808 1.5L3.86603 4.5Z"
                      fill="#9C9CA3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex md:hidden items-center justify-end gap-3 mb-6 mt-3">
              {/* Sort By Text */}
              <span className="font-poppins font-medium text-[12px] leading-[100%] tracking-[0] capitalize text-[#002C49] cursor-pointer">
                Sort By:
              </span>

              {/* Dropdown Button */}
              <button className="flex items-center gap-2 border border-[#002C49] rounded-full px-3 py-2 font-poppins font-medium text-[13px] leading-[100%] tracking-[0] uppercase text-[#002C49]">
                BEST MATCH
                <ChevronDown className="w-5 h-5 text-[#002C49]" />
              </button>

              {/* Round Orange Button */}
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFA424] text-white">
                <Search className="w-6 h-6" />
              </button>
            </div>
            {filteredSheds.length === 0 ? (
              <p className="text-gray-500">No sheds found.</p>
            ) : view === "list" ? (
              <div className="space-y-6 ">
                {filteredSheds.map((shed) => (
                  <div
                    key={shed.id}
                    className="flex bg-white p-4 shadow-md rounded-xl overflow-hidden border border-gray-200"
                  >
                    {/* Left Image Section */}
                    <div className="relative">
                      <img
                        src={shed.image}
                        alt={shed.category}
                        className="w-[326px] h-full rounded-[6px]  object-cover"
                      />
                      {/* Status Tag */}

                      <span className="absolute bottom-2 left-2 flex items-center gap-2 bg-[#FFFFFF] text-[#002D4A] font-poppins font-semibold text-[12px] leading-[100%] tracking-[-0.03em] px-2 py-1 rounded-full">
                        <span className="w-2 h-2 bg-[#02db40] rounded-full"></span>
                        status {shed.status}
                      </span>
                      {/* Top Left heart Icon */}
                      <div className="absolute top-2 left-3">
                        <button className="bg-white p-2 rounded-full shadow w-9 h-9">
                          <svg
                            width="19"
                            height="16"
                            viewBox="0 0 19 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.6391 2.67663C8.03958 0.841744 5.37234 0.348162 3.36829 2.02837C1.36424 3.70858 1.08211 6.51783 2.65589 8.505C3.96439 10.1572 7.92435 13.6419 9.22222 14.7697C9.36742 14.8959 9.44006 14.9589 9.5247 14.9837C9.59862 15.0054 9.6795 15.0054 9.75342 14.9837C9.83806 14.9589 9.9107 14.8959 10.0559 14.7697C11.3537 13.6419 15.3137 10.1572 16.6222 8.505C18.196 6.51783 17.9483 3.69091 15.9098 2.02837C13.8713 0.36584 11.2385 0.841744 9.6391 2.67663Z"
                              stroke="#FFA424"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="px-6 w-full ">
                      {/* 1 */}
                      <div className="flex justify-between ">
                        <div>
                          <h2 className="font-poppins font-semibold text-[28px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                            {shed.size} {shed.category} Shed
                          </h2>
                          <p className="font-poppins font-normal text-[20px] leading-[100%] tracking-[-0.03em] text-[#002D4A] my-3">
                            With Grandview LP Siding Siding
                          </p>
                        </div>
                        <div>
                          <span className="font-poppins font-semibold text-[36px] leading-[100%] tracking-[-0.03em] text-[#FFA424] block">
                            ${shed.price.toLocaleString()}.00
                          </span>

                          <span className="font-poppins font-light text-[21px] leading-[100%] tracking-[-0.03em] text-[#FFA424] block text-right">
                            + Taxes
                          </span>
                        </div>
                      </div>
                      <hr className="text-[#a5a4a4] my-3" />
                      {/* 2 */}
                      <div className="flex text-center justify-between bg-white  ">
                        {/* Property Info */}
                        <div className="py-2 ">
                          <div className="flex items-center justify-center gap-1 ">
                            <svg
                              className="h-7 w-7"
                              viewBox="0 0 42 43"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M40.5331 18.4283L21.9029 1.35466C21.386 0.881779 20.6138 0.881779 20.0969 1.35466L1.46694 18.4283C0.898094 18.951 0.840972 19.856 1.33971 20.451C1.83824 21.0461 2.70394 21.105 3.27279 20.5846L4.71535 19.2609V40.5678C4.71535 41.3574 5.32855 42 6.08521 42H16.4668H25.533H35.9146C36.6713 42 37.2845 41.3574 37.2845 40.5678V19.2631L38.727 20.5846C38.9871 20.8221 39.3091 20.9397 39.6293 20.9397C40.0103 20.9397 40.3892 20.7746 40.6601 20.451C41.1591 19.856 41.1019 18.951 40.5331 18.4283ZM17.8366 39.1356V27.3338H24.1632V39.1356H17.8366ZM34.545 16.763V39.1356H26.9031V25.9016C26.9031 25.1097 26.2897 24.4694 25.5333 24.4694H16.467C15.7106 24.4694 15.0971 25.1097 15.0971 25.9016V39.1356H7.45506V16.763L7.45463 16.7516L21 4.33676L34.5454 16.7516L34.545 16.763Z"
                                fill="#363C45"
                                stroke="#363C45"
                                strokeWidth="0.2"
                              />
                            </svg>

                            <div className="text-left">
                              <p className="font-poppins font-medium text-[10px] leading-[100%] tracking-[-0.03em] text-[#878B96]">
                                Building Type
                              </p>

                              <p className="font-poppins font-medium  text-[16px] leading-[100%] tracking-[-0.03em] text-[#363C45]">
                                Studio
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className=" lg:border-l   lg:border-[#E5E7EB] lg:pl-4 py-2 ">
                          <div className="flex items-center justify-center   gap-2 ">
                            <div className="relative">
                              <svg
                                viewBox="0 0 34 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute  w-7 h-7 -top-[12px] -right-[3px]"
                              >
                                <path
                                  d="M4.62542 8.87911C4.74057 8.99699 4.91096 9.03241 5.05835 8.96876C5.20804 8.9051 5.30478 8.75659 5.30478 8.59393V6.36843H28.6958V8.59393C28.6958 8.75659 28.7925 8.9051 28.9399 8.96876C29.0896 9.03241 29.26 8.99699 29.3729 8.87911L32.8826 5.28885C33.0392 5.12855 33.0392 4.87145 32.8826 4.71115L29.3729 1.12089C29.26 1.00301 29.0896 0.967594 28.9399 1.03125C28.7925 1.0949 28.6958 1.24341 28.6958 1.40607V3.63157H5.30478V1.40607C5.30478 1.24341 5.20804 1.0949 5.05835 1.03125C4.91096 0.967594 4.74057 1.00301 4.62542 1.12089L1.11572 4.71115C0.961426 4.87145 0.961426 5.12855 1.11572 5.28885L4.62542 8.87911Z"
                                  fill="#363C45"
                                  stroke="#FAFAFB"
                                  strokeWidth="0.4"
                                />
                              </svg>
                              <svg
                                viewBox="0 0 34 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute  left-[28px] top-1 transform rotate-90  w-7 h-7"
                              >
                                <path
                                  d="M4.62542 8.87911C4.74057 8.99699 4.91096 9.03241 5.05835 8.96876C5.20804 8.9051 5.30478 8.75659 5.30478 8.59393V6.36843H28.6958V8.59393C28.6958 8.75659 28.7925 8.9051 28.9399 8.96876C29.0896 9.03241 29.26 8.99699 29.3729 8.87911L32.8826 5.28885C33.0392 5.12855 33.0392 4.87145 32.8826 4.71115L29.3729 1.12089C29.26 1.00301 29.0896 0.967594 28.9399 1.03125C28.7925 1.0949 28.6958 1.24341 28.6958 1.40607V3.63157H5.30478V1.40607C5.30478 1.24341 5.20804 1.0949 5.05835 1.03125C4.91096 0.967594 4.74057 1.00301 4.62542 1.12089L1.11572 4.71115C0.961426 4.87145 0.961426 5.12855 1.11572 5.28885L4.62542 8.87911Z"
                                  fill="#363C45"
                                  stroke="#FAFAFB"
                                  strokeWidth="0.4"
                                />
                              </svg>

                              <svg
                                width="20"
                                height="24"
                                viewBox="0 0 32 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className=" h-7 w-7 mt-[4px] ml-[12px]"
                              >
                                <path
                                  d="M29.0441 1H2.95592C1.87679 1 1 1.84758 1 2.89284V28.1072C1 29.1524 1.87679 30 2.95592 30H29.0441C30.1255 30 31 29.1524 31 28.1072V2.89284C31 1.84758 30.1255 1 29.0441 1ZM27.0881 26.2166H4.91411V4.78342H27.0881V26.2166Z"
                                  fill="#363C45"
                                  stroke="#FAFAFB"
                                  strokeWidth="0.4"
                                />
                              </svg>
                            </div>
                            <div className="text-left">
                              <p className="font-poppins font-medium text-[10px]  leading-[100%] tracking-[-0.03em] text-[#878B96]">
                                Building Size
                              </p>
                              <p className="font-poppins font-medium  text-[16px] leading-[100%] tracking-[-0.03em] text-[#363C45]">
                                14 x 32
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="lg:border-l   lg:border-[#E5E7EB] lg:pl-4 py-2">
                          <div className="flex items-center justify-center   gap-1">
                            <img
                              src="/Fill Color.png"
                              alt="Color"
                              className=" h-7 w-7"
                            />
                            <div className="text-left">
                              <p className="font-poppins font-medium text-[10px]  leading-[100%] tracking-[-0.03em] text-[#878B96]">
                                Color
                              </p>
                              <p className="font-poppins font-medium  text-[16px] leading-[100%] tracking-[-0.03em] text-[#363C45]">
                                Dark Grey
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="lg:border-l  lg:border-[#E5E7EB] lg:pl-4 py-3">
                          <div className="flex items-center justify-center    gap-1">
                            <svg
                              className=" h-7 w-7"
                              viewBox="0 0 42 43"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M40.5331 18.4283L21.9029 1.35466C21.386 0.881779 20.6138 0.881779 20.0969 1.35466L1.46694 18.4283C0.898094 18.951 0.840972 19.856 1.33971 20.451C1.83824 21.0461 2.70394 21.105 3.27279 20.5846L4.71535 19.2609V40.5678C4.71535 41.3574 5.32855 42 6.08521 42H16.4668H25.533H35.9146C36.6713 42 37.2845 41.3574 37.2845 40.5678V19.2631L38.727 20.5846C38.9871 20.8221 39.3091 20.9397 39.6293 20.9397C40.0103 20.9397 40.3892 20.7746 40.6601 20.451C41.1591 19.856 41.1019 18.951 40.5331 18.4283ZM17.8366 39.1356V27.3338H24.1632V39.1356H17.8366ZM34.545 16.763V39.1356H26.9031V25.9016C26.9031 25.1097 26.2897 24.4694 25.5333 24.4694H16.467C15.7106 24.4694 15.0971 25.1097 15.0971 25.9016V39.1356H7.45506V16.763L7.45463 16.7516L21 4.33676L34.5454 16.7516L34.545 16.763Z"
                                fill="#363C45"
                                stroke="#363C45"
                                strokeWidth="0.2"
                              />
                            </svg>

                            <div className="text-left">
                              <p className="font-poppins font-medium text-[10px] leading-[100%] tracking-[-0.03em] text-[#878B96]">
                                Condition
                              </p>
                              <p className="font-poppins font-medium text-[16px] leading-[100%] tracking-[-0.03em] text-[#363C45]">
                                Pre-Loved
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="text-[#a5a4a4] my-3" />
                      {/* 3  */}
                      <div className="flex justify-between  min-w-[180px]">
                        {/* Seller Info */}
                        <div className="mt-4 text-xs text-gray-500 flex items-center gap-2">
                          <img
                            src="/location.png"
                            alt="Seller Logo"
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <span className="font-poppins font-medium text-[14px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                              Urban Shed Concepts LLC, {shed.location}
                            </span>
                            <p className="flex items-center gap-1 font-poppins font-normal text-[13px] leading-[100%] tracking-[-0.03em] text-[#878B96] not-italic mt-1">
                              <span className="text-[#878B96]">
                                <svg
                                  width="10"
                                  height="13"
                                  viewBox="0 0 21 26"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.5 14.0625C12.4676 14.0625 14.0625 12.4676 14.0625 10.5C14.0625 8.53249 12.4676 6.9375 10.5 6.9375C8.53243 6.9375 6.9375 8.53249 6.9375 10.5C6.9375 12.4676 8.53243 14.0625 10.5 14.0625Z"
                                    stroke="#878B96"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10.5 24.75C15.25 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.75 20 10.5 24.75Z"
                                    stroke="#878B96"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              6024551571, Phoenix, AZ
                            </p>
                          </div>
                        </div>
                        <div className="w-full max-w-[342px]">
                          <button className="bg-[#FFA424] w-full font-poppins font-medium text-[19px] leading-[100%] tracking-[-0.03em] text-center align-middle text-white px-5 py-2 rounded-md mt-4 hover:bg-[#e8931d] transition">
                            Contact Seller
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-6 justify-center  ">
                {filteredSheds.map((shed) => (
                  <div
                    key={shed.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden w-[326px]"
                  >
                    <div className="relative">
                      <img
                        src={shed.image}
                        alt={shed.category}
                        className="w-[326px] h-[224px] rounded-[6px]  object-cover"
                      />
                      {/* Status Tag */}

                      <span className="absolute bottom-2 left-2 flex items-center gap-2 bg-[#FFFFFF] text-[#002D4A] font-poppins font-semibold text-[12px] leading-[100%] tracking-[-0.03em] px-2 py-1 rounded-full">
                        <span className="w-2 h-2 bg-[#02db40] rounded-full"></span>
                        status {shed.status}
                      </span>
                      {/* Top Left heart Icon */}
                      <div className="absolute bottom-2 right-6">
                        <button className="bg-white p-2 rounded-full shadow w-9 h-9">
                          <svg
                            width="19"
                            height="16"
                            viewBox="0 0 19 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.6391 2.67663C8.03958 0.841744 5.37234 0.348162 3.36829 2.02837C1.36424 3.70858 1.08211 6.51783 2.65589 8.505C3.96439 10.1572 7.92435 13.6419 9.22222 14.7697C9.36742 14.8959 9.44006 14.9589 9.5247 14.9837C9.59862 15.0054 9.6795 15.0054 9.75342 14.9837C9.83806 14.9589 9.9107 14.8959 10.0559 14.7697C11.3537 13.6419 15.3137 10.1572 16.6222 8.505C18.196 6.51783 17.9483 3.69091 15.9098 2.02837C13.8713 0.36584 11.2385 0.841744 9.6391 2.67663Z"
                              stroke="#FFA424"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <h2 className="font-poppins font-semibold text-[23px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                        {shed.size} {shed.category} Shed
                      </h2>

                      <p className="text-[#002D4A]">
                        With Grandview LP Siding Siding
                      </p>
                      <div className="mt-4 text-xs text-gray-500 flex items-center gap-2">
                        <img
                          src="/location.png"
                          alt="Seller Logo"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <span className="font-poppins font-medium text-[14px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                            Urban Shed Concepts LLC, {shed.location}
                          </span>
                          <p className="flex items-center gap-1 font-poppins font-normal text-[13px] leading-[100%] tracking-[-0.03em] text-[#878B96] not-italic mt-1">
                            <span className="text-[#878B96]">
                              <svg
                                width="10"
                                height="13"
                                viewBox="0 0 21 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.5 14.0625C12.4676 14.0625 14.0625 12.4676 14.0625 10.5C14.0625 8.53249 12.4676 6.9375 10.5 6.9375C8.53243 6.9375 6.9375 8.53249 6.9375 10.5C6.9375 12.4676 8.53243 14.0625 10.5 14.0625Z"
                                  stroke="#878B96"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10.5 24.75C15.25 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.75 20 10.5 24.75Z"
                                  stroke="#878B96"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            6024551571, Phoenix, AZ
                          </p>
                        </div>
                      </div>

                      <div className="flex items-baseline gap-[2px] text-[#FFA424] my-3">
                        <span className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[-0.03em]">
                          ${shed.price.toLocaleString()}.00
                        </span>

                        <span className="font-poppins font-light text-[24px] leading-[100%] tracking-[-0.03em]">
                          + Taxes
                        </span>
                      </div>

                      <button className="bg-[#FFA424]  text-white px-4 py-2 rounded-md mt-2 w-full cursor-pointer">
                        Contact Seller
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center items-center py-12">
              <button className="flex items-center gap-2 border border-[#002D4A] rounded-full px-6 py-2 text-[#002D4A] font-semibold">
                LOAD MORE
                <span className="text-lg">↓</span>
              </button>
            </div>
            {}
          </div>
        </div>
      </div>

      <div className="max-w-[1538px] mx-auto p-6 md:block hidden">
        <p className="font-poppins font-normal text-[40px] text-[#002D4A]  leading-[56px] tracking-[-0.03em]">
          Popular Search
        </p>
        <h1 className="font-poppins font-semibold text-[40px]  text-[#002D4A] leading-[56px] tracking-[-0.03em]">
          Results By Location
        </h1>
        <PropertyListings />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Allsheds;
