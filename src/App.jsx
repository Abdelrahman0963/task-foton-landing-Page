import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ServicesCards from "./components/servicesCards/ServicesCards";
export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="hero pt-5 h-[100vh]">
        <HomePage />
        <ServicesCards />
      </div>
    </React.Fragment>
  );
}
