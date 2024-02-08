import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const NewsItem = () => {
  return (
    <div className="">
      <div className="flex flex-col h-full group px-5 pt-[30px] news-shadow hover:bg-[#113759] duration-500 rounded-lg">
        <div className="my-[10px]">
          <h3 className="my-[10px] leading-[26px] text-[#113759] text-[18px] font-bold group-hover:text-white duration-300">
            <a>Elevate Your Business with Strategy & Consulting</a>
          </h3>
        </div>
        <p className="text-[#8C8B90] text-base lending-[26px] group-hover:text-white duration-300">
          Boost your business with expert Strategy & Consulting services.
          Maximize growth, improve brand, and drive success.
        </p>
        <div className="text-2xl text-[#f1614a]  text-right pt-[30px] pb-4 mt-auto">
          <FaArrowRightLong className="inline-block " />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
