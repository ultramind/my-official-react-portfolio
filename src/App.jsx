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
import { Link } from "react-scroll";

function App() {
  const [theme, setTheme] = useState("light");
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

  // Theme setting
  // theme settings
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("Dark theme");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Light theme");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  return (
    <div className="relative dark:bg-[#212428] dark:text-[#afb0b0]">
      <Header theme={theme} changeTheme={handleThemeSwitch} />
      <MobileHeadeer theme={theme} changeTheme={handleThemeSwitch} />
      <Hero theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Services theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Portfolio theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Resume theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Testimonial theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Contact theme={theme} />
      <hr
        className={`w-[100%] border-2 ${
          theme === "dark" ? "border-gray-800" : "border-gray-300"
        }`}
      />
      <Footer />
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={
          navEffect &&
          `p-4 ${
            theme === "dark" ? "dark-theme-shadow-effect" : "shadow-default"
          } rounded-full text-primary font-bold text-2xl fixed right-4 bottom-8 z-10 ease-in-out duration-300`
        }
      >
        <AiOutlineArrowUp />
      </Link>
    </div>
  );
}

export default App;
