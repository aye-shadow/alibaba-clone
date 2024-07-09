import React from "react";

const BusinessNeeds = () => {
  const gridDetails = [
    { amount: "200M+", title: "products" },
    { amount: "200K+", title: "suppliers" },
    { amount: "5,900", title: "product categories" },
    { amount: "200+", title: "countries and regions" },
  ];
  return (
    <section className="px-9 pt-24 pb-12 sm:flex sm:flex-row sm:gap-5">
      <h1 className="font-bold text-3xl pb-12" style={{ flex: "2" }}>
        Explore millions of offerings tailored to your business needs
      </h1>
      <section className="grid grid-cols-2 sm:flex-1 gap-5">
        {gridDetails.map((single) => (
          <div
            key={single.title}
            className="relative border-l-2 pl-2"
            style={{borderColor: "var(--border-col)"}}
          >
            <h2 className="text-2xl md:text-3xl font-normal blueText">{single.amount}</h2>
            <p className="text-xs md:text-sm" style={{color: "var(--dark-blue)"}}>{single.title}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default BusinessNeeds;
