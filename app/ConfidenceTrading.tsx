import React from "react";
import TradingImage from "../public/20190520182221-GettyImages-1132121143.jpeg";
import Image from "next/image";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { TbHexagonLetterV } from "react-icons/tb";
import { FaCirclePlay } from "react-icons/fa6";

const ConfidenceTrading = () => {
  const TradingCards = [
    {
      header: "Ensure production quality with",
      icon: <TbHexagonLetterV />,
      title: "erified Supplier",
      desc: "Connect with a variety of suppliers with third-party verified credentials and capabilities. Look for the 'Verified' logo to begin sourcing with experienced suppliers your business could rely on.",
    },
    {
      header: "Protect your Purchase with",
      icon: <RiShieldKeyholeLine />,
      title: "Trade Assurance",
      desc: "Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on COCREATE.com",
    },
  ];
  return (
    <section className="h-auto md:h-screen w-full relative overflow-hidden">
      <Image
        src={TradingImage}
        alt="Trade With Confidence"
        className="z-0 absolute top-0 left-0 h-full w-full"
        style={{ objectFit: "cover" }}
      />
      <div
        className="h-full w-full relative z-10 text-white px-9 py-16"
        style={{ background: "rgba(var(--dark-blue-rgb), 0.6)" }}
      >
        <section className="grid md:grid-cols-2 gap-7 pb-16">
          <h1 className="font-bold text-3xl">
            Trade with confidence from production quality to purchase protection
          </h1>
        </section>
        <section className="grid md:grid-cols-2 gap-7">
          {TradingCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl relative p-9 text-white"
              style={{ background: "rgba(255, 255, 255, 0.2)" }}
            >
              <p className="text-sm pb-5">{card.header}</p>
              <h2 className={`pb-6 font-bold text-3xl flex items-center ${card.title == "Trade Assurance" ? "gap-2" : ""}`}><span className={`${card.title == "Trade Assurance" ? "tradeColor" : "verifiedColor"}`}>{card.icon}</span> {card.title}</h2>
              <p className="text-xs pb-9">{card.desc}</p>
              <div className="flex gap-4 text-sm items-center">
                <button className="flex items-center gap-1 border rounded-full px-4 py-2 bg-black/35"><FaCirclePlay className="text-lg" /> Watch Video</button>
                <a href="#" className="underline">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default ConfidenceTrading;
