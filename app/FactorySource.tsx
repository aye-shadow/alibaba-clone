import React from "react";
import FabricImage from "../public/2021_vanelli_v_design_page_banner.jpg";
import WorkersImage from "../public/64ac41bb6d7e02001af8ac5d.webp";
import FactoryImage from "../public/56917962_2305444649696391_753261517675167744_o.jpg";
import Image from "next/image";

const FactorySource = () => {
  const sources = [
    { title: "Get samples", image: FabricImage, link: "View more" },
    {
      title: "Take factory live tours",
      image: WorkersImage,
      link: "View LIVE",
    },
    {
      title: "Connect with top-ranking manufacturers",
      image: FactoryImage,
      link: "View more",
    },
  ];
  return (
    <section className="px-10 py-14">
      <h1 className="font-bold text-2xl pb-7">Source direct-from-factory</h1>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:px-28">
        {sources.map((source) => (
          <section
            key={source.title}
            className="h-80 rounded-lg relative overflow-hidden text-white"
            style={{ position: "relative" }}
          >
            <Image
              src={source.image}
              alt="Image"
              className="h-full w-full"
              style={{ zIndex: 1, objectFit: "cover" }}
            />
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                zIndex: "2", backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7))",
              }}
            />
            <div className="absolute top-0 h-full w-full left-0 px-4 pb-4 text-left z-10 flex flex-col justify-between">
              <h2 className="font-bold text-sm pt-4">{source.title}</h2>
              <a href="#" className="pt-2 text-xs underline">{source.link}</a>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

export default FactorySource;
