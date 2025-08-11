import { useState } from "react";
import logo from "../assats/Group.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-md max-w-[1597px]  mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 ">
              <a href="/">
                <img
                  src={logo} // <-- make sure your logo image is here
                  alt="Logo"
                  className="h-10 w-auto"
                />
              </a>
            </div>

            {/* Middle Links */}
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-[#002D4A] hover:text-[#FFA424]">
                Shed News
              </a>
              <a href="/" className="text-[#002D4A] hover:text-[#FFA424]">
                Feature Sellers
              </a>
              <a href="/" className="text-[#002D4A] hover:text-[#FFA424]">
                Lounge
              </a>
              <a href="/" className="text-[#002D4A] hover:text-[#FFA424]">
                Lounge
              </a>
              <a href="/" className="text-[#002D4A] hover:text-[#FFA424]">
                Seller Login
              </a>
            </div>

            {/* Right Buttons */}
            <div className="hidden md:flex space-x-4">
              {/* LOGIN Button */}
              <button className="px-4 py-2 border text-sm text-[#FFA424] border-[#FFA424] rounded-[35px] flex items-center gap-2 hover:bg-[#FFF3E0]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A10.96 10.96 0 0112 15c2.294 0 4.404.689 6.121 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                LOGIN
              </button>

              {/* SELL Button */}
              <button className="px-4 py-2 text-[#FFA424] border border-[#FFA424] text-sm rounded-[35px] flex items-center gap-2 hover:bg-[#FFF3E0]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                SELL
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <a href="/" className="block text-[#002D4A] hover:text-[#FFA424]">
              Shed News
            </a>
            <a href="/" className="block text-[#002D4A] hover:text-[#FFA424]">
              Feature Sellers
            </a>
            <a href="/" className="block text-[#002D4A] hover:text-[#FFA424]">
              Lounge
            </a>
            <a href="/" className="block text-[#002D4A] hover:text-[#FFA424]">
              Lounge
            </a>
            <a href="/" className="block text-[#002D4A] hover:text-[#FFA424]">
              Seller Login
            </a>
            <div className="flex space-x-4 pt-2">
              {/* LOGIN Button */}
              <button className="px-4 py-2 border text-sm text-[#FFA424] border-[#FFA424] rounded-[35px] flex items-center gap-2 hover:bg-[#FFF3E0] w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A10.96 10.96 0 0112 15c2.294 0 4.404.689 6.121 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                LOGIN
              </button>

              {/* SELL Button */}
              <button className="px-4 py-2 text-[#FFA424] border border-[#FFA424] text-sm rounded-[35px] flex items-center gap-2 hover:bg-[#FFF3E0] w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                SELL
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
