import React from "react";

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="relative max-w-7xl mx-auto h-[240px] md:h-[200px] -mt-36 flex flex-col justify-center items-center  bg-[#121212] rounded-tl-3xl rounded-tr-3xl border-l-[2px] border-t-[2px] border-r-[2px] border-yellow-500">
        <div className="relative flex flex-col justify-center items-center gap-5 max-w-3xl mx-auto z-[98] px-5">
          <h1 className="title text-yellow-500 text-5xl font-extrabold mt-4">
            ABOUT US
          </h1>
          <p className="text-xl md:text-base text-white tracking-wider  text-center">
            Capped at 21M like Bitcoin, but fueled by pure MAGA energy. Trump's
            Bitcoin Nashville appearance has the whole financial world buzzing.
            Get in on Trump BTC now, or regret it bigly when we reach the moon!
          </p>
        </div>
      </div>
      <div className=" w-full pt-5 bg-[#121212]">
        <div>
          <img
            src="/img/about.jpg"
            className="w-full  rounded-bl-3xl rounded-br-3xl pointer-events-none"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
