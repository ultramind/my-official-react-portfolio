import React from "react";
import img from "../../assets/images/author/footer-img.png";

const Footer = () => {
  return (
    <div className="py-10 px-4 flex flex-col justify-center items-center space-y-4">
      <div className="flex justify-center items-center space-x-4">
        <div className="img w-16 h-16 rounded-full overflow-hidden border-8 border-gray-500">
          <img src={img} alt="footer-image" className="w-[100%]" />
        </div>
        <h1 className="text-4xl font-bold">Akachukwu</h1>
      </div>
      <p className="text-2xl text-center">
        © 2023.All rights reserved ULTRACODE.
      </p>
    </div>
  );
};

export default Footer;
