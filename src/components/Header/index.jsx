import React, { useEffect, useState } from "react";
import img from "../../assets/images/author/footer-img.png";
import { Link } from "react-scroll";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Header = ({ theme, changeTheme }) => {
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
            ? "hidden md:block sticky top-0 left-0 right-0 shadow-lg md:bg-[#dde1e7] dark:bg-[#212428] dark:shadow-gray-900 dark:border-gray-500 z-10 ease-in-out duration-300"
            : "hidden md:block relative top-0 left-0 right-0 mx-auto border-b-2 border-gray-300 md:bg-transparent dark:border-gray-600 z-10 ease-in-out duration-300"
        }
      >
        <div className="header flex justify-between items-center px-24 py-2 md:px-24 lg:px-30">
          {/* logo */}
          <div className="logo flex justify-center items-center space-x-2">
            <div className="w-15 h-15 bg-gray-800 rounded-full overflow-hidden">
              <img src={img} alt="" />
            </div>
            <h1 className="text-4xl font-bold">Akachukwu</h1>
            <button className="text-3xl ml-8" onClick={changeTheme}>
              {theme === "dark" ? <CiDark /> : <MdDarkMode />}
            </button>
          </div>
          {/* Links */}
          <div className="nav flex justify-between items-center">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ml-10 text-2xl cursor-pointer"
            >
              Home
            </Link>
            {/* <Link
              to=""
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ml-10 text-2xl cursor-pointer"
            >
              About us
            </Link> */}
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ml-10 text-2xl cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ml-10 text-2xl cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ml-10 text-2xl cursor-pointer"
            >
              Resume
            </Link>
            <Link
              to="testimonies"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ml-10 text-2xl cursor-pointer"
            >
              Testimony
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ml-10 text-2xl cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
