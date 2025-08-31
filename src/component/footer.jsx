import "@fontsource/poppins";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import StickyNote from "./StickyNote";
const Footer = () => {
  return (
    <footer className="  relative z-[2px] ">
      {/* Top Banner */}
      <div className="bg-[#002D4A] text-[#FFFFFF] relative max-w-[2560px] h-[230px] mx-auto hidden xl:block ">
        <img
          src="Mask group (1).png"
          alt="Dealer"
          className="absolute -top-[108px] z-[999] 2xl:left-[38.5%] left-[34.5%] object-cover bg-center bg-no-repeat"
        />
        <img
          src="Mask group.png"
          alt="Dealer"
          className="absolute -top-[127px] bottom-6 2xl:left-[45%] left-[41%] z-[1000] object-cover bg-center bg-no-repeat"
        />
        <div className="max-w-[1538px] px-6 mx-auto md:flex flex-col  md:flex-row items-center justify-between gap-8 h-[230px] ">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <p className="font-poppins font-normal 2xl:text-[32px] text-[28px] leading-[44px] tracking-[-0.03em]">
              Find amazing sheds on the go.
            </p>

            <h2 className="font-poppins font-normal 2xltext-[32px] text-[28px] leading-[44px] tracking-[-0.03em]">
              Download the Shedhub App
            </h2>
          </div>

          {/* Right Content */}
          <div className="flex items-center gap-[75px]">
            {/* Left Side - Text + QR */}
            <div className="flex  items-center justify-between gap-10">
              <span className="text-white text-lg relative mr-16 text-center">
                Scan the QR <br /> to get the App
                {/* Arrow image */}
                <img
                  src="/arrow.png"
                  alt="Arrow"
                  className="absolute -right-24 top-[70px] -translate-y-1/2 w-28"
                />
              </span>
              <div className="relative flex items-center">
                <img
                  src="/QR_code_for_mobile_English_Wikipedia.svg 2.png"
                  alt="QR Code"
                  className="w-20 h-20"
                />
              </div>
            </div>

            {/* Right Side - Store Buttons */}
            <div className="flex flex-col gap-3">
              <img
                src="/appstore.png"
                alt="App Store"
                className="h-12 cursor-pointer"
              />
              <img
                src="/googleplay.png"
                alt="Google Play"
                className="h-12 cursor-pointer"
              />
            </div>
          </div>

          {/* bus */}
        </div>
      </div>
      <div className="bg-[#F7F7F7] max-w-[2560px] mx-auto ">
        {/* Middle Links */}
        <div className="py-10 md:py-5 max-w-[1538px] mx-auto">
          <div className="max-w-[1538px] mx-auto flex flex-col md:flex-row justify-between px-6 relative">
            {/* Links Section */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-2 lg:gap-7 text-[#002D4A] font-poppins font-normal text-[17px] leading-[33px] tracking-[-0.03em]">
              <a href="/">Shin</a>
              <div className="hidden md:block w-px h-4  bg-[#002D4A]"></div>

              <a href="/">For Seller</a>
              <div className="hidden md:block w-px h-4  bg-[#002D4A]"></div>

              <a href="/">For Manufacturers</a>
              <div className="hidden md:block w-px h-4  bg-[#002D4A]"></div>

              <a href="/">Terms of Service</a>
              <div className="hidden md:block w-px h-4  bg-[#002D4A]"></div>

              <a href="/">Legal</a>
              <div className="hidden md:block w-px h-4  bg-[#002D4A]"></div>

              <a href="/">Disclaimers</a>
            </div>

            {/* Image Section */}
            <img
              src="/Group 5.png"
              alt="BBB Accredited"
              className="md:h-12 w-[121px] h-10 absolute right-6 top-0 md:static md:mt-0 mt-2"
            />
          </div>
        </div>
        {/* <hr className="max-w-[1490px] mx-auto text-black" /> */}
        <hr className=" max-w-[1490px]  2xl:w-full w-[95%] mx-auto h-[1px] bg-[#000000] border-0" />

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 py-10 text-center text-black md:text-[#878B96]">
          <p className="max-w-[1115px] mx-auto font-poppins font-light text-[12px] md:text-[16px] leading-[36px] tracking-[0.02em] text-center">
            ShedHub is the #1 place to find sheds for sale in your local area.
            Browse thousands of sheds from sellers across the country. With our
            Advanced Shed Search tool, you can easily sort through our expansive
            inventory and find just the right shed in a matter of minutes. Make
            your shed buying experience a breeze with ShedHub!
          </p>

          {/* Download Buttons */}
          <div className="flex justify-center gap-3 mt-10">
            <img
              src="/Group 6.png"
              alt="App Store"
              className="h-12 cursor-pointer md:w-[350px] w-[274px]"
            />
          </div>

          {/* Logo */}
          <div className="mt-10 mb-4">
            <img
              src="/Group.png"
              alt="ShedHub Logo"
              className="mx-auto md:w-{229px} w-[167px] h-12"
            />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 mt-10 md:mb-5 mb-24 text-gray-600">
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
      <div className="mt-3 mb-6 text-center text-[#002D4A] font-poppins font-normal text-[19px] leading-[33px] tracking-[-0.03em] md:block hidden">
        ©2025 ShedHub. All Rights Reserved
      </div>
      <div className="block sm:hidden">
        <StickyNote />
      </div>
    </footer>
  );
};

export default Footer;
