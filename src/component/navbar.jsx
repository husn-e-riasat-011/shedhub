import { useState } from "react";
import logo from "../assats/Group.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#FFFFFF]  max-w-[2560px]  mx-auto">
        <div className="max-w-[1538px]  px-6 mx-auto xl:h-[90px] h-[64px] ">
          <div className="flex justify-between  items-center xl:h-[90px] h-[64px]">
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
            <div className="hidden md:flex xl:space-x-10 space-x-5">
              <a
                href="/"
                className="text-[#002D4A] hover:text-[#FFA424] font-poppins font-semibold text-sm text-center  lg:text-[16px]  tracking-[0] uppercase"
              >
                Shed News
              </a>

              <a
                href="/"
                className="text-[#002D4A] hover:text-[#FFA424] font-poppins font-semibold text-sm text-center  lg:text-[16px]  tracking-[0] uppercase"
              >
                Feature Sellers
              </a>
              <a
                href="/"
                className="text-[#002D4A] hover:text-[#FFA424] font-poppins font-semibold text-sm text-center  lg:text-[16px]  tracking-[0] uppercase"
              >
                Lounge
              </a>
              <a
                href="/"
                className="text-[#002D4A] hover:text-[#FFA424] font-poppins font-semibold text-sm text-center  lg:text-[16px]  tracking-[0] uppercase"
              >
                Lounge
              </a>
              <a
                href="/"
                className="text-[#002D4A] hover:text-[#FFA424] font-poppins font-semibold text-sm text-center  lg:text-[16px]  tracking-[0] uppercase"
              >
                Seller Login
              </a>
            </div>

            {/* Right Buttons */}
            <div className="hidden md:flex space-x-4">
              {/* LOGIN Button */}
              <button className="px-4 py-2 border text-sm text-[#FFA424] border-[#FFA424] rounded-[35px] flex items-center gap-2 hover:bg-[#FFF3E0]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17C15 15.7595 15 15.1393 14.8493 14.6346C14.51 13.4982 13.6346 12.6089 12.516 12.2642C12.0191 12.1111 11.4086 12.1111 10.1875 12.1111H5.8125C4.59138 12.1111 3.98082 12.1111 3.484 12.2642C2.36539 12.6089 1.49003 13.4982 1.15071 14.6346C1 15.1393 1 15.7595 1 17M11.9375 5C11.9375 7.20914 10.1746 9 8 9C5.82538 9 4.0625 7.20914 4.0625 5C4.0625 2.79086 5.82538 1 8 1C10.1746 1 11.9375 2.79086 11.9375 5Z"
                    stroke="#FFA424"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
            <a
              href="/"
              className="text-[#002D4A] hover:text-[#FFA424] font-poppins font-semibold text-[16px]  tracking-[0] uppercase block"
            >
              Shed News
            </a>
            <a
              href="/"
              className="text-[#002D4A] hover:text-[#FFA424] font-poppins font-semibold text-[16px]  tracking-[0] uppercase block"
            >
              Feature Sellers
            </a>
            <a
              href="/"
              className="text-[#002D4A] hover:text-[#FFA424] font-poppins font-semibold text-[16px]  tracking-[0] uppercase block"
            >
              Lounge
            </a>
            <a
              href="/"
              className="text-[#002D4A] hover:text-[#FFA424] font-poppins font-semibold text-[16px]  tracking-[0] uppercase block"
            >
              Lounge
            </a>
            <a
              href="/"
              className="text-[#002D4A] hover:text-[#FFA424] font-poppins font-semibold text-[16px]  tracking-[0] uppercase block"
            >
              Seller Login
            </a>
            <div className="flex space-x-4 pt-2">
              {/* LOGIN Button */}
              <button className="px-4 py-2 border text-sm text-[#FFA424] border-[#FFA424] rounded-[35px] flex items-center gap-2 hover:bg-[#FFF3E0] w-full">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17C15 15.7595 15 15.1393 14.8493 14.6346C14.51 13.4982 13.6346 12.6089 12.516 12.2642C12.0191 12.1111 11.4086 12.1111 10.1875 12.1111H5.8125C4.59138 12.1111 3.98082 12.1111 3.484 12.2642C2.36539 12.6089 1.49003 13.4982 1.15071 14.6346C1 15.1393 1 15.7595 1 17M11.9375 5C11.9375 7.20914 10.1746 9 8 9C5.82538 9 4.0625 7.20914 4.0625 5C4.0625 2.79086 5.82538 1 8 1C10.1746 1 11.9375 2.79086 11.9375 5Z"
                    stroke="#FFA424"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
