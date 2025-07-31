import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import "flowbite";

export default function ServicesCards() {
  const ServicesCards = [
    {
      title: "Market Analysis",
      description:
        "Amcoriper uisque aic dol necim nise que et. Bul um demo sed ultrice mis est mor bit etis virtu.",
      color: "#7BB9FF",
    },
    {
      title: "Financial Advice",
      description:
        "Amcoriper uisque aic dol necim nise que et. Bul um demo sed ultrice mis est mor bit etis virtu.",
      color: "#5580FF",
    },
    {
      title: "Web Solution",
      description:
        "Amcoriper uisque aic dol necim nise que et. Bul um demo sed ultrice mis est mor bit etis virtu.",
      color: "#FF8A73",
    },
  ];
  return (
    <>
      <div className="ServicesCards-container w-full flex justify-center md:justify-between !pt-8 !px-6 md:!px-24 ">
        <div className="ServicesCards-container-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ServicesCards.map((card, index) => (
            <div
              key={index}
              className="ServicesCards-container-card relative !p-[2rem] w-[400px] h-[200px] bg-white hover:shadow-2xl hover:translate-y-[-10px] transition ease-in-out duration-300"
            >
              <div
                className={`ServicesCards-container-card-icon-check w-[45px] h-[45px] flex justify-center items-center rounded-md`}
                style={{ backgroundColor: card.color }}
              >
                <IoMdCheckmark className="text-3xl text-white" />
              </div>
              <div className="ServicesCards-container-card-content flex flex-col gap-1 justify-center items-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-2xl font-medium text-[#58468C]">
                  {card.title}
                </h2>
                <p className="text-[1rem] font-light text-[#716C80] ">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
