import React from "react";
import horizental from "../assats/horizontal ad 2.png";
const FinanceAd = () => {
  return (
    <div>
      <div className="flex justify-center items-center xl:max-w-[2560px] bg-[#F7F7F7] mx-auto">
        <div className="xl:max-w-[1538px] lg:max-w-[960px] md:max-w-[760px] md:block hidden px-6">
          <img
            src={horizental}
            alt="Example"
            className="w-[1260px] h-[140px] mt-12"
          />
        </div>
      </div>
    </div>
  );
};

export default FinanceAd;
