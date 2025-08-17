import { useState } from "react";
import "@fontsource/poppins";
import "./App.css";
import Navbar from "./component/navbar";
import horizental from "./assats/horizontal ad 2.png";
import SimilarSheds from "./component/SimilarSheds";
import Footer from "./component/footer";
// import Foot from "./component/foot";
import { FaStar } from "react-icons/fa";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center xl:max-w-[2560px] bg-[#F7F7F7] mx-auto">
        <div className="xl:max-w-[1538px] lg:max-w-[960px] md:max-w-[760px] md:block hidden px-6">
          <img
            src={horizental}
            alt="Example"
            className="w-[1260px] h-[140px] mt-12"
          />
        </div>
      </div>

      <div className="max-w-[2560px] md:bg-[#F7F7F7] bg-[#FFFFFF] mx-auto pb-5 md:pt-12 pt-0">
        <p className="px-6 pb-4 max-w-[1538px]  mx-auto font-poppins font-light  lg:text-[18px] leading-[26px] tracking-[0.01em]  text-[#002D4A] text-[13px] md:block hidden">
          Home / Shed Squad Somerset / 128729
        </p>

        <div className="flex flex-col lg:flex-row gap-6 px-6 max-w-[1538px] mx-auto">
          {/* Left Section */}
          <div className="w-full xl:w-[1024px]  lg:w-2/3 md:pt-6 pt-0 bg-[#FFFFFF]  md:px-7 p-0 rounded-[13px]   ">
            {/* img and text */}
            <div className="flex md:flex-col flex-col-reverse ">
              <div className="relative">
                <span className="absolute top-4 md:right-7 flex items-center gap-2 bg-[#F5F5F5] text-[#002D4A] font-poppins font-semibold text-[11px] lg:text-[16px] leading-[100%] tracking-[-0.03em] px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-[#02db40] rounded-full"></span>
                  Status Available
                </span>
                <h1 className="text-[#002D4A] font-poppins font-semibold text-[32px] xl:text-[52px] md:text-[42px]  leading-[100%] tracking-[-0.03em] md:mt-1 md:pt-0 pt-16">
                  Studio Shed
                </h1>

                <p className="font-poppins text-[#002D4A] font-normal text-[20px] leading-[100%] tracking-[-0.03em] md:text-[24px] xl:text-[28px] not-italic pt-[7px] ">
                  With Black LP Barn Siding
                </p>
                <div className="bg-[#FFFFFF] py-6 rounded-[13px]  md:text-center flex flex-col md:hidden ">
                  <p className="text-[#FFA424] lg:text-[40px] text-[35px] font-semibold font-poppins ">
                    $13,328.00{" "}
                    <span className="text-[35px]  font-poppins font-thin tracking-tighter">
                      + Taxes
                    </span>
                  </p>

                  <p className="flex items-center text-left gap-2 border border-[#002D4A] rounded-full px-3 py-[10px] w-fit md:mx-auto justify-center text-[16px] leading-[100%] font-poppins font-medium tracking-normal mt-2 ">
                    <svg
                      width="22"
                      height="16"
                      viewBox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2 3.625H13.1867C13.3945 3.625 13.4985 3.625 13.5963 3.64918C13.6831 3.67061 13.766 3.70596 13.8421 3.75394C13.9278 3.80805 14.0013 3.88372 14.1483 4.03505L17.6017 7.58997C17.7487 7.74126 17.8222 7.81695 17.8747 7.90524C17.9214 7.98355 17.9557 8.06886 17.9765 8.1582C18 8.25891 18 8.36592 18 8.57986V11.0625C18 11.4702 18 11.674 17.9353 11.8349C17.849 12.0492 17.6835 12.2196 17.4753 12.3084C17.3191 12.375 17.121 12.375 16.725 12.375M12.475 12.375H11.2M11.2 12.375V3.8C11.2 2.81991 11.2 2.32986 11.0147 1.95552C10.8518 1.62623 10.5917 1.35851 10.2718 1.19074C9.90817 1 9.43209 1 8.48 1H3.72C2.76791 1 2.29186 1 1.92822 1.19074C1.60834 1.35851 1.34827 1.62623 1.18529 1.95552C1 2.32986 1 2.81991 1 3.8V10.625C1 11.5915 1.76112 12.375 2.7 12.375M11.2 12.375H7.8M2.7 12.375C2.7 13.8248 3.84168 15 5.25 15C6.65832 15 7.8 13.8248 7.8 12.375M2.7 12.375C2.7 10.9252 3.84168 9.75 5.25 9.75C6.65832 9.75 7.8 10.9252 7.8 12.375M16.725 12.8125C16.725 14.0206 15.7736 15 14.6 15C13.4264 15 12.475 14.0206 12.475 12.8125C12.475 11.6044 13.4264 10.625 14.6 10.625C15.7736 10.625 16.725 11.6044 16.725 12.8125Z"
                        stroke="#002D4A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Free delivery up to 30 miles
                  </p>
                </div>

                <p className="flex items-center gap-1 font-poppins font-normal text-[17px] xl:text-[22px] leading-[20px] tracking-[-0.03em] text-[#878B96] md:my-5 not-italic">
                  <span className="text-[#878B96]">
                    <svg
                      width="19"
                      height="21"
                      viewBox="0 0 21 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 14.0625C12.4676 14.0625 14.0625 12.4676 14.0625 10.5C14.0625 8.53249 12.4676 6.9375 10.5 6.9375C8.53243 6.9375 6.9375 8.53249 6.9375 10.5C6.9375 12.4676 8.53243 14.0625 10.5 14.0625Z"
                        stroke="#878B96"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 24.75C15.25 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.75 20 10.5 24.75Z"
                        stroke="#878B96"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  5000 Old Preston Highway North, Shepherdsville, KY
                </p>
              </div>
              {/* Image Slider (placeholder) */}
              <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden md:mt-3 mt-0 ">
                {/* Image */}
                <img
                  src={images[current]}
                  alt="Slide"
                  className="w-full md:h-[587px] h-[331px] bg-fixed object-cover bg-no-repeat bg-center rounded-[13px]"
                />
                <span className="absolute md:top-5 md:right-6 top-3 right-3 bg-white text-[#002D4A] font-poppins font-medium text-[11px] lg:text-[14px] leading-[100%] tracking-[0em] px-3 py-2 rounded-full flex items-center gap-1">
                  <FaStar className="text-[#FFA424] lg:text-[15px] text-[12px]" />
                  FEATURED
                </span>
                {/* Top Left Icons */}
                <div className="absolute md:top-5 md:left-6 bottom-2 right-3 flex gap-2">
                  <button className="bg-white p-2 rounded-full shadow w-9 h-9">
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.30286 10.7835L11.9945 14.1665M11.9862 4.8335L6.30286 8.2165M16.6445 3.55C16.6445 4.95832 15.5253 6.1 14.1445 6.1C12.7638 6.1 11.6445 4.95832 11.6445 3.55C11.6445 2.14168 12.7638 1 14.1445 1C15.5253 1 16.6445 2.14168 16.6445 3.55ZM6.64453 9.5C6.64453 10.9084 5.52524 12.05 4.14453 12.05C2.76382 12.05 1.64453 10.9084 1.64453 9.5C1.64453 8.09164 2.76382 6.95 4.14453 6.95C5.52524 6.95 6.64453 8.09164 6.64453 9.5ZM16.6445 15.45C16.6445 16.8584 15.5253 18 14.1445 18C12.7638 18 11.6445 16.8584 11.6445 15.45C11.6445 14.0416 12.7638 12.9 14.1445 12.9C15.5253 12.9 16.6445 14.0416 16.6445 15.45Z"
                        stroke="#FFA424"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="bg-white p-2 rounded-full shadow w-9 h-9">
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.6391 2.67663C8.03958 0.841744 5.37234 0.348162 3.36829 2.02837C1.36424 3.70858 1.08211 6.51783 2.65589 8.505C3.96439 10.1572 7.92435 13.6419 9.22222 14.7697C9.36742 14.8959 9.44006 14.9589 9.5247 14.9837C9.59862 15.0054 9.6795 15.0054 9.75342 14.9837C9.83806 14.9589 9.9107 14.8959 10.0559 14.7697C11.3537 13.6419 15.3137 10.1572 16.6222 8.505C18.196 6.51783 17.9483 3.69091 15.9098 2.02837C13.8713 0.36584 11.2385 0.841744 9.6391 2.67663Z"
                        stroke="#FFA424"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Left Arrow */}
                <button
                  onClick={prevSlide}
                  className="absolute hidden md:flex bottom-2 left-2  p-2 rounded-full shadow"
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_308_908)">
                      <path
                        d="M32.7288 50.3615L13 30.6328L31.6327 12"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_308_908"
                        x="0.878906"
                        y="0.5"
                        width="43.3496"
                        height="61.3615"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_308_908"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_308_908"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextSlide}
                  className="absolute bottom-2 right-2  p-2 rounded-full shadow hidden md:flex"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_308_909)">
                      <path
                        d="M11.6325 12L31.3613 31.7288L12.7286 50.3616"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_308_909"
                        x="0.132812"
                        y="0.500061"
                        width="43.3496"
                        height="61.3615"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_308_909"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_308_909"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </button>

                {/* Dots */}
                <div className="absolute md:bottom-8 bottom-3 left-1/2 transform -translate-x-1/2 flex md:gap-2 gap-[6px]">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)} // 👈 is line se click karne pe current slide change hoga
                      className={`md:w-3 md:h-3 w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current ? "bg-[#FFA424] scale-110" : "bg-white"
                      } border border-white`}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* img and text end */}
            <div className="flex md:flex-col flex-col-reverse ">
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center bg-white sm:py-10 sm:px-6 md:mt-7 mt-10 sm:border-[0.5px] rounded-[13px] border-[#a5a4a4]">
                  {/* Property Info */}
                  <div className="py-2">
                    <div className="flex items-center justify-start sm:justify-center gap-1">
                      <svg
                        className="md:h-11 md:w-11 h-5 w-5"
                        viewBox="0 0 42 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M40.5331 18.4283L21.9029 1.35466C21.386 0.881779 20.6138 0.881779 20.0969 1.35466L1.46694 18.4283C0.898094 18.951 0.840972 19.856 1.33971 20.451C1.83824 21.0461 2.70394 21.105 3.27279 20.5846L4.71535 19.2609V40.5678C4.71535 41.3574 5.32855 42 6.08521 42H16.4668H25.533H35.9146C36.6713 42 37.2845 41.3574 37.2845 40.5678V19.2631L38.727 20.5846C38.9871 20.8221 39.3091 20.9397 39.6293 20.9397C40.0103 20.9397 40.3892 20.7746 40.6601 20.451C41.1591 19.856 41.1019 18.951 40.5331 18.4283ZM17.8366 39.1356V27.3338H24.1632V39.1356H17.8366ZM34.545 16.763V39.1356H26.9031V25.9016C26.9031 25.1097 26.2897 24.4694 25.5333 24.4694H16.467C15.7106 24.4694 15.0971 25.1097 15.0971 25.9016V39.1356H7.45506V16.763L7.45463 16.7516L21 4.33676L34.5454 16.7516L34.545 16.763Z"
                          fill="#363C45"
                          stroke="#363C45"
                          stroke-width="0.2"
                        />
                      </svg>

                      <div className="text-left">
                        <p className="font-poppins font-medium text-[10px] md:text-[17px] leading-[100%] tracking-[-0.03em] text-[#878B96]">
                          Building Type
                        </p>

                        <p className="font-poppins font-medium xl:text-[23px] md:text-[20px] text-[16px] leading-[100%] tracking-[-0.03em] text-[#363C45]">
                          Studio
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" lg:border-l lg:border-[#E5E7EB] lg:pl-4 py-2 md:-ml-0  -ml-3">
                    <div className="flex items-center justify-start sm:justify-center gap-2 ">
                      <div className="relative">
                        <svg
                          viewBox="0 0 34 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute md:-top-[10px] md:-right-1 md:w-10 md:h-5 w-5 h-5 -top-[8px] -right-[3px]"
                        >
                          <path
                            d="M4.62542 8.87911C4.74057 8.99699 4.91096 9.03241 5.05835 8.96876C5.20804 8.9051 5.30478 8.75659 5.30478 8.59393V6.36843H28.6958V8.59393C28.6958 8.75659 28.7925 8.9051 28.9399 8.96876C29.0896 9.03241 29.26 8.99699 29.3729 8.87911L32.8826 5.28885C33.0392 5.12855 33.0392 4.87145 32.8826 4.71115L29.3729 1.12089C29.26 1.00301 29.0896 0.967594 28.9399 1.03125C28.7925 1.0949 28.6958 1.24341 28.6958 1.40607V3.63157H5.30478V1.40607C5.30478 1.24341 5.20804 1.0949 5.05835 1.03125C4.91096 0.967594 4.74057 1.00301 4.62542 1.12089L1.11572 4.71115C0.961426 4.87145 0.961426 5.12855 1.11572 5.28885L4.62542 8.87911Z"
                            fill="#363C45"
                            stroke="#FAFAFB"
                            stroke-width="0.4"
                          />
                        </svg>
                        <svg
                          viewBox="0 0 34 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute md:left-9 md:top-4 left-[25px] top-1 transform rotate-90 md:w-10 md:h-5 w-5 h-5"
                        >
                          <path
                            d="M4.62542 8.87911C4.74057 8.99699 4.91096 9.03241 5.05835 8.96876C5.20804 8.9051 5.30478 8.75659 5.30478 8.59393V6.36843H28.6958V8.59393C28.6958 8.75659 28.7925 8.9051 28.9399 8.96876C29.0896 9.03241 29.26 8.99699 29.3729 8.87911L32.8826 5.28885C33.0392 5.12855 33.0392 4.87145 32.8826 4.71115L29.3729 1.12089C29.26 1.00301 29.0896 0.967594 28.9399 1.03125C28.7925 1.0949 28.6958 1.24341 28.6958 1.40607V3.63157H5.30478V1.40607C5.30478 1.24341 5.20804 1.0949 5.05835 1.03125C4.91096 0.967594 4.74057 1.00301 4.62542 1.12089L1.11572 4.71115C0.961426 4.87145 0.961426 5.12855 1.11572 5.28885L4.62542 8.87911Z"
                            fill="#363C45"
                            stroke="#FAFAFB"
                            stroke-width="0.4"
                          />
                        </svg>

                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 32 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:h-10 md:w-10 h-5 w-5 mt-[4px] ml-[12px]"
                        >
                          <path
                            d="M29.0441 1H2.95592C1.87679 1 1 1.84758 1 2.89284V28.1072C1 29.1524 1.87679 30 2.95592 30H29.0441C30.1255 30 31 29.1524 31 28.1072V2.89284C31 1.84758 30.1255 1 29.0441 1ZM27.0881 26.2166H4.91411V4.78342H27.0881V26.2166Z"
                            fill="#363C45"
                            stroke="#FAFAFB"
                            stroke-width="0.4"
                          />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="font-poppins font-medium text-[10px] md:text-[17px] leading-[100%] tracking-[-0.03em] text-[#878B96]">
                          Building Size
                        </p>
                        <p className="font-poppins font-medium xl:text-[23px] md:text-[20px] text-[16px] leading-[100%] tracking-[-0.03em] text-[#363C45]">
                          14 x 32
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:border-l lg:border-[#E5E7EB] lg:pl-4 py-2">
                    <div className="flex items-center justify-start sm:justify-center  gap-1">
                      <img
                        src="/Fill Color.png"
                        alt="Color"
                        className="md:h-11 md:w-11 h-7 w-7"
                      />
                      <div className="text-left">
                        <p className="font-poppins font-medium text-[10px] md:text-[17px] leading-[100%] tracking-[-0.03em] text-[#878B96]">
                          Color
                        </p>
                        <p className="font-poppins font-medium xl:text-[23px] md:text-[20px] text-[16px] leading-[100%] tracking-[-0.03em] text-[#363C45]">
                          Dark Grey
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:border-l lg:border-[#E5E7EB] lg:pl-4 py-3">
                    <div className="flex items-center justify-start sm:justify-center  gap-1">
                      <svg
                        className="md:h-11 md:w-11 h-5 w-5"
                        viewBox="0 0 42 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M40.5331 18.4283L21.9029 1.35466C21.386 0.881779 20.6138 0.881779 20.0969 1.35466L1.46694 18.4283C0.898094 18.951 0.840972 19.856 1.33971 20.451C1.83824 21.0461 2.70394 21.105 3.27279 20.5846L4.71535 19.2609V40.5678C4.71535 41.3574 5.32855 42 6.08521 42H16.4668H25.533H35.9146C36.6713 42 37.2845 41.3574 37.2845 40.5678V19.2631L38.727 20.5846C38.9871 20.8221 39.3091 20.9397 39.6293 20.9397C40.0103 20.9397 40.3892 20.7746 40.6601 20.451C41.1591 19.856 41.1019 18.951 40.5331 18.4283ZM17.8366 39.1356V27.3338H24.1632V39.1356H17.8366ZM34.545 16.763V39.1356H26.9031V25.9016C26.9031 25.1097 26.2897 24.4694 25.5333 24.4694H16.467C15.7106 24.4694 15.0971 25.1097 15.0971 25.9016V39.1356H7.45506V16.763L7.45463 16.7516L21 4.33676L34.5454 16.7516L34.545 16.763Z"
                          fill="#363C45"
                          stroke="#363C45"
                          stroke-width="0.2"
                        />
                      </svg>

                      <div className="text-left">
                        <p className="font-poppins font-medium text-[10px] md:text-[17px] leading-[100%] tracking-[-0.03em] text-[#878B96]">
                          Condition
                        </p>
                        <p className="font-poppins font-medium xl:text-[23px] md:text-[20px] text-[16px] leading-[100%] tracking-[-0.03em] text-[#363C45]">
                          Pre-Loved
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 mt-2 border-b border-[#363C45] ">
                  {/* Left group: Main Color, Roof Color, Siding Color */}
                  <div className="flex flex-col sm:gap-2 ">
                    {/* Main Color */}
                    <p className="flex justify-between items-center border-b-[1px] border-[#363C45]  text-[#363C45]">
                      <span className="font-poppins font-normal xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45]">
                        Main Color
                      </span>
                      <span className="flex items-center gap-2 font-poppins font-normal md:font-semibold xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45] text-right">
                        Black
                        <span className="xl:w-7 xl:h-7 w-4 h-4 rounded-full bg-[#363C45]"></span>
                      </span>
                    </p>

                    {/* Roof Color */}
                    <p className="flex justify-between items-center border-b-[1px] border-[#363C45] sm:pb-3 sm:pt-2 text-[#363C45]">
                      <span className="font-poppins font-normal xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45]">
                        Roof Color
                      </span>
                      <span className="flex items-center gap-2 font-poppins font-normal md:font-semibold xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45] text-right">
                        Shiny Black
                        <span className="xl:w-7 xl:h-7 w-4 h-4 rounded-full bg-black"></span>
                      </span>
                    </p>

                    {/* Siding Color */}
                    <p className="flex justify-between items-center sm:border-b-[0px] border-b-[1px] border-[#363C45] sm:pb-3 sm:pt-2 text-[#363C45]">
                      <span className="font-poppins font-normal xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45]">
                        Siding Color
                      </span>
                      <span className="flex items-center gap-2 font-poppins font-normal md:font-semibold xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45] text-right">
                        Clay
                        <span className="xl:w-7 xl:h-7 w-4 h-4 rounded-full bg-[#363C45]"></span>
                      </span>
                    </p>
                  </div>

                  {/* Right group: Roofing, Siding, Last updated */}
                  <div className="flex flex-col sm:gap-2 gap-1">
                    <p className="flex justify-between border-b-[1px] border-[#363C45]  text-[#363C45]">
                      <span className="font-poppins font-normal xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45]">
                        Roofing
                      </span>
                      <span className="flex items-center gap-2 font-poppins font-normal md:font-semibold xl:text-[16px] text-[15px] leading-[67px] tracking-[-0.03em] text-[#363C45] text-right">
                        Metal
                      </span>
                    </p>

                    <p className="flex justify-between border-b-[1px] border-[#363C45]   sm:pb-3 sm:pt-2 text-[#363C45]">
                      <span className="font-poppins font-normal xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45]">
                        Siding
                      </span>
                      <span className="flex items-center gap-2 font-poppins font-normal md:font-semibold xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45] text-right">
                        Wood
                      </span>
                    </p>

                    <p className="flex justify-between   sm:pb-3 sm:pt-2 text-[#606060]">
                      <span className="font-poppins font-normal xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45]">
                        Last updated
                      </span>
                      <span className="flex items-center gap-2 font-poppins font-normal md:font-semibold xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45] text-right">
                        02 Jun 2025
                      </span>
                    </p>
                  </div>
                </div>
                <div className=" justify-between items-center mt-2 text-[#363C45] flex sm:hidden">
                  <p className="font-poppins font-normal xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45">
                    Shed ID
                  </p>
                  <p className="font-poppins font-normal md:font-semibold xl:text-[18px] text-[16px] leading-[47px] tracking-[-0.03em] text-[#363C45]">
                    395930
                  </p>
                </div>
              </div>
              <div>
                {/* Shed ID unused */}
                <div className=" justify-between items-center mt-2 text-[#363C45] hidden md:flex">
                  <p className="font-poppins font-normal xl:text-[18px] text-[16px] leading-[67px] tracking-[-0.03em] text-[#363C45">
                    Shed ID
                  </p>
                  <p className="font-poppins font-normal md:font-semibold xl:text-[18px] text-[16px] leading-[47px] tracking-[-0.03em] text-[#363C45]">
                    395930
                  </p>
                </div>

                {/* Map */}
                <div className="md:mt-2 mt-5 rounded-[13px]">
                  <iframe
                    title="Map - 5000 Old Preston Hwy N"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.0970260955945!2d-85.71276572416526!3d37.9929289009927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8869070ff12be59f%3A0x8f82bb5e5edc670b!2s5000%20Old%20Preston%20Hwy%20N%2C%20Shepherdsville%2C%20KY%2040170%2C%20USA!5e0!3m2!1sen!2s!4v1723298456000!5m2!1sen!2s"
                    width="100%"
                    height="330"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg  h-[148px] md:h-[330px]"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="mt-6 md-bg-[#ffffff] md:bg-[#ffffff] bg-[#F5F5F5] rounded-[13px] px-3 py-[1px]">
              <h2 className="font-poppins font-medium xl:text-[28px] text-[22px] leading-[100%] tracking-[-0.03em] md:border-b-[1px] border-[#002D4A] pb-2 mt-7 h-[42px] text-[#002D4A] ">
                Shed Description
              </h2>

              <p className="font-poppins font-light xl:text-[18.5px] text-[12px] leading-[31px] tracking-[0em] text-[#002D4A] md:mt-3 -mt-2 mb-6 opacity-100">
                Our studio sheds are just that. Have you ever dreamed of your
                ideal office shed? You no longer have to wait. Our studio sheds
                are designed just for you, and we have in-stock options. You can
                also customize this deluxe studio shed to meet your specific
                needs.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full  xl:w-[488px] lg:w-1/3 space-y-4">
            {/* Price Box */}
            <div className="bg-[#FFFFFF] px-4 py-6 rounded-[13px] shadow text-center md:flex md:flex-col hidden">
              <p className="text-[#FFA424] lg:text-[40px] text-[32px] font-semibold font-poppins ">
                $13,328.00{" "}
                <span className="text-[42px]   font-poppins font-thin tracking-tighter">
                  + Taxes
                </span>
              </p>

              <p className="flex items-center gap-2 border border-[#002D4A] rounded-full px-3 py-[10px] w-fit mx-auto justify-center text-[17.5px] leading-[100%] font-poppins font-medium tracking-normal mt-2 ">
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2 3.625H13.1867C13.3945 3.625 13.4985 3.625 13.5963 3.64918C13.6831 3.67061 13.766 3.70596 13.8421 3.75394C13.9278 3.80805 14.0013 3.88372 14.1483 4.03505L17.6017 7.58997C17.7487 7.74126 17.8222 7.81695 17.8747 7.90524C17.9214 7.98355 17.9557 8.06886 17.9765 8.1582C18 8.25891 18 8.36592 18 8.57986V11.0625C18 11.4702 18 11.674 17.9353 11.8349C17.849 12.0492 17.6835 12.2196 17.4753 12.3084C17.3191 12.375 17.121 12.375 16.725 12.375M12.475 12.375H11.2M11.2 12.375V3.8C11.2 2.81991 11.2 2.32986 11.0147 1.95552C10.8518 1.62623 10.5917 1.35851 10.2718 1.19074C9.90817 1 9.43209 1 8.48 1H3.72C2.76791 1 2.29186 1 1.92822 1.19074C1.60834 1.35851 1.34827 1.62623 1.18529 1.95552C1 2.32986 1 2.81991 1 3.8V10.625C1 11.5915 1.76112 12.375 2.7 12.375M11.2 12.375H7.8M2.7 12.375C2.7 13.8248 3.84168 15 5.25 15C6.65832 15 7.8 13.8248 7.8 12.375M2.7 12.375C2.7 10.9252 3.84168 9.75 5.25 9.75C6.65832 9.75 7.8 10.9252 7.8 12.375M16.725 12.8125C16.725 14.0206 15.7736 15 14.6 15C13.4264 15 12.475 14.0206 12.475 12.8125C12.475 11.6044 13.4264 10.625 14.6 10.625C15.7736 10.625 16.725 11.6044 16.725 12.8125Z"
                    stroke="#002D4A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Free delivery up to 30 miles
              </p>
            </div>

            {/* Contact Form */}
            <div
              className="bg-[#FFA424] p-4 rounded-[12px] space-y-2  max-h-[627px] "
              style={{ marginTop: "27px" }}
            >
              <h1 className="font-poppins font-medium text-[22px] md:text-[32px] leading-[100%] tracking-[-0.03em] text-[#002D4A] mb-6 mt-2">
                Contact Dealer
              </h1>

              <hr className="border-[#646464]  md:block hidden" />

              <input
                type="text"
                placeholder="Name"
                className="w-full py-4  bg-transparent border-b-2 border-[#002D4A] text-[#002D4A] placeholder-[#002D4A] placeholder:font-poppins placeholder:font-normal md:placeholder:text-[23px] placeholder:text-[16px] placeholder:leading-[73px] placeholder:tracking-[-0.03em] focus:outline-none "
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full py-4 bg-transparent border-b-2 border-[#002D4A] text-[#002D4A] placeholder-[#002D4A] placeholder:font-poppins placeholder:font-normal md:placeholder:text-[23px] placeholder:text-[16px]  placeholder:leading-[73px] placeholder:tracking-[-0.03em] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full py-4 bg-transparent border-b-2 border-[#002D4A] text-[#002D4A] placeholder-[#002D4A] placeholder:font-poppins placeholder:font-normal md:placeholder:text-[23px] placeholder:text-[16px]  placeholder:leading-[73px] placeholder:tracking-[-0.03em] focus:outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full py-4 bg-transparent  text-[#002D4A] font-poppins font-normal text-[22px] leading-[31px] tracking-[0em] placeholder-[#002D4A] placeholder:font-poppins placeholder:font-normal md:placeholder:text-[22px] placeholder:text-[16px] placeholder:leading-[31px] placeholder:tracking-[0em] focus:outline-none min-h-[200px]"
                rows="4"
                defaultValue={`Hello, I'm interested in Yoder Storage Building’s shed with SHIN: 395390.
Link of the shed:
https://shedclick.com/395390
Thank you!`}
              />

              <button className="w-full bg-[#002D4A] text-[#EEEEEE] md:py-5 py-3  rounded-[7px] font-poppins font-medium  text-[16px] md:text-[27px] leading-[30px] tracking-[-0.03em]">
                Send Message
              </button>
            </div>

            {/* Dealer Info */}
            <div
              className="w-full  md:bg-[#FFFFFF] bg-[#F5F5F5] p-6 mt-[50px] rounded-[13px] shadow"
              style={{ marginTop: "27px" }}
            >
              <h2 className="font-poppins font-medium text-[22px] xl:text-[32px] leading-[100%] tracking-[-0.03em] text-[#002D4A] border-b pb-6">
                Dealer Profile
              </h2>

              <div className="pb-4 mb-4 relative flex justify-between items-center mt-6">
                {/* Right side image */}
                <img
                  src="/piccc.PNG"
                  alt="Dealer"
                  className="md:w-[100px] md:h-[100px] w-20 h-[86px] absolute top-0 -right-3 sm:right-0 sm:rounded-full rounded-[12px] object-cover bg-center bg-no-repeat"
                />

                <div>
                  <p className="font-poppins font-semibold xl:text-[23px] md:text-[17px] leading-[100%] tracking-[-0.03em] text-[#002D4A] flex items-center">
                    Yoder Storage Buildings
                    <span>
                      <svg
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 mt-1 md:h-[17px] md:w-[17px] h-[12px] w-[12px]"
                      >
                        <path
                          d="M6.95001 9.50001L8.65001 11.2L12.475 7.37501M5.53371 2.5459C6.21697 2.49137 6.86561 2.22269 7.38731 1.77811C8.6047 0.740631 10.3953 0.740631 11.6127 1.77811C12.1344 2.22269 12.7831 2.49137 13.4663 2.5459C15.0608 2.67313 16.3269 3.93925 16.4541 5.53371C16.5087 6.21697 16.7773 6.86561 17.2219 7.38731C18.2594 8.6047 18.2594 10.3953 17.2219 11.6127C16.7773 12.1344 16.5087 12.7831 16.4541 13.4663C16.3269 15.0608 15.0608 16.3269 13.4663 16.4541C12.7831 16.5087 12.1344 16.7773 11.6127 17.2219C10.3953 18.2594 8.6047 18.2594 7.38731 17.2219C6.86561 16.7773 6.21697 16.5087 5.53371 16.4541C3.93925 16.3269 2.67313 15.0608 2.5459 13.4663C2.49137 12.7831 2.22269 12.1344 1.77811 11.6127C0.740631 10.3953 0.740631 8.6047 1.77811 7.38731C2.22269 6.86561 2.49137 6.21697 2.5459 5.53371C2.67313 3.93925 3.93925 2.67313 5.53371 2.5459Z"
                          stroke="#FFA424"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </p>
                  <p className="font-poppins font-normal xl:text-[18px] text-[12px] mt-3 leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                    Member Since Apr 09, 2017
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <p
                  className="font-poppins font-normal md:text-[19px] text-[14px] leading-[100%] tracking-[-0.03em] flex items-center gap-2  text-[#002D4A]"
                  style={{ marginTop: "20px" }}
                >
                  <svg
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" md:h-[17px] md:w-[17px] h-[12px] w-[12px]"
                  >
                    <path
                      d="M1 10.1433H19.4516M1 10.1433C1 15.2386 5.13053 19.3692 10.2258 19.3692M1 10.1433C1 5.04807 5.13053 0.917542 10.2258 0.917542M19.4516 10.1433C19.4516 15.2386 15.321 19.3692 10.2258 19.3692M19.4516 10.1433C19.4516 5.04807 15.321 0.917542 10.2258 0.917542M10.2258 19.3692C12.5335 16.8428 13.8449 13.5643 13.9161 10.1433C13.8449 6.72245 12.5335 3.44389 10.2258 0.917542M10.2258 19.3692C7.91817 16.8428 6.60675 13.5643 6.53548 10.1433C6.60675 6.72245 7.91817 3.44389 10.2258 0.917542"
                      stroke="#FFA424"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  www.yodersbuildings.com
                </p>
                <p
                  className="font-poppins font-normal md:text-[19px] text-[14px] leading-[100%] tracking-[-0.03em] flex items-center gap-2  text-[#002D4A]"
                  style={{ marginTop: "20px" }}
                >
                  <svg
                    viewBox="0 0 21 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" md:h-[17px] md:w-[17px] h-[12px] w-[12px]"
                  >
                    <path
                      d="M1 4.33872L8.53278 9.40883C9.14279 9.81947 9.44779 10.0247 9.77955 10.1042C10.0726 10.1745 10.379 10.1745 10.6721 10.1042C11.0038 10.0247 11.3088 9.81947 11.9188 9.40883L19.4516 4.33872M5.42839 15.871H15.0232C16.5733 15.871 17.3483 15.871 17.9404 15.5809C18.4612 15.3258 18.8846 14.9187 19.1499 14.4179C19.4516 13.8486 19.4516 13.1034 19.4516 11.6129V5.93549C19.4516 4.44503 19.4516 3.6998 19.1499 3.13052C18.8846 2.62976 18.4612 2.22264 17.9404 1.96749C17.3483 1.67743 16.5733 1.67743 15.0232 1.67743H5.42839C3.8783 1.67743 3.10326 1.67743 2.51121 1.96749C1.99043 2.22264 1.56702 2.62976 1.30167 3.13052C1 3.6998 1 4.44503 1 5.93549V11.6129C1 13.1034 1 13.8486 1.30167 14.4179C1.56702 14.9187 1.99043 15.3258 2.51121 15.5809C3.10326 15.871 3.8783 15.871 5.42839 15.871Z"
                      stroke="#FFA424"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  info@yodersbuildings.com
                </p>
                <p
                  className="font-poppins font-normal md:text-[19px] text-[14px]  leading-[100%] tracking-[-0.03em] flex items-center gap-2  text-[#002D4A]"
                  style={{ marginTop: "20px" }}
                >
                  <svg
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mt-4  md:h-[19px] md:w-[19px] h-[12px] w-[12px]"
                  >
                    <path
                      d="M8.94842 12.3484C10.5946 12.3484 11.9291 11.014 11.9291 9.36779C11.9291 7.72163 10.5946 6.38715 8.94842 6.38715C7.30221 6.38715 5.96777 7.72163 5.96777 9.36779C5.96777 11.014 7.30221 12.3484 8.94842 12.3484Z"
                      stroke="#FFA424"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.94839 21.2903C12.9226 17.3161 16.8968 13.7576 16.8968 9.36776C16.8968 4.97798 13.3382 1.41937 8.94839 1.41937C4.55861 1.41937 1 4.97798 1 9.36776C1 13.7576 4.97419 17.3161 8.94839 21.2903Z"
                      stroke="#FFA424"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  3322 Mennonite School Rd, <br /> Montezuma, GA
                </p>
                <p
                  className="font-poppins font-semibold md:text-[35px] text-[26px] leading-[100%] tracking-[-0.03em] flex items-center gap-2 text-[#FFA424] "
                  style={{ marginTop: "37px" }}
                >
                  <svg
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-[27px] md:w-[27px] h-[18px] w-[18px]"
                  >
                    <path
                      d="M7.90983 9.14055C8.91985 11.2443 10.2968 13.2159 12.0404 14.9596C13.7841 16.7034 15.7559 18.0802 17.8595 19.0903C18.0405 19.1771 18.1309 19.2206 18.2454 19.254C18.6523 19.3725 19.1518 19.2873 19.4963 19.0406C19.5934 18.9711 19.6762 18.8883 19.8421 18.7224C20.3495 18.2149 20.6031 17.9612 20.8582 17.7955C21.8202 17.1701 23.0604 17.1701 24.0224 17.7955C24.2775 17.9612 24.5312 18.2149 25.0385 18.7224L25.3212 19.0051C26.0925 19.7764 26.4781 20.162 26.6875 20.5761C27.1042 21.3997 27.1042 22.3724 26.6875 23.1961C26.4781 23.6102 26.0925 23.9959 25.3212 24.767L25.0925 24.9957C24.324 25.7644 23.9397 26.1487 23.4171 26.4421C22.8374 26.7678 21.9369 27.002 21.272 27C20.6728 26.9982 20.2631 26.882 19.4441 26.6495C15.042 25.4 10.8881 23.0427 7.42279 19.5773C3.95738 16.1119 1.59996 11.958 0.350533 7.55599C0.118038 6.73686 0.00178301 6.32731 1.25641e-05 5.72804C-0.00197556 5.06307 0.232189 4.16263 0.557864 3.58286C0.851367 3.06039 1.23566 2.6761 2.00425 1.90751L2.233 1.67875C3.00422 0.907534 3.38985 0.521909 3.80399 0.312445C4.62762 -0.104148 5.6003 -0.104148 6.42393 0.312445C6.83807 0.521909 7.2237 0.907534 7.99492 1.67875L8.27771 1.96155C8.78505 2.46888 9.03873 2.72257 9.20457 2.97764C9.83003 3.93964 9.83003 5.17979 9.20457 6.14177C9.03873 6.39685 8.78505 6.65053 8.27771 7.15787C8.11182 7.32377 8.02888 7.4067 7.95945 7.50366C7.71273 7.84821 7.62755 8.3478 7.74614 8.75465C7.77952 8.86914 7.82295 8.95961 7.90983 9.14055Z"
                      fill="#FFA424"
                    />
                  </svg>
                  478-375-4784
                </p>
              </div>
            </div>
            <div
              className="flex justify-center items-center gap-2  font-[Poppins] font-medium text-[16px] leading-[100%] tracking-[-0.03em] text-[#002D4A]"
              style={{ marginTop: "33px" }}
            >
              {" "}
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.24609 9.73043C1.24609 9.73043 1.99856 9.08312 4.25596 9.08312C6.51336 9.08312 8.01829 10.3777 10.2757 10.3777C12.5331 10.3777 13.2856 9.73043 13.2856 9.73043V2.61005C13.2856 2.61005 12.5331 3.25735 10.2757 3.25735C8.01829 3.25735 6.51336 1.96274 4.25596 1.96274C1.99856 1.96274 1.24609 2.61005 1.24609 2.61005M1.24609 14.2616V1.31543V14.2616Z"
                  fill="#002D4A"
                />
                <path
                  d="M1.24609 9.73043C1.24609 9.73043 1.99856 9.08312 4.25596 9.08312C6.51336 9.08312 8.01829 10.3777 10.2757 10.3777C12.5331 10.3777 13.2856 9.73043 13.2856 9.73043V2.61005C13.2856 2.61005 12.5331 3.25735 10.2757 3.25735C8.01829 3.25735 6.51336 1.96274 4.25596 1.96274C1.99856 1.96274 1.24609 2.61005 1.24609 2.61005M1.24609 14.2616V1.31543"
                  stroke="#002D4A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1>Report This Ad</h1>
            </div>
          </div>
        </div>
      </div>
      <SimilarSheds />
      <Footer />
      {/* <Foot /> */}
    </div>
  );
}

export default App;
