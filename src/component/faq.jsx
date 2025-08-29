import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ShedSalesFAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      question: "Materials & Build Quality",
      answer:
        "When shopping for sheds, consider the construction materials used. Look for pressure-treated lumber, galvanized hardware, and weather-resistant siding. Higher quality materials ensure longer-lasting structures that can withstand harsh weather conditions and regular use.",
    },
    {
      question: "Price for Sheds",
      answer:
        "Shed prices can vary significantly from $500 to $20,000+ depending on size, materials, and features. Compare prices from multiple vendors, consider long-term value over initial cost, and factor in delivery, installation, and any required permits.",
    },
    {
      question: "What Delivery is Included",
      answer:
        "Delivery terms vary by supplier. Some include free delivery within a certain radius, while others charge extra. Ask about delivery timeline, site preparation requirements, and whether assembly is included or available as an additional service.",
    },
    {
      question: "Shed Dimensions - Size for Shed Needs",
      answer:
        "Consider both your current and future storage needs. Measure your available space and check local building codes for size restrictions. Think about door width for equipment access and ceiling height for shelving or hanging storage.",
    },
    {
      question: "Custom Storage Sheds",
      answer:
        "Custom storage sheds allow you to design a structure that perfectly fits your specific needs and space requirements. You can choose materials, colors, door placement, window options, and interior features to create the ideal storage solution for your property.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="max-w-[1538px] mx-auto bg-white p-8 py-16 font-poppins ">
      {/* Header Section */}
      <div className="mb-8 py-10">
        <h3 className="font-poppins font-normal md:text-[48px] text-[38px] leading-[56px] text-[#002D4A] tracking-[-0.03em]">
          What to Consider When
        </h3>

        <h1 className="font-poppins font-semibold md:text-[48px] text-[38px] leading-[56px] tracking-[-0.03em] text-[#002D4A] mb-4">
          Shopping for Sheds for Sales
        </h1>

        <p className="font-poppins font-normal text-[20px] leading-[36px] tracking-[-0.03em] text-[#002D4A] mb-6">
          Sheds, barns and gazebos are structures with both style and practical
          functions. In both pretty came cabins, dimensions, pricing structures
          and replacement use all trying to consider. Not too storage sheds can
          exceed back and short-term range from your back to $20,000 so range
          storage buildings and garages. With measurement, you can easily sell
          through thousands of years for tools to three performance storage
          taxation that market practical have are a few things.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="space-y-0">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${
              index < faqData.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-0 py-4 text-left bg-white transition-colors flex justify-between items-center"
            >
              <h3 className="font-poppins font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#002D4A]">
                {item.question}
              </h3>

              <div className="flex-shrink-0 ml-4">
                <div className="w-6 h-6 rounded-full border-2 border-[#FFA424] flex items-center justify-center">
                  {openQuestion === index ? (
                    <Minus className="w-3 h-3 text-[#FFA424]" />
                  ) : (
                    <Plus className="w-3 h-3 text-[#FFA424]" />
                  )}
                </div>
              </div>
            </button>

            {openQuestion === index && (
              <div className="px-0 py-4 ">
                <p className="font-poppins font-normal text-[20px] leading-[36px] tracking-[-0.03em] text-[#002D4A] ">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
