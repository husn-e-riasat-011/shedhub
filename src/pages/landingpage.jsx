import React from "react";
import Navbar from "../component/navbar";
import FinanceAd from "../component/financeAd";
import { Play } from "lucide-react";
import SimilarSheds from "../component/SimilarSheds";
import ShedsbyStates from "../component/shedsbystates";
import ShedSearchFilter from "../component/submitinfo";
import Faq from "../component/faq";
import Footer from "../component/footer";
import FinanceAdMobile from "../component/financeaddmobile";
export default function Landingpage() {
  return (
    <div>
      <Navbar />
      <section
        className="relative w-full max-w-[2490px] mx-auto  h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/herobg.png')", // yaha apna image dalna (public folder me copy karo)
        }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-[#002D4A]/80 max-h-[430px]"></div>

        <div className="relative z-10 text-center px-4">
          <h1
            className="font-poppins font-normal leading-[100%] tracking-[-0.03em] 
               text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] text-white"
          >
            Welcome to{" "}
            <span
              className="font-poppins font-semibold leading-[100%] tracking-[-0.03em] 
                   text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] text-[#FFA424]"
            >
              ShedHub
            </span>
          </h1>

          <p
            className="font-poppins font-semibold leading-[100%] tracking-[-0.03em] 
               text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
               text-[#FFFFFF] text-center mt-2"
          >
            Find Shed For Sale Nearby
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center bg-transparent border border-[#FFFFFF] rounded-full w-[99%] max-w-xl px-4 md:py-4 py-2 shadow-sm">
              <input
                type="text"
                placeholder="SEARCH ZIP OR LOCATION"
                className="flex-1 bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] placeholder:uppercase outline-none max-w-[660px] mx-auto"
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

          <p
            className="font-poppins font-normal leading-[100%] tracking-[-0.03em] 
               text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 
               text-[#FFFFFF] mt-4"
          >
            Search from more than{" "}
            <span
              className="font-poppins font-semibold leading-[100%] tracking-[-0.03em] 
                   text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
            >
              7,500 dealers
            </span>{" "}
            nationwide!
          </p>
        </div>
      </section>

      <div className="max-w-[1260px] mx-auto ">
        <FinanceAd />
      </div>
      <FinanceAdMobile />
      {/* hero section */}
      <section className="w-full bg-white  sm:py-16 py-4 ">
        <div className="max-w-[1538px] mx-auto px-6  flex flex-col lg:flex-row items-center justify-between gap-2">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-[700px] md:block hidden">
            <h2
              className="font-poppins font-normal leading-[56px] tracking-[-0.03em] 
             text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
             text-[#0B1A53]"
            >
              <span
                className="font-poppins font-semibold leading-[56px] tracking-[-0.03em] 
               text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
               text-[#FFA424]"
              >
                ShedHub
              </span>{" "}
              is the{" "}
              <span
                className="font-poppins font-semibold leading-[56px] tracking-[-0.03em] 
               text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] 
               text-[#0B1A53]"
              >
                #1 place
              </span>{" "}
              <br />
              to find sheds for sale <br />
              in your local area.
            </h2>
            <p
              className="font-poppins font-normal leading-[34px] tracking-[-0.03em] 
             text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 
             text-[#002D4A] max-w-[600px] mt-4"
            >
              Browse thousands of sheds from sellers across the country. With
              our Advanced Shed Search tool, you can easily sort through our
              expansive inventory and find just the right shed in a matter of
              minutes. Make your shed buying experience a breeze with{" "}
              <span
                className="font-poppins font-normal leading-[34px] tracking-[-0.03em] 
               text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 
               text-[#FFA424]"
              >
                ShedHub.
              </span>
            </p>

            <button
              className="font-poppins font-medium text-[20px] uppercase leading-[100%] tracking-[0em]
             mt-6 px-6 py-3 rounded-full border-2 border-[#002D4A] text-[#002D4A]
             flex items-center gap-2 hover:bg-[#FFA424] hover:text-white transition"
            >
              Search Sheds
              <svg
                className="w-4 h-5 "
                viewBox="0 0 11 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 16L9 8.5L0.999999 1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          {/* Right Video/Image */}
          <div>
            <h1 className="md:hidden block font-poppins font-semibold text-[22px] leading-[26px] tracking-[-0.03em] text-[#0B1A53] my-4">
              <span className="font-poppins font-normal text-[22px] leading-[26px] tracking-[-0.03em]">
                Why
              </span>{" "}
              ShedHub?
            </h1>

            <div className="relative lg:max-w-[770px] w-full aspect-video overflow-hidden shadow-lg rounded-[13px]">
              {/* Background Image */}

              <img
                src="/video.png"
                alt="Video preview"
                className="w-full h-full object-cover rounded-[13px]"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#002D4A]/80 z-10"></div>
              {/* Play Button */}
              <button className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-28 h-28 border-2 border-[#FFA424] rounded-full flex items-center justify-center bg-transparent hover:bg-white/20 transition">
                  <Play size={50} className="text-[#FFA424]" />
                </div>
              </button>
            </div>
            <p className="md:hidden block font-poppins font-normal text-[11px] leading-[20px] tracking-[-0.03em] text-justify text-[#0B1A53] my-4">
              ShedHub is the #1 place to find sheds for sale in your local area.
              Browse thousands of sheds from sellers across the country. With
              our Advanced Shed Search tool, you can easily sort through our
              expansive inventory and find just the right shed in a matter of
              minutes. Make your shed buying experience a breeze with ShedHub!
            </p>
          </div>
        </div>
      </section>

      {/* hero section 2 */}
      <div className="bg-[#F7F7F7] md:py-12 py-5 px-6 max-w-[2560px] mx-auto">
        <div className="max-w-[1490px] mx-auto flex flex-col xl:flex-row md:items-center items-start xl:items-start justify-between gap-10">
          {/* Left side - Main heading */}
          <div className="flex-1 text-left ">
            <h1>
              <span className="font-poppins font-semibold text-[28px] sm:text-[36px] md:text-[48px] leading-[120%] tracking-[-0.03em] text-[#FFA424]">
                ShedHub
              </span>{" "}
              <span className="font-poppins font-normal text-[28px] sm:text-[36px] md:text-[48px] leading-[120%] tracking-[-0.03em] text-[#002D4A]">
                Makes
              </span>
            </h1>
            <h2 className="font-poppins font-semibold text-[22px] sm:text-[36px] md:text-[48px] leading-[120%] tracking-[-0.03em] text-[#002D4A]">
              Shed Shopping Easy!
            </h2>
          </div>

          {/* Right side - Feature cards */}
          <div className="flex flex-row sm:flex-wrap lg:flex-nowrap gap-2 lg:gap-10 px-1">
            {/* FIND Card */}
            <div className="flex flex-col justify-center items-center sm:flex-row gap-7 bg-white py-4 md:px-6 px-2  shadow-md hover:shadow-lg transition duration-300 flex-1">
              <div className="flex items-center justify-center">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56 56L45.5003 45.5M53 27.5C53 41.5832 41.5832 53 27.5 53C13.4167 53 2 41.5832 2 27.5C2 13.4167 13.4167 2 27.5 2C41.5832 2 53 13.4167 53 27.5Z"
                    stroke="#FFA424"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="sm:text-left text-center">
                <h3 className="text-lg font-bold text-gray-800">FIND</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Find the Perfect <br /> Shed for Your Needs
                </p>
              </div>
            </div>

            {/* BUY Card */}
            <div className="flex flex-col justify-center items-center  sm:flex-row gap-7 bg-white py-4 md:px-6 px-2  shadow-md hover:shadow-lg transition duration-300 flex-1">
              <div className="flex items-center justify-center">
                <svg
                  className="w-14 h-14"
                  viewBox="0 0 60 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2H5.67774C6.37046 2 6.71682 2 6.99555 2.12441C7.24119 2.23405 7.44935 2.41035 7.5952 2.63236C7.76071 2.88423 7.8097 3.21913 7.90766 3.88887L9.24036 13M9.24036 13L12.2022 34.2613C12.578 36.9594 12.7659 38.3085 13.4264 39.3238C14.0083 40.2187 14.8426 40.9301 15.8289 41.3728C16.9481 41.875 18.3421 41.875 21.1301 41.875H45.2265C47.8803 41.875 49.2073 41.875 50.2919 41.4086C51.2479 40.9975 52.0681 40.3345 52.6608 39.4941C53.3326 38.5409 53.581 37.2679 54.0776 34.7217L57.8045 15.6116C57.9793 14.7155 58.0666 14.2674 57.9399 13.9171C57.829 13.6099 57.6096 13.3511 57.3213 13.1871C56.9927 13 56.5259 13 55.5916 13H9.24036ZM24.5255 54.25C24.5255 55.7688 23.2649 57 21.7098 57C20.1548 57 18.8942 55.7688 18.8942 54.25C18.8942 52.7312 20.1548 51.5 21.7098 51.5C23.2649 51.5 24.5255 52.7312 24.5255 54.25ZM47.0511 54.25C47.0511 55.7688 45.7905 57 44.235 57C42.6799 57 41.4193 55.7688 41.4193 54.25C41.4193 52.7312 42.6799 51.5 44.235 51.5C45.7905 51.5 47.0511 52.7312 47.0511 54.25Z"
                    stroke="#FFA424"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="sm:text-left text-center">
                <h3 className="text-lg font-bold text-gray-800">BUY</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get Your Shed <br /> Delivered Fast
                </p>
              </div>
            </div>

            {/* SELL Card */}
            <div className="flex flex-col justify-center items-center  sm:flex-row gap-7 bg-white py-4 md:px-6 px-2  shadow-md hover:shadow-lg transition duration-300 flex-1">
              <div className="flex items-center justify-center">
                <svg
                  width="67"
                  height="60"
                  viewBox="0 0 67 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M8.3 45.5556L8.3 44.9333C8.3 39.706 8.3 37.0927 9.33005 35.096C10.236 33.3398 11.6815 31.9121 13.4597 31.0173C15.4814 30 18.1274 30 23.42 30L43.58 30C48.8725 30 51.5188 30 53.5402 31.0173C55.3183 31.9121 56.764 33.3398 57.67 35.096C58.7 37.0927 58.7 39.706 58.7 44.9333L58.7 45.5556M8.3 45.5556C4.82051 45.5556 2 48.3412 2 51.7778C2 55.2143 4.82051 58 8.3 58C11.7795 58 14.6 55.2143 14.6 51.7778C14.6 48.3412 11.7795 45.5556 8.3 45.5556ZM58.7 45.5556C55.2206 45.5556 52.4 48.3412 52.4 51.7778C52.4 55.2143 55.2206 58 58.7 58C62.1794 58 65 55.2143 65 51.7778C65 48.3412 62.1794 45.5556 58.7 45.5556ZM33.5 14.4444L33.5 45.5556M33.5 14.4444C30.0205 14.4444 27.2 11.6587 27.2 8.22222C27.2 4.78578 30.0205 2 33.5 2C36.9795 2 39.8 4.78578 39.8 8.22222C39.8 11.6587 36.9795 14.4444 33.5 14.4444ZM33.5 45.5556C30.0205 45.5556 27.2 48.3412 27.2 51.7778C27.2 55.2143 30.0205 58 33.5 58C36.9795 58 39.8 55.2143 39.8 51.7778C39.8 48.3412 36.9795 45.5556 33.5 45.5556Z"
                    stroke="#FFA424"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </svg>
              </div>
              <div className="sm:text-left text-center">
                <h3 className="text-lg font-bold text-gray-800">SELL</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  List Your Shed <br /> and Reach Buyers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sheds  */}
      <div className="md:py-12 py-2 max-w-[2560px] mx-auto">
        <h3 className="font-poppins font-normal text-[28px] sm:text-[36px] md:text-[48px] leading-[56px] tracking-[-0.03em] md:text-center text-left md:mt-12 mt-6 max-w-[1538px] px-6 mx-auto  text-[#002D4A] ">
          Featured Sheds for
        </h3>
        <h1 className="font-poppins font-semibold text-[28px] sm:text-[36px] md:text-[48px] leading-[56px] tracking-[-0.03em] md:text-center text-left md:mb-20 mb-6 text-[#002D4A]  px-6 ">
          Sale or Lease
        </h1>
        <SimilarSheds />
        <div className="mt-8">
          <SimilarSheds />
        </div>
        <div className="flex justify-center items-center py-12">
          <button className="flex items-center gap-2 border border-[#002D4A] rounded-full px-6 py-2 text-[#002D4A] font-semibold">
            LOAD MORE
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

      {/* building style  */}
      <div className="bg-[#F7F7F7] md:py-12 py-6 px-6 max-w-[2560px] mx-auto">
        <div className="max-w-[1490px] mx-auto flex flex-wrap items-center justify-between">
          {/* Left side - Main heading */}
          <div className="flex-1 pr-12">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-tight  text-[#002D4A]">
              Browse Sheds by
            </h1>
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#002D4A] leading-tight">
              Building Style
            </h2>
          </div>

          {/* Right side - Feature cards in a row */}
          <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-10 md:mt-0 mt-10">
            {/* 1 */}
            <div className=" gap-7 bg-white py-3 px-7 max-w-[309px]">
              <div className="flex items-center justify-center">
                <svg
                  width="78"
                  height="78"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M69.3111 27.0193V67.1893H8.68945V27.0193"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.4043 67.1892H76.5963"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M61.3084 33.54H16.6924V67.1268H61.3084V33.54Z"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6924 33.54H61.3084"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.33984 30.03L38.9998 10.8108L75.6599 30.03"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-gray-800 text-center ">
                Shed
              </h3>
            </div>

            {/* 2 */}
            <div className=" gap-7 bg-white py-3 px-7 max-w-[309px]">
              <div className="flex items-center justify-center">
                <svg
                  width="77"
                  height="57"
                  viewBox="0 0 77 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.16699 55.8186H75.395"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M60.3028 22.2317H16.2588V55.8185H60.3028V22.2317Z"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.2808 55.8185L16.2588 22.2317H60.3028L38.2808 55.8185ZM38.2808 55.8185V22.6373"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.2894 8.31641L8.3584 19.72V55.8184H68.2028V19.72L60.2718 8.31641"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M60.272 8.3164L38.2808 1L16.2896 8.3164L4.63184 25.102"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M60.2725 8.31641L71.9303 25.102"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M60.3028 55.8185L38.2808 22.2317L16.2588 55.8185"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45.5007 10.4546H30.334V16.3637H45.5007V10.4546Z"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-gray-800 text-center ">
                Barn
              </h3>
            </div>

            {/* 3 */}
            <div className=" gap-7 bg-white py-3 px-7 max-w-[309px]">
              <div className="flex items-center justify-center">
                <svg
                  width="70"
                  height="71"
                  viewBox="0 0 70 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_995_126)">
                    <path
                      d="M35.0005 28.5564H69.0625L41.3285 14.115H35.0005H28.6725L0.938477 28.5564H35.0005Z"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32.4809 14.115L21.2109 28.5564"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M37.5205 14.115L48.7905 28.5564"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M62.2308 28.5564H7.84082V62.537H62.2308V28.5564Z"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M43.9747 28.5564H26.0967V62.537H43.9747V28.5564Z"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.30273 62.5369H68.7687"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.84082 49.5723H62.2308"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M53.4102 49.5723V62.2671"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M35.1689 49.5723V62.2671"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.9404 49.5723V62.2671"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M41.3849 8.0515L35.1689 3.7915L28.6729 8.0515V14.1149H41.3849V8.0515Z"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_995_126">
                      <rect width="70" height="71" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h3 className="text-lg font-bold text-gray-800 text-center ">
                Gazebo
              </h3>
            </div>
            {/* 4 */}
            <div className=" gap-7 bg-white py-3 px-7 max-w-[309px]">
              <div className="flex items-center justify-center">
                <svg
                  width="85"
                  height="59"
                  viewBox="0 0 85 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M75.5317 57.6691H9.46973V16.6311L42.5007 1.33105L75.5317 16.6311V57.6691Z"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.53027 57.6689H83.4703"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M66.8104 21.0681H18.1904V57.6691H66.8104V21.0681Z"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.1904 21.0681H66.8104"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.1904 28.157H66.8104"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.1904 35.5352H66.8104"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.1904 42.9131H66.8104"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.1904 50.291H66.8104"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-gray-800 text-center">
                Garage
              </h3>
            </div>
            {/* 5 */}
            <div className=" gap-7 bg-white py-3 px-7 max-w-[309px]">
              <div className="flex items-center justify-center">
                <svg
                  width="89"
                  height="65"
                  viewBox="0 0 89 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.60156 63.0981H87.3976"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.4454 34.9208C20.078 36.95 18.9388 40.6346 19.0812 45.85C19.099 46.2416 19.3838 46.5798 19.7754 46.651L23.5312 47.2384C23.5846 47.2562 23.6202 47.2562 23.6558 47.2562C23.8516 47.2562 24.0474 47.185 24.1898 47.0604C24.3678 46.9002 24.4924 46.6866 24.4924 46.4374C24.5102 44.2658 24.7238 41.8806 25.062 40.0472C25.151 41.6848 25.4892 43.5894 26.1122 45.7966C25.7918 47.452 25.0798 50.1576 24.4212 50.9408C23.2998 52.3114 22.036 60.535 21.68 63.027C21.6444 63.2584 21.7156 63.5076 21.8758 63.6856C22.036 63.8636 22.2496 63.9704 22.4988 63.9704H24.795C25.1688 63.9704 25.4892 63.7212 25.596 63.3652C26.664 59.5916 28.1058 55.1772 28.5686 54.6076C28.6398 54.5542 28.978 54.3228 29.2984 54.1092C29.9926 53.6464 30.936 53.0056 31.8794 52.2224C32.093 52.9878 32.2354 53.8244 32.2532 54.661C32.2532 54.8568 32.3244 55.0348 32.4668 55.195C33.6416 56.53 36.7032 60.5706 36.7744 63.1694C36.7922 63.6144 37.166 63.9704 37.611 63.9704H39.8182C40.2454 63.9704 40.5836 63.6678 40.637 63.2406C40.6548 63.0448 41.1354 58.6304 37.7 54.127C38.1806 53.1658 39.1418 50.923 39.302 48.3064C40.7616 48.5022 42.0788 48.5734 43.2536 48.5734C45.5142 48.5734 47.2586 48.2708 48.5758 47.8792C47.9172 51.4214 47.2586 53.8066 47.2586 53.8422C47.2408 53.8778 47.2408 53.9134 47.2408 53.9668C46.5466 59.2712 46.5466 62.9736 46.5466 63.1338C46.5466 63.5966 46.9204 63.9704 47.3832 63.9704H49.626C49.9998 63.9704 50.3202 63.7212 50.427 63.3652C50.4448 63.294 52.3494 56.4588 53.7556 54.1626C55.2686 51.6884 56.9774 48.3064 57.458 47.3274C59.1668 47.63 61.0358 47.8614 62.1038 47.9682L61.1426 55.7824C61.0892 56.2452 61.4096 56.6546 61.8546 56.708L63.8838 56.975C63.9194 56.975 63.955 56.975 63.9906 56.975C64.2754 56.975 64.5424 56.8326 64.6848 56.5834C65.5926 55.1594 66.4292 51.3324 66.8564 49.1964C67.9778 43.4648 67.6218 43.0376 67.4438 42.7884C66.536 41.6314 61.8012 40.7592 58.7574 40.2964C58.7396 38.819 58.5794 37.7332 58.526 37.3594C58.9354 34.191 59.5406 31.61 59.9856 30.0258C61.3206 31.0226 63.4566 30.9692 64.5424 30.9514C64.756 30.9514 64.934 30.9336 65.023 30.9514C65.29 30.9692 65.8952 31.3964 66.269 31.7702C66.358 31.8592 66.4648 31.9304 66.5894 31.966C67.7998 32.3576 68.7788 32.2686 69.5086 31.699C70.6834 30.7734 70.5588 29.0112 70.541 28.7976C70.5232 28.6018 70.4342 28.4238 70.3096 28.2992L63.599 21.4106C63.6524 20.6274 63.9372 19.3992 64.0618 18.9542C64.133 18.6872 64.0618 18.4202 63.9016 18.2066C63.7236 17.993 63.4744 17.8862 63.2074 17.904C63.0828 17.9218 60.1636 18.171 59.0422 20.574C54.7168 21.8022 51.1212 25.7004 48.0596 32.4822C47.8282 32.9984 47.3298 33.3366 46.778 33.39C46.4398 33.4256 46.0838 33.4434 45.7456 33.479C43.129 33.7104 40.4234 33.9418 33.1254 32.7314C30.9004 32.3576 29.1204 32.589 27.7854 33.3722C27.6252 33.3544 24.8662 32.8738 22.4454 34.9208ZM22.8726 45.4584L20.7366 45.1202C20.7188 40.866 21.68 37.7866 23.4956 36.2024C24.3856 35.437 25.329 35.1344 26.0766 35.0276C26.0232 35.1166 25.952 35.2234 25.9164 35.3124C25.7562 35.3658 25.6316 35.4192 25.5248 35.4726C23.4066 36.6296 22.9616 42.557 22.8726 45.4584ZM24.2076 62.2972H23.4956C24.2076 57.6692 25.2044 52.6496 25.7384 51.9732C26.8954 50.567 27.7142 46.3662 27.8032 45.8856C27.821 45.761 27.821 45.6186 27.7854 45.494C26.3614 40.5278 26.3792 37.039 27.8388 35.4014C28.8 34.3156 30.491 33.9596 32.8228 34.3512C40.3344 35.5972 43.2714 35.3302 45.8702 35.1166C46.2084 35.0988 46.5466 35.0632 46.8848 35.0276C48.0596 34.9386 49.0742 34.2266 49.5726 33.1586C52.4918 26.6616 55.856 23.0304 59.8432 22.0692C60.128 21.998 60.3416 21.8022 60.4306 21.5352C60.7332 20.6274 61.4986 20.129 62.1572 19.862C62.0326 20.485 61.9258 21.2148 61.9436 21.7488C61.9436 21.9624 62.0326 22.1582 62.175 22.3006L68.9034 29.207C68.8856 29.5986 68.7788 30.1504 68.494 30.3818C68.2092 30.5954 67.7286 30.542 67.3014 30.4174C66.9276 30.0792 66.0554 29.3672 65.2188 29.2782C65.0408 29.2604 64.8272 29.2782 64.5246 29.2782C62.6912 29.3138 60.7866 29.1892 60.5374 27.9254C60.4662 27.5516 60.1458 27.2846 59.772 27.2668C59.3982 27.2312 59.06 27.4626 58.9354 27.8186C58.882 27.9788 57.5826 31.7346 56.8884 37.2526C56.8706 37.3416 56.8884 37.4306 56.9062 37.5196C56.924 37.573 57.7606 42.0942 56.123 46.3306C55.9272 46.7222 54.0048 50.6204 52.3672 53.2726C51.0856 55.3552 49.537 60.4994 49.0208 62.2972H48.2376C48.2732 60.9266 48.4156 57.954 48.8962 54.2338C49.0208 53.7888 49.7506 51.0832 50.4092 47.2028C51.406 46.7044 51.8688 46.2594 51.94 46.1882C52.2604 45.8678 52.2426 45.3338 51.9222 45.0134C51.6018 44.693 51.0678 44.7108 50.7474 45.0312C50.6762 45.1024 46.1194 49.2854 31.8616 44.96C31.4166 44.8354 30.9538 45.0846 30.8292 45.5118C30.7046 45.9568 30.9538 46.4196 31.381 46.5442C32.182 46.7934 32.9474 47.007 33.6772 47.185C33.2144 49.4812 29.8858 51.7418 28.3906 52.7386C27.9456 53.0412 27.643 53.2548 27.465 53.415C26.664 54.1092 25.151 59.0398 24.2076 62.2972ZM33.9264 54.3228C33.8552 53.148 33.606 51.991 33.2856 50.9764C34.2468 49.9796 35.03 48.8404 35.297 47.5944C36.1336 47.7902 36.9168 47.9326 37.6822 48.075C37.522 51.1544 36.0446 53.7888 36.0268 53.8244C35.8488 54.127 35.8844 54.5008 36.098 54.7678C38.6078 57.8294 38.9994 60.9444 39.035 62.3328H38.3764C37.8246 59.111 34.7452 55.3018 33.9264 54.3228ZM63.5634 55.2662L62.9226 55.1772L63.8838 47.3452C63.9194 47.1138 63.8482 46.9002 63.7058 46.7222C63.5634 46.5442 63.3498 46.4374 63.1362 46.4196C63.1006 46.4196 60.4484 46.1526 58.0632 45.7432C58.437 44.4438 58.6506 43.1622 58.7218 41.9874C61.9436 42.4858 65.1832 43.2156 66.0198 43.7318C65.9842 45.3338 64.667 52.792 63.5634 55.2662Z"
                    fill="#FFA424"
                  />
                  <path
                    d="M9.91406 21.9447L65.0051 1.90186L83.6773 14.4331L74.3679 23.6535V63.0982H9.91406V21.9447Z"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-gray-800 text-center ">
                Horse Shed
              </h3>
            </div>
            {/* 6 */}
            <div className=" gap-7 bg-white py-3 px-7 max-w-[309px]">
              <div className="flex items-center justify-center">
                <svg
                  width="78"
                  height="79"
                  viewBox="0 0 78 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.0955 71.3529H9.06348V31.6633L67.0955 15.0259V71.3529Z"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.77832 71.3528H76.9547"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.04492 29.23L76.2837 7.64722V12.3872L1.04492 33.97V29.23Z"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M46.7057 34.3335H30.6377V58.4443H46.7057V34.3335Z"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.6377 46.3889H46.7057"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.6377 40.1794H46.7057"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.6377 52.1401H46.7057"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.6719 34.3335V58.4443"
                    stroke="#FFA424"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-gray-800 text-center ">
                Modern
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* sheds by state */}
      <ShedsbyStates />

      <ShedSearchFilter />
      <Faq />

      <div className="py-12 max-w-[2560px] mx-auto bg-[#F7F7F7] md:block hidden">
        <h3 className="font-poppins font-normal text-[48px] leading-[56px] tracking-[-0.03em] text-center mt-12 max-w-[1538px] px-6 mx-auto  text-[#002D4A] ">
          New Listings on
        </h3>
        <h1 className="font-poppins font-semibold text-[48px] leading-[56px] tracking-[-0.03em] text-center mb-20 text-[#002D4A]  ">
          Shedhub
        </h1>

        <SimilarSheds />
      </div>

      <Footer />
    </div>
  );
}
