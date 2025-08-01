import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ServicesCards from "./components/servicesCards/ServicesCards";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import FeatureCards from "./components/FeatureCards/FeatureCards";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import ShopWOA from "./components/ShopWOA/ShopWOA";
export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="hero overflow-x-hidden pt-5 w-[100vw] h-[100vh]">
        <HomePage />
        <ServicesCards />
        <SkillsSection />
        <FeatureCards />
        <div className="bg-[#EBF3FE] h-[50%] lg:h-[80vh] md:h-[80vh] w-full relative overflow-hidden">
          <img
            className="w-[80%] absolute bottom-0 left-1/2  translate-x-[-50%] z-50"
            src="https://foton.qodeinteractive.com/wp-content/uploads/2018/07/main-home-rev-slider-background-2.png"
            alt="background-image"
          />
          <img
            className="w-[80%] absolute bottom-0 left-1/2 translate-x-[-50%] z-40"
            src="https://foton.qodeinteractive.com/wp-content/uploads/2018/07/main-home-rev-slider-background-1.png"
            alt=""
          />
        </div>
        <WhatWeOffer />
        <ShopWOA />
      </div>
    </React.Fragment>
  );
}
