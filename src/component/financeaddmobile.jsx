import React from "react";
import mobileadd from "../assats/mobileadd.jpg";
const FinanceAdMobile = () => {
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className=" md:hidden block px-6 py-4 rounded-[16px]">
          <img src={mobileadd} alt="Example" className=" rounded-[16px]" />
        </div>
      </div>
    </div>
  );
};

export default FinanceAdMobile;
