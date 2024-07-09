import Image from "next/image";
import React from "react";
import MainUmbrellaImage from "../public/umbrellas-2048px-04533.jpg";
import UmbrellaImage from "../public/61H9y1lX+NL._AC_SL1500_.jpg";
import BottlesImage from "../public/insulated-stainless-steel-water-bottle-750ml-842761.webp";
import FlashlightImage from "../public/rsp-product-olight-s2r-baton-II-usb-magnetic-rechargeable-flashlight-ebrockob-011-2-9750afde97124c9fa82a32fee1f6df1d.jpeg";
import TVImage from "../public/35059333-02.jpg";
import SewingImage from "../public/Singer-15-1-9-1.webp";
import JacketsImage from "../public/best-packable-down-jackets.webp";
import MarbleImage from "../public/Agra-Dining-Table-White-1.jpg";
import LampImage from "../public/71-HjENsPsL._AC_UF894,1000_QL80_.jpg";
import CycleImage from "../public/Kent-Bicycles-18-inch-Girl-s-Sparkles-Bicycle-Black-and-Pink_b37eed4d-1e14-40a8-b237-5ef3dbca1458.36030dbee152c4d3e58db155e0a9bcfd.webp";
import ToysImage from "../public/2000430.png";
import DroneImage from "../public/ortery-ecommerce-photogrphy-systems-drone-example.jpg";

