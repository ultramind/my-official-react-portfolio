import React, { useEffect, useState } from "react";

import "./styles.css";
import Education from "./Education";
import Professional from "./Professional";
import Aos from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [toggleState, setToggleState] = useState(1);
  // function for toggle
  const toggle = (index) => {
    setToggleState(index);
  };

  return (
    <div className="p-4 my-20 md:p-0 md:py-24 md:mt-0 md:px-[12%]">
      <div className="title text-center  space-y-3" data-aos="fade-up">
        <h3 className="text-primary">7+ YEARS OF EXPERIENCE</h3>
        <h1 className="text-3xl font-bold md:text-6xl">My Resume</h1>
      </div>
      <div className="cardContainer space-y-14 mt-20 p-0">
        {/* card item */}
        <div className="tab_btn_container flex justify-center space-x-4 md:space-x-14">
          <button
            className={
              toggleState == 1
                ? "rounded py-2 px-4 shadow-default text-primary"
                : "rounded py-2 px-4 shadow-default"
            }
            onClick={() => toggle(1)}
          >
            Education Quality
          </button>
          <button
            className={
              toggleState == 2
                ? "rounded py-2 px-4 shadow-default text-primary"
                : "rounded py-2 px-4 shadow-default"
            }
            onClick={() => toggle(2)}
          >
            Professional Skills
          </button>
        </div>
        {/* First Content */}
        <Education toggleState={toggleState} />
        {/* Second Content */}
        <Professional toggleState={toggleState} />
      </div>
    </div>
  );
};

export default Resume;