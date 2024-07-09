"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaGlobeAsia } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { LuBadgeCheck } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
import MatchesImages from "../public/1_TYzgeVaCL0q5ZdFAZ-6cfQ.jpg";
import IdentifyImage from "../public/hire-the-right-employee.jpg";
import PayImage from "../public/online-payment-companies.webp";
import TransImage from "../public/a-financial-business-transaction-between-two-people-free-photo.jpg";
import ManageImage from "../public/online-colleges-leadership-degree-blog2-1900x900.jpg";

const StreamlineOrdering = () => {
  const IconsList = [
    {
      icon: <FaMagnifyingGlass />,
      title: "Search for matches",
      desc: "Search and filter millions of products and supplier offerigns to find matching ones for your business",
      image: MatchesImages
    },
    { icon: <LuBadgeCheck />, title: "Identify the right one", desc: 'Make informed decisions to select the ideal products and suppliers for your business', image: IdentifyImage },
    { icon: <HiMiniArrowsUpDown />, title: "Pay with confidence", desc: 'Ensure secure and reliable payment processes for your transactions', image: PayImage },
    { icon: <FaGlobeAsia />, title: "Fulfill with transparency", desc: 'Maintain clear and transparent fulfillment processes to build trust with your partners', image: TransImage },
    { icon: <RiUserSettingsLine />, title: "Manage with ease", desc: 'Simplify and streamline your business management for efficient operations.', image: ManageImage },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleIconClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="px-9 py-20">
      <h1 className="font-bold text-3xl pb-9">
        Streamline ordering from search to fulfillment, all in one place
      </h1>
      <section className="grid sm:grid-cols-2 gap-4 lg:gap-56 relative sm:pb-0 pb-6">
        <div className="mb-9 sm:mb-0 relative overflow-hidden h-fit">
          <div
            className="h-full absolute top-10 bg-slate-200"
            style={{ left: "15px", width: "2px" }}
          ></div>
          {IconsList.map((Icon, index: number) => (
            <div
              key={index}
              className={`flex gap-3 ${
                index === activeIndex ? " items-start " : " items-center "
              } pt-4`}
            >
              <button
                className={`rounded-full p-2 text-lg h-fit relative mt-1 border ${
                  index === activeIndex
                    ? "blueText transBlueBg"
                    : "greyText bg-white"
                }`}
                onClick={() => handleIconClick(index)}
              >
                {Icon.icon}
              </button>
              <div>
                <h2
                  className={`${
                    index === activeIndex ? "text-lg" : "text-md"
                  } font-semibold`}
                  style={{ color: "var(--dark-blue)" }}
                >
                  {Icon.title}
                </h2>
                <p
                  className={`text-xs ${
                    index === activeIndex ? " " : " hidden"
                  }`}
                >
                  {Icon.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-72 sm:h-full w-full relative overflow-hidden">
          <Image
            src={IconsList[activeIndex].image}
            alt={IconsList[activeIndex].title}
            className="absolute top-0 left-0 object-cover h-full w-full"
          />
        </div>
      </section>
    </section>
  );
};

export default StreamlineOrdering;
