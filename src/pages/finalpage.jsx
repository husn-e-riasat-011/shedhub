import React from "react";
import { Mail, Globe, MapPin } from "lucide-react";
import Navbar from "../component/navbar";
import SimilarSheds from "../component/SimilarSheds";
import Footer from "../component/footer";

export default function SellerCard() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="bg-gray-100 flex justify-center py-10">
        <div className="relative md:w-[1490px]">
          {/* Top Image */}
          <div className="w-full md:h-[440px] rounded-xl overflow-hidden">
            <img
              src="/bgggg.png"
              alt="Seller Shed"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Info Section */}
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-[95%] bg-white rounded-xl p-6  flex-col md:flex-row items-center justify-between gap-6 z-10 md:flex hidden">
            {/* Left Info */}
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className=" -md p-2 w-24 h-24 flex items-center justify-center">
                <img
                  src="/frntimg.PNG"
                  alt="logo"
                  className="w-36 h-36 object-contain"
                />
              </div>
            </div>

            {/* Text Info */}
            <div className="flex justify-center items-center rounded-lg overflow-hidden w-full gap-1">
              {/* Section 1 */}
              <div className="flex-1 px-4 border-r border-[#FFA424]">
                <div className="flex">
                  <h2 className="font-semibold text-gray-800 text-lg">
                    Yoder's Storage Buildings
                  </h2>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 ml-1"
                  >
                    <path
                      d="M7.62214 10.3269L9.31335 12.0181L13.1186 8.21286M6.21316 3.40871C6.89289 3.35446 7.53818 3.08718 8.05718 2.64489C9.26828 1.61277 11.0496 1.61277 12.2607 2.64489C12.7798 3.08718 13.425 3.35446 14.1047 3.40871C15.691 3.53529 16.9505 4.79486 17.0771 6.38108C17.1314 7.06081 17.3986 7.7061 17.841 8.2251C18.873 9.43621 18.873 11.2176 17.841 12.4286C17.3986 12.9477 17.1314 13.593 17.0771 14.2727C16.9505 15.8589 15.691 17.1185 14.1047 17.2451C13.425 17.2993 12.7798 17.5666 12.2607 18.0089C11.0496 19.041 9.26828 19.041 8.05718 18.0089C7.53818 17.5666 6.89289 17.2993 6.21316 17.2451C4.62694 17.1185 3.36737 15.8589 3.24079 14.2727C3.18654 13.593 2.91925 12.9477 2.47697 12.4286C1.44485 11.2176 1.44485 9.43621 2.47697 8.2251C2.91925 7.7061 3.18654 7.06081 3.24079 6.38108C3.36737 4.79486 4.62694 3.53529 6.21316 3.40871Z"
                      stroke="#FFA424"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">
                  Member Since Apr 03, 2017
                </p>
              </div>

              {/* Section 2 */}
              <div className="flex-1 px-4 border-r border-[#FFA424] flex flex-col gap-2 justify-center">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#FFA424]" />
                  <span>www.yodersbuildings.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FFA424]" />
                  <span>info@yodersbuildings.com</span>
                </div>
              </div>

              {/* Section 3 */}
              <div className="flex-1 px-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#FFA424] mb-4" />
                <span>3232 Mennonite School Rd, Montezuma, GA</span>
              </div>
            </div>
            {/* Right Buttons */}
            <div className="flex flex-col gap-3">
              <button className="bg-[#FFA424] text-white px-6 py-2 rounded-md font-medium w-[340px]">
                Contact Seller
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md font-medium">
                Message Seller
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-16 pt-3 bg-gray-100">
        {" "}
        <SimilarSheds />
      </div>
      <div className="my-6">
        {" "}
        <SimilarSheds />
      </div>
      <SimilarSheds />
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
      <Footer />
    </>
  );
}