const BusinessOpportunity = () => {
  const NewProducts = [
    { src: TVImage },
    { src: SewingImage },
    { src: JacketsImage },
    { src: MarbleImage },
  ];
  return (
    <>
      <section className="bg-gray-100 px-10 py-14 h-fit">
        <h1 className="font-bold text-2xl pb-7">
          Discover your next business opportunity
        </h1>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <section className="flex flex-col" style={{ height: "530px" }}>
            <div className="flex justify-between items-end pb-3">
              <h2 className="font-bold">Top Ranking</h2>
              <p className="underline text-xs cursor-pointer">View more</p>
            </div>
            <div className="bg-white w-full flex-1 rounded-2xl px-4 py-5">
              <div className="h-full w-full flex flex-col">
                <h3 className="font-bold text-sm">Most popular</h3>
                <p className="text-xs pb-4 text-gray-500">Umbrellas</p>
                <div className="flex flex-col gap-4 flex-1">
                  <div
                    className="rounded-lg w-full relative"
                    style={{ height: "250px" }}
                  >
                    <Image
                      src={MainUmbrellaImage}
                      alt="Umbrella"
                      className="rounded-md object-cover w-full h-full"
                      fill={true}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-3 gap-4 h-full relative">
                      <div className="h-full w-full relative">
                        <Image
                          src={UmbrellaImage}
                          alt="Umbrella"
                          className="rounded-md object-cover w-full h-full"
                          fill={true}
                        />
                      </div>
                      <div className="h-full w-full relative">
                        <Image
                          src={BottlesImage}
                          alt="Bottle"
                          className="rounded-md object-cover w-full h-full"
                          fill={true}
                        />
                      </div>
                      <div className="h-full w-full relative">
                        <Image
                          src={FlashlightImage}
                          alt="Flashlight"
                          className="rounded-md object-cover w-full h-full"
                          fill={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col" style={{ height: "530px" }}>
            <div className="flex justify-between items-end pb-3">
              <h2 className="font-bold">New Arrivals</h2>
              <p className="underline text-xs cursor-pointer">View more</p>
            </div>
            <div className="w-full flex-1">
              <div className="h-full w-full flex flex-col">
                <div className="flex flex-col gap-4 flex-1">
                  <div className="rounded-2xl px-4 py-5 bg-white">
                    <h3 className="font-bold text-sm pb-4">
                      109,000+ products added today
                    </h3>
                    <div
                      className="rounded-lg w-full grid grid-cols-2 grid-rows-2 gap-4"
                      style={{ height: "250px" }}
                    >
                      <div className="h-full w-full rounded-md relative">
                        <Image
                          src={TVImage}
                          alt="TV"
                          className="rounded-md object-cover w-full h-full"
                          fill={true}
                        />
                      </div>
                      <div className="h-full w-full rounded-md relative">
                        <Image
                          src={SewingImage}
                          alt="Sewing Machine"
                          className="rounded-md object-cover w-full h-full"
                          fill={true}
                        />
                      </div>
                      <div className="h-full w-full rounded-md relative">
                        <Image
                          src={JacketsImage}
                          alt="Jackets"
                          className="rounded-md object-cover w-full h-full"
                          fill={true}
                        />
                      </div>
                      <div className="h-full w-full rounded-md relative">
                        <Image
                          src={MarbleImage}
                          alt="Marble Furniture"
                          className="rounded-md object-cover w-full h-full"
                          fill={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flew-grow rounded-2xl px-4 pb-5 py-3 bg-white relative">
                    <div className="flex flex-col relative h-full">
                      <h2 className="font-bold pb-4">New This Week</h2>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="w-full rounded-md relative">
                          <Image
                            src={LampImage}
                            alt="Lamp"
                            className="rounded-md object-cover w-full h-full"
                            fill={true}
                          />
                        </div>
                        <div className="w-full rounded-md relative">
                          <Image
                            src={DroneImage}
                            alt="Drone"
                            className="rounded-md object-cover w-full h-full"
                            fill={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col" style={{ height: "530px" }}>
            <div className="flex justify-between items-end pb-3">
              <h2 className="font-bold">Savings spotlight</h2>
              <p className="underline text-xs cursor-pointer">View more</p>
            </div>
            <div className="w-full flex-1">
              <div className="h-full w-full flex flex-col">
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex-1 grid grid-cols-2 gap-4 rounded-2xl px-4 py-5 bg-white">
                    <div className="h-full w-full rounded-md relative">
                      <Image
                        src={CycleImage}
                        alt="Bicyle"
                        className="rounded-md object-cover w-full h-full"
                        fill={true}
                      />
                    </div>
                    <h2 className="flex items-center font-bold">
                      Lowest price in 180 days
                    </h2>
                  </div>
                  <div className="rounded-2xl px-4 py-5 bg-white">
                    <h3 className="font-bold text-sm pb-4">
                      Deals on best sellers
                    </h3>
                    <div
                      className="rounded-lg w-full"
                      style={{ height: "250px" }}
                    >
                      <div className="h-full w-full rounded-md relative">
                        <Image
                          src={ToysImage}
                          alt="Lamp"
                          className="rounded-md object-cover w-full h-full"
                          fill={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      {/* <section className="px-10 py-14" style={{ background: "var(--gray-bg)" }}>
        <h1 className="font-bold text-2xl pb-7">
          Discover your next business opportunity
        </h1>
        <section className="grid grid-cols-3 gap-7 items-stretch">
          <section>
            <div className="flex justify-between items-end pb-3">
              <h2 className="font-bold">Top Ranking</h2>
              <p className="underline text-xs">View more</p>
            </div>
            <section className="bg-white rounded-2xl px-4 py-5">
              <h3 className="font-bold text-sm">Most popular</h3>
              <p className="text-sm pb-4" style={{ color: "var(--shadow-col)" }}>
                Umbrellas
              </p>
              <div className="relative mb-4 h-64">
                <Image
                  src={MainUmbrellaImage}
                  alt="Umbrellas"
                  className="rounded-xl object-cover h-full w-full"
                />
                <div className="absolute text-xs top-2 left-2 font-light bg-white rounded-md px-2 py-1">
                  Popularity Score: <span className="font-normal">4.7</span>
                </div>
              </div>
              <section className="grid grid-cols-3 gap-3 relative">
                <div className="relative h-full">
                  <Image
                    src={UmbrellaImage}
                    alt="Umbrella"
                    className="rounded-lg object-cover h-full"
                  />
                </div>
                <div className="relative h-full">
                  <Image
                    src={BottlesImage}
                    alt="Bottle"
                    className="rounded-lg object-cover h-full"
                  />
                </div>
                <div className="relative h-full">
                  <Image
                    src={FlashlightImage}
                    alt="Flashlight"
                    className="rounded-lg object-cover h-full"
                  />
                </div>
              </section>
            </section>
          </section>

          <section className="flex h-2 flex-col gap-2">
            <section>
              <div className="flex justify-between items-end pb-3">
                <h2 className="font-bold">New arrivals</h2>
                <p className="underline text-xs">View more</p>
              </div>
              <section className="bg-white rounded-2xl px-4 py-5">
                <h3 className="font-bold text-sm pb-4">
                  109,000+ products added today
                </h3>
                <section className="grid grid-cols-2 gap-4 relative">
                  {NewProducts.map((product, index) => (
                    <div
                      key={index}
                      className="h-28 w-full relative overflow-hidden rounded-lg"
                    >
                      <Image
                        src={product.src}
                        alt="Image"
                        className="object-cover h-full w-full absolute top-0 left-0"
                      />
                    </div>
                  ))}
                </section>
              </section>
            </section>
            <section className="bg-white rounded-2xl px-4 py-5 mt-4 flex-1 relative">
              <div className="h-full w-full flex items-center gap-4">
                <Image
                  src={LampImage}
                  alt="Image"
                  width={120}
                  height={0}
                  className="object-cover h-full rounded-lg"
                />
                <div>
                  <h2 className="font-semibold text-lg">New this week</h2>
                  <p className="text-xs">Products from Verified Suppliers only</p>
                </div>
              </div>
            </section>
          </section>

          <section className="flex flex-col gap-2">
            <section>
              <div className="flex justify-between items-end pb-3">
                <h2 className="font-bold">Savings spotlight</h2>
                <p className="underline text-xs">View more</p>
              </div>
              <section className="bg-white rounded-2xl px-4 py-5 mb-4 flex-1 relative">
                <div className="h-full w-full flex items-center gap-4">
                  <Image
                    src={CycleImage}
                    alt="Image"
                    width={120}
                    height={0}
                    className="object-cover h-full rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold text-md">
                      Lowest price in 180 days
                    </h2>
                  </div>
                </div>
              </section>
            </section>
            <section className="bg-white rounded-2xl px-4 py-5">
              <h3 className="font-bold text-sm pb-4">Deals on best sellers</h3>
              <section className="relative">
                <div className="h-64 w-full relative overflow-hidden rounded-lg">
                  <Image
                    src={ToysImage}
                    alt="Image"
                    className="object-cover h-full w-full absolute top-0 left-0"
                  />
                </div>
              </section>
            </section>
          </section>
        </section>
      </section> */}
    </>
  );
};

export default BusinessOpportunity;
