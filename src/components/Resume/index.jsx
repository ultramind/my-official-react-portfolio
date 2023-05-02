import React, { useEffect, useState } from "react";

import "./styles.css";
import Education from "./Education";
import Professional from "./Professional";
import Aos from "aos";
import "aos/dist/aos.css";

const Resume = ({ theme }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [toggleState, setToggleState] = useState(1);
  // function for toggle
  const toggle = (index) => {
    setToggleState(index);
  };

  return (
    <div
      id="resume"
      className="p-4 my-20 md:p-0 md:py-24 md:mt-0 md:px-6 lg:px-32"
    >
      <div className="title text-center  space-y-3" data-aos="fade-up">
        <h3 className="text-primary text-2xl">7+ YEARS OF EXPERIENCE</h3>
        <h1 className="font-bold text-6xl">My Resume</h1>
      </div>
      <div className="cardContainer space-y-0 mt-10 p-0">
        {/* card item */}
        <div className="tab_btn_container mb-16 flex justify-center space-x-4 md:space-x-14">
          <button
            className={
              toggleState == 1
                ? `rounded py-2 px-4 ${
                    theme === "dark"
                      ? "dark-theme-shadow-effect"
                      : "shadow-default"
                  } text-primary text-2xl`
                : `rounded py-2 px-4 ${
                    theme === "dark"
                      ? "dark-theme-shadow-effect"
                      : "shadow-default"
                  } text-2xl`
            }
            onClick={() => toggle(1)}
          >
            Education Quality
          </button>
          <button
            className={
              toggleState == 2
                ? `rounded py-2 px-4 ${
                    theme === "dark"
                      ? "dark-theme-shadow-effect"
                      : "shadow-default"
                  } text-primary text-2xl`
                : `rounded py-2 px-4 ${
                    theme === "dark"
                      ? "dark-theme-shadow-effect"
                      : "shadow-default"
                  } text-2xl`
            }
            onClick={() => toggle(2)}
          >
            Professional Skills
          </button>
        </div>
        {/* First Content */}
        <Education theme={theme} toggleState={toggleState} />
        {/* Second Content */}
        <Professional toggleState={toggleState} />
      </div>
    </div>
  );
};

export default Resume;
