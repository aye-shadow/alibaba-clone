import Image from "next/image";
import HomeImage from "../public/Breaking-Down-People-B2B-Buying-Decisions.webp";
import { FaCirclePlay, FaMagnifyingGlass } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import CardsSection from "./CardsSection";
import BusinessNeeds from "./BusinessNeeds";
import Categories from "./Categories";
import BusinnesOpportunity from "./BusinnesOpportunity";
import FactorySource from "./FactorySource";
import ConfidenceTrading from "./ConfidenceTrading";
import StreamlineOrdering from "./StreamlineOrdering";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen relative p-9">
        <Image
          alt="HomeImage"
          src={HomeImage}
          className="z-0 absolute top-0 left-0 w-full h-full"
          style={{ objectFit: 'cover'}}
        />
        <div className="blackGradient w-full h-full absolute top-0 left-0"></div>
        <div
          className="z-10 text-white relative h-full w-full flex flex-col justify-center pt-36"
          style={{ maxWidth: "600px" }}
        >
          <div className="flex items-center gap-2 pb-4">
            <FaCirclePlay /> Learn about Alibaba.com
          </div>
          <h1 className="font-bold text-2xl pb-7 lg:text-3xl">
            The leading B2B ecommerce platform for global trade
          </h1>
          <div className="bg-white rounded-3xl pr-1 pl-4 py-1 flex flex-row items-center justify-between text-xs relative mr-9">
            <input
              type="text"
              placeholder="used mobile phones"
              className="text-black border-0 outline-none"
            />
            <div className="flex items-center gap-2">
              <button>
                <IoCameraOutline className="text-black text-lg" />
              </button>
              <button className="blueBg flex flex-row items-center text-white rounded-2xl py-2 px-4 gap-2">
                <FaMagnifyingGlass /> Search
              </button>
            </div>
          </div>
          <div className="flex text-xs sm:text-sm pt-9 gap-5 items-center">
            <p>Frequently searched:</p>
            <button className="border rounded-2xl px-5 py-1">
              samsung mobile phone
            </button>
            <button className="border rounded-2xl px-5 py-1 hidden sm:block">
              samsung s24 ultra
            </button>
          </div>
        </div>
        <div></div>
      </section>
      <CardsSection />
      <BusinessNeeds />
      <Categories />
      <BusinnesOpportunity />
      <FactorySource />
      <ConfidenceTrading />
      <StreamlineOrdering />
    </>
  );
}
