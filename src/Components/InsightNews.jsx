import React from "react";
import Image from "./Layout/Image";
import Business from "../assets/business-info.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import NewsItem from "./Layout/NewsItem";

const InsightNews = () => {
  return (
    <section>
      <div className="max-w-[1170px] m-auto">
        <div className="md:px-5 xl:px-0 px-4">
          <div className="">
            <h5 className="text-[18px] font-bold text-[#113759]">
              INSIGHT & NEWS
            </h5>
            <h3 className="text-[#113759] sm:text-[36px] text-[30px]  font-bold lg:mb-[50px] mb-[20px]">
              Stay ahead of technology paradigm shift
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[470px_1fr] gap-[30px]">
            <div className="flex flex-col h-full group rounded-lg ">
              <div className="custom-bg h-full w-full">
                {/* <img src={Business} className="object-cover object-center h-full" /> */}
              </div>
              <div className="pt-[30px] flex flex-col text-[#113759] h group-hover:bg-[#113759] duration-500 group-hover:text-white">
                <h3 className="w-[410px] text-[24px] leading-[31px] font-bold text-[#113759s]">
                  Web Development for your Businesses
                </h3>
                <p className="pb-4 mt-4">
                  In today's digital age, a strong online presence is crucial
                  for the success of any business. Whether you run a small local
                  shop or a multinational corporation, having a well-designed
                  website is a powerful tool for reaching your target audience,
                  establishing credibility, and driving...
                </p>
                <div className="text-2xl text-[#f1614a]  text-right  pb-4 mt-auto">
                  <FaArrowRightLong className="inline-block " />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-[30px] gap-[20px] md:text-left sm:text-center px-[20px] md:px-0">
              <div className="group md:px-5 px-[20px] pt-[30px] shadow-[0 0 20px 10px rgba(0,0,0,.03)] hover:bg-[#113759] duration-500 rounded-lg news-shadow">
                <div className="my-[10px]">
                  <h5 className="xl:text-lg lg:text-base text-lg font-medium bg-[#f1614a] opacity-90 text-white px-3 py-1 rounded-full inline-block">
                    Strategy & Consulting
                  </h5>
                </div>
                <h3 className="my-[10px] leading-[26px] text-[#113759] text-[18px] font-bold group-hover:text-white duration-300">
                  <a>Elevate Your Business with Strategy & Consulting</a>
                </h3>
                <p className="text-[#8C8B90] text-base lending-[26px] group-hover:text-white duration-300">
                  Boost your business with expert Strategy & Consulting
                  services. Maximize growth, improve brand, and drive success.
                </p>
                <div className="text-2xl text-[#f1614a]  text-right pt-[30px] pb-4 mt-auto">
                  <FaArrowRightLong className="inline-block " />
                </div>
              </div>
              <NewsItem />
              <NewsItem />
              <NewsItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightNews;
