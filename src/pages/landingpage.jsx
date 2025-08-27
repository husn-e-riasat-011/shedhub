import React from "react";
import Navbar from "../component/navbar";
import FinanceAd from "../component/financeAd";

export default function Landingpage() {
  return (
    <div>
      <Navbar />
      <section
        className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/herobg.png')", // yaha apna image dalna (public folder me copy karo)
        }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-[#002D4A]/90 max-h-[430px]"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Welcome to <span className="text-[#FFA424]">ShedHub</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-2">
            Find Shed For Sale Nearby
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center bg-transparent border border-[#FFFFFF] rounded-full w-[90%] max-w-xl px-4 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Search by Location"
                className="flex-1 bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] outline-none"
              />
              <button className="text-[#FFFFFF]  pl-3 border-l border-[#FFFFFF]">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 22L17.9168 17.9167M20.8333 10.9167C20.8333 16.3935 16.3935 20.8333 10.9167 20.8333C5.43984 20.8333 1 16.3935 1 10.9167C1 5.43984 5.43984 1 10.9167 1C16.3935 1 20.8333 5.43984 20.8333 10.9167Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <p className="text-sm text-[#FFFFFF] mt-4">
            Search from more than <span className="font-bold">7,500</span>{" "}
            dealers nationwide!
          </p>
        </div>
      </section>

      <div className="max-w-[1260px] mx-auto ">
        <FinanceAd />
      </div>
    </div>
  );
}
