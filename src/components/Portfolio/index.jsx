import React, { useEffect } from "react";
import img1 from "../../assets/images/portfolio/portfolio-1.png";
import img2 from "../../assets/images/portfolio/portfolio-2.png";
import img3 from "../../assets/images/portfolio/portfolio-3.png";
import img4 from "../../assets/images/portfolio/portfolio-4.png";
import img5 from "../../assets/images/portfolio/portfolio-5.png";
import { AiOutlineHeart } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="p-2 my-20 md:px-[10%]">
      <div className="title text-center space-y-3 " data-aos="fade-up">
        <h3 className="text-primary">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </h3>
        <h1 className="text-4xl font-bold md:text-6xl">My Portfolio</h1>
      </div>
      <div className="cardContainer space-y-8 mt-20 p-2 md:space-y-0 md:flex md:flex-wrap md:gap-12">
        {/* card item */}
        <div
          className="p-4 shadow-default rounded-lg md:basis-[30%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="card flex-col space-y-6">
            <div>
              <img src={img2} className="w-[100%] rounded-lg" alt="" />
            </div>
            <div className="cateory flex flex-row justify-between items-center font-medium">
              <h3 className="text-primary">Development</h3>
              <h3 className="flex flex-row justify-center items-center space-x-2">
                <AiOutlineHeart className="text-primary text-lg" />{" "}
                <span>898</span>
              </h3>
            </div>
            <h2 className="text-2xl font-normal">Graphic Design</h2>
          </div>
        </div>
        <div
          className="p-4 shadow-default rounded-lg md:basis-[30%]"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div class="card flex-col space-y-6">
            <div>
              <img src={img2} className="w-[100%] rounded-lg" alt="" />
            </div>
            <div className="cateory flex flex-row justify-between items-center font-medium">
              <h3 className="text-primary">Development</h3>
              <h3 className="flex flex-row justify-center items-center space-x-2">
                <AiOutlineHeart className="text-primary text-lg" />{" "}
                <span>898</span>
              </h3>
            </div>
            <h2 className="text-2xl font-normal">Graphic Design</h2>
          </div>
        </div>
        <div
          className="p-4 shadow-default rounded-lg md:basis-[30%]"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <div class="card flex-col space-y-6">
            <div>
              <img src={img3} className="w-[100%] rounded-lg" alt="" />
            </div>
            <div className="cateory flex flex-row justify-between items-center font-medium">
              <h3 className="text-primary">Development</h3>
              <h3 className="flex flex-row justify-center items-center space-x-2">
                <AiOutlineHeart className="text-primary text-lg" />{" "}
                <span>898</span>
              </h3>
            </div>
            <h2 className="text-2xl font-normal">Graphic Design</h2>
          </div>
        </div>
        <div
          className="p-4 shadow-default rounded-lg md:basis-[30%]"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <div class="card flex-col space-y-6">
            <div>
              <img src={img1} className="w-[100%] rounded-lg" alt="" />
            </div>
            <div className="cateory flex flex-row justify-between items-center font-medium">
              <h3 className="text-primary">Development</h3>
              <h3 className="flex flex-row justify-center items-center space-x-2">
                <AiOutlineHeart className="text-primary text-lg" />{" "}
                <span>898</span>
              </h3>
            </div>
            <h2 className="text-2xl font-normal">Graphic Design</h2>
          </div>
        </div>
        <div
          className="p-4 shadow-default rounded-lg md:basis-[30%]"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <div class="card flex-col space-y-6">
            <div>
              <img src={img2} className="w-[100%] rounded-lg" alt="" />
            </div>
            <div className="cateory flex flex-row justify-between items-center font-medium">
              <h3 className="text-primary">Development</h3>
              <h3 className="flex flex-row justify-center items-center space-x-2">
                <AiOutlineHeart className="text-primary text-lg" />{" "}
                <span>898</span>
              </h3>
            </div>
            <h2 className="text-2xl font-normal">Graphic Design</h2>
          </div>
        </div>
        <div className="p-4 shadow-default rounded-lg md:basis-[30%]">
          <div
            class="card flex-col space-y-6"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div>
              <img src={img3} className="w-[100%] rounded-lg" alt="" />
            </div>
            <div className="cateory flex flex-row justify-between items-center font-medium">
              <h3 className="text-primary">Development</h3>
              <h3 className="flex flex-row justify-center items-center space-x-2">
                <AiOutlineHeart className="text-primary text-lg" />{" "}
                <span>898</span>
              </h3>
            </div>
            <h2 className="text-2xl font-normal">Graphic Design</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
