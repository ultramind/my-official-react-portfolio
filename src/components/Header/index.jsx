import React from "react";
import img from "../../assets/images/author/footer-img.png";

const Header = () => {
  return (
    <>
      <div className="hidden md:block relative mx-auto border-b-2 border-gray-300">
        <div className="header flex justify-between items-center px-24 py-2">
          {/* logo */}
          <div className="logo flex justify-center items-center space-x-2">
            <div className="w-15 h-15 bg-gray-800 rounded-full overflow-hidden">
              <img src={img} alt="" />
            </div>
            <h1 className="text-2xl font-bold">AKACHUKWU</h1>
          </div>
          {/* Links */}
          <div className="nav flex justify-between items-center">
            <a href="#">Home</a>
            <a href="#" className="ml-10 text-lg">
              About us
            </a>
            <a href="#" className="ml-10 text-lg">
              Services
            </a>
            <a href="#" className="ml-10 text-lg">
              Protfolio
            </a>
            <a href="#" className="ml-10 text-lg">
              Resume
            </a>
            <a href="#" className="ml-10 text-lg">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
