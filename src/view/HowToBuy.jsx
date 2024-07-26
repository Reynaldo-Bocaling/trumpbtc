import React from "react";
import { howtobuy } from "../constant/indedx";

const HowToBuy = () => {
  return (
    <section id="howtobuy" className="relative mt-48 mb-20">
      <div className="relative max-w-7xl mx-auto  ">
        <h1 className="title text-yellow-500 pl-7 md:pl-0 text-6xl md:text-5xl font-extrabold">
          How To Buy?
        </h1>
        <div className="w-full  flexBetween mt-28 md:mt-7 px-4">
          {howtobuy.map((item, index) => (
            <div
              key={index}
              className={`${item.variant} w-[23%] bg-orange-100  py-9 px-5 rounded-lg border-[2px] border-yellow-500`}
            >
              <h1 className="text-3xl font-extrabold text-center mb-3">
                STEP {index + 1}
              </h1>
              <ul>
                {item.instructions.map((list, listIndex) => (
                  <div className="mb-5">
                    <p key={listIndex} className="text-sm md:text-base">
                      {list}
                    </p>
                    {/* <div className="w-full h-[1px] bg-orange-300 "></div> */}
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
