import React from "react";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa6";

export default function WhatWeOffer() {
  const WhatWeOfferCards = [
    {
      title: "Pro Support",
      description:
        "Eam animal cons incorupte, de serun et princip deos. Virtut de eripuit est an. An quodo lorem lobortis ull corper.",
      icon: (
        <SlLike className="text-8xl text-[#5580FF] group-hover:text-[#ff8a73]" />
      ),
    },
    {
      title: "Great Advices",
      description:
        "Eam animal cons incorupte, de serun et princip deos. Virtut de eripuit est an. An quodo lorem lobortis ull corper.",
      icon: (
        <FaRegCommentDots className="text-8xl text-[#5580FF] group-hover:text-[#ff8a73]" />
      ),
    },
    {
      title: "Optimal Choice",
      description:
        "Eam animal cons incorupte, de serun et princip deos. Virtut de eripuit est an. An quodo lorem lobortis ull corper.",
      icon: (
        <SlLike className="text-8xl text-[#5580FF] group-hover:text-[#ff8a73]" />
      ),
    },
  ];
  return (
    <>
      <section className="what-we-offer bg-[#fff] w-full h-auto  !pt-8 !px-6 md:!px-24">
        <div className="what-we-offer-cards grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
          {WhatWeOfferCards.map((card, index) => (
            <div className="what-we-offer-card group rounded-md flex w-full md:w-96 lg:w-96 h-auto bg-[#fff] gap-4 flex-col justify-center items-center !p-8 hover:shadow-2xl hover:translate-y-[-10px] transition ease-in-out duration-300">
              <div className="what-we-offer-card-icon">{card.icon}</div>
              <div className="what-we-offer-card-text text-center">
                <h1 className="text-2xl font-light text-[#58468C]">
                  {card.title}
                </h1>
                <p className="text-[1rem] font-light text-[#7173A1]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
