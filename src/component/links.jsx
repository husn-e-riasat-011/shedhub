import React from "react";

const PropertyListings = () => {
  const listings = [
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "LUstings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "LUstings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "LUstings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "LUstings starting at",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
      description: "Ustings starting at",
    },
  ];

  return (
    <div className="max-w-[1538px] mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map((listing, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {listing.title}
              </h3>
              <p className="text-gray-600 mb-1">
                {listing.description}
                <span className="text-2xl font-bold text-[#FFA424] mt-3">
                  {listing.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
