import React from "react";
import { navlinks } from "../constant/indedx";
import Lottie from "lottie-react";
import coins_animation from "../assets/bouncedCoin.json";
const header = () => {
  return (
    <header className="w-full relative z-[99]">
      <nav className="max-w-[90rem] w-full  absolute top-3 left-1/2 -translate-x-1/2 flexBetween py-4 px-8 rounded-full blur_effect">
        <div className="flexCenter gap-2">
          <Lottie
            animationData={coins_animation}
            className="absolute top-1/2 -translate-y-1/2 left-0 w-[100px] h-[100px]"
          />
          <h1 className="text-xl text-white font-bold pl-12">TRUMPBTC</h1>
        </div>
        <ul className="flexCenter gap-5">
          {navlinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="text-base md:text-xl text-white font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="text-white text-base font-semibold bg-yellow-500 rounded-full px-10 py-3 duration-300 transition-all hover:scale-110">
          Buy Now
        </button>
      </nav>
    </header>
  );
};

export default header;
