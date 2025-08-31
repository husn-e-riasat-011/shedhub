import React from "react";

const Silmilerdellers = () => {
  const sellers = [
    {
      id: "1",
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      id: "2",
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      id: "3",
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
    {
      id: "4",
      name: "Yoder’s Storage Buildings",
      memberSince: "Member Since Apr 09, 2017",
      website: "www.yodersbuildings.com",
      email: "info@yodersbuildings.com",
      address: "3322 Mennonite School Rd, Montezuma, GA",
    },
  ];
  return (
    <div className=" max-w-[1538px] mx-auto px-4 pb-28 pt-1">
      <h1 className="font-poppins font-normal text-[28px] sm:text-[36px] md:text-[48px] leading-[56px] tracking-[-0.03em] text-[#002D4A]">
        Similiar Dealers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-28 md:mt-28 mt-20 ">
        {sellers.map((seller, i) => (
          <div
            key={seller.id}
            className="relative bg-white shadow rounded-xl px-3 py-6 flex flex-col items-center text-center max-w-[496px]"
          >
            {/* Yoder Logo */}
            <div className="mb-4 absolute -top-16 left-1/2 transform -translate-x-1/2">
              <img
                src="/alldealersimg.PNG" // yahan apna image path do (public folder me hona chahiye)
                alt="icon"
                width={116}
                height={123}
                className="rounded-md"
              />
            </div>

            <div className="mt-12 w-full">
              <div className="flex items-center justify-center  gap-1">
                <h3 className="font-poppins font-semibold  text-[18px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                  {seller.name}
                </h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    d="M7.33771 9.67064L9.02893 11.3619L12.8342 7.55661M5.92874 2.75246C6.60846 2.69821 7.25375 2.43093 7.77275 1.98864C8.98386 0.956523 10.7652 0.956523 11.9763 1.98864C12.4953 2.43093 13.1406 2.69821 13.8203 2.75246C15.4066 2.87904 16.6661 4.13861 16.7927 5.72483C16.847 6.40456 17.1142 7.04985 17.5566 7.56885C18.5886 8.77996 18.5886 10.5613 17.5566 11.7724C17.1142 12.2914 16.847 12.9367 16.7927 13.6164C16.6661 15.2027 15.4066 16.4622 13.8203 16.5888C13.1406 16.6431 12.4953 16.9103 11.9763 17.3526C10.7652 18.3847 8.98386 18.3847 7.77275 17.3526C7.25375 16.9103 6.60846 16.6431 5.92874 16.5888C4.34252 16.4622 3.08294 15.2027 2.95636 13.6164C2.90212 12.9367 2.63483 12.2914 2.19254 11.7724C1.16043 10.5613 1.16043 8.77996 2.19254 7.56885C2.63483 7.04985 2.90212 6.40456 2.95636 5.72483C3.08294 4.13861 4.34252 2.87904 5.92874 2.75246Z"
                    stroke="#FFA424"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="font-poppins font-normal text-[14px] leading-[100%] tracking-[-0.03em] text-center text-[#002D4A] mt-2">
                {seller.memberSince}
              </p>

              {/* Contact Info */}
              <div className="mt-6 space-y-3 text-[#002D4A] text-sm">
                <div className="flex items-center justify-center gap-1">
                  <svg
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[16px] h-[16px] md:h-[20px] md:w-[20px]"
                  >
                    <path
                      d="M1.64844 9.334H17.6037M1.64844 9.334C1.64844 13.8857 5.22015 17.5756 9.62608 17.5756M1.64844 9.334C1.64844 4.7823 5.22015 1.09241 9.62608 1.09241M17.6037 9.334C17.6037 13.8857 14.032 17.5756 9.62608 17.5756M17.6037 9.334C17.6037 4.7823 14.032 1.09241 9.62608 1.09241M9.62608 17.5756C11.6215 15.3187 12.7556 12.39 12.8171 9.334C12.7556 6.27804 11.6215 3.34925 9.62608 1.09241M9.62608 17.5756C7.63065 15.3187 6.49665 12.39 6.43502 9.334C6.49665 6.27804 7.63065 3.34925 9.62608 1.09241"
                      stroke="#FFA424"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="font-poppins font-normal text-[17px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                    {seller.website}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  {/* email svg */}
                  <svg
                    className="w-[16px] h-[16px] md:h-[20px] md:w-[20px]"
                    viewBox="0 0 19 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.64844 3.56128L8.1621 8.0905C8.68959 8.45733 8.95333 8.64071 9.2402 8.71171C9.49357 8.77448 9.75859 8.77448 10.012 8.71171C10.2988 8.64071 10.5626 8.45733 11.0901 8.0905L17.6037 3.56128M5.47771 13.8633H13.7745C15.1149 13.8633 15.785 13.8633 16.297 13.6041C16.7473 13.3762 17.1134 13.0126 17.3429 12.5652C17.6037 12.0566 17.6037 11.3909 17.6037 10.0594V4.98771C17.6037 3.65625 17.6037 2.99052 17.3429 2.48197C17.1134 2.03464 16.7473 1.67094 16.297 1.44302C15.785 1.1839 15.1149 1.1839 13.7745 1.1839H5.47771C4.13733 1.1839 3.46715 1.1839 2.9552 1.44302C2.50487 1.67094 2.13874 2.03464 1.90929 2.48197C1.64844 2.99052 1.64844 3.65625 1.64844 4.98771V10.0594C1.64844 11.3909 1.64844 12.0566 1.90929 12.5652C2.13874 13.0126 2.50487 13.3762 2.9552 13.6041C3.46715 13.8633 4.13733 13.8633 5.47771 13.8633Z"
                      stroke="#FFA424"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="font-poppins font-normal text-[17px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                    {seller.email}
                  </span>
                </div>
                <div className="flex items-center justify-center text-left max-w-[240px] mx-auto ">
                  {/* location svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FFA424"
                    className="w-[16px] h-[16px] md:h-[24px] md:w-[20px] shrink-0 mr-[2px] mb-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21c4.5-4.5 7.5-7.5 7.5-12A7.5 7.5 0 0 0 12 1.5 7.5 7.5 0 0 0 4.5 9c0 4.5 3 7.5 7.5 12Z"
                    />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>

                  <span className="font-poppins font-normal text-[17px] leading-[100%] tracking-[-0.03em] text-[#002D4A]">
                    {seller.address}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex items-center flex-col gap-2">
                <button className="bg-[#FFA424] text-white font-medium md:text-[19px] text-[16px] leading-[100%] tracking-[-0.03em] text-center align-middle py-3 rounded-lg w-full max-w-[308px] font-poppins">
                  Contact Seller
                </button>
                <button className="border border-[#002D4A] text-[#002D4A] font-medium md:text-[19px] text-[16px] leading-[100%] tracking-[-0.03em] text-center align-middle py-3 rounded-lg w-full max-w-[308px] font-poppins">
                  Listings From Seller
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Silmilerdellers;
