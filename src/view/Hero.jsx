import React from "react";

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
        <p className="blur_effect text-white text-sm max-w-xl text-center tracking-wider mt-4 p-5 rounded-lg">
          LINKS: X, TELEGRAM, DEXTOOLS, UNISWAP (all links need to be above the
          fold for mobile) Make sure this site looks good for desktop and mobile
        </p>
      </div>
      <img
        src="/img/hero_bg.jpg"
        alt=""
        className="absolute top-0 left-0 w-full z-[-1] pointer-events-none"
      />
    </section>
  );
};

export default Hero;
