import React from "react";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white ">
      {/* Top Banner */}
      <div className="bg-[#002D4A] text-[#FFFFFF] py-10 relative overflow-hidden max-w-[1600px] mx-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <p className="font-poppins font-normal text-[32px] leading-[44px] tracking-[-0.03em]">
              Find amazing sheds on the go.
            </p>

            <h2 className="font-poppins font-normal text-[32px] leading-[44px] tracking-[-0.03em]">
              Download the Shedhub App
            </h2>
          </div>

          {/* Right Content */}
          <div className="flex items-center gap-8">
            {/* QR Section */}
            <div className="flex flex-col items-center gap-3 bg-white/5 rounded-lg p-4">
              <span className="text-sm">Scan the QR to get the App</span>
              <img
                src="/QR_code_for_mobile_English_Wikipedia.svg 2.png"
                alt="QR Code"
                className="w-20 h-20"
              />
              <div className="flex gap-2">
                <img src="/appstore.png" alt="App Store" className="h-10" />
                <img src="/googleplay.png" alt="Google Play" className="h-10" />
              </div>
            </div>
            {/* Phone Image */}
            <div className="relative">
              <img
                src="/arrow.png"
                alt="App Preview"
                className="w-40 md:w-52"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7] max-w-[1600px] mx-auto">
        {/* Middle Links */}
        <div className="py-5 ">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
            <div className="flex flex-wrap justify-center gap-5 text-sm text-[#002D4A]">
              <a href="/">Shin</a>
              <div className="w-px h-4 bg-[#002D4A]"></div>
              <a href="/">For Seller</a>
              <div className="w-px h-4 bg-[#002D4A]"></div>
              <a href="/">For Manufacturers</a>
              <div className="w-px h-4 bg-[#002D4A]"></div>
              <a href="/">Terms of Service</a>
              <div className="w-px h-4 bg-[#002D4A]"></div>
              <a href="/">Legal</a>
              <div className="w-px h-4 bg-[#002D4A]"></div>
              <a href="/">Disclaimers</a>
            </div>
            <img src="/Group 5.png" alt="BBB Accredited" className="h-12" />
          </div>
        </div>
        <hr className="max-w-[1200px] mx-auto" />
        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 py-10 text-center text-[#878B96]">
          <p className="max-w-4xl mx-auto font-poppins font-light text-[16px] leading-[36px] tracking-[0.02em] text-center">
            ShedHub is the #1 place to find sheds for sale in your local area.
            Browse thousands of sheds from sellers across the country. With our
            Advanced Shed Search tool, you can easily sort through our expansive
            inventory and find just the right shed in a matter of minutes. Make
            your shed buying experience a breeze with ShedHub!
          </p>

          {/* Download Buttons */}
          <div className="flex justify-center gap-3 mt-10">
            <img
              src="/appstore.png"
              alt="App Store"
              className="h-10 brightness-0 invert-[50%] sepia-[20%] saturate-[600%] hue-rotate-[80deg] cursor-pointer"
            />
            <img
              src="/googleplay.png"
              alt="Google Play"
              className="h-10 brightness-0 invert-[50%] sepia-[20%] saturate-[600%] hue-rotate-[80deg] cursor-pointer"
            />
          </div>

          {/* Logo */}
          <div className="mt-10 mb-4">
            <img src="/Group.png" alt="ShedHub Logo" className="mx-auto h-10" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 mt-10 mb-5 text-gray-600">
            <a
              href="/"
              className="w-8 h-8 flex items-center justify-center text-white bg-[#002D4A] hover:text-[#002D4A] rounded-full border border-gray-400 hover:bg-gray-200 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="/"
              className="w-8 h-8 flex items-center justify-center text-white bg-[#002D4A] hover:text-[#002D4A] rounded-full border border-gray-400 hover:bg-gray-200 transition"
            >
              <FaPinterestP size={20} />
            </a>
            <a
              href="/"
              className="w-8 h-8 flex items-center justify-center text-white bg-[#002D4A] hover:text-[#002D4A] rounded-full border border-gray-400 hover:bg-gray-200 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a href="/" className="text-[#002D4A]">
              <FaInstagram size={30} />
            </a>
            <a href="/" className="text-[#002D4A]">
              <FaTiktok size={28} />
            </a>
            <a href="/" className="text-[#002D4A]">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-3 mb-6 text-center text-[#002D4A] font-poppins font-normal text-[19px] leading-[33px] tracking-[-0.03em]">
        ©2025 ShedHub. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
