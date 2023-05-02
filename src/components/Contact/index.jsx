import { useEffect, useState } from "react";
import img from "../../assets/images/portfolio/portfolio-1.png";

import { GrLinkNext } from "react-icons/gr";
import { SlSocialFacebook } from "react-icons/sl";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { TbBrandGithub, TbBrandTwitter } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = ({ theme }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="contact" className="p-4 md:px-8 mt-20 mb-16 lg:px-24">
      <div className="title text-center space-y-3" data-aos="fade-up">
        <h3 className="text-primary text-2xl">Contact</h3>
        <h1 className="text-4xl font-bold md:text-6xl">Contact With Me</h1>
      </div>
      <div className="space-y-12 md:flex mt-16 md:gap-12 md:space-y-0">
        <div
          className={`p-6 space-y-4 ${
            theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
          } rounded-lg md:flex-[30%]`}
          data-aos="fade-up"
        >
          <div class="card flex-col space-y-4">
            <div>
              <img src={img} className="w-[100%] rounded-lg" alt="" />
            </div>
            <h2 className="text-3xl font-bold">Nevine Acotanza</h2>
            <h2 className="text-primary text-xl">Chief Operating Officer</h2>
          </div>
          <p>
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>
          <p>
            <h3>Phone: +234-7062668228</h3>
            <h3>Phone: +234-7045633760</h3>
            <h3>Email: udechukwuakachukwu@gmail.com</h3>
          </p>
          {/* socials */}
          <div className="mb-8">
            <h3 className="font-medium text-lg">Find me with</h3>
            <div className="mt-8 space-x-4">
              <a
                href="#"
                className={`p-4 ${
                  theme === "dark"
                    ? "dark-theme-shadow-effect"
                    : "shadow-default"
                }  inline-block`}
              >
                <FiFacebook className="text-3xl" />
              </a>
              <a
                href="#"
                className={`p-4 ${
                  theme === "dark"
                    ? "dark-theme-shadow-effect"
                    : "shadow-default"
                }  inline-block`}
              >
                <TbBrandTwitter className="text-3xl" />
              </a>
              <a
                href="#"
                className={`p-4 ${
                  theme === "dark"
                    ? "dark-theme-shadow-effect"
                    : "shadow-default"
                }  inline-block`}
              >
                <TbBrandGithub className="text-3xl" />
              </a>
              <a
                href="#"
                className={`p-4 ${
                  theme === "dark"
                    ? "dark-theme-shadow-effect"
                    : "shadow-default"
                }  inline-block`}
              >
                <FiLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div
          class={`card ${
            theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
          } flex-col p-8 space-y-6 rounded-xl md:flex-[60%]`}
          data-aos="fade-up"
        >
          <form class="items-center space-y-4">
            <label class="block">
              <span class="block  font-medium text-xl text-slate-700">
                FullName
              </span>
              <input
                type="text"
                placeholder="Enter your fullname"
                class={`${
                  theme === "dark" ? "dark-theme-shadow-effect" : "inner-shadow"
                } text-xl mt-1 block w-full px-3 py-2 bg-white border rounded-lg`}
              />
            </label>
            <label class="block">
              <span class="block  font-medium text-xl text-slate-700">
                Email
              </span>
              <input
                type="email"
                placeholder="Enter your Email"
                class={`${
                  theme === "dark" ? "dark-theme-shadow-effect" : "inner-shadow"
                } text-xl mt-1 block w-full px-3 py-2 bg-white border rounded-lg`}
              />
            </label>
            <label class="block">
              <span class="block  font-medium text-xl text-slate-700">
                Phone
              </span>
              <input
                type="text"
                placeholder="Enter your Phone"
                class={`${
                  theme === "dark" ? "dark-theme-shadow-effect" : "inner-shadow"
                } text-xl mt-1 block w-full px-3 py-2 bg-white border rounded-lg`}
              />
            </label>
            <label class=" text-xlblock">
              <span class="block  font-medium text-slate-700">Subject</span>
              <input
                type="text"
                placeholder="Enter your Email"
                class={`${
                  theme === "dark" ? "dark-theme-shadow-effect" : "inner-shadow"
                } text-xl mt-1 block w-full px-3 py-2 bg-white border rounded-lg`}
              />
            </label>
            <label class="block">
              <span class="block  font-medium text-slate-700">Message</span>
              <textarea
                className={`${
                  theme === "dark" ? "dark-theme-shadow-effect" : "inner-shadow"
                } text-xl mt-1 block w-full px-3 py-2 bg-white border rounded-lg`}
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </label>
            <br></br>
            <button
              className={`flex mt-24 justify-between items-center ${
                theme === "dark"
                  ? "dark-theme-shadow-effect"
                  : "shadow-default "
              } p-4 text-xl text-primary rounded-lg gap-x-3`}
            >
              Send Message <GrLinkNext className="text-primary font-bold" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
