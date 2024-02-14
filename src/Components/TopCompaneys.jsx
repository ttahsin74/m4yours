import React from "react";
import Image from "./Layout/Image";
import ServiceImgOne from "../assets/trusted-1.webp";
import ServiceImgTwo from "../assets/trusted-2.webp";
import ServiceImgThree from "../assets/trusted-3.webp";
import "../Sass/index.scss";

const OurService = () => {
  return (
    <div className="max-w-[1170px] m-auto w-full pt-[130px] lg:pt-[150px]">
      <div className=" grid grid-col-1 grid-rows-[1fr_1fr] lg:grid-rows-1 lg:grid-cols-2 justify-center items-center gap-[10px]">
        <div className="grid grid-cols-6 grid-rows-4 m-auto lg:m-0 px-[15px]">
          <div
            className="lg:ml-[45px] col-[2_/_span_6] row-[1_/_span_2] mt-[-55px] lg:mr-[-41px] "
            style={{ transform: "translateY(15px) translateZ(0px)" }}
          >
            <Image
              imgClassname="rounded-[12px] w-[226px] height-[278px] "
              className="xl:ml-[-90px]"
              src={ServiceImgTwo}
            />
          </div>
          <div
            className="col-[1_/_span_5] row-[1_/_span_3] "
            style={{ transform: "translateY(15px) translateZ(0px)" }}
          >
            <Image
              imgClassname="rounded-[12px] "
              className="xl:ml-[-131px] "
              src={ServiceImgThree}
            />
          </div>
          <div className="col-[2_/_span_6] row-[2_/_span_4] mt-[71px]" style={{transform: "translateY(15px) translateZ(0px)"}}>
            <Image
              imgClassname="rounded-[12px]"
              className="xl:ml-[-70px]"
              src={ServiceImgOne}
            />
          </div>
        </div>
        <div className="  w-full px-[10px] lg:px-[0px] lg:text-left text-center">
          <p className="text-[#F1614A] mb-[15px] inline-block  lg:text-[14px text-[12px] bg-[#FFEFEC] py-[10px] px-[20px] rounded-[20px]">
            Top Web And Mobile Apps Development Company
          </p>
          <h2 className="text-[#113759] lg:text-[36px] text-[28px] font-bold">
            Your <span className="text-[#f1614a]">Trusted</span> <br />{" "}
            Development <br /> Partner.
          </h2>
          <p className="text-lg text-[#808291] mb-[30px]">
            Our company has been delivering web and mobile apps to businesses
            around the world since 2008, with a 100% success rate. We offer
            affordable web development services. Design-driven processes and
            performance-driven methods help us deliver the right products and
            servicess
          </p>
          <a
            href=""
            className="custom-underline relative inline-block text-[#113759] font-semibold"
          >
            More About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurService;
