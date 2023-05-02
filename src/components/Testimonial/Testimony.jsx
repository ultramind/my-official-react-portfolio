import React, { useEffect } from "react";
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { IoMdQuote } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimony = ({ propData, theme }) => {
  const { img, author, title, project, date, body } = propData;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="flex flex-col p-6 mb-4 space-y-2 md:p-6 md:flex-row md:justify-between md:gap-8"
      data-aos="fade-up"
    >
      <div
        className={`p-6 ${
          theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
        } rounded-lg md:flex-[30%]`}
      >
        <div class="md:flex-col space-y-4 md:space-y-4">
          <div>
            <img src={img} className="w-[100%] rounded-lg" alt="" />
          </div>
          <h2 className="text-4xl font-bold">{author}</h2>
          <h2 className="text-primary text-2xl">{title}</h2>
        </div>
      </div>
      <div class="rounded-xl space-y-12 text-left md:flex-[55%]">
        <div className="hidden md:flex md:justify-between md:items-center lg:items-start">
          <FaQuoteLeft className="text-8xl" />
          <FaQuoteRight className="text-8xl" />
        </div>
        <div
          className={`${
            theme == "dark" ? "dark-theme-shadow-effect" : "shadow-demand"
          } p-6 rounded-lg space-y-4 shadow-default`}
        >
          <div className=" rounded-lg flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:border-b-2 md:border-gray-400 md:pb-6">
            <div className="title space-y-4">
              <h2 className="text-3xl">{project}</h2>
              <p>{date}</p>
            </div>
            <div className="rating">
              <div
                className={`${
                  theme == "theme"
                    ? "dark-theme-shadow-effect"
                    : "shadow-default"
                } p-4 w-min rounded-lg flex text-orange-500`}
              >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <p className="">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
