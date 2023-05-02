import React from "react";

const Education = ({ toggleState, theme }) => {
  return (
    <div
      className={
        toggleState !== 1
          ? "hidden"
          : "content flex flex-col space-y-12 md:flex-row md:space-y-0 md:gap-x-12"
      }
    >
      <div className="border-l-4 border-gray-400 pl-6 py-4 pb-8">
        <h3 className="text-primary mb-3 text-xl">2007-2015</h3>
        <h2 className="font-extrabold text-4xl">Education Qualifications</h2>
        {/* main contents */}
        <div
          className={`shadow-default ${
            theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
          } rounded-xl mt-8 p-4 relative before:absolute before:w-6 before:h-6 before:bg-gray-200 before:rounded-full before:-left-9 before:top-14 before:border-[5px] before:border-gray-400 after:absolute after:w-3 after:h-2 after:bg-gray-400 after:-left-3 after:top-16`}
        >
          <div className="space-y-3">
            <div className="header">
              <h2 className="text-2xl font-semibold">
                Barchelor For Sciecne (Computer Science)
              </h2>
              <h4 className="text-gray-500 text-2xl">
                Enugu State University of Science and Technology (ESUT)
              </h4>
            </div>
            <h3
              className={`${
                theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
              } w-20 text-center font-semibold text-primary rounded py-2 text-lg`}
            >
              4.50/5
            </h3>
          </div>
          <p className="mt-4">
            Personal Portfolio April Fools University of DVI (1997 - 2001)
            4.30/5 The education should be very interactual. Ut tincidunt est ac
            dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem
            in, lobortis mauris hendrerit ante.
          </p>
        </div>
        <div
          className={`shadow-default ${
            theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
          } rounded-xl mt-8 p-4 relative before:absolute before:w-6 before:h-6 before:bg-gray-200 before:rounded-full before:-left-9 before:top-14 before:border-[5px] before:border-gray-400 after:absolute after:w-3 after:h-2 after:bg-gray-400 after:-left-3 after:top-16`}
        >
          <div className="space-y-3">
            <div className="header">
              <h2 className="text-2xl font-semibold">
                West African Examination Council (WAEC)
              </h2>
              <h4 className="text-gray-500 text-2xl">
                Bethel Secondary School Uwani Enugu (BSSH)
              </h4>
            </div>
            <h3
              className={`${
                theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
              } w-20 text-center font-semibold text-primary rounded py-2 text-lg`}
            >
              4.50/5
            </h3>
          </div>
          <p className="mt-4">
            Personal Portfolio April Fools University of DVI (1997 - 2001)
            4.30/5 The education should be very interactual. Ut tincidunt est ac
            dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem
            in, lobortis mauris hendrerit ante.
          </p>
        </div>
      </div>

      {/* Seconf colum */}
      <div className="border-l-4 border-gray-400 pl-6 py-4 pb-8">
        <h3 className="text-primary mb-3">2007-2015</h3>
        <h2 className="font-extrabold text-4xl">Job Experince</h2>
        {/* main contents */}
        <div
          className={`shadow-default ${
            theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
          } rounded-xl mt-8 p-4 relative before:absolute before:w-6 before:h-6 before:bg-gray-200 before:rounded-full before:-left-9 before:top-14 before:border-[5px] before:border-gray-400 after:absolute after:w-3 after:h-2 after:bg-gray-400 after:-left-3 after:top-16`}
        >
          <div className="space-y-3">
            <div className="header">
              <h2 className="text-2xl font-semibold">
                West African Examination Council (WAEC)
              </h2>
              <h4 className="text-gray-500 text-2xl">
                Bethel Secondary School Uwani Enugu (BSSH)
              </h4>
            </div>
            <h3
              className={`${
                theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
              } w-20 text-center font-semibold text-primary rounded py-2 text-lg`}
            >
              4.50/5
            </h3>
          </div>
          <p className="mt-4">
            Personal Portfolio April Fools University of DVI (1997 - 2001)
            4.30/5 The education should be very interactual. Ut tincidunt est ac
            dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem
            in, lobortis mauris hendrerit ante.
          </p>
        </div>
        <div
          className={`shadow-default ${
            theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
          } rounded-xl mt-8 p-4 relative before:absolute before:w-6 before:h-6 before:bg-gray-200 before:rounded-full before:-left-9 before:top-14 before:border-[5px] before:border-gray-400 after:absolute after:w-3 after:h-2 after:bg-gray-400 after:-left-3 after:top-16`}
        >
          <div className="space-y-3">
            <div className="header">
              <h2 className="text-2xl font-semibold">
                West African Examination Council (WAEC)
              </h2>
              <h4 className="text-gray-500 text-2xl">
                Bethel Secondary School Uwani Enugu (BSSH)
              </h4>
            </div>
            <h3
              className={`${
                theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
              } w-20 text-center font-semibold text-primary rounded py-2 text-lg`}
            >
              4.50/5
            </h3>
          </div>
          <p className="mt-4">
            Personal Portfolio April Fools University of DVI (1997 - 2001)
            4.30/5 The education should be very interactual. Ut tincidunt est ac
            dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem
            in, lobortis mauris hendrerit ante.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
