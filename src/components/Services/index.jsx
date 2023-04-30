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
    <div className="p-2 my-20 md:p-6 lg:px-16">
      <div
        className="title text-center space-y-3 md:text-left"
        data-aos="fade-up"
      >
        <h3 className="text-primary text-3xl">Features</h3>
        <h1 className="text-5xl font-bold md:text-6xl">What i Do</h1>
      </div>
      <div className="cardContainer space-y-8 py-8 md:flex md:space-y-0 md:flex-wrap md:gap-10">
        {/* card item */}
        <div
          className="py-8 md:w-[30%] md:grow px-4 shadow-default rounded-xl"
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
          className="py-8 md:w-[30%] md:grow px-4 shadow-default rounded-xl"
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
          className="py-8 md:w-[30%] md:grow px-4 shadow-default rounded-xl"
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
        <div
          className="py-8 md:w-[30%] md:shrink px-4 shadow-default rounded-xl"
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
    </div>
  );
};

export default Services;
