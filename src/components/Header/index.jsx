import React, { useState } from "react";
import img from "../../assets/images/author/footer-img.png";

const Header = () => {
  const [navEffect, setNavEffect] = useState(false);
  const activateStickyNav = () => {
    if (window.scrollY >= 150) {
      setNavEffect(true);
    } else {
      setNavEffect(false);
    }
  };

  // adding the eventListner
  addEventListener("scroll", activateStickyNav);
  return (
    <>
      <div
        className={
          navEffect == true
            ? "hidden md:block mx-auto border-b-2 border-gray-300 sticky top-0 left-0 right-0 shadow-lg md:bg-[#ECF0F3] z-10 ease-in-out duration-300"
            : "hidden md:block relative top-0 left-0 right-0 mx-auto border-b-2 border-gray-300 md:bg-transparent z-10 ease-in-out duration-300"
        }
      >
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
