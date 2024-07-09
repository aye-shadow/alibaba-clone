import React from "react";
import { GoShieldCheck } from "react-icons/go";
import { LiaBoxSolid } from "react-icons/lia";
import { MdDynamicFeed, MdGridView } from "react-icons/md";

const CardsSection = () => {
  const cards = [
    {
      icon: <MdGridView />,
      size: "text-3xl p-2",
      title: "Millions of business offerings",
      desc: "Explore products and suppliers for your business from millions of offerings worldwide.",
    },
    {
      icon: <GoShieldCheck />,
      size: "text-2xl p-3",
      title: "Assured quality and transactions",
      desc: "Ensure production quality from verified suppliers, with your orders protected from payment to delivery.",
    },
    {
      icon: <LiaBoxSolid />,
      size: "text-3xl p-2",
      title: "One-stop trading solution",
      desc: "Order seamlessly from product/supplier to search order management, payment, and fulfillment.",
    },
    {
      icon: <MdDynamicFeed />,
      size: "text-2xl p-3",
      title: "Tailored trading experience",
      desc: "Get current benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.",
    },
  ];
  return (
    <section
      className="w-full h-fit px-16 sm:px-7 py-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      style={{ background: "var(--dark-blue)" }}
    >
      {cards.map((card) => (
        <section
          key={card.title}
          className="rounded-xl relative p-7 text-white"
          style={{ background: "rgb(255, 255, 255, 0.1)" }}
        >
          <div
            className={`rounded-full flex items-center justify-center ${card.size} w-fit`}
            style={{ background: "rgb(255, 255, 255, 0.2)" }}
          >
            {card.icon}
          </div>
          <h2 className="font-bold text-lg pt-4">{card.title}</h2>
          <p className="pt-4 text-xs">{card.desc}</p>
        </section>
      ))}
    </section>
  );
};

export default CardsSection;
