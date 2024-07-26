import React from "react";
import { social } from "../constant/indedx";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="max-w-lg w-full absolute top-20 left-12  mx-auto flex flex-col gap-7  py-7 px-5">
        <h1 className="title text-6xl font-extrabold text-yellow-500">
          CONTACT US
        </h1>
        <p className="text-base text-gray-200 font-medium tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          aspernatur.
        </p>
        <ul className="flexStart gap-7 mt-5">
          {social.map((Item, index) => (
            <li
              key={index}
              className="h-[55px] w-[55px] flex items-center justify-center rounded-full bg-gray-500"
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
      <img
        src="/img/contact.jpg"
        alt=""
        className="w-full h- pointer-events-none"
      />
    </section>
  );
};

export default Contact;
