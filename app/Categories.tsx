"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaDumbbell, FaHeadphonesSimple, FaRegStar } from "react-icons/fa6";
import { GiLipstick } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCarSolid, LiaMugHotSolid, LiaToolsSolid } from "react-icons/lia";
import { LuBaby } from "react-icons/lu";
import {
  PiDressBold,
  PiDresserBold,
  PiHandbagSimpleBold,
  PiPackage,
} from "react-icons/pi";
import { TbIroning, TbPlant, TbShoe } from "react-icons/tb";

const Categories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const AllCategories = [
    { icon: <FaRegStar />, title: "Buyer's Logistic Services and Market" },
    { icon: <PiDressBold />, title: "Apparel & Accessories" },
    { icon: <LiaMugHotSolid />, title: "Home & Garden" },
    { icon: <TbIroning />, title: "Industrial Machinery" },
    { icon: <TbShoe />, title: "Shoes & Accessories" },
    { icon: <PiPackage />, title: "Packaging & Printing" },
    { icon: <LiaToolsSolid />, title: "Tools & Hardware" },
    { icon: <LiaCarSolid />, title: "Vehicle Parts & Accessories" },
    { icon: <TbPlant />, title: "Environment" },
    { icon: <FaHeadphonesSimple />, title: "Consumer Electronics" },
    { icon: <FaDumbbell />, title: "Sports & Entertainment" },
    { icon: <GiLipstick />, title: "Beauty" },
    { icon: <LuBaby />, title: "Mothers, Kids & Toys" },
    { icon: <IoDiamondOutline />, title: "Jewellery & Eyewear" },
    { icon: <PiDresserBold />, title: "Furniture" },
    { icon: <PiHandbagSimpleBold />, title: "Luggage, Bags & Cases" },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 168;
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener(
        "scroll",
        updateScrollButtons
      );
      window.addEventListener("resize", updateScrollButtons);
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener(
          "scroll",
          updateScrollButtons
        );
        window.removeEventListener("resize", updateScrollButtons);
      }
    };
  }, []);

  return (
    <section className="w-full p-9 relative">
      <section className="h-full w-full absolute top-0 left-0 flex justify-between items-center px-9 z-20">
        <button
          onClick={() => handleScroll("left")}
          className={`p-2 rounded-full bg-white text-2xl ${
            canScrollLeft ? "" : "opacity-0 pointer-events-none"
          }`}
          style={{boxShadow: "0 0 10px var(--shadow-col)"}}
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => handleScroll("right")}
          className={`p-2 rounded-full bg-white text-2xl ${
            canScrollRight ? "" : "opacity-0 pointer-events-none"
          }`}
          style={{boxShadow: "0 0 10px var(--shadow-col)"}}
        >
          <IoIosArrowForward />
        </button>
      </section>
      <section
        ref={scrollContainerRef}
        className="grid grid-rows-2 grid-flow-col gap-y-5 gap-x-7 overflow-hidden relative z-0"
      >
        {AllCategories.map((category) => (
          <button
            key={category.title}
            className="h-32 w-32 flex flex-col items-center justify-center p-4 rounded-full border"
          >
            <div className="text-2xl">{category.icon}</div>
            <div className="text-center mt-2 text-xs">{category.title}</div>
          </button>
        ))}
      </section>
      {canScrollRight && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent to-white z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.9) 100%)",
          }}
        />
      )}
      {canScrollLeft && (
        <div
          className="absolute inset-0 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 20%)",
          }}
        />
      )}
    </section>
  );
};

export default Categories;
