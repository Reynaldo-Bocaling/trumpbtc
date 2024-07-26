import React from "react";
import { howtobuy } from "../constant/indedx";

const HowToBuy = () => {
  return (
    <section id="howtobuy" className="relative mt-48 mb-20">
      <div className="relative max-w-7xl mx-auto  ">
        <h1 className="title text-yellow-500 text-center md:text-left text-6xl md:text-5xl font-extrabold">
          How To Buy?
        </h1>
        <div className="w-full  flex flex-col gap-y-7 md:flex-row md:justify-between mt-16 md:mt-7 px-14 md:px-4">
          {howtobuy.map((item, index) => (
            <div
              key={index}
              className={`${item.variant} w-full md:w-[23%] bg-orange-100  py-9 px-5 rounded-lg border-[2px] border-yellow-500`}
            >
              <h1 className="text-4xl font-extrabold text-center mb-5">
                STEP {index + 1}
              </h1>
              <ul>
                {item.instructions.map((list, listIndex) => (
                  <div className="mb-5">
                    <p
                      key={listIndex}
                      className="text-2xl md:text-base text-center md:text-left"
                    >
                      {list}
                    </p>
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
