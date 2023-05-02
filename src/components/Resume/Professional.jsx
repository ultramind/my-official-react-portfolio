import React from "react";

const Professional = ({ toggleState}) => {
  return (
    <div
      className={
        toggleState !== 2
          ? "hidden"
          : "content flex flex-col space-y-12 md:flex-row md:space-y-0 md:justify-between md:gap-16"
      }
    >
      <div className="p-2 basis-[45%]">
        <h3 className="text-primary mb-3">2007-2015</h3>
        <h2 className="text-4xl font-extrabold mb-8">Frontend Development</h2>
        {/* main contents */}
        <div className="mb-6">
          <h2 className="text-lg">PHOTOSHOP</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[70%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['70%'] after:absolute after:right-[30%] after:-top-6 md:mt-2"></div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg">FIGMA</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[60%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['60%'] after:absolute after:right-[40%] after:-top-6 md:mt-2"></div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg">HTML</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[85%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['85%'] after:absolute after:right-[15%] after:-top-6 md:mt-2"></div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg">CSS</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[90%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['90%'] after:absolute after:right-[10%] after:-top-6 md:mt-2"></div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg">JAVASCRIPT</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[75%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['75%'] after:absolute after:right-[25%] after:-top-6 md:mt-2"></div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg">REACT JS</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[60%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['60%'] after:absolute after:right-[40%] after:-top-6 md:mt-2"></div>
        </div>
      </div>
      {/* second colum */}
      <div className="border-l-4 basis-[50%] pl-6 py-4 pb-8 md:py-2 md:border-none">
        <h3 className="text-primary mb-3">2007-2015</h3>
        <h2 className="text-4xl font-extrabold mb-8">Backend Development</h2>
        {/* main contents */}
        <div className="mb-6">
          <h2 className="text-lg">PHP</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[90%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['90%'] after:absolute after:right-[10%] after:-top-6 md:mt-2"></div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg">NODE JS</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[70%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['70%'] after:absolute after:right-[30%] after:-top-6 md:mt-2"></div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg">EXPRESS JS</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[70%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['70%'] after:absolute after:right-[30%] after:-top-6 md:mt-2"></div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg">MYSQL</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[85%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['85%'] after:absolute after:right-[15%] after:-top-6 md:mt-2"></div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg">MONGO DB</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[75%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['75%'] after:absolute after:right-[25%] after:-top-6 md:mt-2"></div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg">JAVASCRIPT</h2>
          <div className="bar flex relative w-full h-4 bg-gray-400 mt-6 rounded-lg items-center before:w-[75%] before:h-2 before:absolute before:left-1 before:bg-gradient-to-l from-primary to-gray-200 before:rounded-lg after:content-['75%'] after:absolute after:right-[25%] after:-top-6 md:mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
