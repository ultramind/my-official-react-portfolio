import React, { useEffect } from "react";
import img from "../../assets/images/banner-01.png";
import {
  TbBrandCss3,
  TbBrandGithub,
  TbBrandJavascript,
  TbBrandPhp,
  TbBrandTwitter,
} from "react-icons/tb";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex flex-col-reverse p-4 justify-between items-center py-4 mt-10 mx-auto lg:px-8 md:mt-0 md:h-screen md:flex-row md:items-starts md:px-[10%] md:py-24">
      {/* Hero left content */}
      <div className="left space-y-6 md:w-[85%] md:py-0 md:pr-16 md:space-y-10">
        <h3 className="text-primary">WELCOME TO MY WORLD</h3>
        <h1 className="text-5xl font-bold md:text-6xl" data-aos="fade-up">
          Hi, I’m Akachukwu <br />a Developer.
        </h1>
        <p className="lg:w-full md:w-[80%]">
          Highly skilled FullStack Developer with [Number of Years] years of
          experience in developing robust and scalable web applications.
          Proficient in multiple programming languages, frameworks, and
          technologies, including [List of Technologies].
        </p>
        {/* CTA buttons */}
        <div className="flex flex-col space-y-10 lg:flex-col lg:items-start lg:space-y-6 md:flex-row md:items-center md:justify-between md:space-y-0">
          {/* socials */}
          <div className="md:flex-col ">
            <h3 className="font-bold text-2xl">Find me with</h3>
            <div className="mt-6 space-x-4">
              <a
                href="#"
                className="p-4 shadow-default inline-block"
                data-aos="fade-right"
                data-aos-duration="1600"
              >
                <FiFacebook className="text-3xl" />
              </a>
              <a
                href="#"
                className="p-4 shadow-default inline-block"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                <TbBrandTwitter className="text-3xl" />
              </a>
              <a
                href="#"
                className="p-4 shadow-default inline-block"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <TbBrandGithub className="text-3xl" />
              </a>
              <a
                href="#"
                className="p-4 shadow-default inline-block"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <FiLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* skills */}
          <div className="">
            <h3 className="font-bold text-2xl">Best Skills</h3>
            <div className="mt-6 space-x-4">
              <a
                href="#"
                className="p-4 shadow-default inline-block"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                <TbBrandJavascript className="text-3xl" />
              </a>
              <a
                href="#"
                className="p-4 shadow-default inline-block"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <TbBrandPhp className="text-3xl" />
              </a>
              <a
                href="#"
                className="p-4 shadow-default inline-block"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <TbBrandCss3 className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* hero image */}
      <div className="right md:w-[50%]" data-aos="fade-left">
        <div className="img-container p-6 box mb-8">
          <img src={img} alt="" className="w-[100%] md:-mt-36" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
