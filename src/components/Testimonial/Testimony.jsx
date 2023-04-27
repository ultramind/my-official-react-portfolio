import React, { useEffect } from "react";
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { IoMdQuote } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimony = ({ propData }) => {
  const { img, author, title, project, date, body } = propData;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="flex flex-col space-y-6 md:flex-row md:justify-between md:gap-8"
      data-aos="fade-up"
    >
      <div className="p-6 shadow-default rounded-lg md:flex-[30%]">
        <div class="md:flex-col space-y-4 md:space-y-4">
          <div>
            <img src={img} className="w-[100%] rounded-lg" alt="" />
          </div>
          <h2 className="text-3xl font-bold">{author}</h2>
          <h2 className="text-primary text-xl">{title}</h2>
        </div>
      </div>
      <div class="rounded-xl md:flex-[60%]">
        <div className="hidden md:block md:flex md:justify-between md:items-center">
          <IoMdQuote className="text-8xl" />
          <div className="flex md:gap-6">
            <button className="py-4 rounded text-2xl px-8 shadow-default text-primary">
              <AiOutlineArrowLeft />
            </button>
            <button className="py-4 rounded text-2xl px-8 shadow-default text-primary">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className="shadow-default p-6 rounded-lg space-y-8 ">
          <div className=" rounded-lg flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:border-b-2 md:border-gray-400 md:pb-6">
            <div className="title space-y-4">
              <h2 className="text-3xl">{project}</h2>
              <p>{date}</p>
            </div>
            <div className="rating">
              <div className="shadow-default p-4 w-min rounded-lg flex text-orange-500">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <p className="leading-42 text-xl">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
