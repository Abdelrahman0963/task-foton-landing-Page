import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";

export default function FeatureCards() {
  const users = [
    {
      image:
        "https://foton.qodeinteractive.com/wp-content/uploads/2018/06/blog-slider-img-2.png",
      title: "Perfection",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat.",
    },
    {
      image:
        "https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-team-5.png",
      title: "Conection",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat.",
    },
    {
      image:
        "https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-team-7.png",
      title: "Progerssion",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat.",
    },
    {
      image:
        "https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-team-12.png",
      title: "Disconet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat.",
    },
    {
      image:
        "https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-team-8.png",
      title: "Integration",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat.",
    },
    {
      image:
        "https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-team-11.png",
      title: "Postivity",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat.",
    },
    {
      image:
        "https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-team-9.png",
      title: "Sleeping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat.",
    },
    {
      image:
        "https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-team-10.png",
      title: "Decoration",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat.",
    },
  ];

  return (
    <section className="!pt-10 !px-6 md:!px-24 ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={4}
        slidesPerGroup={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {users.map((user, index) => (
          <SwiperSlide key={index}>
            <div className="!p-8 bg-white w-full md:w-72 lg:w-80 shadow rounded-2xl text-center h-96 flex flex-col justify-between items-center gap-6 hover:shadow-2xl hover:translate-y-[-10px] transition ease-in-out duration-300">
              <div className="user-images">
                <img className="w-40" src={user.image} alt={user.title} />
              </div>
              <div className="user-content">
                <h2 className="text-2xl font-bold text-[#58468C]">
                  {user.title}
                </h2>
                <p className="text-[#716C80] text-sm font-light">
                  {user.description}
                </p>
              </div>
              <div className="user-read-me w-60 overflow-hidden border-t border-[#716C80] flex justify-between items-center !p-5">
                <p className="text-[#716C80] text-sm font-light hover:text-[#FF8A73]">
                  Read More
                </p>
                <IoIosArrowRoundForward className="text-2xl text-[#716C80] hover:text-[#FF8A73]" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
