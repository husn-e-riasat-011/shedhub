import { FaMapMarkerAlt, FaHeart, FaStar } from "react-icons/fa";

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
    <div className="p-6 max-w-[1600px] mx-auto">
      <h2 className="font-poppins font-normal  text-[25px] md:text-[48px] leading-[56px] tracking-[-0.03em] mt-3 mb-8 max-w-[1257px] mx-auto">
        Similar Sheds
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1257px] mx-auto">
        {sheds.map((shed) => (
          <div
            key={shed.id}
            className="bg-white rounded-lg shadow border hover:shadow-lg transition duration-300 overflow-hidden"
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
                <FaHeart className="text-[#FFA424] text-lg" />
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
            <div className="p-4">
              <h3 className="font-semibold text-lg">{shed.title}</h3>
              <p className="text-gray-500 text-sm">{shed.subtitle}</p>

              <div className="mt-2 text-sm text-gray-600">
                <p>{shed.company}</p>
                <p className="flex items-center gap-1 text-gray-500">
                  <FaMapMarkerAlt className="text-orange-500" />
                  {shed.location}
                </p>
              </div>

              {/* Price */}
              <p className="text-orange-500 font-bold mt-4">
                {shed.price}{" "}
                <span className="text-gray-500 font-normal">+ Taxes</span>
              </p>

              {/* Button */}
              <button className="mt-3 w-full bg-orange-400 text-white py-2 rounded hover:bg-orange-500 transition">
                Contact Seller
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
