import React, { useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import img from "../../assets/images/author/footer-img.png";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { TbBrandGithub, TbBrandTwitter } from "react-icons/tb";
import "./style.css";

const MobileHeadeer = () => {
  const [toggle, setToggle] = useState(false);
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

  // handle toggle8162140131

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={
        navEffect
          ? "header flex justify-between items-center px-6 py-2 sticky top-0 bg-[#dde1e7] shadow-2xl md:hidden z-10 ease-in-out duration-100"
          : "header flex justify-between items-center px-6 py-2 relative top-0 bg-transparent border-b-2 border-gray-8 z-10 md:hidden ease-in-out duration-200"
      }
    >
      {/* logo */}
      <div className="logo flex justify-center items-center space-x-2">
        <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
          <img src={img} alt="" />
        </div>
        <h1 className="text-2xl font-bold">Akachukwu</h1>
      </div>
      <AiOutlineAlignRight
        className="text-primary text-3xl font-bold"
        onClick={handleToggle}
      />
      {/* Mobile menu list */}
      <div
        className={
          toggle !== true
            ? "z-10 p-4 absolute top-0 -left-[850px] w-[80%] bg-[#ECF0F3] h-screen opacity-100 space-y-8 ease-out duration-300"
            : "z-10 p-4 absolute top-0 left-0 w-[80%] bg-[#ECF0F3] h-screen opacity-100 space-y-8 ease-in duration-300"
        }
      >
        {/* header */}
        <div className="logo flex justify-between items-center space-x-2">
          <div className="flex items-center gap-2">
            <div className="w-15 h-15 bg-gray-800 rounded-full overflow-hidden">
              <img src={img} className="w-[100%]" alt="" />
            </div>
            <h1 className="text-2xl font-bold">AKAGOD</h1>
          </div>
          <AiOutlineClose
            className="text-primary font-bold p-2 items-center rounded-full shadow-default"
            size={40}
            onClick={handleToggle}
          />
        </div>
        <p className="pb-4 border-b-2 border-gray-300">
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
        </p>
        <div className="flex-col space-y-8">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="text-lg block">
            About us
          </a>
          <a href="#" className="text-lg block">
            Services
          </a>
          <a href="#" className="text-lg block">
            Protfolio
          </a>
          <a href="#" className="text-lg block">
            Resume
          </a>
          <a href="#" className="text-lg block">
            Contact
          </a>
        </div>
        {/* socials */}
        <div className="footer absolute bottom-16 mb-8">
          <h3 className="font-medium text-lg text-primary">Find me with</h3>
          <div className="mt-6 flex justify-between space-x-2">
            <a href="#" className="p-3 shadow-default inline-block">
              <FiFacebook className="text-3xl" />
            </a>
            <a href="#" className="p-3 shadow-default inline-block">
              <TbBrandTwitter className="text-3xl" />
            </a>
            <a href="#" className="p-3 shadow-default inline-block">
              <TbBrandGithub className="text-3xl" />
            </a>
            <a href="#" className="p-3 shadow-default inline-block">
              <FiLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          toggle !== true
            ? "hidden"
            : "overlay h-screen w-full bg-black absolute top-0 left-0 opacity-90"
        }
        onClick={handleToggle}
      ></div>
    </div>
  );
};

export default MobileHeadeer;
