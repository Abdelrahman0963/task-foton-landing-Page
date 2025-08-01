import React, { useState } from "react";
import { motion } from "framer-motion";
import "flowbite";

export default function HomePage() {
  return (
    <React.Fragment>
      <section className="home relative flex !py-0 !px-6 lg:py-6  !md:py-6 !md:px-12 overflow-hidden w-[100vw]  h-[85vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="home-wrap absolute bottom-0 left-1/2 -z-10 translate-x-[-50%] flex justify-center md:w-full w-[100vw]"
        >
          <img
            className="max-w-[230%] md:max-w-[70%]"
            src="https://foton.qodeinteractive.com/wp-content/uploads/2018/07/main-home-rev-slider-background-2.png"
            alt="background-image"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="home-wrap-image-tow absolute bottom-0 left-1/2 -z-20 translate-x-[-50%] flex justify-center w-full"
        >
          <img
            className="max-w-[230%] md:max-w-[70%]"
            src="https://foton.qodeinteractive.com/wp-content/uploads/2018/07/main-home-rev-slider-background-1.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="home-wrap-image-three flex jastify-center  absolute bottom-36 z-0 left-[21%] w-[100%]">
            <img
              className="w-[40px]"
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/slider-img-40.png"
              alt=""
            />
          </div>
          <div className="home-wrap-image-four flex jastify-center  absolute bottom-28 z-0 left-[20%] w-[100%]">
            <img
              className="w-[15px]"
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/slider-img-36.png"
              alt=""
            />
          </div>
          <motion.div
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="home-wrap-image-five flex jastify-center  absolute bottom-60 z-0 left-[21%] w-[100%]"
          >
            <img
              className="w-[20px]"
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/slider-img-36.png"
              alt=""
            />
          </motion.div>
          <div className="home-wrap-image-six flex jastify-center  absolute bottom-80 z-0 left-[23%] w-[100%]">
            <img
              className="w-[55px]"
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/slider-img-40.png"
              alt=""
            />
          </div>
          <motion.div
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="home-wrap-image-seven flex jastify-center  absolute bottom-96 z-0 left-[33%] w-[100%]"
          >
            <img
              className="w-[25px]"
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/slider-img-36.png"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="home-wrap-image-six flex jastify-center  absolute bottom-[25rem] z-0 left-[38%] w-[100%]"
          >
            <img
              className="w-[55px]"
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/slider-img-40.png"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="home-wrap-image-seven flex jastify-center  absolute bottom-[27rem] z-0 left-[50%] w-[100%]"
          >
            <img
              className="w-[25px]"
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/slider-img-36.png"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="home-wrap-image-seven flex jastify-center  absolute bottom-[28rem] z-0 left-[56%] w-[100%]"
          >
            <img
              className="w-[25px]"
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/slider-img-36.png"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="home-wrap-image-six flex jastify-center  absolute bottom-[25rem] z-0 left-[63%] w-[100%]"
          >
            <img
              className="w-[55px]"
              src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/slider-img-40.png"
              alt=""
            />
          </motion.div>
        </motion.div>
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative w-full  h-[100vh] rounded-lg md:h-96 ">
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            ></div>
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <div className="carsousel-container !pt-12 md:!pt-24 relative h-[100%] px-12 z-50">
                <motion.div
                  initial={{ y: "90%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="carsousel-container-content flex flex-col items-center justify-center  gap-4 "
                >
                  <h2 className="text-[1.69rem]  md:text-[2.7rem] font-light text-center text-[#58468c] mx-2 ">
                    A Great Idea Turned into an App
                  </h2>
                  <p className="hidden md:block text-[1.32rem] text-center font-light md:w-[50%]  text-[#716C80]">
                    Make Your awesome business idea reality with foton, the
                    fresh new theme form Mikado - custom made for modern
                    startups.
                  </p>
                  <div className="carsousel-container-content-btn flex-col md:flex-row  flex gap-4 items-center">
                    <nav className="btn-read-more w-[160px] md:w-[190px] h-[50px] bg-[#FF8A73] rounded-[3rem] flex justify-center items-center cursor-pointer">
                      <a className="underline-none text-white" href="#">
                        Read More
                      </a>
                    </nav>
                    <nav className="btn-contact w-[160px] md:w-[190px] h-[50px] bg-[#5580f7] rounded-[3rem] flex justify-center items-center cursor-pointer">
                      <a className="underline-none text-white" href="#">
                        contact us
                      </a>
                    </nav>
                  </div>
                </motion.div>
                <div className="carsousel-container-content-images-animation flex gap-4">
                  <div className="carsousel-container-content-images-animation-one relative w-[100%] h-[100%] ">
                    <motion.img
                      initial={{ x: "-50%", opacity: 0 }}
                      whileInView={{ x: "0", opacity: 1 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="w-[150px] md:w-[250px] absolute bottom-[-19rem] left-[-.5rem] md:left-36 z-50"
                      src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/main-img-9.png"
                      alt=""
                    />

                    <motion.img
                      initial={{ x: "-90%", opacity: 0 }}
                      whileInView={{ x: "0", opacity: 1 }}
                      transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="w-[80px] md:w-[100px] absolute bottom-[-19rem] left-[-.5rem] md:left-52 z-50"
                      src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/main-img-10.png"
                      alt="images"
                    />
                    <motion.img
                      initial={{ y: "-90%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      transition={{
                        duration: 1.3,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: false, amount: 0.5 }}
                      className="md:w-[60px] w-[40px] absolute bottom-[-19rem] left-96 z-50"
                      src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/main-img-8.png"
                      alt="images"
                    />
                    <motion.img
                      initial={{ x: "90%", opacity: 0 }}
                      whileInView={{ x: "0%", opacity: 1 }}
                      transition={{
                        duration: 1.3,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: false, amount: 0.5 }}
                      className="md:w-[110px] w-[75px] absolute bottom-[-19rem] left-[75%] z-50"
                      src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/main-img-6.png"
                      alt=""
                    />
                    <motion.img
                      initial={{ y: "-90%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      transition={{
                        duration: 1.3,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: false, amount: 0.5 }}
                      className="md:w-[90px] w-[70px] absolute bottom-[-6rem] left-[26rem] z-50"
                      src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/main-img-7.png"
                      alt=""
                    />
                  </div>
                  <div className="carsousel-container-content-images-animation-tow relative w-[100%] h-[100%]">
                    <motion.img
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ x: "0%", opacity: 1 }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: false, amount: 0.5 }}
                      className="w-[300px] absolute bottom-[-19rem] left-0 z-[60]"
                      src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/main-img-1.png"
                      alt=""
                    />
                    <img
                      className="w-[190px] absolute bottom-[-19rem] left-[250px] z-50"
                      src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/main-img-3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <h1>slide2</h1>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <h1>slide3</h1>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <h1>slide4</h1>
            </div>
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent">
              <svg
                className="w-8 h-8 text-[#58468c] rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent ">
              <svg
                className="w-8 h-8 text-[#58468c] rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}
