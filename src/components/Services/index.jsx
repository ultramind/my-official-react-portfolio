import React, { useEffect } from "react";
import img from "../../assets/images/icon-1.png";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="p-2 my-20 md:px-[10%]">
      <div
        className="title text-center space-y-3 md:text-left"
        data-aos="fade-up"
      >
        <h3 className="text-primary md:text-3xl">Features</h3>
        <h1 className="text-5xl font-bold md:text-6xl">What i Do</h1>
      </div>
      <div className="cardContainer space-y-8 mt-20 p-2 md:flex md:justify-center md:items-center md:space-x-10 md:space-y-0">
        {/* card item */}
        <div
          className="py-8 px-4 shadow-default rounded-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="card flex-col space-y-6">
            <div>
              <FaHamburger className="text-primary text-5xl" />
            </div>
            <h2 className="text-3xl font-normal">Graphic Design</h2>
            <p className="text-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut
              eum ea beatae sint, quam hic error dolore a architecto.
            </p>
          </div>
        </div>
        <div
          className="py-8 px-4 shadow-default rounded-xl"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <div class="card flex-col space-y-6">
            <div>
              <MdOutlineWeb className="text-primary text-5xl" />
            </div>
            <h2 className="text-3xl font-normal">Web Design</h2>
            <p className="text-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut
              eum ea beatae sint, quam hic error dolore a architecto.
            </p>
          </div>
        </div>
        <div
          className="py-8 px-4 shadow-default rounded-xl"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <div class="card flex-col space-y-6">
            <div>
              <CgWebsite className="text-primary text-5xl" />
            </div>
            <h2 className="text-3xl font-normal">Web Development</h2>
            <p className="text-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut
              eum ea beatae sint, quam hic error dolore a architecto.
            </p>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className="cardContainer space-y-8 mt-4 p-2 md:flex md:justify-center md:items-center md:space-x-10 md:space-y-0 md:mt-8">
        {/* card item */}
        <div
          className="py-8 px-4 shadow-default rounded-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="card flex-col space-y-6">
            <div>
              <FaHamburger className="text-primary text-5xl" />
            </div>
            <h2 className="text-3xl font-normal">Graphic Design</h2>
            <p className="text-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut
              eum ea beatae sint, quam hic error dolore a architecto.
            </p>
          </div>
        </div>
        <div
          className="py-8 px-4 shadow-default rounded-xl"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <div class="card flex-col space-y-6">
            <div>
              <MdOutlineWeb className="text-primary text-5xl" />
            </div>
            <h2 className="text-3xl font-normal">Web Design</h2>
            <p className="text-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut
              eum ea beatae sint, quam hic error dolore a architecto.
            </p>
          </div>
        </div>
        <div
          className="py-8 px-4 shadow-default rounded-xl"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <div class="card flex-col space-y-6">
            <div>
              <CgWebsite className="text-primary text-5xl" />
            </div>
            <h2 className="text-3xl font-normal">Web Development</h2>
            <p className="text-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut
              eum ea beatae sint, quam hic error dolore a architecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;