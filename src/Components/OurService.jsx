import React from "react";
import Image from "../Components/Layout/Image";
import ServiceImgOne from "../assets/trusted-1.webp";
import ServiceImgTwo from "../assets/trusted-2.webp";
import ServiceImgThree from "../assets/trusted-3.webp";
import "../Sass/index.scss";

const OurService = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap lg:flex items-center max-w-[1170px] gap-[100px] m-auto">
      <div className="relative w-[50%] h-[900px]">
        <Image
          imgClassname="rounded-[12px]"
          className="absolute top-[400px] left-[40px] z-30"
          src={ServiceImgOne}
        />
        <Image
          imgClassname="rounded-[12px]"
          className="absolute top-[100px] left-[100px] z-10"
          src={ServiceImgTwo}
        />
        <Image
          imgClassname="rounded-[12px]"
          className="absolute  top-[155px] left-[-120px] z-20"
          src={ServiceImgThree}
        />
      </div>
      <div className=" lg:w-[50%] w-full px-[10px] lg:px-[0px] lg:text-left text-center">
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
  );
};

export default OurService;
