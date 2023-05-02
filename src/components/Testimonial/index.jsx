import { useEffect, useState } from "react";
import testimonies from "../../constants/testimonial";
import Testimony from "./Testimony";

import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = ({ theme }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [data, setDtate] = useState(testimonies);
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));
    console.log(curr);
  };
  const next = () => {
    setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));
  };
  // console.log(data);
  return (
    <div id="testimonies" className="p-0 my-20 md:px-6 lg:px-40 ">
      <div className="title text-center space-y-3 mb-16" data-aos="fade-up">
        <h3 className="text-primary">WHAT CLIENTS SAY</h3>
        <h1 className="text-5xl font-bold md:text-6xl">Testimonial</h1>
      </div>
      <div className="flex flex-col mt-16 space-y-8 md:flex-row md:justify-between md:gap-16 md:mt-8 md:flex-wrap">
        <Carousel interval={1000}>
          {data.map((testimony, index) => {
            return <Testimony key={index} theme={theme} propData={testimony} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
