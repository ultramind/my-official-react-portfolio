import { AiOutlineArrowUp } from "react-icons/ai";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileHeadeer from "./components/Header/mobileHeadeer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [navEffect, setNavEffect] = useState(false);
  const onscrollEffect = () => {
    if (window.scrollY >= 350) {
      setNavEffect(true);
    } else {
      setNavEffect(false);
    }
  };

  addEventListener("scroll", onscrollEffect);

  return (
    <div className="relative">
      <Header />
      <MobileHeadeer />
      <Hero />
      <hr className="w-[100%] border-2 border-gray-300" />
      <Services />
      <hr className="w-[100%] border-2 border-gray-300" />
      <Portfolio />
      <hr className="w-[100%] border-2 border-gray-300" />
      <Resume />
      <hr className="w-[100%] border-2 border-gray-300" />
      <Testimonial />
      <hr className="w-[100%] border-2 border-gray-300" />
      <Contact />
      <hr className="w-[100%] border-2 border-gray-300" />
      <Footer />
      <a
        href="#"
        className={
          navEffect &&
          "p-4 shadow-default rounded-full text-primary font-bold text-2xl fixed right-4 bottom-8 z-10 ease-in-out duration-300"
        }
      >
        <AiOutlineArrowUp />
      </a>
    </div>
  );
}

export default App;
