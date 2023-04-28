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

function App() {
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
      <button className="p-4 shadow-default rounded-full text-primary font-bold text-2xl fixed right-8 bottom-8">
        <AiOutlineArrowUp />
      </button>
    </div>
  );
}

export default App;
