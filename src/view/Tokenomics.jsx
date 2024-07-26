import React from "react";
import { tokenomicsData } from "../constant/indedx";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative pt-24  overflow-hidden">
      <div className="max-w-7xl mx-auto flexColCenter ">
        <h1 className="title text-6xl font-extrabold text-yellow-500">
          TOKENOMICS
        </h1>
        <ul className="mt-20 flexCenter gap-12 w-full ">
          {tokenomicsData.map((item, index) => (
            <li key={index} className="flexColCenter gap-3">
              <h1 className="text-3xl md:text-5xl text-[#c0c0c0] font-extrabold">
                {item.value}
              </h1>
              <p className="text-center text-2xl md:text-3xl text-yellow-500 font-medium">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <img
        src="/img/hero_bgs.jpg"
        className="absolute top-0 left-0 w-full opacity-[0.07]"
        alt=""
      />
    </section>
  );
};

export default Tokenomics;
