import React from "react";
import Image from "./Layout/Image";
import Business from "../assets/business-info.webp";

const InsightNews = () => {
  return (
    <section>
      <div className="max-w-[1170px] m-auto">
        <div>
          <h5 className="text-[18px] font-bold leading-[24px] text-[#113759]">
            INSIGHT & NEWS
          </h5>
          <h3 className="text-[#113759] text-[36px] font-bold mb-[50px]">
            Stay ahead of technology paradigm shift
          </h3>
        </div>
        <div className="flex">
          <div className="">
            <Image className={"inline-block"} src={Business} />
            <div className="px-[30px] pt-[30px] flex flex-col text-[#113759]">
              <h3 className="w-[410px] text-[24px] leading-[31px] font-bold text-[#113759s]">
                Web Development for your Businesses
              </h3>
              <p>
                In today's digital age, a strong online presence is crucial for
                the success of any business. Whether you run a small local shop
                or a multinational corporation, having a well-designed website
                is a powerful tool for reaching your target audience,
                establishing credibility, and driving...
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightNews;
