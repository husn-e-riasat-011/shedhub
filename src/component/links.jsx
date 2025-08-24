import React from "react";
import { ChevronRight } from "lucide-react"; // arrow icon

const PropertyListings = () => {
  const listings = [
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
    {
      title: "BREMEN, OH",
      price: "$1,581",
    },
  ];
  return (
    <div className="max-w-[1538px] mx-auto mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 px-7">
        {listings.map((listing, index) => (
          <div
            key={index}
            className="flex items-center justify-between cursor-pointer hover:opacity-80 transition max-w-[362px]"
          >
            {/* Left Side */}
            <div>
              <h3 className="text-[28px] font-medium text-[#002D4A]">
                {listing.title}
              </h3>
              <p className="text-[18px] font-medium text-[#002D4A]">
                Listings starting at{" "}
                <span className="text-[#FFA424] font-semibold">
                  {listing.price}
                </span>
              </p>
            </div>

            {/* Right Arrow */}
            <ChevronRight className="text-[#002D4A] w-7 h-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
