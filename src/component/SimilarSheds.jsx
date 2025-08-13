import { FaStar } from "react-icons/fa";

export default function SimilarSheds() {
  const sheds = [
    {
      id: 1,
      image: "/img3.jpg",
      featured: true,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 2,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 3,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
    {
      id: 4,
      image: "/img3.jpg",
      featured: false,
      title: "8 X 10 Backyard Shed",
      subtitle: "With Grandview LP Siding Siding",
      company: "Urban Shed Concepts LLC, Arizona",
      location: "602.425.0701 | Phoenix, AZ",
      price: "$13,328.00",
    },
  ];

  return (
    <div className="p-6 max-w-[2560px] mx-auto">
      <h2 className="font-poppins font-normal  text-[25px] md:text-[48px] leading-[56px] tracking-[-0.03em] mt-3 mb-8 max-w-[1538px] px-6 mx-auto">
        Similar Sheds
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1538px] px-6 mx-auto ">
        {sheds.map((shed) => (
          <div
            key={shed.id}
            className="bg-white rounded-[13px] border-2 border-[#FFA424] hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* Image + Badges */}
            <div className="relative">
              <img
                src={shed.image}
                alt={shed.title}
                className="w-full h-48 object-cover"
              />
              {/* Heart Icon at bottom-right */}
              <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer">
                <svg
                  width="17"
                  height="17"
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
              </div>
              {shed.featured && (
                <span className="absolute top-2 right-2 bg-white text-black font-poppins font-medium text-[13px] leading-[100%] tracking-[0em] p-2 rounded-full flex items-center gap-1">
                  <FaStar className="text-[#FFA424] text-[12px]" />
                  FEATURED
                </span>
              )}
              <span className="absolute bottom-2 left-2 flex items-center gap-2 bg-[#FFFFFF] text-[#002D4A] font-poppins font-semibold text-[12px] leading-[100%] tracking-[-0.03em] px-2 py-1 rounded-full">
                <span className="w-2 h-2 bg-[#02db40] rounded-full"></span>
                Status Available
              </span>
            </div>

            {/* Content */}
            <div className="py-4 px-2">
              <h3 className="font-semibold text-lg text-[#002D4A]">
                {shed.title}
              </h3>
              <p className="text-[#002D4A] text-sm">{shed.subtitle}</p>

              <div className="mt-2 text-sm  flex">
                <div>
                  <img
                    src="/shed cicle.PNG"
                    alt="Dealer"
                    className=" w-12 h-12   rounded-full object-cover bg-center bg-no-repeat"
                  />
                </div>
                <div className="ml-1">
                  <p className="text-[#002D4A]">{shed.company}</p>
                  <p className="flex items-center gap-1 text-[#878B96]">
                    <svg
                      width="17"
                      height="17"
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
                    {shed.location}
                  </p>
                </div>
              </div>

              {/* Price */}
              <p className="text-[#FFA424] font-bold mt-4">
                {shed.price}{" "}
                <span className="text-[#FFA424] font-normal">+ Taxes</span>
              </p>

              {/* Button */}
              <button className="mt-3 w-full bg-[#FFA424] text-[#FFFFFF] py-2 rounded-[9px] hover:bg-orange-500 transition">
                Contact Seller
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
