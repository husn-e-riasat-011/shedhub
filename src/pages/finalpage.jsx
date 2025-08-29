import React from "react";
import { Mail, Globe, MapPin } from "lucide-react";
import Navbar from "../component/navbar";
import SimilarSheds from "../component/SimilarSheds";

export default function SellerCard() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="bg-gray-100 flex justify-center py-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-[950px]">
          {/* Top Image */}
          <div className="relative w-full h-[250px]">
            <img
              src="/bgggg.png" // apna image dalna (public folder me)
              alt="Seller Shed"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Info Section */}
          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-6 border-t">
            {/* Left Info */}
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="border rounded-md p-2 w-20 h-20 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h2 className="font-semibold text-gray-800 text-lg">
                  Yoder's Storage Buildings
                  <span className="text-green-500 ml-1">✔</span>
                </h2>
                <p className="text-sm text-gray-500">
                  Member Since Apr 03, 2017
                </p>
                <div className="flex flex-wrap items-center gap-x-6 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-orange-500" />
                    <span>www.yodersbuildings.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange-500" />
                    <span>info@yodersbuildings.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>3232 Mennonite School Rd, Montezuma, GA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-medium">
                Contact Seller
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md font-medium">
                Message Seller
              </button>
            </div>
          </div>
        </div>
      </div>
      <SimilarSheds />
    </>
  );
}
