import React from "react";
import { social } from "../constant/indedx";

const Hero = () => {
  return (
    <section id="hesro" className="relative h-[650px] lg:h-[800px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-end  h-full pb-[10rem]">
        <h1 className="title hero_title relative text-7xl md:text-9xl text-yellow-500 font-bold">
          TRUMP BTC
        </h1>
        <h2 className="extraText text-3xl font-bold text-white py-2">
          FIGHT FOR FREEDOM
        </h2>
        <div className=" relative   max-w-xl  z-[89] mb-5">
          <ul className="flexStart gap-7 mt-5">
            {social.map((Item, index) => (
              <li
                key={index}
                className="h-[55px] w-[55px] flex items-center justify-center rounded-full bg-yellow-500"
              >
                <a href={Item.url} className="">
                  <img
                    src={Item.icon}
                    alt=""
                    className="w-[35px] h-[30px] pointer-events-none"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        src="/img/hero_bg.jpg"
        alt=""
        className="absolute top-0 left-0 h-full md:h-auto w-full z-[-1] pointer-events-none"
      />
    </section>
  );
};

export default Hero;
