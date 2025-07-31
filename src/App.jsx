import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ServicesCards from "./components/servicesCards/ServicesCards";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import FeatureCards from "./components/FeatureCards/FeatureCards";
export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="hero pt-5 h-[100vh]">
        <HomePage />
        <ServicesCards />
        <SkillsSection />
        <FeatureCards />
      </div>
    </React.Fragment>
  );
}
