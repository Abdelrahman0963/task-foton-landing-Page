import React from "react";

export default function ShopWOA() {
  return (
    <>
      <section className="ShopWOA-container !py-0 !px-6 !md:pt-12 !pt-50 !md:py-6 !md:px-12 w-full bg-[#fff] h-[100vh] flex flex-col md:flex-row lg:flex-col justify-between items-center">
        <div className="ShopWOA-container-images w-full relative !p-5">
          <img
            className="md:w-[50%] w-[50%]  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-40"
            src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-phone-2.png"
            alt=""
          />
          <img
            className="md:w-[30%] w-[30%] absolute top-16 left-[25%] translate-x-[-25%] translate-y-[-50%] z-50"
            src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-phone-22.png"
            alt=""
          />
          <img
            className="md:w-[30%] w-[30%] absolute top-16 left-[75%] translate-x-[-75%] translate-y-[-50%] z-50"
            src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-phone-222.png"
            alt=""
          />
        </div>
        <div className="ShopWOA-container-content  flex justify-center items-start md:items-center flex-col gap-4">
          <h2 className="md:text-[3.5rem] text-4xl font-medium leading-none text-[#58468C] font-['Nunito']">
            Shop With Our Incredible App
          </h2>
          <p className="text-[1rem] font-light text-[#716C80] font-['Nunito']">
            Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict
            altera legimu. Me vita de lege ndos expet end is ad. Ex mei omita
            aliu mi ando, haeo tibi que com titure viset cut.
          </p>
          <div className="ShopWOA-container-content-user flex items-start gap-4 justify-start w-full">
            <img
              className="md:w-20 w-15"
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-img-4.png"
              alt=""
            />
            <div className="ShopWOA-container-content-user-name flex flex-col justify-center items-start !md:pt-3 !pt-0">
              <h2 className="text-[1.3rem] font-semibold text-[#58468C] font-['Nunito']">
                Erin Botter
              </h2>
              <h2 className="text-[1rem] font-light text-[#716C80] font-['Nunito']">
                WEB DEVELOPER
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
