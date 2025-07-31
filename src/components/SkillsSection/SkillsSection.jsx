import React from "react";

export default function SkillsSection() {
  const AppSkillsSection = [
    {
      title: "Information Architecture",
      width: "56%",
      color: "#7BB9FF",
    },
    {
      title: "App Development",
      width: "97%",
      color: "#5580FF",
    },
    {
      title: "User Interface",
      width: "92%",
      color: "#FF8A73",
    },
    {
      title: "Total Memory Usage",
      width: "53%",
      color: "#7BB9FF",
    },
  ];
  return (
    <>
      <section className="AppSkillsSection-container md:flex-row flex flex-col justify-between items-center !px-6 md:!px-24 w-full">
        <div className="AppSkillsSection-container-content">
          <h2 className="text-[2.8rem] font-medium text-[#58468C] font-['Nunito']">
            Creative App Ideas
          </h2>
          <div className="AppSkillsSection-container-content-range flex flex-col gap-6 w-full">
            {AppSkillsSection.map((item, index) => (
              <div
                key={index}
                className="AppSkillsSection-content-range-container  w-[100%]"
              >
                <div className="AppSkillsSection-container-content-titleAndRang flex justify-between">
                  <h3 className="text-[1.3rem] font-light text-[#58468C]">
                    {item.title}
                  </h3>
                  <span>{item.width}</span>
                </div>
                <nav className="AppSkillsSection-container-content-range-bar flex w-[100%] h-[6px] rounded-md bg-[#F0F5FF]">
                  <nav
                    className={`AppSkillsSection-container-content-range-bar-one  h-[6px] rounded-md`}
                    style={{ width: item.width, background: item.color }}
                  ></nav>
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="AppSkillsSection-container-image">
          <img
            className="w-[100%] md:w-[550px]"
            src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-phone-11.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
