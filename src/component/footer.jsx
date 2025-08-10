import React from "react";

const footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top App Banner */}
      <div className="bg-[#0A2540] text-white py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-semibold">
              Find amazing sheds on the go.
            </h2>
            <p className="mt-1 text-lg font-medium">
              <span className="font-bold">Download the Shedhub App</span>
            </p>
          </div>
          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* QR + App Buttons */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm">Scan the QR to get the App</span>
              <img src="/qr-code.png" alt="QR Code" className="w-20 h-20" />
              <div className="flex gap-2">
                <img src="/appstore.png" alt="App Store" className="h-10" />
                <img src="/googleplay.png" alt="Google Play" className="h-10" />
              </div>
            </div>
            {/* Phone Mockups */}
            <img src="/phones.png" alt="App Preview" className="w-36 md:w-48" />
          </div>
        </div>
      </div>

      {/* Middle Links */}
      <div className="py-4 border-b border-gray-200 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <a href="/">Shin</a>
          <a href="/">For Seller</a>
          <a href="/">For Manufacturers</a>
          <a href="/">Terms of Service</a>
          <a href="/">Legal</a>
          <a href="/">Disclaimers</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-500">
        <p className="max-w-3xl mx-auto text-sm">
          ShedHub is the /1 place to find sheds for sale in your local area.
          Browse thousands of sheds from sellers across the country. With our
          Advanced Shed Search tool, you can easily sort through our expansive
          inventory and find just the right shed in a matter of minutes. Make
          your shed buying experience a breeze with ShedHub!
        </p>

        <div className="flex justify-center gap-3 mt-4">
          <img src="/appstore.png" alt="App Store" className="h-10" />
          <img src="/googleplay.png" alt="Google Play" className="h-10" />
        </div>

        {/* Logo */}
        <div className="mt-6">
          <img
            src="/shedhub-logo.png"
            alt="ShedHub Logo"
            className="mx-auto h-10"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-4 text-gray-600">
          <a href="/">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="/">
            <i className="fab fa-pinterest text-xl"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="/">
            <i className="fab fa-tiktok text-xl"></i>
          </a>
          <a href="/">
            <i className="fab fa-youtube text-xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-xs text-gray-400">
          ©2025 ShedHub. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default footer;
