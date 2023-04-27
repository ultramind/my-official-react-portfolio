import React from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import img from "../../assets/images/author/footer-img.png";

const MobileHeadeer = () => {
  return (
    <div className="header flex justify-between items-center px-6 py-2 sticky top-0 z-10 bg-[#dde1e7] shadow-xl md:hidden">
      {/* logo */}
      <div className="logo flex justify-center items-center space-x-2">
        <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
          <img src={img} alt="" />
        </div>
        <h1 className="text-2xl font-bold">AKAGOD</h1>
      </div>
      <AiOutlineAlignRight className="text-primary text-3xl font-bold" />
    </div>
  );
};

export default MobileHeadeer;
