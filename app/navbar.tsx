"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavImage from "../public/122768-pastel-blue-distressed-watercolour-background-image.jpg";
import { IoGlobeOutline } from "react-icons/io5";
import { FaFlagUsa, FaListUl, FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-30">
        {!scrolled ? (
          <>
            <div className="flex flex-row justify-between items-center px-9 py-1 relative">
              <Image
                src={NavImage}
                alt="NavImage"
                style={{ objectFit: "cover" }}
                className="z-0 absolute top-0 left-0 w-full h-full"
              />
              <h1 className="flex flex-row items-center z-10">
                <span className="text-xl">
                  <span className="font-bold uppercase">
                    <span
                      className={`blueText ${scrolled ? "text-black" : ""}`}
                    >
                      CO
                    </span>
                    CREATE
                    <span
                      className={`blueText ${scrolled ? "text-black" : ""}`}
                    >
                      :
                    </span>
                  </span>
                  2024
                </span>
                <span className="text-xs px-2 hidden lg:block">|</span>{" "}
                <span className="hidden lg:block">
                  Join our award-winning flagship event with FREE hotel stay!
                </span>
              </h1>
              <button className="blueBg text-white rounded-2xl px-7 py-1 z-10 ">
                Get tickets
              </button>
            </div>
            <div className="flex justify-between px-9 py-1 relative mt-4 text-white">
              <h1 className="text-3xl">
                <span className="font-bold">Alibaba.</span>com
              </h1>
              <div className="flex items-center gap-7">
                <div className="hidden sm:block">
                  <p className="text-sm">Deliver to:</p>
                  <div className="flex items-center gap-1">
                    <FaFlagUsa /> <span className="font-bold">HK</span>
                  </div>
                </div>
                <IoGlobeOutline className="text-2xl hidden sm:block" />
                <FaRegUser className="text-xl hidden sm:block" />
                <button className="blueBg rounded-full px-8 py-2">
                  Sign up
                </button>
              </div>
            </div>
            <div className="flex justify-between px-9 py-3 text-xs text-white">
              <ul className="flex gap-4">
                <a href="#">
                  <li className="flex gap-1 items-center">
                    <FaListUl /> All Categories
                  </li>
                </a>
                <a href="#">
                  <li>Featured selections</li>
                </a>
                <a href="#">
                  <li>Trade Assurance</li>
                </a>
              </ul>
              <div className="hidden lg:block">
                <ul className="flex gap-4">
                  <a href="#">
                    <li>Buyer Assurance</li>
                  </a>
                  <a href="#">
                    <li>Help Center</li>
                  </a>
                  <a href="#">
                    <li>Get the App</li>
                  </a>
                  <a href="#">
                    <li>Become a supplier</li>
                  </a>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-fit bg-white flex justify-between items-center px-8 py-3">
              <h1 className="text-2xl blueText">
                <span className="font-bold">Alibaba.</span>com
              </h1>
              <div className="flex items-center gap-7">
                <div className="hidden sm:block">
                  <p className="text-sm">Deliver to:</p>
                  <div className="flex items-center gap-1 blueText">
                    <FaFlagUsa /> <span className="font-bold">HK</span>
                  </div>
                </div>
                <IoGlobeOutline className="text-2xl hidden sm:block" />
                <FaRegUser className="text-xl hidden sm:block" />
                <button className="blueBg rounded-full px-8 py-2">
                  Sign up
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
